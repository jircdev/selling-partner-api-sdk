/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Direct Fulfillment Shipping
 * The Selling Partner API for Direct Fulfillment Shipping provides programmatic access to a direct fulfillment vendor\'s shipping data.
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { ItemQuantity } from './item-quantity';

/**
 * 
 * @export
 * @interface PackedItem
 */
export interface PackedItem {
    /**
     * Item Sequence Number for the item. This must be the same value as sent in the order for a given item.
     * @type {number}
     * @memberof PackedItem
     */
    itemSequenceNumber: number;
    /**
     * Buyer\'s Standard Identification Number (ASIN) of an item. Either buyerProductIdentifier or vendorProductIdentifier is required.
     * @type {string}
     * @memberof PackedItem
     */
    buyerProductIdentifier?: string;
    /**
     * The vendor selected product identification of the item. Should be the same as was sent in the Purchase Order, like SKU Number.
     * @type {string}
     * @memberof PackedItem
     */
    vendorProductIdentifier?: string;
    /**
     * 
     * @type {ItemQuantity}
     * @memberof PackedItem
     */
    packedQuantity: ItemQuantity;
}


