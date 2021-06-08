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



/**
 * Details of item quantity.
 * @export
 * @interface ItemQuantity
 */
export interface ItemQuantity {
    /**
     * Quantity of units shipped for a specific item at a shipment level. If the item is present only in certain packages or pallets within the shipment, please provide this at the appropriate package or pallet level.
     * @type {number}
     * @memberof ItemQuantity
     */
    amount: number;
    /**
     * Unit of measure for the shipped quantity.
     * @type {string}
     * @memberof ItemQuantity
     */
    unitOfMeasure: string;
}


