/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for FBA Inventory
 * The Selling Partner API for FBA Inventory lets you programmatically retrieve information about inventory in Amazon\'s fulfillment network. Today this API is available only in the North America region. In 2021 we plan to release this API in the Europe and Far East regions.
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * The quantity of unfulfillable inventory.
 * @export
 * @interface UnfulfillableQuantity
 */
export interface UnfulfillableQuantity {
    /**
     * The total number of units in Amazon\'s fulfillment network in unsellable condition.
     * @type {number}
     * @memberof UnfulfillableQuantity
     */
    totalUnfulfillableQuantity?: number;
    /**
     * The number of units in customer damaged disposition.
     * @type {number}
     * @memberof UnfulfillableQuantity
     */
    customerDamagedQuantity?: number;
    /**
     * The number of units in warehouse damaged disposition.
     * @type {number}
     * @memberof UnfulfillableQuantity
     */
    warehouseDamagedQuantity?: number;
    /**
     * The number of units in distributor damaged disposition.
     * @type {number}
     * @memberof UnfulfillableQuantity
     */
    distributorDamagedQuantity?: number;
    /**
     * The number of units in carrier damaged disposition.
     * @type {number}
     * @memberof UnfulfillableQuantity
     */
    carrierDamagedQuantity?: number;
    /**
     * The number of units in defective disposition.
     * @type {number}
     * @memberof UnfulfillableQuantity
     */
    defectiveQuantity?: number;
    /**
     * The number of units in expired disposition.
     * @type {number}
     * @memberof UnfulfillableQuantity
     */
    expiredQuantity?: number;
}


