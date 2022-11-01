/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Feeds
 * The Selling Partner API for Feeds lets you upload data to Amazon on behalf of a selling partner.
 *
 * The version of the OpenAPI document: 2020-09-04
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import { Feed } from './feed';

/**
 * Response schema.
 * @export
 * @interface GetFeedResponse
 */
export interface GetFeedResponse {
    /**
     * 
     * @type {Feed}
     * @memberof GetFeedResponse
     */
    'payload'?: Feed;
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @type {Array<Error>}
     * @memberof GetFeedResponse
     */
    'errors'?: Array<Error>;
}

