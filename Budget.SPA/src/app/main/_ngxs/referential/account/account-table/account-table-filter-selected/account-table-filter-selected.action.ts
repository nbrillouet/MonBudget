import { FilterAccountTableSelected } from "app/main/_models/filters/account.filter";
import { Pagination } from "app/main/_models/pagination.model";

export const ACCOUNT_TABLE_FILTER_SELECTED_UPDATE_PAGINATION = 'account-table-filter-selected-update-pagination';
export const ACCOUNT_TABLE_FILTER_SELECTED_SYNCHRONIZE = 'account-table-filter-selected-change';
export const ACCOUNT_TABLE_FILTER_SELECTED_LOAD = 'account-table-filter-selected-load';

export class UpdatePaginationAccountTableFilterSelected {
    static readonly type = ACCOUNT_TABLE_FILTER_SELECTED_UPDATE_PAGINATION;
 
    constructor(public payload: Pagination) { }
}

export class SynchronizeAccountTableFilterSelected {
    static readonly type = ACCOUNT_TABLE_FILTER_SELECTED_SYNCHRONIZE;
 
    constructor(public payload: FilterAccountTableSelected) { }
}

export class LoadAccountTableFilterSelected {
    static readonly type = ACCOUNT_TABLE_FILTER_SELECTED_LOAD;
 
    constructor(public payload: FilterAccountTableSelected) { }
}