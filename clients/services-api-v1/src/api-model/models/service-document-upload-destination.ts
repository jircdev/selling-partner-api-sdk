/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Services
 * With the Services API, you can build applications that help service providers get and modify their service orders and manage their resources.
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { EncryptionDetails } from './encryption-details';

/**
 * Information about an upload destination.
 * @export
 * @interface ServiceDocumentUploadDestination
 */
export interface ServiceDocumentUploadDestination {
    /**
     * The unique identifier to be used by APIs that reference the upload destination.
     * @type {string}
     * @memberof ServiceDocumentUploadDestination
     */
    'uploadDestinationId': string;
    /**
     * The URL to which to upload the file.
     * @type {string}
     * @memberof ServiceDocumentUploadDestination
     */
    'url': string;
    /**
     * 
     * @type {EncryptionDetails}
     * @memberof ServiceDocumentUploadDestination
     */
    'encryptionDetails': EncryptionDetails;
    /**
     * The headers to include in the upload request.
     * @type {object}
     * @memberof ServiceDocumentUploadDestination
     */
    'headers'?: object;
}

