import { FilterAsiTableSelected } from "app/main/_models/filters/account-statement-import.filter";

export const ASI_TABLE_LOAD = 'asi-table-load';
// export const ASI_TABLE_LOAD_SUCCESS = 'asi-table-load-success';
export const ASI_TABLE_FILTER_CHANGE = 'asi-table-filter-change';
export const ASI_TABLE_CLEAR = 'asi-table-clear';

export class LoadAsiTableDatas {
    static readonly type = ASI_TABLE_LOAD;
 
    constructor(public payload: FilterAsiTableSelected) { }
}

// export class LoadAsiTableDatasSuccess {
//     static readonly type = ASI_TABLE_LOAD_SUCCESS;
 
//     constructor(public payload: any) { }
// }

// export class ChangeAsiTableFilter {
//     static readonly type = ASI_TABLE_FILTER_CHANGE;
 
//     constructor(public payload: FilterAsiTableSelected) { }
// }

export class ClearAsiTableDatas {
    static readonly type = ASI_TABLE_CLEAR;
    // constructor(public payload: any) { }
}