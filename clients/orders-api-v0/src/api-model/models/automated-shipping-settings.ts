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



/**
 * Contains information regarding the Shipping Settings Automation program, such as whether the order\'s shipping settings were generated automatically, and what those settings are.
 * @export
 * @interface AutomatedShippingSettings
 */
export interface AutomatedShippingSettings {
    /**
     * If true, this order has automated shipping settings generated by Amazon. This order could be identified as an SSA order.
     * @type {boolean}
     * @memberof AutomatedShippingSettings
     */
    HasAutomatedShippingSettings?: boolean;
    /**
     * Auto-generated carrier for SSA orders.
     * @type {string}
     * @memberof AutomatedShippingSettings
     */
    AutomatedCarrier?: string;
    /**
     * Auto-generated ship method for SSA orders.
     * @type {string}
     * @memberof AutomatedShippingSettings
     */
    AutomatedShipMethod?: string;
}

