/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Direct Fulfillment Orders
 * The Selling Partner API for Direct Fulfillment Orders provides programmatic access to a direct fulfillment vendor\'s order data.
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
 * Tax registration details of the entity.
 * @export
 * @interface TaxRegistrationDetails
 */
export interface TaxRegistrationDetails {
    /**
     * Tax registration type for the entity.
     * @type {string}
     * @memberof TaxRegistrationDetails
     */
    taxRegistrationType?: TaxRegistrationDetailsTaxRegistrationTypeEnum;
    /**
     * Tax registration number for the party. For example, VAT ID.
     * @type {string}
     * @memberof TaxRegistrationDetails
     */
    taxRegistrationNumber: string;
    /**
     * 
     * @type {Address}
     * @memberof TaxRegistrationDetails
     */
    taxRegistrationAddress?: Address;
    /**
     * Tax registration message that can be used for additional tax related details.
     * @type {string}
     * @memberof TaxRegistrationDetails
     */
    taxRegistrationMessages?: string;
}

/**
    * @export
    * @enum {string}
    */
export enum TaxRegistrationDetailsTaxRegistrationTypeEnum {
    Vat = 'VAT',
    Gst = 'GST'
}



