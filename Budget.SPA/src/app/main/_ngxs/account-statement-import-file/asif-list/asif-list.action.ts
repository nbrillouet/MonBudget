import { FilterAsifTableSelected } from "app/main/_models/filters/account-statement-import-file.filter";

export const ASIF_TABLE_LOAD = 'asif-table-load';
export const ASIF_TABLE_LOAD_SUCCESS = 'asif-table-load-success';
export const ASIF_TABLE_FILTER_CHANGE = 'asif-table-filter-change';
export const ASIF_TABLE_CLEAR = 'asif-table-clear';

export class LoadAsifTableDatas {
    static readonly type = ASIF_TABLE_LOAD;
 
    constructor(public payload: any) { }
}

// export class LoadAsifTableDatasSuccess {
//     static readonly type = ASIF_TABLE_LOAD_SUCCESS;
 
//     constructor(public payload: any) { }
// }

// export class ChangeAsifTableFilter {
//     static readonly type = ASIF_TABLE_FILTER_CHANGE;
 
//     constructor(public payload: FilterAsifTableSelected) { }
// }

export class ClearAsifTableDatas {
    static readonly type = ASIF_TABLE_CLEAR;
    // constructor(public payload: any) { }
}