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


import { Currency } from './currency';
import { TaxWithheldComponent } from './tax-withheld-component';

/**
 * A retrocharge or retrocharge reversal.
 * @export
 * @interface RetrochargeEvent
 */
export interface RetrochargeEvent {
    /**
     * The type of event.  Possible values:  * Retrocharge  * RetrochargeReversal
     * @type {string}
     * @memberof RetrochargeEvent
     */
    RetrochargeEventType?: string;
    /**
     * An Amazon-defined identifier for an order.
     * @type {string}
     * @memberof RetrochargeEvent
     */
    AmazonOrderId?: string;
    /**
     * 
     * @type {string}
     * @memberof RetrochargeEvent
     */
    PostedDate?: string;
    /**
     * 
     * @type {Currency}
     * @memberof RetrochargeEvent
     */
    BaseTax?: Currency;
    /**
     * 
     * @type {Currency}
     * @memberof RetrochargeEvent
     */
    ShippingTax?: Currency;
    /**
     * The name of the marketplace where the retrocharge event occurred.
     * @type {string}
     * @memberof RetrochargeEvent
     */
    MarketplaceName?: string;
    /**
     * A list of information about taxes withheld.
     * @type {Array<TaxWithheldComponent>}
     * @memberof RetrochargeEvent
     */
    RetrochargeTaxWithheldList?: Array<TaxWithheldComponent>;
}


