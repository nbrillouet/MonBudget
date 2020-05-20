import { ComboSimple, ComboMultiple } from "../generics/combo.model";
import { ISelect, ISelectCode } from "../generics/select.model";
import { OperationDetail } from "../referential/operation-detail.model";
import { GMapSearchInfo } from "../g-map.model.";
import { IUserForGroup } from "../user.model";
import { EnumOperationMethod } from "app/main/_constants/enum-operation-model.model";

// export class AsDetail {
//     id: number;
//     user: IUserForGroup;
//     operation : ComboSimple<ISelect>;
//     operationMethod: ComboSimple<ISelect>;
//     operationType: ComboSimple<ISelect>;
//     operationTypeFamily: ComboSimple<ISelect>;
//     operationPlace: ComboSimple<ISelect>;
//     operationTransverse: ComboMultiple<ISelect>;

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

export class AsForDetail {
    id: number;
    user: IUserForGroup;
    operation : ISelect;
    operationMethod: ISelect;
    operationType: ISelect;
    operationTypeFamily: ISelect;
    operationPlace: ISelect;
    operationTransverse: ISelect[];

    amountOperation : number;
    labelOperation: string;
    dateIntegration: Date;
    idDuplicated: boolean;

    idMovement: number;
    asset: ISelectCode;

    isLocalisable: boolean;
    operationDetail: OperationDetail;
    gMapSearchInfo: GMapSearchInfo;

    constructor() {
        console.log('build');
    }
}