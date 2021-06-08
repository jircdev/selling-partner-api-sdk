/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Feeds
 * The Selling Partner API for Feeds lets you upload data to Amazon on behalf of a selling partner.
 *
 * The version of the OpenAPI document: 2021-06-30
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface CreateFeedSpecification
 */
export interface CreateFeedSpecification {
    /**
     * The feed type.
     * @type {string}
     * @memberof CreateFeedSpecification
     */
    feedType: string;
    /**
     * A list of identifiers for marketplaces that you want the feed to be applied to.
     * @type {Array<string>}
     * @memberof CreateFeedSpecification
     */
    marketplaceIds: Array<string>;
    /**
     * The document identifier returned by the createFeedDocument operation. Upload the feed document contents before calling the createFeed operation.
     * @type {string}
     * @memberof CreateFeedSpecification
     */
    inputFeedDocumentId: string;
    /**
     * Additional options to control the feed. These vary by feed type.
     * @type {{ [key: string]: string; }}
     * @memberof CreateFeedSpecification
     */
    feedOptions?: { [key: string]: string; };
}


