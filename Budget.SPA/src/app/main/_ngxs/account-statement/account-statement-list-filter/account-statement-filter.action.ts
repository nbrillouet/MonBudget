import { Pagination } from "app/main/_models/pagination.model";
import { FilterAsTable, FilterAsTableSelected } from "app/main/_models/filters/account-statement.filter";

export const AS_TABLE_FILTER_LOAD = 'as-table-filter-load';
// export const AS_TABLE_FILTER_LOAD_SUCCESS = 'as-table-filter-load-success';
export const AS_TABLE_FILTER_CHANGE = 'as-table-filter-change';
export const AS_TABLE_FILTER_UPDATE_PAGINATION = 'as-table-filter-update-pagination';

export class LoadAsTableFilter {
    static readonly type = AS_TABLE_FILTER_LOAD;
 
    constructor(public payload: FilterAsTableSelected) { }
}

// export class LoadAsTableFilterSuccess {
//     static readonly type = AS_TABLE_FILTER_LOAD_SUCCESS;
 
//     constructor(public payload: FilterAsTable) { }
// }

export class ChangeAsTableFilter {
    static readonly type = AS_TABLE_FILTER_CHANGE;
 
    constructor(public payload: FilterAsTableSelected) { }
}

export class UpdatePaginationAsTableFilter {
    static readonly type = AS_TABLE_FILTER_UPDATE_PAGINATION;
 
    constructor(public payload: Pagination) { }
}