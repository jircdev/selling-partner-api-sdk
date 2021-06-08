/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Direct Fulfillment Shipping
 * The Selling Partner API for Direct Fulfillment Shipping provides programmatic access to a direct fulfillment vendor\'s shipping data.
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { ShippingLabelList } from './shipping-label-list';

/**
 * The response schema for the getShippingLabels operation.
 * @export
 * @interface GetShippingLabelListResponse
 */
export interface GetShippingLabelListResponse {
    /**
     * 
     * @type {ShippingLabelList}
     * @memberof GetShippingLabelListResponse
     */
    payload?: ShippingLabelList;
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @type {Array<Error>}
     * @memberof GetShippingLabelListResponse
     */
    errors?: Array<Error>;
}


