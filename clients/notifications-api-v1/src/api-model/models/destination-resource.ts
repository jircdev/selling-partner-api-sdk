/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Notifications
 * The Selling Partner API for Notifications lets you subscribe to notifications that are relevant to a selling partner\'s business. Using this API you can create a destination to receive notifications, subscribe to notifications, delete notification subscriptions, and more.
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { EventBridgeResource } from './event-bridge-resource';
import { SqsResource } from './sqs-resource';

/**
 * The destination resource types.
 * @export
 * @interface DestinationResource
 */
export interface DestinationResource {
    /**
     * 
     * @type {SqsResource}
     * @memberof DestinationResource
     */
    sqs?: SqsResource;
    /**
     * 
     * @type {EventBridgeResource}
     * @memberof DestinationResource
     */
    eventBridge?: EventBridgeResource;
}


