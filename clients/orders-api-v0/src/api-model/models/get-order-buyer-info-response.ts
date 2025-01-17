/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Orders
 * The Selling Partner API for Orders helps you programmatically retrieve order information. These APIs let you develop fast, flexible, custom applications in areas like order synchronization, order research, and demand-based decision support tools.
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import { OrderBuyerInfo } from './order-buyer-info';

/**
 * The response schema for the getOrderBuyerInfo operation.
 * @export
 * @interface GetOrderBuyerInfoResponse
 */
export interface GetOrderBuyerInfoResponse {
    /**
     * 
     * @type {OrderBuyerInfo}
     * @memberof GetOrderBuyerInfoResponse
     */
    'payload'?: OrderBuyerInfo;
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @type {Array<Error>}
     * @memberof GetOrderBuyerInfoResponse
     */
    'errors'?: Array<Error>;
}

