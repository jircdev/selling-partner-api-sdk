/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Listings Items
 * The Selling Partner API for Listings Items (Listings Items API) provides programmatic access to selling partner listings on Amazon. Use this API in collaboration with the Selling Partner API for Product Type Definitions, which you use to retrieve the information about Amazon product types needed to use the Listings Items API.
 *
 * The version of the OpenAPI document: 2020-09-01
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { ErrorList } from '../models';
// @ts-ignore
import { ListingsItemPatchRequest } from '../models';
// @ts-ignore
import { ListingsItemPutRequest } from '../models';
// @ts-ignore
import { ListingsItemSubmissionResponse } from '../models';
/**
 * ListingsApi - axios parameter creator
 * @export
 */
export const ListingsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Delete a listings item for a selling partner.  **Usage Plans:**  | Plan type | Rate (requests per second) | Burst | | ---- | ---- | ---- | |Default| 5 | 10 | |Selling partner specific| Variable | Variable |  The x-amzn-RateLimit-Limit response header returns the usage plan rate limits that were applied to the requested operation. Rate limits for some selling partners will vary from the default rate and burst shown in the table above. For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.
         * @param {string} sellerId A selling partner identifier, such as a merchant account or vendor code.
         * @param {string} sku A selling partner provided identifier for an Amazon listing.
         * @param {Array<string>} marketplaceIds A comma-delimited list of Amazon marketplace identifiers for the request.
         * @param {string} [issueLocale] A locale for localization of issues. When not provided, the default language code of the first marketplace is used. Examples: \&quot;en_US\&quot;, \&quot;fr_CA\&quot;, \&quot;fr_FR\&quot;. Localized messages default to \&quot;en_US\&quot; when a localization is not available in the specified locale.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteListingsItem: async (sellerId: string, sku: string, marketplaceIds: Array<string>, issueLocale?: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'sellerId' is not null or undefined
            assertParamExists('deleteListingsItem', 'sellerId', sellerId)
            // verify required parameter 'sku' is not null or undefined
            assertParamExists('deleteListingsItem', 'sku', sku)
            // verify required parameter 'marketplaceIds' is not null or undefined
            assertParamExists('deleteListingsItem', 'marketplaceIds', marketplaceIds)
            const localVarPath = `/listings/2020-09-01/items/{sellerId}/{sku}`
                .replace(`{${"sellerId"}}`, encodeURIComponent(String(sellerId)))
                .replace(`{${"sku"}}`, encodeURIComponent(String(sku)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (marketplaceIds) {
                localVarQueryParameter['marketplaceIds'] = marketplaceIds.join(COLLECTION_FORMATS.csv);
            }

            if (issueLocale !== undefined) {
                localVarQueryParameter['issueLocale'] = issueLocale;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Partially update (patch) a listings item for a selling partner. Only top-level listings item attributes can be patched. Patching nested attributes is not supported.  **Usage Plans:**  | Plan type | Rate (requests per second) | Burst | | ---- | ---- | ---- | |Default| 5 | 10 | |Selling partner specific| Variable | Variable |  The x-amzn-RateLimit-Limit response header returns the usage plan rate limits that were applied to the requested operation. Rate limits for some selling partners will vary from the default rate and burst shown in the table above. For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.
         * @param {string} sellerId A selling partner identifier, such as a merchant account or vendor code.
         * @param {string} sku A selling partner provided identifier for an Amazon listing.
         * @param {Array<string>} marketplaceIds A comma-delimited list of Amazon marketplace identifiers for the request.
         * @param {ListingsItemPatchRequest} body The request body schema for the patchListingsItem operation.
         * @param {string} [issueLocale] A locale for localization of issues. When not provided, the default language code of the first marketplace is used. Examples: \&quot;en_US\&quot;, \&quot;fr_CA\&quot;, \&quot;fr_FR\&quot;. Localized messages default to \&quot;en_US\&quot; when a localization is not available in the specified locale.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchListingsItem: async (sellerId: string, sku: string, marketplaceIds: Array<string>, body: ListingsItemPatchRequest, issueLocale?: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'sellerId' is not null or undefined
            assertParamExists('patchListingsItem', 'sellerId', sellerId)
            // verify required parameter 'sku' is not null or undefined
            assertParamExists('patchListingsItem', 'sku', sku)
            // verify required parameter 'marketplaceIds' is not null or undefined
            assertParamExists('patchListingsItem', 'marketplaceIds', marketplaceIds)
            // verify required parameter 'body' is not null or undefined
            assertParamExists('patchListingsItem', 'body', body)
            const localVarPath = `/listings/2020-09-01/items/{sellerId}/{sku}`
                .replace(`{${"sellerId"}}`, encodeURIComponent(String(sellerId)))
                .replace(`{${"sku"}}`, encodeURIComponent(String(sku)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (marketplaceIds) {
                localVarQueryParameter['marketplaceIds'] = marketplaceIds.join(COLLECTION_FORMATS.csv);
            }

            if (issueLocale !== undefined) {
                localVarQueryParameter['issueLocale'] = issueLocale;
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(body, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Creates a new or fully-updates an existing listings item for a selling partner.  **Usage Plans:**  | Plan type | Rate (requests per second) | Burst | | ---- | ---- | ---- | |Default| 5 | 10 | |Selling partner specific| Variable | Variable |  The x-amzn-RateLimit-Limit response header returns the usage plan rate limits that were applied to the requested operation. Rate limits for some selling partners will vary from the default rate and burst shown in the table above. For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.
         * @param {string} sellerId A selling partner identifier, such as a merchant account or vendor code.
         * @param {string} sku A selling partner provided identifier for an Amazon listing.
         * @param {Array<string>} marketplaceIds A comma-delimited list of Amazon marketplace identifiers for the request.
         * @param {ListingsItemPutRequest} body The request body schema for the putListingsItem operation.
         * @param {string} [issueLocale] A locale for localization of issues. When not provided, the default language code of the first marketplace is used. Examples: \&quot;en_US\&quot;, \&quot;fr_CA\&quot;, \&quot;fr_FR\&quot;. Localized messages default to \&quot;en_US\&quot; when a localization is not available in the specified locale.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        putListingsItem: async (sellerId: string, sku: string, marketplaceIds: Array<string>, body: ListingsItemPutRequest, issueLocale?: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'sellerId' is not null or undefined
            assertParamExists('putListingsItem', 'sellerId', sellerId)
            // verify required parameter 'sku' is not null or undefined
            assertParamExists('putListingsItem', 'sku', sku)
            // verify required parameter 'marketplaceIds' is not null or undefined
            assertParamExists('putListingsItem', 'marketplaceIds', marketplaceIds)
            // verify required parameter 'body' is not null or undefined
            assertParamExists('putListingsItem', 'body', body)
            const localVarPath = `/listings/2020-09-01/items/{sellerId}/{sku}`
                .replace(`{${"sellerId"}}`, encodeURIComponent(String(sellerId)))
                .replace(`{${"sku"}}`, encodeURIComponent(String(sku)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (marketplaceIds) {
                localVarQueryParameter['marketplaceIds'] = marketplaceIds.join(COLLECTION_FORMATS.csv);
            }

            if (issueLocale !== undefined) {
                localVarQueryParameter['issueLocale'] = issueLocale;
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(body, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ListingsApi - functional programming interface
 * @export
 */
export const ListingsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ListingsApiAxiosParamCreator(configuration)
    return {
        /**
         * Delete a listings item for a selling partner.  **Usage Plans:**  | Plan type | Rate (requests per second) | Burst | | ---- | ---- | ---- | |Default| 5 | 10 | |Selling partner specific| Variable | Variable |  The x-amzn-RateLimit-Limit response header returns the usage plan rate limits that were applied to the requested operation. Rate limits for some selling partners will vary from the default rate and burst shown in the table above. For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.
         * @param {string} sellerId A selling partner identifier, such as a merchant account or vendor code.
         * @param {string} sku A selling partner provided identifier for an Amazon listing.
         * @param {Array<string>} marketplaceIds A comma-delimited list of Amazon marketplace identifiers for the request.
         * @param {string} [issueLocale] A locale for localization of issues. When not provided, the default language code of the first marketplace is used. Examples: \&quot;en_US\&quot;, \&quot;fr_CA\&quot;, \&quot;fr_FR\&quot;. Localized messages default to \&quot;en_US\&quot; when a localization is not available in the specified locale.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteListingsItem(sellerId: string, sku: string, marketplaceIds: Array<string>, issueLocale?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ListingsItemSubmissionResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteListingsItem(sellerId, sku, marketplaceIds, issueLocale, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Partially update (patch) a listings item for a selling partner. Only top-level listings item attributes can be patched. Patching nested attributes is not supported.  **Usage Plans:**  | Plan type | Rate (requests per second) | Burst | | ---- | ---- | ---- | |Default| 5 | 10 | |Selling partner specific| Variable | Variable |  The x-amzn-RateLimit-Limit response header returns the usage plan rate limits that were applied to the requested operation. Rate limits for some selling partners will vary from the default rate and burst shown in the table above. For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.
         * @param {string} sellerId A selling partner identifier, such as a merchant account or vendor code.
         * @param {string} sku A selling partner provided identifier for an Amazon listing.
         * @param {Array<string>} marketplaceIds A comma-delimited list of Amazon marketplace identifiers for the request.
         * @param {ListingsItemPatchRequest} body The request body schema for the patchListingsItem operation.
         * @param {string} [issueLocale] A locale for localization of issues. When not provided, the default language code of the first marketplace is used. Examples: \&quot;en_US\&quot;, \&quot;fr_CA\&quot;, \&quot;fr_FR\&quot;. Localized messages default to \&quot;en_US\&quot; when a localization is not available in the specified locale.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async patchListingsItem(sellerId: string, sku: string, marketplaceIds: Array<string>, body: ListingsItemPatchRequest, issueLocale?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ListingsItemSubmissionResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.patchListingsItem(sellerId, sku, marketplaceIds, body, issueLocale, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Creates a new or fully-updates an existing listings item for a selling partner.  **Usage Plans:**  | Plan type | Rate (requests per second) | Burst | | ---- | ---- | ---- | |Default| 5 | 10 | |Selling partner specific| Variable | Variable |  The x-amzn-RateLimit-Limit response header returns the usage plan rate limits that were applied to the requested operation. Rate limits for some selling partners will vary from the default rate and burst shown in the table above. For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.
         * @param {string} sellerId A selling partner identifier, such as a merchant account or vendor code.
         * @param {string} sku A selling partner provided identifier for an Amazon listing.
         * @param {Array<string>} marketplaceIds A comma-delimited list of Amazon marketplace identifiers for the request.
         * @param {ListingsItemPutRequest} body The request body schema for the putListingsItem operation.
         * @param {string} [issueLocale] A locale for localization of issues. When not provided, the default language code of the first marketplace is used. Examples: \&quot;en_US\&quot;, \&quot;fr_CA\&quot;, \&quot;fr_FR\&quot;. Localized messages default to \&quot;en_US\&quot; when a localization is not available in the specified locale.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async putListingsItem(sellerId: string, sku: string, marketplaceIds: Array<string>, body: ListingsItemPutRequest, issueLocale?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ListingsItemSubmissionResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.putListingsItem(sellerId, sku, marketplaceIds, body, issueLocale, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ListingsApi - factory interface
 * @export
 */
export const ListingsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ListingsApiFp(configuration)
    return {
        /**
         * Delete a listings item for a selling partner.  **Usage Plans:**  | Plan type | Rate (requests per second) | Burst | | ---- | ---- | ---- | |Default| 5 | 10 | |Selling partner specific| Variable | Variable |  The x-amzn-RateLimit-Limit response header returns the usage plan rate limits that were applied to the requested operation. Rate limits for some selling partners will vary from the default rate and burst shown in the table above. For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.
         * @param {string} sellerId A selling partner identifier, such as a merchant account or vendor code.
         * @param {string} sku A selling partner provided identifier for an Amazon listing.
         * @param {Array<string>} marketplaceIds A comma-delimited list of Amazon marketplace identifiers for the request.
         * @param {string} [issueLocale] A locale for localization of issues. When not provided, the default language code of the first marketplace is used. Examples: \&quot;en_US\&quot;, \&quot;fr_CA\&quot;, \&quot;fr_FR\&quot;. Localized messages default to \&quot;en_US\&quot; when a localization is not available in the specified locale.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteListingsItem(sellerId: string, sku: string, marketplaceIds: Array<string>, issueLocale?: string, options?: any): AxiosPromise<ListingsItemSubmissionResponse> {
            return localVarFp.deleteListingsItem(sellerId, sku, marketplaceIds, issueLocale, options).then((request) => request(axios, basePath));
        },
        /**
         * Partially update (patch) a listings item for a selling partner. Only top-level listings item attributes can be patched. Patching nested attributes is not supported.  **Usage Plans:**  | Plan type | Rate (requests per second) | Burst | | ---- | ---- | ---- | |Default| 5 | 10 | |Selling partner specific| Variable | Variable |  The x-amzn-RateLimit-Limit response header returns the usage plan rate limits that were applied to the requested operation. Rate limits for some selling partners will vary from the default rate and burst shown in the table above. For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.
         * @param {string} sellerId A selling partner identifier, such as a merchant account or vendor code.
         * @param {string} sku A selling partner provided identifier for an Amazon listing.
         * @param {Array<string>} marketplaceIds A comma-delimited list of Amazon marketplace identifiers for the request.
         * @param {ListingsItemPatchRequest} body The request body schema for the patchListingsItem operation.
         * @param {string} [issueLocale] A locale for localization of issues. When not provided, the default language code of the first marketplace is used. Examples: \&quot;en_US\&quot;, \&quot;fr_CA\&quot;, \&quot;fr_FR\&quot;. Localized messages default to \&quot;en_US\&quot; when a localization is not available in the specified locale.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchListingsItem(sellerId: string, sku: string, marketplaceIds: Array<string>, body: ListingsItemPatchRequest, issueLocale?: string, options?: any): AxiosPromise<ListingsItemSubmissionResponse> {
            return localVarFp.patchListingsItem(sellerId, sku, marketplaceIds, body, issueLocale, options).then((request) => request(axios, basePath));
        },
        /**
         * Creates a new or fully-updates an existing listings item for a selling partner.  **Usage Plans:**  | Plan type | Rate (requests per second) | Burst | | ---- | ---- | ---- | |Default| 5 | 10 | |Selling partner specific| Variable | Variable |  The x-amzn-RateLimit-Limit response header returns the usage plan rate limits that were applied to the requested operation. Rate limits for some selling partners will vary from the default rate and burst shown in the table above. For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.
         * @param {string} sellerId A selling partner identifier, such as a merchant account or vendor code.
         * @param {string} sku A selling partner provided identifier for an Amazon listing.
         * @param {Array<string>} marketplaceIds A comma-delimited list of Amazon marketplace identifiers for the request.
         * @param {ListingsItemPutRequest} body The request body schema for the putListingsItem operation.
         * @param {string} [issueLocale] A locale for localization of issues. When not provided, the default language code of the first marketplace is used. Examples: \&quot;en_US\&quot;, \&quot;fr_CA\&quot;, \&quot;fr_FR\&quot;. Localized messages default to \&quot;en_US\&quot; when a localization is not available in the specified locale.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        putListingsItem(sellerId: string, sku: string, marketplaceIds: Array<string>, body: ListingsItemPutRequest, issueLocale?: string, options?: any): AxiosPromise<ListingsItemSubmissionResponse> {
            return localVarFp.putListingsItem(sellerId, sku, marketplaceIds, body, issueLocale, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for deleteListingsItem operation in ListingsApi.
 * @export
 * @interface ListingsApiDeleteListingsItemRequest
 */
export interface ListingsApiDeleteListingsItemRequest {
    /**
     * A selling partner identifier, such as a merchant account or vendor code.
     * @type {string}
     * @memberof ListingsApiDeleteListingsItem
     */
    readonly sellerId: string

    /**
     * A selling partner provided identifier for an Amazon listing.
     * @type {string}
     * @memberof ListingsApiDeleteListingsItem
     */
    readonly sku: string

    /**
     * A comma-delimited list of Amazon marketplace identifiers for the request.
     * @type {Array<string>}
     * @memberof ListingsApiDeleteListingsItem
     */
    readonly marketplaceIds: Array<string>

    /**
     * A locale for localization of issues. When not provided, the default language code of the first marketplace is used. Examples: \&quot;en_US\&quot;, \&quot;fr_CA\&quot;, \&quot;fr_FR\&quot;. Localized messages default to \&quot;en_US\&quot; when a localization is not available in the specified locale.
     * @type {string}
     * @memberof ListingsApiDeleteListingsItem
     */
    readonly issueLocale?: string
}

/**
 * Request parameters for patchListingsItem operation in ListingsApi.
 * @export
 * @interface ListingsApiPatchListingsItemRequest
 */
export interface ListingsApiPatchListingsItemRequest {
    /**
     * A selling partner identifier, such as a merchant account or vendor code.
     * @type {string}
     * @memberof ListingsApiPatchListingsItem
     */
    readonly sellerId: string

    /**
     * A selling partner provided identifier for an Amazon listing.
     * @type {string}
     * @memberof ListingsApiPatchListingsItem
     */
    readonly sku: string

    /**
     * A comma-delimited list of Amazon marketplace identifiers for the request.
     * @type {Array<string>}
     * @memberof ListingsApiPatchListingsItem
     */
    readonly marketplaceIds: Array<string>

    /**
     * The request body schema for the patchListingsItem operation.
     * @type {ListingsItemPatchRequest}
     * @memberof ListingsApiPatchListingsItem
     */
    readonly body: ListingsItemPatchRequest

    /**
     * A locale for localization of issues. When not provided, the default language code of the first marketplace is used. Examples: \&quot;en_US\&quot;, \&quot;fr_CA\&quot;, \&quot;fr_FR\&quot;. Localized messages default to \&quot;en_US\&quot; when a localization is not available in the specified locale.
     * @type {string}
     * @memberof ListingsApiPatchListingsItem
     */
    readonly issueLocale?: string
}

/**
 * Request parameters for putListingsItem operation in ListingsApi.
 * @export
 * @interface ListingsApiPutListingsItemRequest
 */
export interface ListingsApiPutListingsItemRequest {
    /**
     * A selling partner identifier, such as a merchant account or vendor code.
     * @type {string}
     * @memberof ListingsApiPutListingsItem
     */
    readonly sellerId: string

    /**
     * A selling partner provided identifier for an Amazon listing.
     * @type {string}
     * @memberof ListingsApiPutListingsItem
     */
    readonly sku: string

    /**
     * A comma-delimited list of Amazon marketplace identifiers for the request.
     * @type {Array<string>}
     * @memberof ListingsApiPutListingsItem
     */
    readonly marketplaceIds: Array<string>

    /**
     * The request body schema for the putListingsItem operation.
     * @type {ListingsItemPutRequest}
     * @memberof ListingsApiPutListingsItem
     */
    readonly body: ListingsItemPutRequest

    /**
     * A locale for localization of issues. When not provided, the default language code of the first marketplace is used. Examples: \&quot;en_US\&quot;, \&quot;fr_CA\&quot;, \&quot;fr_FR\&quot;. Localized messages default to \&quot;en_US\&quot; when a localization is not available in the specified locale.
     * @type {string}
     * @memberof ListingsApiPutListingsItem
     */
    readonly issueLocale?: string
}

/**
 * ListingsApi - object-oriented interface
 * @export
 * @class ListingsApi
 * @extends {BaseAPI}
 */
export class ListingsApi extends BaseAPI {
    /**
     * Delete a listings item for a selling partner.  **Usage Plans:**  | Plan type | Rate (requests per second) | Burst | | ---- | ---- | ---- | |Default| 5 | 10 | |Selling partner specific| Variable | Variable |  The x-amzn-RateLimit-Limit response header returns the usage plan rate limits that were applied to the requested operation. Rate limits for some selling partners will vary from the default rate and burst shown in the table above. For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.
     * @param {ListingsApiDeleteListingsItemRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ListingsApi
     */
    public deleteListingsItem(requestParameters: ListingsApiDeleteListingsItemRequest, options?: any) {
        return ListingsApiFp(this.configuration).deleteListingsItem(requestParameters.sellerId, requestParameters.sku, requestParameters.marketplaceIds, requestParameters.issueLocale, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Partially update (patch) a listings item for a selling partner. Only top-level listings item attributes can be patched. Patching nested attributes is not supported.  **Usage Plans:**  | Plan type | Rate (requests per second) | Burst | | ---- | ---- | ---- | |Default| 5 | 10 | |Selling partner specific| Variable | Variable |  The x-amzn-RateLimit-Limit response header returns the usage plan rate limits that were applied to the requested operation. Rate limits for some selling partners will vary from the default rate and burst shown in the table above. For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.
     * @param {ListingsApiPatchListingsItemRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ListingsApi
     */
    public patchListingsItem(requestParameters: ListingsApiPatchListingsItemRequest, options?: any) {
        return ListingsApiFp(this.configuration).patchListingsItem(requestParameters.sellerId, requestParameters.sku, requestParameters.marketplaceIds, requestParameters.body, requestParameters.issueLocale, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Creates a new or fully-updates an existing listings item for a selling partner.  **Usage Plans:**  | Plan type | Rate (requests per second) | Burst | | ---- | ---- | ---- | |Default| 5 | 10 | |Selling partner specific| Variable | Variable |  The x-amzn-RateLimit-Limit response header returns the usage plan rate limits that were applied to the requested operation. Rate limits for some selling partners will vary from the default rate and burst shown in the table above. For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.
     * @param {ListingsApiPutListingsItemRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ListingsApi
     */
    public putListingsItem(requestParameters: ListingsApiPutListingsItemRequest, options?: any) {
        return ListingsApiFp(this.configuration).putListingsItem(requestParameters.sellerId, requestParameters.sku, requestParameters.marketplaceIds, requestParameters.body, requestParameters.issueLocale, options).then((request) => request(this.axios, this.basePath));
    }
}
