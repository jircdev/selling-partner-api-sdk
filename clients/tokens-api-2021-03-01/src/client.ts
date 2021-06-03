import {Configuration, TokensApi} from './api-model'

import {endpoints, createAxiosInstance, ClientConfiguration} from '@sp-api-sdk/common'

import {TokensApiError} from './error'

export class TokensApiClient extends TokensApi {
	constructor(parameters: ClientConfiguration) {
		const axiosInstance = createAxiosInstance(parameters)
		const configuration = new Configuration()
		const environment = parameters.sandbox ? 'sandbox' : 'production'

		const endpoint: string | undefined = endpoints[environment][parameters.region]

		if (!endpoint) {
			throw new TokensApiError(`Unknown region : ${parameters.region}`)
		}

		super(configuration, endpoint, axiosInstance)
	}
}
