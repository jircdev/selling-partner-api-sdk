/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Services
 * With the Services API, you can build applications that help service providers get and modify their service orders and manage their resources.
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { FixedSlot } from './fixed-slot';

/**
 * Response schema for the `getFixedSlotCapacity` operation.
 * @export
 * @interface FixedSlotCapacity
 */
export interface FixedSlotCapacity {
    /**
     * Resource Identifier.
     * @type {string}
     * @memberof FixedSlotCapacity
     */
    'resourceId'?: string;
    /**
     * The duration of each slot which is returned. This value will be a multiple of 5 and fall in the following range: 5 <= `slotDuration` <= 360.
     * @type {number}
     * @memberof FixedSlotCapacity
     */
    'slotDuration'?: number;
    /**
     * Array of capacity slots in fixed slot format.
     * @type {Array<FixedSlot>}
     * @memberof FixedSlotCapacity
     */
    'capacities'?: Array<FixedSlot>;
    /**
     * Next page token, if there are more pages.
     * @type {string}
     * @memberof FixedSlotCapacity
     */
    'nextPageToken'?: string;
}

