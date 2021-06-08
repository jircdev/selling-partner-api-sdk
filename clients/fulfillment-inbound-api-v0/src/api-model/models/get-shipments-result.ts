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


import { InboundShipmentInfo } from './inbound-shipment-info';

/**
 * 
 * @export
 * @interface GetShipmentsResult
 */
export interface GetShipmentsResult {
    /**
     * A list of inbound shipment information.
     * @type {Array<InboundShipmentInfo>}
     * @memberof GetShipmentsResult
     */
    ShipmentData?: Array<InboundShipmentInfo>;
    /**
     * When present and not empty, pass this string token in the next request to return the next response page.
     * @type {string}
     * @memberof GetShipmentsResult
     */
    NextToken?: string;
}


