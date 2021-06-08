/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Retail Procurement Orders
 * The Selling Partner API for Retail Procurement Orders provides programmatic access to vendor orders data.
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



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
    taxRegistrationType: TaxRegistrationDetailsTaxRegistrationTypeEnum;
    /**
     * Tax registration number for the entity. For example, VAT ID.
     * @type {string}
     * @memberof TaxRegistrationDetails
     */
    taxRegistrationNumber: string;
}

/**
    * @export
    * @enum {string}
    */
export enum TaxRegistrationDetailsTaxRegistrationTypeEnum {
    Vat = 'VAT',
    Gst = 'GST'
}



