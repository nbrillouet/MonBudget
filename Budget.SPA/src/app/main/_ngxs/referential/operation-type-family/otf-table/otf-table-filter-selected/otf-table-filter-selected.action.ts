import { Pagination } from "app/main/_models/pagination.model";
import { FilterOtfTableSelected } from "app/main/_models/filters/operation-type-family.filter";

export const OTF_TABLE_FILTER_SELECTED_UPDATE_PAGINATION = 'otf-table-filter-selected-update-pagination';
export const OTF_TABLE_FILTER_SELECTED_SYNCHRONIZATION = 'otf-table-filter-selected-synchronization';

export class UpdatePaginationOtfTableFilterSelected {
    static readonly type = OTF_TABLE_FILTER_SELECTED_UPDATE_PAGINATION;
 
    constructor(public payload: Pagination) { }
}

export class SynchronizeOtfTableFilterSelected {
    static readonly type = OTF_TABLE_FILTER_SELECTED_SYNCHRONIZATION;
 
    constructor(public payload: FilterOtfTableSelected) { }
}





// import { FilterOtfTable, FilterOtfTableSelected } from "app/main/_models/filters/operation-type-family.filter";
// import { Pagination } from "app/main/_models/pagination.model";

// export const OTF_TABLE_FILTER_LOAD = 'otf-table-filter-load';
// export const OTF_TABLE_FILTER_CHANGE = 'otf-table-filter-change';
// export const OTF_TABLE_FILTER_UPDATE_PAGINATION = 'otf-table-filter-update-pagination';

// export class LoadOtfTableFilter {
//     static readonly type = OTF_TABLE_FILTER_LOAD;
 
//     constructor(public payload: FilterOtfTable) { }
// }

// export class ChangeOtfTableFilter {
//     static readonly type = OTF_TABLE_FILTER_CHANGE;
 
//     constructor(public payload: FilterOtfTableSelected) { }
// }

// export class UpdatePaginationOtfTableFilter {
//     static readonly type = OTF_TABLE_FILTER_UPDATE_PAGINATION;
 
//     constructor(public payload: Pagination) { }
// }