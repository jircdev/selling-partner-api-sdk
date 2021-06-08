/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Direct Fulfillment Inventory Updates
 * The Selling Partner API for Direct Fulfillment Inventory Updates provides programmatic access to a direct fulfillment vendor\'s inventory updates.
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
 * Updated inventory details for an item.
 * @export
 * @interface ItemDetails
 */
export interface ItemDetails {
    /**
     * The buyer selected product identification of the item. Either buyerProductIdentifier or vendorProductIdentifier should be submitted.
     * @type {string}
     * @memberof ItemDetails
     */
    buyerProductIdentifier?: string;
    /**
     * The vendor selected product identification of the item. Either buyerProductIdentifier or vendorProductIdentifier should be submitted.
     * @type {string}
     * @memberof ItemDetails
     */
    vendorProductIdentifier?: string;
    /**
     * 
     * @type {ItemQuantity}
     * @memberof ItemDetails
     */
    availableQuantity: ItemQuantity;
    /**
     * When true, the item is permanently unavailable.
     * @type {boolean}
     * @memberof ItemDetails
     */
    isObsolete?: boolean;
}


