/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Direct Fulfillment Orders
 * The Selling Partner API for Direct Fulfillment Orders provides programmatic access to a direct fulfillment vendor\'s order data.
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { GiftDetails } from './gift-details';
import { ItemQuantity } from './item-quantity';
import { Money } from './money';
import { OrderItemTaxDetails } from './order-item-tax-details';
import { ScheduledDeliveryShipment } from './scheduled-delivery-shipment';

/**
 * 
 * @export
 * @interface OrderItem
 */
export interface OrderItem {
    /**
     * Numbering of the item on the purchase order. The first item will be 1, the second 2, and so on.
     * @type {string}
     * @memberof OrderItem
     */
    itemSequenceNumber: string;
    /**
     * Buyer\'s standard identification number (ASIN) of an item.
     * @type {string}
     * @memberof OrderItem
     */
    buyerProductIdentifier?: string;
    /**
     * The vendor selected product identification of the item.
     * @type {string}
     * @memberof OrderItem
     */
    vendorProductIdentifier?: string;
    /**
     * Title for the item.
     * @type {string}
     * @memberof OrderItem
     */
    title?: string;
    /**
     * 
     * @type {ItemQuantity}
     * @memberof OrderItem
     */
    orderedQuantity: ItemQuantity;
    /**
     * 
     * @type {ScheduledDeliveryShipment}
     * @memberof OrderItem
     */
    scheduledDeliveryShipment?: ScheduledDeliveryShipment;
    /**
     * 
     * @type {GiftDetails}
     * @memberof OrderItem
     */
    giftDetails?: GiftDetails;
    /**
     * 
     * @type {Money}
     * @memberof OrderItem
     */
    netPrice: Money;
    /**
     * 
     * @type {OrderItemTaxDetails}
     * @memberof OrderItem
     */
    taxDetails?: OrderItemTaxDetails;
    /**
     * 
     * @type {Money}
     * @memberof OrderItem
     */
    totalPrice?: Money;
}


