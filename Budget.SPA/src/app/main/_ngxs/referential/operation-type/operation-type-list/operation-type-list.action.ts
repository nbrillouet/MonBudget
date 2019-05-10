export const OT_TABLE_LOAD = 'ot-table-load';
export const OT_TABLE_LOAD_SUCCESS = 'ot-table-load-success';
export const OT_TABLE_FILTER_CHANGE = 'ot-table-filter-change';
export const OT_TABLE_CLEAR = 'ot-table-clear';

export class LoadOtTableDatas {
    static readonly type = OT_TABLE_LOAD;
 
    constructor(public payload: any) { }
}

export class LoadOtTableDatasSuccess {
    static readonly type = OT_TABLE_LOAD_SUCCESS;
 
    constructor(public payload: any) { }
}

export class ClearOtTableDatas {
    static readonly type = OT_TABLE_CLEAR;
}