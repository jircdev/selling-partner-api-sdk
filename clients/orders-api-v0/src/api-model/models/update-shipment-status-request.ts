/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Orders
 * The Selling Partner API for Orders helps you programmatically retrieve order information. These APIs let you develop fast, flexible, custom applications in areas like order synchronization, order research, and demand-based decision support tools.
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { ShipmentStatus } from './shipment-status';

/**
 * Request to update the status of shipment of an order.
 * @export
 * @interface UpdateShipmentStatusRequest
 */
export interface UpdateShipmentStatusRequest {
    /**
     * the unobfuscated marketplace ID
     * @type {string}
     * @memberof UpdateShipmentStatusRequest
     */
    marketplaceId: string;
    /**
     * 
     * @type {ShipmentStatus}
     * @memberof UpdateShipmentStatusRequest
     */
    shipmentStatus: ShipmentStatus;
    /**
     * the list of order items and quantities when the seller wants to partially update the shipment status of the order
     * @type {Array<object>}
     * @memberof UpdateShipmentStatusRequest
     */
    orderItems?: Array<object>;
}


