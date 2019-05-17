
import { Pagination } from "app/main/_models/pagination.model";
import { FilterOperationTable, FilterOperationTableSelected } from "app/main/_models/filters/operation.filter";

export const OPERATION_TABLE_FILTER_LOAD = 'operation-table-filter-load';
export const OPERATION_TABLE_FILTER_LOAD_SUCCESS = 'operation-table-filter-load-success';
export const OPERATION_TABLE_FILTER_CHANGE = 'operation-table-filter-change';
export const OPERATION_TABLE_FILTER_UPDATE_PAGINATION = 'operation-table-filter-update-pagination';

export class LoadOperationTableFilter {
    static readonly type = OPERATION_TABLE_FILTER_LOAD;
 
    constructor(public payload: FilterOperationTable) { }
}

export class LoadOperationTableFilterSuccess {
    static readonly type = OPERATION_TABLE_FILTER_LOAD_SUCCESS;
 
    constructor(public payload: FilterOperationTable) { }
}

export class ChangeOperationTableFilter {
    static readonly type = OPERATION_TABLE_FILTER_CHANGE;
 
    constructor(public payload: FilterOperationTableSelected) { }
}

export class UpdatePaginationOperationTableFilter {
    static readonly type = OPERATION_TABLE_FILTER_UPDATE_PAGINATION;
 
    constructor(public payload: Pagination) { }
}