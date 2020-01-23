export const USER_TABLE_LOAD = 'user-table-load';
// export const USER_TABLE_LOAD_SUCCESS = 'user-table-load-success';
export const USER_TABLE_FILTER_CHANGE = 'user-table-filter-change';
export const USER_TABLE_CLEAR = 'user-table-clear';

export class LoadUserTableDatas {
    static readonly type = USER_TABLE_LOAD;
 
    constructor(public payload: any) { }
}

// export class LoadUserTableDatasSuccess {
//     static readonly type = USER_TABLE_LOAD_SUCCESS;
 
//     constructor(public payload: any) { }
// }

export class ClearUserTableDatas {
    static readonly type = USER_TABLE_CLEAR;
}