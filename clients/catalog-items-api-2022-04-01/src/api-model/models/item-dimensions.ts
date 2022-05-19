/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Catalog Items
 * The Selling Partner API for Catalog Items provides programmatic access to information about items in the Amazon catalog.  For more information, refer to the [Catalog Items API Use Case Guide](https://developer-docs.amazon.com/sp-api/docs/catalog-items-api-v2022-04-01-use-case-guide).
 *
 * The version of the OpenAPI document: 2022-04-01
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { ItemDimension } from './item-dimension';

/**
 * Dimensions of an Amazon catalog item or item in its packaging.
 * @export
 * @interface ItemDimensions
 */
export interface ItemDimensions {
    /**
     * 
     * @type {ItemDimension}
     * @memberof ItemDimensions
     */
    'height'?: ItemDimension;
    /**
     * 
     * @type {ItemDimension}
     * @memberof ItemDimensions
     */
    'length'?: ItemDimension;
    /**
     * 
     * @type {ItemDimension}
     * @memberof ItemDimensions
     */
    'weight'?: ItemDimension;
    /**
     * 
     * @type {ItemDimension}
     * @memberof ItemDimensions
     */
    'width'?: ItemDimension;
}
