import { ISelect } from "./generics/select.model";


export interface IGMapAddress {
    id: number;
    formattedAddress: string;
    lat: number;
    lng: number;
    gMapAdministrativeAreaLevel1: ISelect;
    gMapAdministrativeAreaLevel2: ISelect;
    gMapCountry: ISelect;
    gMapLocality: ISelect;
    gMapNeighborhood: ISelect;
    gMapPostalCode: ISelect;
    gMapRoute: ISelect;
    gMapStreetNumber: ISelect;
    gMapSublocalityLevel1: ISelect;
    gMapSublocalityLevel2: ISelect;
    gMapTypes: ISelect[];
}

export interface IGMapSearchInfo {
    idGMapAddress: number,
    operationPositionSearch: string,
    operationPlaceSearch: string
}

export interface IGeocode {
    results : IGeocodeResult[];
    status: string;
}

export interface IGeocodeResult {
    address_components: IAddressComponent[];
    formatted_address: string;
    geometry: IGeometry;
    placeId: string;
    types: string[];
}

export interface IAddressComponent {
    long_name: string;
    short_name: string;
    types: string[];
}

export interface IGeometry {
    bounds: IBound[];
    location: ICoordinate;
    location_type: string;
    viewport: IBound;
   
}

export interface IBound {
    northeast: ICoordinate;
    southwest: ICoordinate;
}

export interface ICoordinate {
    lat: number;
    lng: number;
}