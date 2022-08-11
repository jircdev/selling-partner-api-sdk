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


import { Recurrence } from './recurrence';

/**
 * `AvailabilityRecord` to represent the capacity of a resource over a time range.
 * @export
 * @interface AvailabilityRecord
 */
export interface AvailabilityRecord {
    /**
     * Denotes the time from when the resource is available in a day in ISO-8601 format.
     * @type {string}
     * @memberof AvailabilityRecord
     */
    'startTime': string;
    /**
     * Denotes the time till when the resource is available in a day in ISO-8601 format.
     * @type {string}
     * @memberof AvailabilityRecord
     */
    'endTime': string;
    /**
     * 
     * @type {Recurrence}
     * @memberof AvailabilityRecord
     */
    'recurrence'?: Recurrence;
    /**
     * Signifies the capacity of a resource which is available.
     * @type {number}
     * @memberof AvailabilityRecord
     */
    'capacity'?: number;
}

