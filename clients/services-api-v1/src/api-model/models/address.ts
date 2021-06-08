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



/**
 * The shipping address for the service job.
 * @export
 * @interface Address
 */
export interface Address {
    /**
     * The name of the person, business, or institution.
     * @type {string}
     * @memberof Address
     */
    name: string;
    /**
     * The first line of the address.
     * @type {string}
     * @memberof Address
     */
    addressLine1: string;
    /**
     * Additional address information, if required.
     * @type {string}
     * @memberof Address
     */
    addressLine2?: string;
    /**
     * Additional address information, if required.
     * @type {string}
     * @memberof Address
     */
    addressLine3?: string;
    /**
     * The city.
     * @type {string}
     * @memberof Address
     */
    city?: string;
    /**
     * The county.
     * @type {string}
     * @memberof Address
     */
    county?: string;
    /**
     * The district.
     * @type {string}
     * @memberof Address
     */
    district?: string;
    /**
     * The state or region.
     * @type {string}
     * @memberof Address
     */
    stateOrRegion?: string;
    /**
     * The postal code. This can contain letters, digits, spaces, and/or punctuation.
     * @type {string}
     * @memberof Address
     */
    postalCode?: string;
    /**
     * The two digit country code, in ISO 3166-1 alpha-2 format.
     * @type {string}
     * @memberof Address
     */
    countryCode?: string;
    /**
     * The phone number.
     * @type {string}
     * @memberof Address
     */
    phone?: string;
}


