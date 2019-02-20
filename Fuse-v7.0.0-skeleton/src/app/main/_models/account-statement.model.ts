
import { IOperationDetail } from "./operation-detail.model";
import { ISelect, ISelectColor } from "./generics/select.model";


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

export interface AsTable extends IAsTable {
    // id: number;
    // operation : ISelect;
    // operationMethod: ISelect;
    // operationType: ISelect;
    // operationTypeFamily: ISelect;
    // amountOperation : number;
    // labelOperation: string;
    // dateIntegration: Date;
    // idDuplicated: boolean;
}

export interface IAsDetail extends IAsTable {
    idMovement: number;
    logoName: string;
    isLocalisable: boolean;
    operationDetail: IOperationDetail;
}


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
