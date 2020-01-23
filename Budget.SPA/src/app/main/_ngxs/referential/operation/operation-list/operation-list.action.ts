
export const OPERATION_TABLE_LOAD = 'operation-table-load';
// export const OPERATION_TABLE_LOAD_SUCCESS = 'operation-table-load-success';
export const OPERATION_TABLE_FILTER_CHANGE = 'operation-table-filter-change';
export const OPERATION_TABLE_CLEAR = 'operation-table-clear';

export class LoadOperationTableDatas {
    static readonly type = OPERATION_TABLE_LOAD;
 
    constructor(public payload: any) { }
}

// export class LoadOperationTableDatasSuccess {
//     static readonly type = OPERATION_TABLE_LOAD_SUCCESS;
 
//     constructor(public payload: any) { }
// }

export class ClearOperationTableDatas {
    static readonly type = OPERATION_TABLE_CLEAR;
}