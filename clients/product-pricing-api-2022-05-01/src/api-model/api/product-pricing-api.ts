/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Pricing
 * The Selling Partner API for Pricing helps you programmatically retrieve product pricing and offer pricing information for Amazon Marketplace products.  For more information, see the [Product Pricing v2022-05-01 Use Case Guide](https://developer-docs.amazon.com/sp-api/docs/product-pricing-api-v2022-05-01-use-case-guide).
 *
 * The version of the OpenAPI document: 2022-05-01
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { Errors } from '../models';
// @ts-ignore
import { GetFeaturedOfferExpectedPriceBatchRequest } from '../models';
// @ts-ignore
import { GetFeaturedOfferExpectedPriceBatchResponse } from '../models';
/**
 * ProductPricingApi - axios parameter creator
 * @export
 */
export const ProductPricingApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Returns the set of responses that correspond to the batched list of up to 40 requests defined in the request body. The response for each successful (HTTP status code 200) request in the set includes the computed listing price at or below which a seller can expect to become the featured offer (before applicable promotions). This is called the featured offer expected price (FOEP). Featured offer is not guaranteed, because competing offers may change, and different offers may be featured based on other factors, including fulfillment capabilities to a specific customer. The response to an unsuccessful request includes the available error text.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.033 | 1 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
         * @param {GetFeaturedOfferExpectedPriceBatchRequest} getFeaturedOfferExpectedPriceBatchRequestBody 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFeaturedOfferExpectedPriceBatch: async (getFeaturedOfferExpectedPriceBatchRequestBody: GetFeaturedOfferExpectedPriceBatchRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'getFeaturedOfferExpectedPriceBatchRequestBody' is not null or undefined
            assertParamExists('getFeaturedOfferExpectedPriceBatch', 'getFeaturedOfferExpectedPriceBatchRequestBody', getFeaturedOfferExpectedPriceBatchRequestBody)
            const localVarPath = `/batches/products/pricing/2022-05-01/offer/featuredOfferExpectedPrice`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(getFeaturedOfferExpectedPriceBatchRequestBody, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ProductPricingApi - functional programming interface
 * @export
 */
export const ProductPricingApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ProductPricingApiAxiosParamCreator(configuration)
    return {
        /**
         * Returns the set of responses that correspond to the batched list of up to 40 requests defined in the request body. The response for each successful (HTTP status code 200) request in the set includes the computed listing price at or below which a seller can expect to become the featured offer (before applicable promotions). This is called the featured offer expected price (FOEP). Featured offer is not guaranteed, because competing offers may change, and different offers may be featured based on other factors, including fulfillment capabilities to a specific customer. The response to an unsuccessful request includes the available error text.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.033 | 1 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
         * @param {GetFeaturedOfferExpectedPriceBatchRequest} getFeaturedOfferExpectedPriceBatchRequestBody 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getFeaturedOfferExpectedPriceBatch(getFeaturedOfferExpectedPriceBatchRequestBody: GetFeaturedOfferExpectedPriceBatchRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetFeaturedOfferExpectedPriceBatchResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getFeaturedOfferExpectedPriceBatch(getFeaturedOfferExpectedPriceBatchRequestBody, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ProductPricingApi - factory interface
 * @export
 */
export const ProductPricingApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ProductPricingApiFp(configuration)
    return {
        /**
         * Returns the set of responses that correspond to the batched list of up to 40 requests defined in the request body. The response for each successful (HTTP status code 200) request in the set includes the computed listing price at or below which a seller can expect to become the featured offer (before applicable promotions). This is called the featured offer expected price (FOEP). Featured offer is not guaranteed, because competing offers may change, and different offers may be featured based on other factors, including fulfillment capabilities to a specific customer. The response to an unsuccessful request includes the available error text.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.033 | 1 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
         * @param {ProductPricingApiGetFeaturedOfferExpectedPriceBatchRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFeaturedOfferExpectedPriceBatch(requestParameters: ProductPricingApiGetFeaturedOfferExpectedPriceBatchRequest, options?: AxiosRequestConfig): AxiosPromise<GetFeaturedOfferExpectedPriceBatchResponse> {
            return localVarFp.getFeaturedOfferExpectedPriceBatch(requestParameters.getFeaturedOfferExpectedPriceBatchRequestBody, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getFeaturedOfferExpectedPriceBatch operation in ProductPricingApi.
 * @export
 * @interface ProductPricingApiGetFeaturedOfferExpectedPriceBatchRequest
 */
export interface ProductPricingApiGetFeaturedOfferExpectedPriceBatchRequest {
    /**
     * 
     * @type {GetFeaturedOfferExpectedPriceBatchRequest}
     * @memberof ProductPricingApiGetFeaturedOfferExpectedPriceBatch
     */
    readonly getFeaturedOfferExpectedPriceBatchRequestBody: GetFeaturedOfferExpectedPriceBatchRequest
}

/**
 * ProductPricingApi - object-oriented interface
 * @export
 * @class ProductPricingApi
 * @extends {BaseAPI}
 */
export class ProductPricingApi extends BaseAPI {
    /**
     * Returns the set of responses that correspond to the batched list of up to 40 requests defined in the request body. The response for each successful (HTTP status code 200) request in the set includes the computed listing price at or below which a seller can expect to become the featured offer (before applicable promotions). This is called the featured offer expected price (FOEP). Featured offer is not guaranteed, because competing offers may change, and different offers may be featured based on other factors, including fulfillment capabilities to a specific customer. The response to an unsuccessful request includes the available error text.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.033 | 1 |  The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
     * @param {ProductPricingApiGetFeaturedOfferExpectedPriceBatchRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProductPricingApi
     */
    public getFeaturedOfferExpectedPriceBatch(requestParameters: ProductPricingApiGetFeaturedOfferExpectedPriceBatchRequest, options?: AxiosRequestConfig) {
        return ProductPricingApiFp(this.configuration).getFeaturedOfferExpectedPriceBatch(requestParameters.getFeaturedOfferExpectedPriceBatchRequestBody, options).then((request) => request(this.axios, this.basePath));
    }
}
