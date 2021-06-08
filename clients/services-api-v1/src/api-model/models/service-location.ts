/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Services
 * With the Services API, you can build applications that help service providers get and modify their service orders.
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Address } from './address';

/**
 * Information about the location of the service job.
 * @export
 * @interface ServiceLocation
 */
export interface ServiceLocation {
    /**
     * The location of the service job.
     * @type {string}
     * @memberof ServiceLocation
     */
    serviceLocationType?: ServiceLocationServiceLocationTypeEnum;
    /**
     * 
     * @type {Address}
     * @memberof ServiceLocation
     */
    address?: Address;
}

/**
    * @export
    * @enum {string}
    */
export enum ServiceLocationServiceLocationTypeEnum {
    InHome = 'IN_HOME',
    InStore = 'IN_STORE',
    Online = 'ONLINE'
}



