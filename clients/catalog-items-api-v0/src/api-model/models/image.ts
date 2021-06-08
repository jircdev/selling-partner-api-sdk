/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Catalog Items
 * The Selling Partner API for Catalog Items helps you programmatically retrieve item details for items in the catalog.
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { DecimalWithUnits } from './decimal-with-units';

/**
 * The image attribute of the item.
 * @export
 * @interface Image
 */
export interface Image {
    /**
     * The image URL attribute of the item.
     * @type {string}
     * @memberof Image
     */
    URL?: string;
    /**
     * 
     * @type {DecimalWithUnits}
     * @memberof Image
     */
    Height?: DecimalWithUnits;
    /**
     * 
     * @type {DecimalWithUnits}
     * @memberof Image
     */
    Width?: DecimalWithUnits;
}


