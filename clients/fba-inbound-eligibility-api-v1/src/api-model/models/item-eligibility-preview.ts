/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for FBA Inbound Eligibilty
 * With the FBA Inbound Eligibility API, you can build applications that let sellers get eligibility previews for items before shipping them to Amazon\'s fulfillment centers. With this API you can find out if an item is eligible for inbound shipment to Amazon\'s fulfillment centers in a specific marketplace. You can also find out if an item is eligible for using the manufacturer barcode for FBA inventory tracking. Sellers can use this information to inform their decisions about which items to ship Amazon\'s fulfillment centers.
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * The response object which contains the ASIN, marketplaceId if required, eligibility program, the eligibility status (boolean), and a list of ineligibility reason codes.
 * @export
 * @interface ItemEligibilityPreview
 */
export interface ItemEligibilityPreview {
    /**
     * The ASIN for which eligibility was determined.
     * @type {string}
     * @memberof ItemEligibilityPreview
     */
    asin: string;
    /**
     * The marketplace for which eligibility was determined.
     * @type {string}
     * @memberof ItemEligibilityPreview
     */
    marketplaceId?: string;
    /**
     * The program for which eligibility was determined.
     * @type {string}
     * @memberof ItemEligibilityPreview
     */
    program: ItemEligibilityPreviewProgramEnum;
    /**
     * Indicates if the item is eligible for the program.
     * @type {boolean}
     * @memberof ItemEligibilityPreview
     */
    isEligibleForProgram: boolean;
    /**
     * Potential Ineligibility Reason Codes.
     * @type {Array<string>}
     * @memberof ItemEligibilityPreview
     */
    ineligibilityReasonList?: Array<ItemEligibilityPreviewIneligibilityReasonListEnum>;
}

/**
    * @export
    * @enum {string}
    */
export enum ItemEligibilityPreviewProgramEnum {
    Inbound = 'INBOUND',
    Commingling = 'COMMINGLING'
}
/**
    * @export
    * @enum {string}
    */
export enum ItemEligibilityPreviewIneligibilityReasonListEnum {
    FbaInb0004 = 'FBA_INB_0004',
    FbaInb0006 = 'FBA_INB_0006',
    FbaInb0007 = 'FBA_INB_0007',
    FbaInb0008 = 'FBA_INB_0008',
    FbaInb0009 = 'FBA_INB_0009',
    FbaInb0010 = 'FBA_INB_0010',
    FbaInb0011 = 'FBA_INB_0011',
    FbaInb0012 = 'FBA_INB_0012',
    FbaInb0013 = 'FBA_INB_0013',
    FbaInb0014 = 'FBA_INB_0014',
    FbaInb0015 = 'FBA_INB_0015',
    FbaInb0016 = 'FBA_INB_0016',
    FbaInb0017 = 'FBA_INB_0017',
    FbaInb0018 = 'FBA_INB_0018',
    FbaInb0019 = 'FBA_INB_0019',
    FbaInb0034 = 'FBA_INB_0034',
    FbaInb0035 = 'FBA_INB_0035',
    FbaInb0036 = 'FBA_INB_0036',
    FbaInb0037 = 'FBA_INB_0037',
    FbaInb0038 = 'FBA_INB_0038',
    FbaInb0050 = 'FBA_INB_0050',
    FbaInb0051 = 'FBA_INB_0051',
    FbaInb0053 = 'FBA_INB_0053',
    FbaInb0055 = 'FBA_INB_0055',
    FbaInb0056 = 'FBA_INB_0056',
    FbaInb0059 = 'FBA_INB_0059',
    FbaInb0065 = 'FBA_INB_0065',
    FbaInb0066 = 'FBA_INB_0066',
    FbaInb0067 = 'FBA_INB_0067',
    FbaInb0068 = 'FBA_INB_0068',
    FbaInb0095 = 'FBA_INB_0095',
    FbaInb0097 = 'FBA_INB_0097',
    FbaInb0098 = 'FBA_INB_0098',
    FbaInb0099 = 'FBA_INB_0099',
    FbaInb0100 = 'FBA_INB_0100',
    FbaInb0103 = 'FBA_INB_0103',
    FbaInb0104 = 'FBA_INB_0104',
    UnknownInbErrorCode = 'UNKNOWN_INB_ERROR_CODE'
}



