import { Pagination } from "app/main/_models/pagination.model";
import { FilterUserTableSelected } from "app/main/_models/filters/user.filter";

export const USER_TABLE_FILTER_SELECTED_UPDATE_PAGINATION = 'user-table-filter-selected-update-pagination';
export const USER_TABLE_FILTER_SELECTED_CHANGE = 'user-table-filter-selected-change';

export class UpdatePaginationUserTableFilterSelected {
    static readonly type = USER_TABLE_FILTER_SELECTED_UPDATE_PAGINATION;
 
    constructor(public payload: Pagination) { }
}

export class SynchronizeUserTableFilterSelected {
    static readonly type = USER_TABLE_FILTER_SELECTED_CHANGE;
 
    constructor(public payload: FilterUserTableSelected) { }
}


// import { FilterUserTable, FilterUserTableSelected } from "app/main/_models/filters/user.filter";
// import { Pagination } from "app/main/_models/pagination.model";

// export const USER_TABLE_FILTER_LOAD = 'user-table-filter-load';
// export const USER_TABLE_FILTER_CHANGE = 'user-table-filter-change';
// export const USER_TABLE_FILTER_UPDATE_PAGINATION = 'user-table-filter-update-pagination';

// export class LoadUserTableFilter {
//     static readonly type = USER_TABLE_FILTER_LOAD;
 
//     constructor(public payload: FilterUserTable) { }
// }

// export class ChangeUserTableFilter {
//     static readonly type = USER_TABLE_FILTER_CHANGE;
 
//     constructor(public payload: FilterUserTableSelected) { }
// }

// export class UpdatePaginationUserTableFilter {
//     static readonly type = USER_TABLE_FILTER_UPDATE_PAGINATION;
 
//     constructor(public payload: Pagination) { }
// }