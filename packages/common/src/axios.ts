import {aws4Interceptor} from 'aws4-axios'
import axios, {type AxiosError, type Method} from 'axios'
import {errorLogger, requestLogger, responseLogger} from 'axios-logger'
import axiosRetry from 'axios-retry'

import {type SellingPartnerApiAuth, SellingPartnerApiAuthError} from '@sp-api-sdk/auth'

import {SellingPartnerApiError} from './errors'
import {type SellingPartnerRegion, sellingPartnerRegions} from './regions'
import {packageJson} from './utils/package'

type RequestLogConfig = Exclude<Parameters<typeof requestLogger>[1], undefined>
type ResponseLogConfig = Exclude<Parameters<typeof responseLogger>[1], undefined>
type ErrorLogConfig = Exclude<Parameters<typeof errorLogger>[1], undefined>

export interface RateLimit {
  urlRegex: RegExp
  rate: number
  burst: number
  method: Method
}

export interface OnRetryParameters {
  delay: number
  rateLimit?: number
  retryCount: number
  error: AxiosError
}

export interface ClientConfiguration {
  auth: SellingPartnerApiAuth
  region: SellingPartnerRegion
  userAgent?: string
  sandbox?: boolean
  rateLimiting?: {
    retry: boolean
    onRetry?: (retryInfo: OnRetryParameters) => void
  }
  logging?: {
    request?: RequestLogConfig | true
    response?: ResponseLogConfig | true
    error?: ErrorLogConfig | true
  }
}

export function createAxiosInstance(
  {
    auth,
    region,
    userAgent = `${packageJson.name}/${packageJson.version}`,
    sandbox = false,
    rateLimiting,
    logging,
  }: ClientConfiguration,
  rateLimits: RateLimit[],
) {
  const regionConfiguration = sellingPartnerRegions[region]
  if (!regionConfiguration) {
    throw new TypeError(`Unknown or unsupported region: ${region}`)
  }

  const instance = axios.create({
    headers: {
      'user-agent': userAgent,
    },
  })

  const endpoint = regionConfiguration.endpoints[sandbox ? 'sandbox' : 'production']

  if (rateLimiting?.retry) {
    axiosRetry(instance, {
      retryCondition: (error) => error.response?.status === 429,
      retryDelay(retryCount, error) {
        const url = new URL(error.config.url!)
        const method = error.config.method?.toLowerCase()
        const amznRateLimit = Number.parseFloat(
          error.response?.headers['x-amzn-ratelimit-limit'] ?? '',
        )

        const rateLimit = Number.isNaN(amznRateLimit)
          ? rateLimits.find(
              (rateLimit) =>
                rateLimit.method.toLowerCase() === method && rateLimit.urlRegex.exec(url.pathname),
            )?.rate
          : amznRateLimit

        const delay = rateLimit ? (1 / rateLimit) * 1000 + 1500 : 60 * 1000

        if (rateLimiting.onRetry) {
          rateLimiting.onRetry({delay, rateLimit, retryCount, error})
        }

        return delay
      },
    })
  }

  // Set x-amz-access-token to each request
  instance.interceptors.request.use(async (config) => {
    if (!config.headers) {
      config.headers = {}
    }

    config.headers['x-amz-access-token'] = await auth.accessToken.get()

    return config
  })

  // Sign each request (should be the last interceptor)
  instance.interceptors.request.use(async (config) => {
    const credentials = await auth.getCredentials()

    if (!credentials) {
      return config
    }

    return aws4Interceptor(
      {
        region: regionConfiguration.awsRegion,
        service: 'execute-api',
      },
      {
        accessKeyId: credentials.AccessKeyId ?? '',
        secretAccessKey: credentials.SecretAccessKey ?? '',
        sessionToken: credentials.SessionToken,
      },
    )(config)
  })

  instance.interceptors.response.use(
    async (response) => response,
    async (error: unknown) => {
      if (axios.isAxiosError(error) && !(error instanceof SellingPartnerApiAuthError)) {
        throw new SellingPartnerApiError(error)
      }

      throw error
    },
  )

  if (logging?.request) {
    const requestLoggerOptions = logging.request === true ? undefined : logging.request

    if (requestLoggerOptions?.headers) {
      console.warn(
        'WARNING: You have enabled logging of request headers, this can leak authentication information, you should disable in production.',
      )
    }

    instance.interceptors.request.use((config) =>
      requestLogger(config, {
        prefixText: `sp-api-sdk/${region}`,
        dateFormat: 'isoDateTime',
        method: true,
        url: true,
        params: false,
        data: true,
        headers: false,
        logger: console.info,
        ...requestLoggerOptions,
      }),
    )
  }

  if (logging?.response) {
    const responseLoggerOptions = logging.response === true ? undefined : logging.response

    instance.interceptors.response.use((response) =>
      responseLogger(response, {
        prefixText: `sp-api-sdk/${region}`,
        dateFormat: 'isoDateTime',
        status: true,
        statusText: false,
        params: false,
        data: false,
        headers: true,
        logger: console.info,
        ...responseLoggerOptions,
      }),
    )
  }

  if (logging?.error) {
    const errorLoggerOptions = logging.error === true ? undefined : logging.error

    instance.interceptors.response.use(
      (response) => response,
      async (error) =>
        errorLogger(error, {
          prefixText: `sp-api-sdk/${region}`,
          dateFormat: 'isoDateTime',
          status: true,
          statusText: false,
          params: false,
          data: false,
          headers: true,
          logger: console.error,
          ...errorLoggerOptions,
        }),
    )
  }

  return {axios: instance, endpoint}
}
