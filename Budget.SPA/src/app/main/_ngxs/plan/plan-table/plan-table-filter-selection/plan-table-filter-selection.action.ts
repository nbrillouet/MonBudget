import { FilterPlanTableSelected } from "app/main/_models/Filters/plan.filter";

export const PLAN_TABLE_FILTER_SELECTION_LOAD = 'plan-table-filter-selection-load';

export class LoadPlanTableFilterSelection {
    static readonly type = PLAN_TABLE_FILTER_SELECTION_LOAD;
 
    constructor(public payload: FilterPlanTableSelected) { }
}