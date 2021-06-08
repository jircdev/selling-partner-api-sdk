/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Retail Procurement Payments
 * The Selling Partner API for Retail Procurement Payments provides programmatic access to vendors payments data.
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Address } from './address';
import { TaxRegistrationDetails } from './tax-registration-details';

/**
 * 
 * @export
 * @interface PartyIdentification
 */
export interface PartyIdentification {
    /**
     * Assigned identification for the party.
     * @type {string}
     * @memberof PartyIdentification
     */
    partyId: string;
    /**
     * 
     * @type {Address}
     * @memberof PartyIdentification
     */
    address?: Address;
    /**
     * Tax registration details of the party.
     * @type {Array<TaxRegistrationDetails>}
     * @memberof PartyIdentification
     */
    taxRegistrationDetails?: Array<TaxRegistrationDetails>;
}


