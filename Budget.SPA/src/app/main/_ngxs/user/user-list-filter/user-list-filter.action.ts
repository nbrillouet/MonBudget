import { FilterUserTable } from "app/main/_models/filters/user.filter";
import { Pagination } from "app/main/_models/pagination.model";

export const USER_TABLE_FILTER_LOAD = 'user-table-filter-load';
export const USER_TABLE_FILTER_LOAD_SUCCESS = 'user-table-filter-load-success';
export const USER_TABLE_FILTER_CHANGE = 'user-table-filter-change';
export const USER_TABLE_FILTER_UPDATE_PAGINATION = 'user-table-filter-update-pagination';

export class LoadUserTableFilter {
    static readonly type = USER_TABLE_FILTER_LOAD;
 
    constructor(public payload: FilterUserTable) { }
}

export class LoadUserTableFilterSuccess {
    static readonly type = USER_TABLE_FILTER_LOAD_SUCCESS;
 
    constructor(public payload: any) { }
}

export class ChangeUserTableFilter {
    static readonly type = USER_TABLE_FILTER_CHANGE;
 
    constructor(public payload: FilterUserTable) { }
}

export class UpdatePaginationUserTableFilter {
    static readonly type = USER_TABLE_FILTER_UPDATE_PAGINATION;
 
    constructor(public payload: Pagination) { }
}