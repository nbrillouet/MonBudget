import { IAccount } from "./account.model";
import { OperationDetail } from "./operation-detail.model";
import { ISelect } from "./generics/select.model";

export interface IAsifGroupByAccounts {
    accounts : IAccount[],
    idImport: number
}

export interface IAsifState {
    id : number,
    label : string
}

export interface IAsifGrid {
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

export interface IAsifDetail extends IAsifGrid {
    idMovement: number;
    logoName: string;
    operationKeywordTemp: string;
    operationLabelTemp: string;
    placeLabelTemp: string;
    placeKeywordTemp: string;
    isLocalisable: boolean;
    operationDetail: OperationDetail;
}
