import { Pagination } from "app/main/_models/pagination.model";
import { FilterAsiTable, FilterAsiTableSelected } from "app/main/_models/filters/account-statement-import.filter";

export const ASI_TABLE_FILTER_LOAD = 'asi-table-filter-load';
export const ASI_TABLE_FILTER_LOAD_SUCCESS = 'asi-table-filter-load-success';
export const ASI_TABLE_FILTER_CHANGE = 'asi-table-filter-change';
export const ASI_TABLE_FILTER_UPDATE_PAGINATION = 'asi-table-filter-update-pagination';

export class LoadAsiTableFilter {
    static readonly type = ASI_TABLE_FILTER_LOAD;
 
    constructor(public payload: FilterAsiTable) { }
}

export class LoadAsiTableFilterSuccess {
    static readonly type = ASI_TABLE_FILTER_LOAD_SUCCESS;
 
    constructor(public payload: FilterAsiTable) { }
}

export class ChangeAsiTableFilter {
    static readonly type = ASI_TABLE_FILTER_CHANGE;
 
    constructor(public payload: FilterAsiTableSelected) { }
}

export class UpdatePaginationAsiTableFilter {
    static readonly type = ASI_TABLE_FILTER_UPDATE_PAGINATION;
 
    constructor(public payload: Pagination) { }
}