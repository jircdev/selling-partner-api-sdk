/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for FBA Small And Light
 * The Selling Partner API for FBA Small and Light lets you help sellers manage their listings in the Small and Light program. The program reduces the cost of fulfilling orders for small and lightweight FBA inventory. You can enroll or remove items from the program and check item eligibility and enrollment status. You can also preview the estimated program fees charged to a seller for items sold while enrolled in the program.
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import { MoneyType } from './money-type';

/**
 * Fee details for a specific fee.
 * @export
 * @interface FeeLineItem
 */
export interface FeeLineItem {
    /**
     * The type of fee charged to the seller.
     * @type {string}
     * @memberof FeeLineItem
     */
    'feeType': FeeLineItemFeeTypeEnum;
    /**
     * 
     * @type {MoneyType}
     * @memberof FeeLineItem
     */
    'feeCharge': MoneyType;
}

export const FeeLineItemFeeTypeEnum = {
    FbaWeightBasedFee: 'FBAWeightBasedFee',
    FbaPerOrderFulfillmentFee: 'FBAPerOrderFulfillmentFee',
    FbaPerUnitFulfillmentFee: 'FBAPerUnitFulfillmentFee',
    Commission: 'Commission'
} as const;

export type FeeLineItemFeeTypeEnum = typeof FeeLineItemFeeTypeEnum[keyof typeof FeeLineItemFeeTypeEnum];


