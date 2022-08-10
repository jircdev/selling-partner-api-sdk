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


import { Address } from './address';
import { AutomatedShippingSettings } from './automated-shipping-settings';
import { BuyerInfo } from './buyer-info';
import { BuyerTaxInformation } from './buyer-tax-information';
import { EasyShipShipmentStatus } from './easy-ship-shipment-status';
import { ElectronicInvoiceStatus } from './electronic-invoice-status';
import { FulfillmentInstruction } from './fulfillment-instruction';
import { MarketplaceTaxInfo } from './marketplace-tax-info';
import { Money } from './money';
import { PaymentExecutionDetailItem } from './payment-execution-detail-item';

/**
 * Order information.
 * @export
 * @interface Order
 */
export interface Order {
    /**
     * An Amazon-defined order identifier, in 3-7-7 format.
     * @type {string}
     * @memberof Order
     */
    'AmazonOrderId': string;
    /**
     * A seller-defined order identifier.
     * @type {string}
     * @memberof Order
     */
    'SellerOrderId'?: string;
    /**
     * The date when the order was created.
     * @type {string}
     * @memberof Order
     */
    'PurchaseDate': string;
    /**
     * The date when the order was last updated.  __Note__: LastUpdateDate is returned with an incorrect date for orders that were last updated before 2009-04-01.
     * @type {string}
     * @memberof Order
     */
    'LastUpdateDate': string;
    /**
     * The current order status.
     * @type {string}
     * @memberof Order
     */
    'OrderStatus': OrderOrderStatusEnum;
    /**
     * Whether the order was fulfilled by Amazon (AFN) or by the seller (MFN).
     * @type {string}
     * @memberof Order
     */
    'FulfillmentChannel'?: OrderFulfillmentChannelEnum;
    /**
     * The sales channel of the first item in the order.
     * @type {string}
     * @memberof Order
     */
    'SalesChannel'?: string;
    /**
     * The order channel of the first item in the order.
     * @type {string}
     * @memberof Order
     */
    'OrderChannel'?: string;
    /**
     * The shipment service level of the order.
     * @type {string}
     * @memberof Order
     */
    'ShipServiceLevel'?: string;
    /**
     * 
     * @type {Money}
     * @memberof Order
     */
    'OrderTotal'?: Money;
    /**
     * The number of items shipped.
     * @type {number}
     * @memberof Order
     */
    'NumberOfItemsShipped'?: number;
    /**
     * The number of items unshipped.
     * @type {number}
     * @memberof Order
     */
    'NumberOfItemsUnshipped'?: number;
    /**
     * A list of payment execution detail items.
     * @type {Array<PaymentExecutionDetailItem>}
     * @memberof Order
     */
    'PaymentExecutionDetail'?: Array<PaymentExecutionDetailItem>;
    /**
     * The payment method for the order. This property is limited to Cash On Delivery (COD) and Convenience Store (CVS) payment methods. Unless you need the specific COD payment information provided by the PaymentExecutionDetailItem object, we recommend using the PaymentMethodDetails property to get payment method information.
     * @type {string}
     * @memberof Order
     */
    'PaymentMethod'?: OrderPaymentMethodEnum;
    /**
     * A list of payment method detail items.
     * @type {Array<string>}
     * @memberof Order
     */
    'PaymentMethodDetails'?: Array<string>;
    /**
     * The identifier for the marketplace where the order was placed.
     * @type {string}
     * @memberof Order
     */
    'MarketplaceId'?: string;
    /**
     * The shipment service level category of the order.  Possible values: Expedited, FreeEconomy, NextDay, SameDay, SecondDay, Scheduled, Standard.
     * @type {string}
     * @memberof Order
     */
    'ShipmentServiceLevelCategory'?: string;
    /**
     * 
     * @type {EasyShipShipmentStatus}
     * @memberof Order
     */
    'EasyShipShipmentStatus'?: EasyShipShipmentStatus;
    /**
     * Custom ship label for Checkout by Amazon (CBA).
     * @type {string}
     * @memberof Order
     */
    'CbaDisplayableShippingLabel'?: string;
    /**
     * The type of the order.
     * @type {string}
     * @memberof Order
     */
    'OrderType'?: OrderOrderTypeEnum;
    /**
     * The start of the time period within which you have committed to ship the order. In ISO 8601 date time format. Returned only for seller-fulfilled orders.  __Note__: EarliestShipDate might not be returned for orders placed before February 1, 2013.
     * @type {string}
     * @memberof Order
     */
    'EarliestShipDate'?: string;
    /**
     * The end of the time period within which you have committed to ship the order. In ISO 8601 date time format. Returned only for seller-fulfilled orders.  __Note__: LatestShipDate might not be returned for orders placed before February 1, 2013.
     * @type {string}
     * @memberof Order
     */
    'LatestShipDate'?: string;
    /**
     * The start of the time period within which you have committed to fulfill the order. In ISO 8601 date time format. Returned only for seller-fulfilled orders.
     * @type {string}
     * @memberof Order
     */
    'EarliestDeliveryDate'?: string;
    /**
     * The end of the time period within which you have committed to fulfill the order. In ISO 8601 date time format. Returned only for seller-fulfilled orders that do not have a PendingAvailability, Pending, or Canceled status.
     * @type {string}
     * @memberof Order
     */
    'LatestDeliveryDate'?: string;
    /**
     * When true, the order is an Amazon Business order. An Amazon Business order is an order where the buyer is a Verified Business Buyer.
     * @type {boolean}
     * @memberof Order
     */
    'IsBusinessOrder'?: boolean;
    /**
     * When true, the order is a seller-fulfilled Amazon Prime order.
     * @type {boolean}
     * @memberof Order
     */
    'IsPrime'?: boolean;
    /**
     * When true, the order has a Premium Shipping Service Level Agreement. For more information about Premium Shipping orders, see \"Premium Shipping Options\" in the Seller Central Help for your marketplace.
     * @type {boolean}
     * @memberof Order
     */
    'IsPremiumOrder'?: boolean;
    /**
     * When true, the order is a GlobalExpress order.
     * @type {boolean}
     * @memberof Order
     */
    'IsGlobalExpressEnabled'?: boolean;
    /**
     * The order ID value for the order that is being replaced. Returned only if IsReplacementOrder = true.
     * @type {string}
     * @memberof Order
     */
    'ReplacedOrderId'?: string;
    /**
     * When true, this is a replacement order.
     * @type {boolean}
     * @memberof Order
     */
    'IsReplacementOrder'?: boolean;
    /**
     * Indicates the date by which the seller must respond to the buyer with an estimated ship date. Returned only for Sourcing on Demand orders.
     * @type {string}
     * @memberof Order
     */
    'PromiseResponseDueDate'?: string;
    /**
     * When true, the estimated ship date is set for the order. Returned only for Sourcing on Demand orders.
     * @type {boolean}
     * @memberof Order
     */
    'IsEstimatedShipDateSet'?: boolean;
    /**
     * When true, the item within this order was bought and re-sold by Amazon Business EU SARL (ABEU). By buying and instantly re-selling your items, ABEU becomes the seller of record, making your inventory available for sale to customers who would not otherwise purchase from a third-party seller.
     * @type {boolean}
     * @memberof Order
     */
    'IsSoldByAB'?: boolean;
    /**
     * When true, the item within this order was bought and re-sold by Amazon Business EU SARL (ABEU). By buying and instantly re-selling your items, ABEU becomes the seller of record, making your inventory available for sale to customers who would not otherwise purchase from a third-party seller.
     * @type {boolean}
     * @memberof Order
     */
    'IsIBA'?: boolean;
    /**
     * 
     * @type {Address}
     * @memberof Order
     */
    'DefaultShipFromLocationAddress'?: Address;
    /**
     * The buyer\'s invoicing preference. Available only in the TR marketplace.
     * @type {string}
     * @memberof Order
     */
    'BuyerInvoicePreference'?: OrderBuyerInvoicePreferenceEnum;
    /**
     * 
     * @type {BuyerTaxInformation}
     * @memberof Order
     */
    'BuyerTaxInformation'?: BuyerTaxInformation;
    /**
     * 
     * @type {FulfillmentInstruction}
     * @memberof Order
     */
    'FulfillmentInstruction'?: FulfillmentInstruction;
    /**
     * When true, this order is marked to be picked up from a store rather than delivered.
     * @type {boolean}
     * @memberof Order
     */
    'IsISPU'?: boolean;
    /**
     * When true, this order is marked to be delivered to an Access Point. The access location is chosen by the customer. Access Points include Amazon Hub Lockers, Amazon Hub Counters, and pickup points operated by carriers.
     * @type {boolean}
     * @memberof Order
     */
    'IsAccessPointOrder'?: boolean;
    /**
     * 
     * @type {MarketplaceTaxInfo}
     * @memberof Order
     */
    'MarketplaceTaxInfo'?: MarketplaceTaxInfo;
    /**
     * The seller’s friendly name registered in the marketplace.
     * @type {string}
     * @memberof Order
     */
    'SellerDisplayName'?: string;
    /**
     * 
     * @type {Address}
     * @memberof Order
     */
    'ShippingAddress'?: Address;
    /**
     * 
     * @type {BuyerInfo}
     * @memberof Order
     */
    'BuyerInfo'?: BuyerInfo;
    /**
     * 
     * @type {AutomatedShippingSettings}
     * @memberof Order
     */
    'AutomatedShippingSettings'?: AutomatedShippingSettings;
    /**
     * Whether the order contains regulated items which may require additional approval steps before being fulfilled.
     * @type {boolean}
     * @memberof Order
     */
    'HasRegulatedItems'?: boolean;
    /**
     * 
     * @type {ElectronicInvoiceStatus}
     * @memberof Order
     */
    'ElectronicInvoiceStatus'?: ElectronicInvoiceStatus;
}

export const OrderOrderStatusEnum = {
    Pending: 'Pending',
    Unshipped: 'Unshipped',
    PartiallyShipped: 'PartiallyShipped',
    Shipped: 'Shipped',
    Canceled: 'Canceled',
    Unfulfillable: 'Unfulfillable',
    InvoiceUnconfirmed: 'InvoiceUnconfirmed',
    PendingAvailability: 'PendingAvailability'
} as const;

export type OrderOrderStatusEnum = typeof OrderOrderStatusEnum[keyof typeof OrderOrderStatusEnum];
export const OrderFulfillmentChannelEnum = {
    Mfn: 'MFN',
    Afn: 'AFN'
} as const;

export type OrderFulfillmentChannelEnum = typeof OrderFulfillmentChannelEnum[keyof typeof OrderFulfillmentChannelEnum];
export const OrderPaymentMethodEnum = {
    Cod: 'COD',
    Cvs: 'CVS',
    Other: 'Other'
} as const;

export type OrderPaymentMethodEnum = typeof OrderPaymentMethodEnum[keyof typeof OrderPaymentMethodEnum];
export const OrderOrderTypeEnum = {
    StandardOrder: 'StandardOrder',
    LongLeadTimeOrder: 'LongLeadTimeOrder',
    Preorder: 'Preorder',
    BackOrder: 'BackOrder',
    SourcingOnDemandOrder: 'SourcingOnDemandOrder'
} as const;

export type OrderOrderTypeEnum = typeof OrderOrderTypeEnum[keyof typeof OrderOrderTypeEnum];
export const OrderBuyerInvoicePreferenceEnum = {
    Individual: 'INDIVIDUAL',
    Business: 'BUSINESS'
} as const;

export type OrderBuyerInvoicePreferenceEnum = typeof OrderBuyerInvoicePreferenceEnum[keyof typeof OrderBuyerInvoicePreferenceEnum];


