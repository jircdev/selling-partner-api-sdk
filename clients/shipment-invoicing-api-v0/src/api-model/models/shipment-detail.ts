/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Shipment Invoicing
 * The Selling Partner API for Shipment Invoicing helps you programmatically retrieve shipment invoice information in the Brazil marketplace for a selling partner’s Fulfillment by Amazon (FBA) orders.
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Address } from './address';
import { BuyerTaxInfo } from './buyer-tax-info';
import { ShipmentItem } from './shipment-item';

/**
 * The information required by a selling partner to issue a shipment invoice.
 * @export
 * @interface ShipmentDetail
 */
export interface ShipmentDetail {
    /**
     * The Amazon-defined identifier for the warehouse.
     * @type {string}
     * @memberof ShipmentDetail
     */
    WarehouseId?: string;
    /**
     * The Amazon-defined identifier for the order.
     * @type {string}
     * @memberof ShipmentDetail
     */
    AmazonOrderId?: string;
    /**
     * The Amazon-defined identifier for the shipment.
     * @type {string}
     * @memberof ShipmentDetail
     */
    AmazonShipmentId?: string;
    /**
     * The date and time when the order was created.
     * @type {string}
     * @memberof ShipmentDetail
     */
    PurchaseDate?: string;
    /**
     * 
     * @type {Address}
     * @memberof ShipmentDetail
     */
    ShippingAddress?: Address;
    /**
     * The list of payment method details.
     * @type {Array<string>}
     * @memberof ShipmentDetail
     */
    PaymentMethodDetails?: Array<string>;
    /**
     * The identifier for the marketplace where the order was placed.
     * @type {string}
     * @memberof ShipmentDetail
     */
    MarketplaceId?: string;
    /**
     * The seller identifier.
     * @type {string}
     * @memberof ShipmentDetail
     */
    SellerId?: string;
    /**
     * The name of the buyer.
     * @type {string}
     * @memberof ShipmentDetail
     */
    BuyerName?: string;
    /**
     * The county of the buyer.
     * @type {string}
     * @memberof ShipmentDetail
     */
    BuyerCounty?: string;
    /**
     * 
     * @type {BuyerTaxInfo}
     * @memberof ShipmentDetail
     */
    BuyerTaxInfo?: BuyerTaxInfo;
    /**
     * A list of shipment items.
     * @type {Array<ShipmentItem>}
     * @memberof ShipmentDetail
     */
    ShipmentItems?: Array<ShipmentItem>;
}


