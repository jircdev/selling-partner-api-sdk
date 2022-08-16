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


import { Reservation } from './reservation';
import { Warning } from './warning';

/**
 * `CreateReservationRecord` entity contains the `Reservation` if there is an error/warning while performing the requested operation on it, otherwise it will contain the new `reservationId`.
 * @export
 * @interface CreateReservationRecord
 */
export interface CreateReservationRecord {
    /**
     * 
     * @type {Reservation}
     * @memberof CreateReservationRecord
     */
    'reservation'?: Reservation;
    /**
     * A list of warnings returned in the sucessful execution response of an API request.
     * @type {Array<Warning>}
     * @memberof CreateReservationRecord
     */
    'warnings'?: Array<Warning>;
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @type {Array<Error>}
     * @memberof CreateReservationRecord
     */
    'errors'?: Array<Error>;
}
