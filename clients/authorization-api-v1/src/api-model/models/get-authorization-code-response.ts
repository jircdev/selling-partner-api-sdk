/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Authorization
 * The Selling Partner API for Authorization helps developers manage authorizations and check the specific permissions associated with a given authorization.
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { AuthorizationCode } from './authorization-code';

/**
 * The response schema for the GetAuthorizationCode operation.
 * @export
 * @interface GetAuthorizationCodeResponse
 */
export interface GetAuthorizationCodeResponse {
    /**
     * 
     * @type {AuthorizationCode}
     * @memberof GetAuthorizationCodeResponse
     */
    payload?: AuthorizationCode;
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @type {Array<Error>}
     * @memberof GetAuthorizationCodeResponse
     */
    errors?: Array<Error>;
}


