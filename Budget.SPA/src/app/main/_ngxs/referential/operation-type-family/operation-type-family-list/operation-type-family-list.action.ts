export const OTF_TABLE_LOAD = 'otf-table-load';
// export const OTF_TABLE_LOAD_SUCCESS = 'otf-table-load-success';
export const OTF_TABLE_FILTER_CHANGE = 'otf-table-filter-change';
export const OTF_TABLE_CLEAR = 'otf-table-clear';

export class LoadOtfTableDatas {
    static readonly type = OTF_TABLE_LOAD;
 
    constructor(public payload: any) { }
}

// export class LoadOtfTableDatasSuccess {
//     static readonly type = OTF_TABLE_LOAD_SUCCESS;
 
//     constructor(public payload: any) { }
// }

// export class ChangeAsifTableFilter {
//     static readonly type = ASIF_TABLE_FILTER_CHANGE;
 
//     constructor(public payload: FilterAsifTableSelected) { }
// }

export class ClearOtfTableDatas {
    static readonly type = OTF_TABLE_CLEAR;
    // constructor(public payload: any) { }
}