/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Finances
 * The Selling Partner API for Finances helps you obtain financial information relevant to a seller\'s business. You can obtain financial events for a given order, financial event group, or date range without having to wait until a statement period closes. You can also obtain financial event groups for a given date range.
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { ListFinancialEventGroupsPayload } from './list-financial-event-groups-payload';

/**
 * The response schema for the listFinancialEventGroups operation.
 * @export
 * @interface ListFinancialEventGroupsResponse
 */
export interface ListFinancialEventGroupsResponse {
    /**
     * 
     * @type {ListFinancialEventGroupsPayload}
     * @memberof ListFinancialEventGroupsResponse
     */
    payload?: ListFinancialEventGroupsPayload;
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @type {Array<Error>}
     * @memberof ListFinancialEventGroupsResponse
     */
    errors?: Array<Error>;
}


