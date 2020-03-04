import { Pagination } from "app/main/_models/pagination.model";
import { FilterPlanNotAsTableSelected, FilterPlanNotAsTableGroupSelected } from "app/main/_models/filters/plan-not-as.filter";

export const PLAN_NOT_AS_TABLE_FILTER_SELECTED_UPDATE_PAGINATION = 'plan-not-as-table-filter-selected-update-pagination';
export const PLAN_NOT_AS_TABLE_FILTER_SELECTED_CHANGE = 'plan-not-as-table-filter-selected-change';

export class UpdatePaginationPlanNotAsTableFilterSelected {
    static readonly type = PLAN_NOT_AS_TABLE_FILTER_SELECTED_UPDATE_PAGINATION;
 
    constructor(public payload: Pagination) { }
}

export class SynchronizePlanNotAsTableFilterSelected {
    static readonly type = PLAN_NOT_AS_TABLE_FILTER_SELECTED_CHANGE;
 
    constructor(public payload: FilterPlanNotAsTableGroupSelected) { }
}