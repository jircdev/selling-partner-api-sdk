/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Shipping
 * Provides programmatic access to Amazon Shipping APIs.
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { RetrieveShippingLabelResult } from './retrieve-shipping-label-result';

/**
 * The response schema for the retrieveShippingLabel operation.
 * @export
 * @interface RetrieveShippingLabelResponse
 */
export interface RetrieveShippingLabelResponse {
    /**
     * 
     * @type {RetrieveShippingLabelResult}
     * @memberof RetrieveShippingLabelResponse
     */
    payload?: RetrieveShippingLabelResult;
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @type {Array<Error>}
     * @memberof RetrieveShippingLabelResponse
     */
    errors?: Array<Error>;
}


