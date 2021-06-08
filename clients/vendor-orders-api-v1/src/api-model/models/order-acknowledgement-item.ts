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


import { ItemQuantity } from './item-quantity';
import { Money } from './money';
import { OrderItemAcknowledgement } from './order-item-acknowledgement';

/**
 * Details of the item being acknowledged.
 * @export
 * @interface OrderAcknowledgementItem
 */
export interface OrderAcknowledgementItem {
    /**
     * Line item sequence number for the item.
     * @type {string}
     * @memberof OrderAcknowledgementItem
     */
    itemSequenceNumber?: string;
    /**
     * Amazon Standard Identification Number (ASIN) of an item.
     * @type {string}
     * @memberof OrderAcknowledgementItem
     */
    amazonProductIdentifier?: string;
    /**
     * The vendor selected product identification of the item. Should be the same as was sent in the purchase order.
     * @type {string}
     * @memberof OrderAcknowledgementItem
     */
    vendorProductIdentifier?: string;
    /**
     * 
     * @type {ItemQuantity}
     * @memberof OrderAcknowledgementItem
     */
    orderedQuantity: ItemQuantity;
    /**
     * 
     * @type {Money}
     * @memberof OrderAcknowledgementItem
     */
    netCost: Money;
    /**
     * 
     * @type {Money}
     * @memberof OrderAcknowledgementItem
     */
    listPrice?: Money;
    /**
     * The discount multiplier that should be applied to the price if a vendor sells books with a list price. This is a multiplier factor to arrive at a final discounted price. A multiplier of .90 would be the factor if a 10% discount is given.
     * @type {string}
     * @memberof OrderAcknowledgementItem
     */
    discountMultiplier?: string;
    /**
     * This is used to indicate acknowledged quantity.
     * @type {Array<OrderItemAcknowledgement>}
     * @memberof OrderAcknowledgementItem
     */
    itemAcknowledgements: Array<OrderItemAcknowledgement>;
}


