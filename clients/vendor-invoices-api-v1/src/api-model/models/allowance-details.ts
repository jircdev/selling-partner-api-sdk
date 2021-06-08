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


import { Money } from './money';
import { TaxDetails } from './tax-details';

/**
 * Monetary and tax details of the allowance.
 * @export
 * @interface AllowanceDetails
 */
export interface AllowanceDetails {
    /**
     * Type of the allowance applied.
     * @type {string}
     * @memberof AllowanceDetails
     */
    type: AllowanceDetailsTypeEnum;
    /**
     * Description of the allowance.
     * @type {string}
     * @memberof AllowanceDetails
     */
    description?: string;
    /**
     * 
     * @type {Money}
     * @memberof AllowanceDetails
     */
    allowanceAmount: Money;
    /**
     * Tax amount details applied on this allowance.
     * @type {Array<TaxDetails>}
     * @memberof AllowanceDetails
     */
    taxDetails?: Array<TaxDetails>;
}

/**
    * @export
    * @enum {string}
    */
export enum AllowanceDetailsTypeEnum {
    Discount = 'Discount',
    DiscountIncentive = 'DiscountIncentive',
    Defective = 'Defective',
    Promotional = 'Promotional',
    UnsaleableMerchandise = 'UnsaleableMerchandise',
    Special = 'Special'
}



