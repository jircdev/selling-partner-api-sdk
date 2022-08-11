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


import { Appointment } from './appointment';
import { AppointmentTime } from './appointment-time';
import { AssociatedItem } from './associated-item';
import { Buyer } from './buyer';
import { ScopeOfWork } from './scope-of-work';
import { Seller } from './seller';
import { ServiceJobProvider } from './service-job-provider';
import { ServiceLocation } from './service-location';

/**
 * The job details of a service.
 * @export
 * @interface ServiceJob
 */
export interface ServiceJob {
    /**
     * The date and time of the creation of the job in ISO 8601 format.
     * @type {string}
     * @memberof ServiceJob
     */
    'createTime'?: string;
    /**
     * Amazon identifier for the service job.
     * @type {string}
     * @memberof ServiceJob
     */
    'serviceJobId'?: string;
    /**
     * The status of the service job.
     * @type {string}
     * @memberof ServiceJob
     */
    'serviceJobStatus'?: ServiceJobServiceJobStatusEnum;
    /**
     * 
     * @type {ScopeOfWork}
     * @memberof ServiceJob
     */
    'scopeOfWork'?: ScopeOfWork;
    /**
     * 
     * @type {Seller}
     * @memberof ServiceJob
     */
    'seller'?: Seller;
    /**
     * 
     * @type {ServiceJobProvider}
     * @memberof ServiceJob
     */
    'serviceJobProvider'?: ServiceJobProvider;
    /**
     * A list of appointment windows preferred by the buyer. Included only if the buyer selected appointment windows when creating the order.
     * @type {Array<AppointmentTime>}
     * @memberof ServiceJob
     */
    'preferredAppointmentTimes'?: Array<AppointmentTime>;
    /**
     * A list of appointments.
     * @type {Array<Appointment>}
     * @memberof ServiceJob
     */
    'appointments'?: Array<Appointment>;
    /**
     * The Amazon-defined identifier for an order placed by the buyer, in 3-7-7 format.
     * @type {string}
     * @memberof ServiceJob
     */
    'serviceOrderId'?: string;
    /**
     * The marketplace identifier.
     * @type {string}
     * @memberof ServiceJob
     */
    'marketplaceId'?: string;
    /**
     * The Amazon-defined identifier for the region scope.
     * @type {string}
     * @memberof ServiceJob
     */
    'storeId'?: string;
    /**
     * 
     * @type {Buyer}
     * @memberof ServiceJob
     */
    'buyer'?: Buyer;
    /**
     * A list of items associated with the service job.
     * @type {Array<AssociatedItem>}
     * @memberof ServiceJob
     */
    'associatedItems'?: Array<AssociatedItem>;
    /**
     * 
     * @type {ServiceLocation}
     * @memberof ServiceJob
     */
    'serviceLocation'?: ServiceLocation;
}

export const ServiceJobServiceJobStatusEnum = {
    NotServiced: 'NOT_SERVICED',
    Cancelled: 'CANCELLED',
    Completed: 'COMPLETED',
    PendingSchedule: 'PENDING_SCHEDULE',
    NotFulfillable: 'NOT_FULFILLABLE',
    Hold: 'HOLD',
    PaymentDeclined: 'PAYMENT_DECLINED'
} as const;

export type ServiceJobServiceJobStatusEnum = typeof ServiceJobServiceJobStatusEnum[keyof typeof ServiceJobServiceJobStatusEnum];


