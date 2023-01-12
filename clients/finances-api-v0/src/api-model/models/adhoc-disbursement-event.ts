/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Finances
 * The Selling Partner API for Finances helps you obtain financial information relevant to a seller\'s business. You can obtain financial events for a given order, financial event group, or date range without having to wait until a statement period closes. You can also obtain financial event groups for a given date range.
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import { Currency } from './currency';

/**
 * An event related to an Adhoc Disbursement.
 * @export
 * @interface AdhocDisbursementEvent
 */
export interface AdhocDisbursementEvent {
    /**
     * Indicates the type of transaction.  Example: \"Disbursed to Amazon Gift Card balance\"
     * @type {string}
     * @memberof AdhocDisbursementEvent
     */
    'TransactionType'?: string;
    /**
     * 
     * @type {string}
     * @memberof AdhocDisbursementEvent
     */
    'PostedDate'?: string;
    /**
     * The identifier for the transaction.
     * @type {string}
     * @memberof AdhocDisbursementEvent
     */
    'TransactionId'?: string;
    /**
     * 
     * @type {Currency}
     * @memberof AdhocDisbursementEvent
     */
    'TransactionAmount'?: Currency;
}
