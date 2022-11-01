/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Fulfillment Inbound
 * The Selling Partner API for Fulfillment Inbound lets you create applications that create and update inbound shipments of inventory to Amazon\'s fulfillment network.
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
import { PrepDetails } from './prep-details';

/**
 * Item information for an inbound shipment. Submitted with a call to the createInboundShipment or updateInboundShipment operation.
 * @export
 * @interface InboundShipmentItem
 */
export interface InboundShipmentItem {
    /**
     * A shipment identifier originally returned by the createInboundShipmentPlan operation.
     * @type {string}
     * @memberof InboundShipmentItem
     */
    'ShipmentId'?: string;
    /**
     * The seller SKU of the item.
     * @type {string}
     * @memberof InboundShipmentItem
     */
    'SellerSKU': string;
    /**
     * Amazon\'s fulfillment network SKU of the item.
     * @type {string}
     * @memberof InboundShipmentItem
     */
    'FulfillmentNetworkSKU'?: string;
    /**
     * The item quantity.
     * @type {number}
     * @memberof InboundShipmentItem
     */
    'QuantityShipped': number;
    /**
     * The item quantity.
     * @type {number}
     * @memberof InboundShipmentItem
     */
    'QuantityReceived'?: number;
    /**
     * The item quantity.
     * @type {number}
     * @memberof InboundShipmentItem
     */
    'QuantityInCase'?: number;
    /**
     * 
     * @type {string}
     * @memberof InboundShipmentItem
     */
    'ReleaseDate'?: string;
    /**
     * A list of preparation instructions and who is responsible for that preparation.
     * @type {Array<PrepDetails>}
     * @memberof InboundShipmentItem
     */
    'PrepDetailsList'?: Array<PrepDetails>;
}

