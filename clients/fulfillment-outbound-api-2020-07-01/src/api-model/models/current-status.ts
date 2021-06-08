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



/**
 * The current delivery status of the package.
 * @export
 * @enum {string}
 */
export enum CurrentStatus {
    InTransit = 'IN_TRANSIT',
    Delivered = 'DELIVERED',
    Returning = 'RETURNING',
    Returned = 'RETURNED',
    Undeliverable = 'UNDELIVERABLE',
    Delayed = 'DELAYED',
    AvailableForPickup = 'AVAILABLE_FOR_PICKUP',
    CustomerAction = 'CUSTOMER_ACTION'
}



