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


import { AllowanceDetails } from './allowance-details';
import { ChargeDetails } from './charge-details';
import { CreditNoteDetails } from './credit-note-details';
import { ItemQuantity } from './item-quantity';
import { Money } from './money';
import { TaxDetails } from './tax-details';

/**
 * Details of the item being invoiced.
 * @export
 * @interface InvoiceItem
 */
export interface InvoiceItem {
    /**
     * Unique number related to this line item.
     * @type {number}
     * @memberof InvoiceItem
     */
    itemSequenceNumber: number;
    /**
     * Amazon Standard Identification Number (ASIN) of an item.
     * @type {string}
     * @memberof InvoiceItem
     */
    amazonProductIdentifier?: string;
    /**
     * The vendor selected product identifier of the item. Should be the same as was provided in the purchase order.
     * @type {string}
     * @memberof InvoiceItem
     */
    vendorProductIdentifier?: string;
    /**
     * 
     * @type {ItemQuantity}
     * @memberof InvoiceItem
     */
    invoicedQuantity: ItemQuantity;
    /**
     * 
     * @type {Money}
     * @memberof InvoiceItem
     */
    netCost: Money;
    /**
     * The Amazon purchase order number for this invoiced line item. Formatting Notes: 8-character alpha-numeric code. This value is mandatory only when invoiceType is Invoice, and is not required when invoiceType is CreditNote.
     * @type {string}
     * @memberof InvoiceItem
     */
    purchaseOrderNumber?: string;
    /**
     * HSN Tax code. The HSN number cannot contain alphabets.
     * @type {string}
     * @memberof InvoiceItem
     */
    hsnCode?: string;
    /**
     * 
     * @type {CreditNoteDetails}
     * @memberof InvoiceItem
     */
    creditNoteDetails?: CreditNoteDetails;
    /**
     * Individual tax details per line item.
     * @type {Array<TaxDetails>}
     * @memberof InvoiceItem
     */
    taxDetails?: Array<TaxDetails>;
    /**
     * Individual charge details per line item.
     * @type {Array<ChargeDetails>}
     * @memberof InvoiceItem
     */
    chargeDetails?: Array<ChargeDetails>;
    /**
     * Individual allowance details per line item.
     * @type {Array<AllowanceDetails>}
     * @memberof InvoiceItem
     */
    allowanceDetails?: Array<AllowanceDetails>;
}


