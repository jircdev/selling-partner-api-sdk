/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Services
 * With the Services API, you can build applications that help service providers get and modify their service orders.
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { JobListing } from './job-listing';

/**
 * Response schema for GetJobs operation.
 * @export
 * @interface GetServiceJobsResponse
 */
export interface GetServiceJobsResponse {
    /**
     * 
     * @type {JobListing}
     * @memberof GetServiceJobsResponse
     */
    payload?: JobListing;
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @type {Array<Error>}
     * @memberof GetServiceJobsResponse
     */
    errors?: Array<Error>;
}


