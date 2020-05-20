import { AsForDetail } from "app/main/_models/account-statement/account-statement-detail.model";
import { ISelect } from "app/main/_models/generics/select.model";
import { FilterOperationType } from "app/main/_models/filters/operation.filter";

export const AS_DETAIL_FILTER_LOAD = 'as-detail--filter-load';
export const AS_DETAIL_FILTER_CLEAR = 'as-detail-filter-clear';
export const AS_DETAIL_FILTER_CHANGE_OTF = 'as-detail-filter-change-otf';
export const AS_DETAIL_FILTER_CHANGE_OT = 'as-detail-filter-change-ot'

export class LoadAsDetailFilter {
    static readonly type = AS_DETAIL_FILTER_LOAD;
 
    constructor(public payload: AsForDetail) { }
}

export class ClearAsDetailFilter {
    static readonly type = AS_DETAIL_FILTER_CLEAR;
}

//CHANGE OPERATION TYPE FAMILY//
export class asDetailFilterChangeOtf {
    static readonly type = AS_DETAIL_FILTER_CHANGE_OTF;
    constructor(public payload: ISelect) { }
}

//CHANGE OPERATION TYPE//
export class asDetailFilterChangeOt {
    static readonly type = AS_DETAIL_FILTER_CHANGE_OT;
    constructor(public payload: FilterOperationType) { }
}