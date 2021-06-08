/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for FBA Inventory
 * The Selling Partner API for FBA Inventory lets you programmatically retrieve information about inventory in Amazon\'s fulfillment network. Today this API is available only in the North America region. In 2021 we plan to release this API in the Europe and Far East regions.
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { InventoryDetails } from './inventory-details';

/**
 * Inventory summary for a specific item.
 * @export
 * @interface InventorySummary
 */
export interface InventorySummary {
    /**
     * The Amazon Standard Identification Number (ASIN) of an item.
     * @type {string}
     * @memberof InventorySummary
     */
    asin?: string;
    /**
     * Amazon\'s fulfillment network SKU identifier.
     * @type {string}
     * @memberof InventorySummary
     */
    fnSku?: string;
    /**
     * The seller SKU of the item.
     * @type {string}
     * @memberof InventorySummary
     */
    sellerSku?: string;
    /**
     * The condition of the item as described by the seller (for example, New Item).
     * @type {string}
     * @memberof InventorySummary
     */
    condition?: string;
    /**
     * 
     * @type {InventoryDetails}
     * @memberof InventorySummary
     */
    inventoryDetails?: InventoryDetails;
    /**
     * The date and time that any quantity was last updated.
     * @type {string}
     * @memberof InventorySummary
     */
    lastUpdatedTime?: string;
    /**
     * The localized language product title of the item within the specific marketplace.
     * @type {string}
     * @memberof InventorySummary
     */
    productName?: string;
    /**
     * The total number of units in an inbound shipment or in Amazon fulfillment centers.
     * @type {number}
     * @memberof InventorySummary
     */
    totalQuantity?: number;
}


