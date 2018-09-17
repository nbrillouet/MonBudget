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