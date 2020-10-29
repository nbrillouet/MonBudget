import { ISelect, ISelectCode } from "../generics/select.model";
import { OperationDetail } from "../referential/operation-detail.model";
import { ComboSimple, ComboMultiple } from "../generics/combo.model";
import { GMapSearchInfo } from "../g-map.model.";
import { IUserForGroup } from "../user.model";
import { IAccount } from "../referential/account.model";
import { AsForDetail } from "../account-statement/account-statement-detail.model";

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

export class AsifForDetail extends AsForDetail {
    operationKeywordTemp: string;
    operationLabelTemp: string;
    placeLabelTemp: string;
    placeKeywordTemp: string;
}

// export class AsForDetail {
//     id: number;
//     user: IUserForGroup;
//     operation : ISelect;
//     operationMethod: ISelect;
//     operationType: ISelect;
//     operationTypeFamily: ISelect;
//     operationPlace: ISelect;
//     operationTransverse: ISelect[];

//     amountOperation : number;
//     labelOperation: string;
//     dateIntegration: Date;
//     idDuplicated: boolean;

//     idMovement: number;
//     asset: ISelectCode;

//     isLocalisable: boolean;
//     operationDetail: OperationDetail;
//     gMapSearchInfo: GMapSearchInfo;
// }

export class AsifDetail {
    id: number;
    user: IUserForGroup;
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
    asset: ISelectCode;

    isLocalisable: boolean;
    operationDetail: OperationDetail;
    gMapSearchInfo: GMapSearchInfo;

    operationKeywordTemp: string;
    operationLabelTemp: string;
    placeLabelTemp: string;
    placeKeywordTemp: string;

}

