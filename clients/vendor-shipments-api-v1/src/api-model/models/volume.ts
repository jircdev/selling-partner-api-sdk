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
 * The volume of the container.
 * @export
 * @interface Volume
 */
export interface Volume {
    /**
     * The unit of measurement.
     * @type {string}
     * @memberof Volume
     */
    unitOfMeasure: VolumeUnitOfMeasureEnum;
    /**
     * A decimal number with no loss of precision. Useful when precision loss is unacceptable, as with currencies. Follows RFC7159 for number representation. <br>**Pattern** : `^-?(0|([1-9]\\d*))(\\.\\d+)?([eE][+-]?\\d+)?$`.
     * @type {string}
     * @memberof Volume
     */
    value: string;
}

/**
    * @export
    * @enum {string}
    */
export enum VolumeUnitOfMeasureEnum {
    CuFt = 'CuFt',
    CuIn = 'CuIn',
    CuM = 'CuM',
    CuY = 'CuY'
}



