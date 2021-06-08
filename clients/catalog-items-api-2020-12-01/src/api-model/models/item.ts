/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Catalog Items
 * The Selling Partner API for Catalog Items provides programmatic access to information about items in the Amazon catalog.
 *
 * The version of the OpenAPI document: 2020-12-01
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { ItemIdentifiersByMarketplace } from './item-identifiers-by-marketplace';
import { ItemImagesByMarketplace } from './item-images-by-marketplace';
import { ItemProductTypeByMarketplace } from './item-product-type-by-marketplace';
import { ItemSalesRanksByMarketplace } from './item-sales-ranks-by-marketplace';
import { ItemSummaryByMarketplace } from './item-summary-by-marketplace';
import { ItemVariationsByMarketplace } from './item-variations-by-marketplace';
import { ItemVendorDetailsByMarketplace } from './item-vendor-details-by-marketplace';

/**
 * An item in the Amazon catalog.
 * @export
 * @interface Item
 */
export interface Item {
    /**
     * Amazon Standard Identification Number (ASIN) is the unique identifier for an item in the Amazon catalog.
     * @type {string}
     * @memberof Item
     */
    asin: string;
    /**
     * A JSON object that contains structured item attribute data keyed by attribute name. Catalog item attributes are available only to brand owners and conform to the related product type definitions available in the Selling Partner API for Product Type Definitions.
     * @type {object}
     * @memberof Item
     */
    attributes?: object;
    /**
     * Identifiers associated with the item in the Amazon catalog, such as UPC and EAN identifiers.
     * @type {Array<ItemIdentifiersByMarketplace>}
     * @memberof Item
     */
    identifiers?: Array<ItemIdentifiersByMarketplace>;
    /**
     * Images for an item in the Amazon catalog. All image variants are provided to brand owners. Otherwise, a thumbnail of the \"MAIN\" image variant is provided.
     * @type {Array<ItemImagesByMarketplace>}
     * @memberof Item
     */
    images?: Array<ItemImagesByMarketplace>;
    /**
     * Product types associated with the Amazon catalog item.
     * @type {Array<ItemProductTypeByMarketplace>}
     * @memberof Item
     */
    productTypes?: Array<ItemProductTypeByMarketplace>;
    /**
     * Sales ranks of an Amazon catalog item.
     * @type {Array<ItemSalesRanksByMarketplace>}
     * @memberof Item
     */
    salesRanks?: Array<ItemSalesRanksByMarketplace>;
    /**
     * Summary details of an Amazon catalog item.
     * @type {Array<ItemSummaryByMarketplace>}
     * @memberof Item
     */
    summaries?: Array<ItemSummaryByMarketplace>;
    /**
     * Variation details by marketplace for an Amazon catalog item (variation relationships).
     * @type {Array<ItemVariationsByMarketplace>}
     * @memberof Item
     */
    variations?: Array<ItemVariationsByMarketplace>;
    /**
     * Vendor details associated with an Amazon catalog item. Vendor details are available to vendors only.
     * @type {Array<ItemVendorDetailsByMarketplace>}
     * @memberof Item
     */
    vendorDetails?: Array<ItemVendorDetailsByMarketplace>;
}


