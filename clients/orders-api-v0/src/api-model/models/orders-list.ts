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
import { Order } from './order';

/**
 * A list of orders along with additional information to make subsequent API calls.
 * @export
 * @interface OrdersList
 */
export interface OrdersList {
    /**
     * A list of orders.
     * @type {Array<Order>}
     * @memberof OrdersList
     */
    'Orders': Array<Order>;
    /**
     * When present and not empty, pass this string token in the next request to return the next response page.
     * @type {string}
     * @memberof OrdersList
     */
    'NextToken'?: string;
    /**
     * A date used for selecting orders that were last updated before (or at) a specified time. An update is defined as any change in order status, including the creation of a new order. Includes updates made by Amazon and by the seller. All dates must be in ISO 8601 format.
     * @type {string}
     * @memberof OrdersList
     */
    'LastUpdatedBefore'?: string;
    /**
     * A date used for selecting orders created before (or at) a specified time. Only orders placed before the specified time are returned. The date must be in ISO 8601 format.
     * @type {string}
     * @memberof OrdersList
     */
    'CreatedBefore'?: string;
}

