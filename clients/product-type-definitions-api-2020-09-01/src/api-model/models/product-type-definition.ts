/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Product Type Definitions
 * The Selling Partner API for Product Type Definitions provides programmatic access to attribute and data requirements for product types in the Amazon catalog. Use this API to return the JSON Schema for a product type that you can then use with other Selling Partner APIs, such as the Selling Partner API for Listings Items, the Selling Partner API for Catalog Items, and the Selling Partner API for Feeds (for JSON-based listing feeds).
 *
 * The version of the OpenAPI document: 2020-09-01
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { ProductTypeVersion } from './product-type-version';
import { PropertyGroup } from './property-group';
import { SchemaLink } from './schema-link';

/**
 * A product type definition represents the attributes and data requirements for a product type in the Amazon catalog. Product type definitions are used interchangeably between the Selling Partner API for Listings Items, Selling Partner API for Catalog Items, and JSON-based listings feeds in the Selling Partner API for Feeds.
 * @export
 * @interface ProductTypeDefinition
 */
export interface ProductTypeDefinition {
    /**
     * 
     * @type {SchemaLink}
     * @memberof ProductTypeDefinition
     */
    metaSchema?: SchemaLink;
    /**
     * 
     * @type {SchemaLink}
     * @memberof ProductTypeDefinition
     */
    schema: SchemaLink;
    /**
     * Name of the requirements set represented in this product type definition.
     * @type {string}
     * @memberof ProductTypeDefinition
     */
    requirements: ProductTypeDefinitionRequirementsEnum;
    /**
     * Identifies if the required attributes for a requirements set are enforced by the product type definition schema. Non-enforced requirements enable structural validation of individual attributes without all of the required attributes being present (such as for partial updates).
     * @type {string}
     * @memberof ProductTypeDefinition
     */
    requirementsEnforced: ProductTypeDefinitionRequirementsEnforcedEnum;
    /**
     * Mapping of property group names to property groups. Property groups represent logical groupings of schema properties that can be used for display or informational purposes.
     * @type {{ [key: string]: PropertyGroup; }}
     * @memberof ProductTypeDefinition
     */
    propertyGroups: { [key: string]: PropertyGroup; };
    /**
     * Locale of the display elements contained in the product type definition.
     * @type {string}
     * @memberof ProductTypeDefinition
     */
    locale: string;
    /**
     * Amazon marketplace identifiers for which the product type definition is applicable.
     * @type {Array<string>}
     * @memberof ProductTypeDefinition
     */
    marketplaceIds: Array<string>;
    /**
     * The name of the Amazon product type that this product type definition applies to.
     * @type {string}
     * @memberof ProductTypeDefinition
     */
    productType: string;
    /**
     * 
     * @type {ProductTypeVersion}
     * @memberof ProductTypeDefinition
     */
    productTypeVersion: ProductTypeVersion;
}

/**
    * @export
    * @enum {string}
    */
export enum ProductTypeDefinitionRequirementsEnum {
    Listing = 'LISTING',
    ListingProductOnly = 'LISTING_PRODUCT_ONLY',
    ListingOfferOnly = 'LISTING_OFFER_ONLY'
}
/**
    * @export
    * @enum {string}
    */
export enum ProductTypeDefinitionRequirementsEnforcedEnum {
    Enforced = 'ENFORCED',
    NotEnforced = 'NOT_ENFORCED'
}



