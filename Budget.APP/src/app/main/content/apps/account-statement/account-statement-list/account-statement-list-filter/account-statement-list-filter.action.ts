import { FilterAccountStatement } from "../../../../../_models/Filters/FilterAccountStatement";

export const SET_FILTER = 'set-filter';
export const SET_FILTER_SUCCESS = 'set-filter-success';

export class SetFilter { 
    static readonly type = SET_FILTER; 
    
    constructor(public filter: FilterAccountStatement) { } 
}

export class SetFilterSuccess { 
    static readonly type = SET_FILTER_SUCCESS; 
    
    constructor(public filter: FilterAccountStatement) { } 
}