
import { IOperationDetail, OperationDetail } from "./operation-detail.model";
import { ISelect, ISelectColor } from "./generics/select.model";
import { ComboSimple, ComboMultiple } from "./generics/combo.model";
import { GMapSearchInfo } from "./g-map.model.";


export interface IAsTable {
    id: number;
    operation : ISelect;
    operationMethod: ISelect;
    operationType: ISelect;
    operationTypeFamily: ISelect;
    amountOperation : number;
    labelOperation: string;
    dateIntegration: Date;
    idDuplicated: boolean;
    plans: ISelectColor[];
}

export class AsTable implements IAsTable {
    id: number;
    operation : ISelect;
    operationMethod: ISelect;
    operationType: ISelect;
    operationTypeFamily: ISelect;
    amountOperation : number;
    labelOperation: string;
    dateIntegration: Date;
    idDuplicated: boolean;
    plans: ISelectColor[];
}

export class AsDetail {
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
    // operationKeywordTemp: string;
    // operationLabelTemp: string;
    // placeLabelTemp: string;
    // placeKeywordTemp: string;
    isLocalisable: boolean;
    operationDetail: OperationDetail;
    gMapSearchInfo: GMapSearchInfo;
}

// export interface IAsDetail extends IAsTable {
//     idMovement: number;
//     logoName: string;
//     isLocalisable: boolean;
//     operationDetail: IOperationDetail;
// }


// export interface ITableInfo<T> {
//     dataInfos :  dataInfos<T>,
//     filter: AsFilter
//     // pagination: IPagination
//     // loadingInfo : LoadingInfo
// }





export class AsSolde {
    // id: number;
    // idAccount: number;
    // dateStart: Date;
    // dateEnd: Date;
    credit: number;
    debit: number;
    total: number;
    solde: number;
    // isWithItTransfer: boolean;

}
