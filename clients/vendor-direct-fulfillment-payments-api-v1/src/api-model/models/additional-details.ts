/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Direct Fulfillment Payments
 * The Selling Partner API for Direct Fulfillment Payments provides programmatic access to a direct fulfillment vendor\'s invoice data.
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * A field where selling party can provide additional information for tax related or any other purposes.
 * @export
 * @interface AdditionalDetails
 */
export interface AdditionalDetails {
    /**
     * The type of the additional information provided by the selling party.
     * @type {string}
     * @memberof AdditionalDetails
     */
    type: AdditionalDetailsTypeEnum;
    /**
     * The detail of the additional information provided by the selling party.
     * @type {string}
     * @memberof AdditionalDetails
     */
    detail: string;
    /**
     * The language code of the additional information detail.
     * @type {string}
     * @memberof AdditionalDetails
     */
    languageCode?: string;
}

/**
    * @export
    * @enum {string}
    */
export enum AdditionalDetailsTypeEnum {
    Sur = 'SUR',
    Ocr = 'OCR'
}



