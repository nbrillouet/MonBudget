import { IAccount } from "./Account";
import { ISelect } from "./Select";
import { IGMapAddress } from "./GMap";
import { IOperationDetail } from "./operation-detail.model";

export interface IAsifGroupByAccounts {
    accounts : IAccount[],
    idImport: number
}

export interface IAsifState {
    id : number,
    label : string
}

export interface IAsifGrid {
    // id: number;
    // operation : ISelect;
    // operationMethod: ISelect;
    // operationType: ISelect;
    // operationTypeFamily: ISelect;
    // operationPlace: ISelect;
    // amountOperation : number;
    id: number;
    operation : ISelect;
    operationMethod: ISelect;
    operationType: ISelect;
    operationTypeFamily: ISelect;
    // operationPlace: ISelect;
    amountOperation : number;
    labelOperation: string;
    dateIntegration: Date;
    idDuplicated: boolean;
}

// export interface IAsifDetail extends IAsifGrid {
//     idMovement: number;
//     operationKeywordTemp: string;
// }

// export class AsifGrid {
//     id: number;
//     operation : ISelect;
//     operationMethod: ISelect;
//     operationType: ISelect;
//     operationTypeFamily: ISelect;
//     operationPlace: ISelect;
//     amountOperation : number;
//     labelOperation: string;
//     dateIntegration: Date;

// }

export interface IAsifDetail extends IAsifGrid {
    idMovement: number;
    logoName: string;
    operationKeywordTemp: string;
    operationLabelTemp: string;
    placeLabelTemp: string;
    placeKeywordTemp: string;
    isLocalisable: boolean;
    operationDetail: IOperationDetail;
    // gMapAddress: IGMapAddress;
}
