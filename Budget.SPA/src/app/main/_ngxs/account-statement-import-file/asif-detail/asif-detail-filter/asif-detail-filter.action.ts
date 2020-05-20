import { ISelect } from "app/main/_models/generics/select.model";
import { FilterOperationType } from "app/main/_models/filters/operation.filter";
import { AsifForDetail } from "app/main/_models/account-statement-import/account-statement-import-file.model";

export const ASIF_DETAIL_FILTER_LOAD = 'asif-detail--filter-load';
export const ASIF_DETAIL_FILTER_CLEAR = 'asif-detail-filter-clear';
export const ASIF_DETAIL_FILTER_CHANGE_OTF = 'asif-detail-filter-change-otf';
export const ASIF_DETAIL_FILTER_CHANGE_OT = 'asif-detail-filter-change-ot'

export class LoadAsifDetailFilter {
    static readonly type = ASIF_DETAIL_FILTER_LOAD;
 
    constructor(public payload: AsifForDetail) { }
}

export class ClearAsifDetailFilter {
    static readonly type = ASIF_DETAIL_FILTER_CLEAR;
}

//CHANGE OPERATION TYPE FAMILY//
export class asifDetailFilterChangeOtf {
    static readonly type = ASIF_DETAIL_FILTER_CHANGE_OTF;
    constructor(public payload: ISelect) { }
}

//CHANGE OPERATION TYPE//
export class asifDetailFilterChangeOt {
    static readonly type = ASIF_DETAIL_FILTER_CHANGE_OT;
    constructor(public payload: FilterOperationType) { }
}