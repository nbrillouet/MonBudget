import { FilterAsifTable, FilterAsifTableSelected } from "app/main/_models/filters/account-statement-import-file.filter";
import { Pagination } from "app/main/_models/pagination.model";

export const ASIF_TABLE_FILTER_LOAD = 'asif-table-filter-load';
export const ASIF_TABLE_FILTER_LOAD_SUCCESS = 'asif-table-filter-load-success';
export const ASIF_TABLE_FILTER_CHANGE = 'asif-table-filter-change';
export const ASIF_TABLE_FILTER_UPDATE_PAGINATION = 'asif-table-filter-update-pagination';

export class LoadAsifTableFilter {
    static readonly type = ASIF_TABLE_FILTER_LOAD;
 
    constructor(public payload: FilterAsifTable) { }
}

export class LoadAsifTableFilterSuccess {
    static readonly type = ASIF_TABLE_FILTER_LOAD_SUCCESS;
 
    constructor(public payload: FilterAsifTable) { }
}

export class ChangeAsifTableFilter {
    static readonly type = ASIF_TABLE_FILTER_CHANGE;
 
    constructor(public payload: FilterAsifTableSelected) { }
}

export class UpdatePaginationAsifTableFilter {
    static readonly type = ASIF_TABLE_FILTER_UPDATE_PAGINATION;
 
    constructor(public payload: Pagination) { }
}