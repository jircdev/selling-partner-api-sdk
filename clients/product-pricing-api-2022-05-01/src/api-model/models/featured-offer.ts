/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Pricing
 * The Selling Partner API for Pricing helps you programmatically retrieve product pricing and offer pricing information for Amazon Marketplace products.  For more information, see the [Product Pricing v2022-05-01 Use Case Guide](https://developer-docs.amazon.com/sp-api/docs/product-pricing-api-v2022-05-01-use-case-guide).
 *
 * The version of the OpenAPI document: 2022-05-01
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import { Condition } from './condition';
// May contain unused imports in some cases
// @ts-ignore
import { OfferIdentifier } from './offer-identifier';
// May contain unused imports in some cases
// @ts-ignore
import { Price } from './price';

/**
 * 
 * @export
 * @interface FeaturedOffer
 */
export interface FeaturedOffer {
    /**
     * 
     * @type {OfferIdentifier}
     * @memberof FeaturedOffer
     */
    'offerIdentifier': OfferIdentifier;
    /**
     * 
     * @type {Condition}
     * @memberof FeaturedOffer
     */
    'condition'?: Condition;
    /**
     * 
     * @type {Price}
     * @memberof FeaturedOffer
     */
    'price'?: Price;
}



