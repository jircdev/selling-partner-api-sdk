/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Product Fees
 * The Selling Partner API for Product Fees lets you programmatically retrieve estimated fees for a product. You can then account for those fees in your pricing.
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import { OptionalFulfillmentProgram } from './optional-fulfillment-program';
// May contain unused imports in some cases
// @ts-ignore
import { PriceToEstimateFees } from './price-to-estimate-fees';

/**
 * 
 * @export
 * @interface FeesEstimateRequest
 */
export interface FeesEstimateRequest {
    /**
     * A marketplace identifier.
     * @type {string}
     * @memberof FeesEstimateRequest
     */
    'MarketplaceId': string;
    /**
     * When true, the offer is fulfilled by Amazon.
     * @type {boolean}
     * @memberof FeesEstimateRequest
     */
    'IsAmazonFulfilled'?: boolean;
    /**
     * 
     * @type {PriceToEstimateFees}
     * @memberof FeesEstimateRequest
     */
    'PriceToEstimateFees': PriceToEstimateFees;
    /**
     * A unique identifier provided by the caller to track this request.
     * @type {string}
     * @memberof FeesEstimateRequest
     */
    'Identifier': string;
    /**
     * 
     * @type {OptionalFulfillmentProgram}
     * @memberof FeesEstimateRequest
     */
    'OptionalFulfillmentProgram'?: OptionalFulfillmentProgram;
}

