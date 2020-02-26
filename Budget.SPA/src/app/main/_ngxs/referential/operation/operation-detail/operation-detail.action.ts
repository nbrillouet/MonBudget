
export const OPERATION_DETAIL_LOAD = 'operation-detail-load';
export const OPERATION_DETAIL_CLEAR = 'operation-detail-clear';

export class LoadOperationDetail {
    static readonly type = OPERATION_DETAIL_LOAD;
 
    constructor(public payload: number) { }
}

export class ClearOperationDetail {
    static readonly type = OPERATION_DETAIL_CLEAR;
}