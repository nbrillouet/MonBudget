import { FilterOtTable, FilterOtTableSelected } from "app/main/_models/filters/operation-type.filter";
import { Pagination } from "app/main/_models/pagination.model";

export const OT_TABLE_FILTER_LOAD = 'ot-table-filter-load';
// export const OT_TABLE_FILTER_LOAD_SUCCESS = 'ot-table-filter-load-success';
export const OT_TABLE_FILTER_CHANGE = 'ot-table-filter-change';
export const OT_TABLE_FILTER_UPDATE_PAGINATION = 'ot-table-filter-update-pagination';

export class LoadOtTableFilter {
    static readonly type = OT_TABLE_FILTER_LOAD;
 
    constructor(public payload: FilterOtTable) { }
}

// export class LoadOtTableFilterSuccess {
//     static readonly type = OT_TABLE_FILTER_LOAD_SUCCESS;
 
//     constructor(public payload: FilterOtTable) { }
// }

export class ChangeOtTableFilter {
    static readonly type = OT_TABLE_FILTER_CHANGE;
 
    constructor(public payload: FilterOtTableSelected) { }
}

export class UpdatePaginationOtTableFilter {
    static readonly type = OT_TABLE_FILTER_UPDATE_PAGINATION;
 
    constructor(public payload: Pagination) { }
}