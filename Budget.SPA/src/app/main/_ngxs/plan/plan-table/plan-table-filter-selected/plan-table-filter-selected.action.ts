import { Pagination } from "app/main/_models/pagination.model";
import { FilterPlanTableSelected } from "app/main/_models/Filters/plan.filter";

export const PLAN_TABLE_FILTER_SELECTED_UPDATE_PAGINATION = 'plan-table-filter-selected-update-pagination';
export const PLAN_TABLE_FILTER_SELECTED_CHANGE = 'plan-table-filter-selected-change';

export class UpdatePaginationPlanTableFilterSelected {
    static readonly type = PLAN_TABLE_FILTER_SELECTED_UPDATE_PAGINATION;
 
    constructor(public payload: Pagination) { }
}

export class SynchronizePlanTableFilterSelected {
    static readonly type = PLAN_TABLE_FILTER_SELECTED_CHANGE;
 
    constructor(public payload: FilterPlanTableSelected) { }
}

// export const PLAN_TABLE_FILTER_LOAD = 'plan-table-filter-load';
// // export const PLAN_TABLE_FILTER_LOAD_SUCCESS = 'plan-table-filter-load-success';
// export const PLAN_TABLE_COMBO_FILTER_CHANGE = 'plan-table-combo-filter-change';

// export class LoadPlanTableComboFilter {
//     static readonly type = PLAN_TABLE_FILTER_LOAD;
 
//     constructor() { }
// }

// // export class LoadPlanTableComboFilterSuccess {
// //     static readonly type = PLAN_TABLE_FILTER_LOAD_SUCCESS;
 
// //     constructor(public payload: any) { }
// // }

// export class ChangePlanTableComboFilter {
//     static readonly type = PLAN_TABLE_COMBO_FILTER_CHANGE;
 
//     constructor(public payload: any) { }
// }