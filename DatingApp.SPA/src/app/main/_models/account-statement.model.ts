import { ISelect } from "./Select";
import { IGMapAddress } from "./GMap";

export interface IAsGrid {
    id: number;
    operation : ISelect;
    operationMethod: ISelect;
    operationType: ISelect;
    operationTypeFamily: ISelect;
    amountOperation : number;
    labelOperation: string;
    dateIntegration: Date;
    idDuplicated: boolean;
}

export interface IAsDetail extends IAsGrid {
    idMovement: number;
    logoName: string;
    // operationKeywordTemp: string;
    // operationLabelTemp: string;
    // placeLabelTemp: string;
    // placeKeywordTemp: string;
    isLocalisable: boolean;
    gMapAddress: IGMapAddress;
}