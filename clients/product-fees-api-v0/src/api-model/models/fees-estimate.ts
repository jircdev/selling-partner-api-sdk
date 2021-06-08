/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Product Fees
 * The Selling Partner API for Product Fees lets you programmatically retrieve estimated fees for a product. You can then account for those fees in your pricing.
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { FeeDetail } from './fee-detail';
import { MoneyType } from './money-type';

/**
 * The total estimated fees for an item and a list of details.
 * @export
 * @interface FeesEstimate
 */
export interface FeesEstimate {
    /**
     * The time at which the fees were estimated. This defaults to the time the request is made.
     * @type {string}
     * @memberof FeesEstimate
     */
    TimeOfFeesEstimation: string;
    /**
     * 
     * @type {MoneyType}
     * @memberof FeesEstimate
     */
    TotalFeesEstimate?: MoneyType;
    /**
     * A list of other fees that contribute to a given fee.
     * @type {Array<FeeDetail>}
     * @memberof FeesEstimate
     */
    FeeDetailList?: Array<FeeDetail>;
}


