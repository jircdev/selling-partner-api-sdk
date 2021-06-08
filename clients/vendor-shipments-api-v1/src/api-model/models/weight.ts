/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Retail Procurement Shipments
 * The Selling Partner API for Retail Procurement Shipments provides programmatic access to retail shipping data for vendors.
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * The weight.
 * @export
 * @interface Weight
 */
export interface Weight {
    /**
     * The unit of measurement.
     * @type {string}
     * @memberof Weight
     */
    unitOfMeasure: WeightUnitOfMeasureEnum;
    /**
     * A decimal number with no loss of precision. Useful when precision loss is unacceptable, as with currencies. Follows RFC7159 for number representation. <br>**Pattern** : `^-?(0|([1-9]\\d*))(\\.\\d+)?([eE][+-]?\\d+)?$`.
     * @type {string}
     * @memberof Weight
     */
    value: string;
}

/**
    * @export
    * @enum {string}
    */
export enum WeightUnitOfMeasureEnum {
    G = 'G',
    Kg = 'Kg',
    Oz = 'Oz',
    Lb = 'Lb'
}



