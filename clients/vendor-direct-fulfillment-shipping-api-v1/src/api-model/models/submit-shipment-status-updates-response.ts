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


import { TransactionReference } from './transaction-reference';

/**
 * The response schema for the submitShipmentStatusUpdates operation.
 * @export
 * @interface SubmitShipmentStatusUpdatesResponse
 */
export interface SubmitShipmentStatusUpdatesResponse {
    /**
     * 
     * @type {TransactionReference}
     * @memberof SubmitShipmentStatusUpdatesResponse
     */
    payload?: TransactionReference;
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @type {Array<Error>}
     * @memberof SubmitShipmentStatusUpdatesResponse
     */
    errors?: Array<Error>;
}


