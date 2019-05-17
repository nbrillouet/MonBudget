import { ComboSimple, ComboMultiple } from "../generics/combo.model";
import { ISelect } from "../generics/select.model";
import { OperationDetail } from "../referential/operation-detail.model";
import { GMapSearchInfo } from "../g-map.model.";
import { IUserForGroup } from "../user.model";

export class AsDetail {
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
    logoName: string;
    logoUrl: string;

    isLocalisable: boolean;
    operationDetail: OperationDetail;
    gMapSearchInfo: GMapSearchInfo;
}