import { OperationForDetail } from "app/main/_models/referential/operation.model";

export const OPERATION_FOR_DETAIL_LOAD = 'operation-for-detail-load';
// export const OPERATION_FOR_DETAIL_LOAD_SUCCESS = 'operaion-for-detail-load-success';
export const OPERATION_FOR_DETAIL_CLEAR = 'operation-for-detail-clear';

export class LoadOperationForDetail {
    static readonly type = OPERATION_FOR_DETAIL_LOAD;
 
    constructor(public payload: number) { }
}

// export class LoadOperationForDetailSuccess {
//     static readonly type = OPERATION_FOR_DETAIL_LOAD_SUCCESS;
 
//     constructor(public payload: OperationForDetail) { }
// }

export class ClearOperationForDetail {
    static readonly type = OPERATION_FOR_DETAIL_CLEAR;
}