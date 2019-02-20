import { AsFilter } from "app/main/_models/Filters/filter-account-statement";

export const AS_LIST_LOAD = 'as-list-load';
export const AS_LIST_LOAD_SUCCESS = 'as-list-load-success';
export const AS_FILTER_CHANGE = 'as-filter-change';

export class LoadAsDatas {
    static readonly type = AS_LIST_LOAD;
 
    constructor(public payload: any) { }
}

export class LoadAsDatasSuccess {
    static readonly type = AS_LIST_LOAD_SUCCESS;
 
    constructor(public payload: any) { }
}

export class ChangeAsFilter {
    static readonly type = AS_FILTER_CHANGE;
 
    constructor(public payload: AsFilter) { }
}