import { FilterOtfTable, FilterOtfTableSelected } from "app/main/_models/filters/operation-type-family.filter";
import { Pagination } from "app/main/_models/pagination.model";

// import { Pagination } from "app/main/_models/pagination.model";
// import { FilterAsTable, FilterAsTableSelected } from "app/main/_models/filters/account-statement.filter";

export const OTF_TABLE_FILTER_LOAD = 'otf-table-filter-load';
export const OTF_TABLE_FILTER_LOAD_SUCCESS = 'otf-table-filter-load-success';
export const OTF_TABLE_FILTER_CHANGE = 'otf-table-filter-change';
export const OTF_TABLE_FILTER_UPDATE_PAGINATION = 'otf-table-filter-update-pagination';

export class LoadOtfTableFilter {
    static readonly type = OTF_TABLE_FILTER_LOAD;
 
    constructor(public payload: FilterOtfTable) { }
}

export class LoadOtfTableFilterSuccess {
    static readonly type = OTF_TABLE_FILTER_LOAD_SUCCESS;
 
    constructor(public payload: FilterOtfTable) { }
}

export class ChangeOtfTableFilter {
    static readonly type = OTF_TABLE_FILTER_CHANGE;
 
    constructor(public payload: FilterOtfTableSelected) { }
}

export class UpdatePaginationOtfTableFilter {
    static readonly type = OTF_TABLE_FILTER_UPDATE_PAGINATION;
 
    constructor(public payload: Pagination) { }
}