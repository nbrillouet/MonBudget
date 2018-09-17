import { ISelect } from "./Select";

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