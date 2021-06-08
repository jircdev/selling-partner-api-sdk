/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Catalog Items
 * The Selling Partner API for Catalog Items helps you programmatically retrieve item details for items in the catalog.
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { CreatorType } from './creator-type';
import { DecimalWithUnits } from './decimal-with-units';
import { DimensionType } from './dimension-type';
import { Image } from './image';
import { LanguageType } from './language-type';
import { Price } from './price';

/**
 * The attributes of the item.
 * @export
 * @interface AttributeSetListType
 */
export interface AttributeSetListType {
    /**
     * The actor attributes of the item.
     * @type {Array<string>}
     * @memberof AttributeSetListType
     */
    Actor?: Array<string>;
    /**
     * The artist attributes of the item.
     * @type {Array<string>}
     * @memberof AttributeSetListType
     */
    Artist?: Array<string>;
    /**
     * The aspect ratio attribute of the item.
     * @type {string}
     * @memberof AttributeSetListType
     */
    AspectRatio?: string;
    /**
     * The audience rating attribute of the item.
     * @type {string}
     * @memberof AttributeSetListType
     */
    AudienceRating?: string;
    /**
     * The author attributes of the item.
     * @type {Array<string>}
     * @memberof AttributeSetListType
     */
    Author?: Array<string>;
    /**
     * The back finding attribute of the item.
     * @type {string}
     * @memberof AttributeSetListType
     */
    BackFinding?: string;
    /**
     * The band material type attribute of the item.
     * @type {string}
     * @memberof AttributeSetListType
     */
    BandMaterialType?: string;
    /**
     * The binding attribute of the item.
     * @type {string}
     * @memberof AttributeSetListType
     */
    Binding?: string;
    /**
     * The Bluray region attribute of the item.
     * @type {string}
     * @memberof AttributeSetListType
     */
    BlurayRegion?: string;
    /**
     * The brand attribute of the item.
     * @type {string}
     * @memberof AttributeSetListType
     */
    Brand?: string;
    /**
     * The CERO age rating attribute of the item.
     * @type {string}
     * @memberof AttributeSetListType
     */
    CeroAgeRating?: string;
    /**
     * The chain type attribute of the item.
     * @type {string}
     * @memberof AttributeSetListType
     */
    ChainType?: string;
    /**
     * The clasp type attribute of the item.
     * @type {string}
     * @memberof AttributeSetListType
     */
    ClaspType?: string;
    /**
     * The color attribute of the item.
     * @type {string}
     * @memberof AttributeSetListType
     */
    Color?: string;
    /**
     * The CPU manufacturer attribute of the item.
     * @type {string}
     * @memberof AttributeSetListType
     */
    CpuManufacturer?: string;
    /**
     * 
     * @type {DecimalWithUnits}
     * @memberof AttributeSetListType
     */
    CpuSpeed?: DecimalWithUnits;
    /**
     * The CPU type attribute of the item.
     * @type {string}
     * @memberof AttributeSetListType
     */
    CpuType?: string;
    /**
     * The creator attributes of the item.
     * @type {Array<CreatorType>}
     * @memberof AttributeSetListType
     */
    Creator?: Array<CreatorType>;
    /**
     * The department attribute of the item.
     * @type {string}
     * @memberof AttributeSetListType
     */
    Department?: string;
    /**
     * The director attributes of the item.
     * @type {Array<string>}
     * @memberof AttributeSetListType
     */
    Director?: Array<string>;
    /**
     * 
     * @type {DecimalWithUnits}
     * @memberof AttributeSetListType
     */
    DisplaySize?: DecimalWithUnits;
    /**
     * The edition attribute of the item.
     * @type {string}
     * @memberof AttributeSetListType
     */
    Edition?: string;
    /**
     * The episode sequence attribute of the item.
     * @type {string}
     * @memberof AttributeSetListType
     */
    EpisodeSequence?: string;
    /**
     * The ESRB age rating attribute of the item.
     * @type {string}
     * @memberof AttributeSetListType
     */
    EsrbAgeRating?: string;
    /**
     * The feature attributes of the item
     * @type {Array<string>}
     * @memberof AttributeSetListType
     */
    Feature?: Array<string>;
    /**
     * The flavor attribute of the item.
     * @type {string}
     * @memberof AttributeSetListType
     */
    Flavor?: string;
    /**
     * The format attributes of the item.
     * @type {Array<string>}
     * @memberof AttributeSetListType
     */
    Format?: Array<string>;
    /**
     * The gem type attributes of the item.
     * @type {Array<string>}
     * @memberof AttributeSetListType
     */
    GemType?: Array<string>;
    /**
     * The genre attribute of the item.
     * @type {string}
     * @memberof AttributeSetListType
     */
    Genre?: string;
    /**
     * The golf club flex attribute of the item.
     * @type {string}
     * @memberof AttributeSetListType
     */
    GolfClubFlex?: string;
    /**
     * 
     * @type {DecimalWithUnits}
     * @memberof AttributeSetListType
     */
    GolfClubLoft?: DecimalWithUnits;
    /**
     * The hand orientation attribute of the item.
     * @type {string}
     * @memberof AttributeSetListType
     */
    HandOrientation?: string;
    /**
     * The hard disk interface attribute of the item.
     * @type {string}
     * @memberof AttributeSetListType
     */
    HardDiskInterface?: string;
    /**
     * 
     * @type {DecimalWithUnits}
     * @memberof AttributeSetListType
     */
    HardDiskSize?: DecimalWithUnits;
    /**
     * The hardware platform attribute of the item.
     * @type {string}
     * @memberof AttributeSetListType
     */
    HardwarePlatform?: string;
    /**
     * The hazardous material type attribute of the item.
     * @type {string}
     * @memberof AttributeSetListType
     */
    HazardousMaterialType?: string;
    /**
     * 
     * @type {DimensionType}
     * @memberof AttributeSetListType
     */
    ItemDimensions?: DimensionType;
    /**
     * The adult product attribute of the item.
     * @type {boolean}
     * @memberof AttributeSetListType
     */
    IsAdultProduct?: boolean;
    /**
     * The autographed attribute of the item.
     * @type {boolean}
     * @memberof AttributeSetListType
     */
    IsAutographed?: boolean;
    /**
     * The is eligible for trade in attribute of the item.
     * @type {boolean}
     * @memberof AttributeSetListType
     */
    IsEligibleForTradeIn?: boolean;
    /**
     * The is memorabilia attribute of the item.
     * @type {boolean}
     * @memberof AttributeSetListType
     */
    IsMemorabilia?: boolean;
    /**
     * The issues per year attribute of the item.
     * @type {string}
     * @memberof AttributeSetListType
     */
    IssuesPerYear?: string;
    /**
     * The item part number attribute of the item.
     * @type {string}
     * @memberof AttributeSetListType
     */
    ItemPartNumber?: string;
    /**
     * The label attribute of the item.
     * @type {string}
     * @memberof AttributeSetListType
     */
    Label?: string;
    /**
     * The languages attribute of the item.
     * @type {Array<LanguageType>}
     * @memberof AttributeSetListType
     */
    Languages?: Array<LanguageType>;
    /**
     * The legal disclaimer attribute of the item.
     * @type {string}
     * @memberof AttributeSetListType
     */
    LegalDisclaimer?: string;
    /**
     * 
     * @type {Price}
     * @memberof AttributeSetListType
     */
    ListPrice?: Price;
    /**
     * The manufacturer attribute of the item.
     * @type {string}
     * @memberof AttributeSetListType
     */
    Manufacturer?: string;
    /**
     * 
     * @type {DecimalWithUnits}
     * @memberof AttributeSetListType
     */
    ManufacturerMaximumAge?: DecimalWithUnits;
    /**
     * 
     * @type {DecimalWithUnits}
     * @memberof AttributeSetListType
     */
    ManufacturerMinimumAge?: DecimalWithUnits;
    /**
     * The manufacturer parts warranty description attribute of the item.
     * @type {string}
     * @memberof AttributeSetListType
     */
    ManufacturerPartsWarrantyDescription?: string;
    /**
     * The material type attributes of the item.
     * @type {Array<string>}
     * @memberof AttributeSetListType
     */
    MaterialType?: Array<string>;
    /**
     * 
     * @type {DecimalWithUnits}
     * @memberof AttributeSetListType
     */
    MaximumResolution?: DecimalWithUnits;
    /**
     * The media type attributes of the item.
     * @type {Array<string>}
     * @memberof AttributeSetListType
     */
    MediaType?: Array<string>;
    /**
     * The metal stamp attribute of the item.
     * @type {string}
     * @memberof AttributeSetListType
     */
    MetalStamp?: string;
    /**
     * The metal type attribute of the item.
     * @type {string}
     * @memberof AttributeSetListType
     */
    MetalType?: string;
    /**
     * The model attribute of the item.
     * @type {string}
     * @memberof AttributeSetListType
     */
    Model?: string;
    /**
     * The number of discs attribute of the item.
     * @type {number}
     * @memberof AttributeSetListType
     */
    NumberOfDiscs?: number;
    /**
     * The number of issues attribute of the item.
     * @type {number}
     * @memberof AttributeSetListType
     */
    NumberOfIssues?: number;
    /**
     * The number of items attribute of the item.
     * @type {number}
     * @memberof AttributeSetListType
     */
    NumberOfItems?: number;
    /**
     * The number of pages attribute of the item.
     * @type {number}
     * @memberof AttributeSetListType
     */
    NumberOfPages?: number;
    /**
     * The number of tracks attribute of the item.
     * @type {number}
     * @memberof AttributeSetListType
     */
    NumberOfTracks?: number;
    /**
     * The operating system attributes of the item.
     * @type {Array<string>}
     * @memberof AttributeSetListType
     */
    OperatingSystem?: Array<string>;
    /**
     * 
     * @type {DecimalWithUnits}
     * @memberof AttributeSetListType
     */
    OpticalZoom?: DecimalWithUnits;
    /**
     * 
     * @type {DimensionType}
     * @memberof AttributeSetListType
     */
    PackageDimensions?: DimensionType;
    /**
     * The package quantity attribute of the item.
     * @type {number}
     * @memberof AttributeSetListType
     */
    PackageQuantity?: number;
    /**
     * The part number attribute of the item.
     * @type {string}
     * @memberof AttributeSetListType
     */
    PartNumber?: string;
    /**
     * The PEGI rating attribute of the item.
     * @type {string}
     * @memberof AttributeSetListType
     */
    PegiRating?: string;
    /**
     * The platform attributes of the item.
     * @type {Array<string>}
     * @memberof AttributeSetListType
     */
    Platform?: Array<string>;
    /**
     * The processor count attribute of the item.
     * @type {number}
     * @memberof AttributeSetListType
     */
    ProcessorCount?: number;
    /**
     * The product group attribute of the item.
     * @type {string}
     * @memberof AttributeSetListType
     */
    ProductGroup?: string;
    /**
     * The product type name attribute of the item.
     * @type {string}
     * @memberof AttributeSetListType
     */
    ProductTypeName?: string;
    /**
     * The product type subcategory attribute of the item.
     * @type {string}
     * @memberof AttributeSetListType
     */
    ProductTypeSubcategory?: string;
    /**
     * The publication date attribute of the item.
     * @type {string}
     * @memberof AttributeSetListType
     */
    PublicationDate?: string;
    /**
     * The publisher attribute of the item.
     * @type {string}
     * @memberof AttributeSetListType
     */
    Publisher?: string;
    /**
     * The region code attribute of the item.
     * @type {string}
     * @memberof AttributeSetListType
     */
    RegionCode?: string;
    /**
     * The release date attribute of the item.
     * @type {string}
     * @memberof AttributeSetListType
     */
    ReleaseDate?: string;
    /**
     * The ring size attribute of the item.
     * @type {string}
     * @memberof AttributeSetListType
     */
    RingSize?: string;
    /**
     * 
     * @type {DecimalWithUnits}
     * @memberof AttributeSetListType
     */
    RunningTime?: DecimalWithUnits;
    /**
     * The shaft material attribute of the item.
     * @type {string}
     * @memberof AttributeSetListType
     */
    ShaftMaterial?: string;
    /**
     * The scent attribute of the item.
     * @type {string}
     * @memberof AttributeSetListType
     */
    Scent?: string;
    /**
     * The season sequence attribute of the item.
     * @type {string}
     * @memberof AttributeSetListType
     */
    SeasonSequence?: string;
    /**
     * The Seikodo product code attribute of the item.
     * @type {string}
     * @memberof AttributeSetListType
     */
    SeikodoProductCode?: string;
    /**
     * The size attribute of the item.
     * @type {string}
     * @memberof AttributeSetListType
     */
    Size?: string;
    /**
     * The size per pearl attribute of the item.
     * @type {string}
     * @memberof AttributeSetListType
     */
    SizePerPearl?: string;
    /**
     * 
     * @type {Image}
     * @memberof AttributeSetListType
     */
    SmallImage?: Image;
    /**
     * The studio attribute of the item.
     * @type {string}
     * @memberof AttributeSetListType
     */
    Studio?: string;
    /**
     * 
     * @type {DecimalWithUnits}
     * @memberof AttributeSetListType
     */
    SubscriptionLength?: DecimalWithUnits;
    /**
     * 
     * @type {DecimalWithUnits}
     * @memberof AttributeSetListType
     */
    SystemMemorySize?: DecimalWithUnits;
    /**
     * The system memory type attribute of the item.
     * @type {string}
     * @memberof AttributeSetListType
     */
    SystemMemoryType?: string;
    /**
     * The theatrical release date attribute of the item.
     * @type {string}
     * @memberof AttributeSetListType
     */
    TheatricalReleaseDate?: string;
    /**
     * The title attribute of the item.
     * @type {string}
     * @memberof AttributeSetListType
     */
    Title?: string;
    /**
     * 
     * @type {DecimalWithUnits}
     * @memberof AttributeSetListType
     */
    TotalDiamondWeight?: DecimalWithUnits;
    /**
     * 
     * @type {DecimalWithUnits}
     * @memberof AttributeSetListType
     */
    TotalGemWeight?: DecimalWithUnits;
    /**
     * The warranty attribute of the item.
     * @type {string}
     * @memberof AttributeSetListType
     */
    Warranty?: string;
    /**
     * 
     * @type {Price}
     * @memberof AttributeSetListType
     */
    WeeeTaxValue?: Price;
}


