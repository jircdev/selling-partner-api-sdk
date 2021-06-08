/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner APIs for Fulfillment Outbound
 * The Selling Partner API for Fulfillment Outbound lets you create applications that help a seller fulfill Multi-Channel Fulfillment orders using their inventory in Amazon\'s fulfillment network. You can get information on both potential and existing fulfillment orders.
 *
 * The version of the OpenAPI document: 2020-07-01
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Money } from './money';

/**
 * Item information for creating a fulfillment order.
 * @export
 * @interface CreateFulfillmentOrderItem
 */
export interface CreateFulfillmentOrderItem {
    /**
     * The seller SKU of the item.
     * @type {string}
     * @memberof CreateFulfillmentOrderItem
     */
    sellerSku: string;
    /**
     * A fulfillment order item identifier that the seller creates to track fulfillment order items. Used to disambiguate multiple fulfillment items that have the same SellerSKU. For example, the seller might assign different SellerFulfillmentOrderItemId values to two items in a fulfillment order that share the same SellerSKU but have different GiftMessage values.
     * @type {string}
     * @memberof CreateFulfillmentOrderItem
     */
    sellerFulfillmentOrderItemId: string;
    /**
     * The item quantity.
     * @type {number}
     * @memberof CreateFulfillmentOrderItem
     */
    quantity: number;
    /**
     * A message to the gift recipient, if applicable.
     * @type {string}
     * @memberof CreateFulfillmentOrderItem
     */
    giftMessage?: string;
    /**
     * Item-specific text that displays in recipient-facing materials such as the outbound shipment packing slip.
     * @type {string}
     * @memberof CreateFulfillmentOrderItem
     */
    displayableComment?: string;
    /**
     * Amazon\'s fulfillment network SKU of the item.
     * @type {string}
     * @memberof CreateFulfillmentOrderItem
     */
    fulfillmentNetworkSku?: string;
    /**
     * 
     * @type {Money}
     * @memberof CreateFulfillmentOrderItem
     */
    perUnitDeclaredValue?: Money;
    /**
     * 
     * @type {Money}
     * @memberof CreateFulfillmentOrderItem
     */
    perUnitPrice?: Money;
    /**
     * 
     * @type {Money}
     * @memberof CreateFulfillmentOrderItem
     */
    perUnitTax?: Money;
}


