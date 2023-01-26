/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Orders
 * The Selling Partner API for Orders helps you programmatically retrieve order information. These APIs let you develop fast, flexible, custom applications in areas like order synchronization, order research, and demand-based decision support tools.
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
import { OrderItemApprovalRequest } from './order-item-approval-request';

/**
 * The request body for the updateOrderItemsApprovals operation.
 * @export
 * @interface UpdateOrderApprovalsRequest
 */
export interface UpdateOrderApprovalsRequest {
    /**
     * Person or system that triggers the approval actions on behalf of the actor.
     * @type {string}
     * @memberof UpdateOrderApprovalsRequest
     */
    'Approver'?: string;
    /**
     * A list of item approval requests.
     * @type {Array<OrderItemApprovalRequest>}
     * @memberof UpdateOrderApprovalsRequest
     */
    'OrderItemsApprovalRequests': Array<OrderItemApprovalRequest>;
}
