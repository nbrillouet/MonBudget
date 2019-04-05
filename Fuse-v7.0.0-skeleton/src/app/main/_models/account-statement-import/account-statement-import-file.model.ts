import { ISelect } from "../generics/select.model";
import { OperationDetail } from "../operation-detail.model";
import { ComboSimple, ComboMultiple } from "../generics/combo.model";
import { GMapSearchInfo } from "../g-map.model.";
import { IAccount } from "../account.model";

export interface IAsifGroupByAccounts {
    accounts : IAccount[],
    idImport: number
}

export class AsifTable {
    id: number;
    operation : ISelect;
    operationMethod: ISelect;
    operationType: ISelect;
    operationTypeFamily: ISelect;
    amountOperation : number;
    labelOperation: string;
    dateIntegration: Date;
    idDuplicated: boolean;
    detailRow: boolean;
}

export class AsifDetail {
    id: number;
    operation : ComboSimple<ISelect>;
    operationMethod: ComboSimple<ISelect>;
    operationType: ComboSimple<ISelect>;
    operationTypeFamily: ComboSimple<ISelect>;
    operationPlace: ComboSimple<ISelect>;
    operationTransverse: ComboMultiple<ISelect>;

    amountOperation : number;
    labelOperation: string;
    dateIntegration: Date;
    idDuplicated: boolean;

    idMovement: number;
    logoName: string;
    logoUrl: string;
    operationKeywordTemp: string;
    operationLabelTemp: string;
    placeLabelTemp: string;
    placeKeywordTemp: string;
    isLocalisable: boolean;
    operationDetail: OperationDetail;
    gMapSearchInfo: GMapSearchInfo;
}