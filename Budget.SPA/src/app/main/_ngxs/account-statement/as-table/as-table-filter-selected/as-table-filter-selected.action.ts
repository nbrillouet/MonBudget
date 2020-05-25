import { Pagination } from "app/main/_models/pagination.model";
import { FilterAsTableSelected } from "app/main/_models/filters/account-statement.filter";

export const AS_TABLE_FILTER_SELECTED_UPDATE_PAGINATION = 'as-table-filter-selected-update-pagination';
export const AS_TABLE_FILTER_SELECTED_CHANGE = 'as-table-filter-selected-change';

export class UpdatePaginationAsTableFilterSelected {
    static readonly type = AS_TABLE_FILTER_SELECTED_UPDATE_PAGINATION;
 
    constructor(public payload: Pagination) { }
}

export class SynchronizeAsTableFilterSelected {
    static readonly type = AS_TABLE_FILTER_SELECTED_CHANGE;
 
    constructor(public payload: FilterAsTableSelected) { }
}

