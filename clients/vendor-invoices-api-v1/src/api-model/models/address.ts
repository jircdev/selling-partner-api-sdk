/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Retail Procurement Payments
 * The Selling Partner API for Retail Procurement Payments provides programmatic access to vendors payments data.
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * A physical address.
 * @export
 * @interface Address
 */
export interface Address {
    /**
     * The name of the person, business or institution at that address.
     * @type {string}
     * @memberof Address
     */
    name: string;
    /**
     * First line of street address.
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
     * The city where the person, business or institution is located.
     * @type {string}
     * @memberof Address
     */
    city?: string;
    /**
     * The county where person, business or institution is located.
     * @type {string}
     * @memberof Address
     */
    county?: string;
    /**
     * The district where person, business or institution is located.
     * @type {string}
     * @memberof Address
     */
    district?: string;
    /**
     * The state or region where person, business or institution is located.
     * @type {string}
     * @memberof Address
     */
    stateOrRegion?: string;
    /**
     * The postal or zip code of that address. It contains a series of letters or digits or both, sometimes including spaces or punctuation.
     * @type {string}
     * @memberof Address
     */
    postalOrZipCode?: string;
    /**
     * The two digit country code. In ISO 3166-1 alpha-2 format.
     * @type {string}
     * @memberof Address
     */
    countryCode: string;
    /**
     * The phone number of the person, business or institution located at that address.
     * @type {string}
     * @memberof Address
     */
    phone?: string;
}


