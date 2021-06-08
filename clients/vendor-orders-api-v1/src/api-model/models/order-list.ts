/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Retail Procurement Orders
 * The Selling Partner API for Retail Procurement Orders provides programmatic access to vendor orders data.
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Order } from './order';
import { Pagination } from './pagination';

/**
 * 
 * @export
 * @interface OrderList
 */
export interface OrderList {
    /**
     * 
     * @type {Pagination}
     * @memberof OrderList
     */
    pagination?: Pagination;
    /**
     * 
     * @type {Array<Order>}
     * @memberof OrderList
     */
    orders?: Array<Order>;
}


