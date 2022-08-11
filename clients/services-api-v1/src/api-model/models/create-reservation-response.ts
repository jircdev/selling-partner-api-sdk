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


import { CreateReservationRecord } from './create-reservation-record';

/**
 * Response schema for the `createReservation` operation.
 * @export
 * @interface CreateReservationResponse
 */
export interface CreateReservationResponse {
    /**
     * 
     * @type {CreateReservationRecord}
     * @memberof CreateReservationResponse
     */
    'payload'?: CreateReservationRecord;
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @type {Array<Error>}
     * @memberof CreateReservationResponse
     */
    'errors'?: Array<Error>;
}

