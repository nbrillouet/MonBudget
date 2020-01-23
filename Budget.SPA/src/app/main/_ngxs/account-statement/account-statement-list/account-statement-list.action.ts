import { FilterAsTableSelected } from "app/main/_models/filters/account-statement.filter";

export const AS_TABLE_LOAD = 'as-table-load';
export const AS_TABLE_LOAD_SUCCESS = 'as-table-load-success';
export const AS_TABLE_CLEAR = 'as-table-clear';

export class LoadAsTableDatas {
    static readonly type = AS_TABLE_LOAD;
 
    constructor(public payload: FilterAsTableSelected) { }
}

// export class LoadAsTableDatasSuccess {
//     static readonly type = AS_TABLE_LOAD_SUCCESS;
 
//     constructor(public payload: any) { }
// }

export class ClearAsTableDatas {
    static readonly type = AS_TABLE_CLEAR;
    // constructor(public payload: any) { }
}