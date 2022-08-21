/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Easy Ship
 * The Selling Partner API for Easy Ship helps you build applications that help sellers manage and ship Amazon Easy Ship orders.  Your Easy Ship applications can:  * Get available time slots for packages to be scheduled for delivery.  * Schedule, reschedule, and cancel Easy Ship orders.  * Print labels, invoices, and warranties.  See the [Marketplace Support Table](https://developer-docs.amazon.com/sp-api/docs/easyship-api-v2022-03-23-use-case-guide#marketplace-support-table) for the differences in Easy Ship operations by marketplace.
 *
 * The version of the OpenAPI document: 2022-03-23
 * Contact: marketplaceapitest@amazon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Dimensions } from './dimensions';
import { Weight } from './weight';

/**
 * The request schema for the `listHandoverSlots` operation.
 * @export
 * @interface ListHandoverSlotsRequest
 */
export interface ListHandoverSlotsRequest {
    /**
     * A string of up to 255 characters.
     * @type {string}
     * @memberof ListHandoverSlotsRequest
     */
    'marketplaceId': string;
    /**
     * An Amazon-defined order identifier. Identifies the order that the seller wants to deliver using Amazon Easy Ship.
     * @type {string}
     * @memberof ListHandoverSlotsRequest
     */
    'amazonOrderId': string;
    /**
     * 
     * @type {Dimensions}
     * @memberof ListHandoverSlotsRequest
     */
    'packageDimensions': Dimensions;
    /**
     * 
     * @type {Weight}
     * @memberof ListHandoverSlotsRequest
     */
    'packageWeight': Weight;
}

