import { FilterPlanNotAsTableSelected } from "app/main/_models/filters/plan-not-as.filter";

export const PLAN_NOT_AS_TABLE_FILTER_SELECTION_LOAD = 'plan-not-as-table-filter-selection-load';

export class LoadPlanNotAsTableFilterSelection {
    static readonly type = PLAN_NOT_AS_TABLE_FILTER_SELECTION_LOAD;
 
    constructor(public payload: FilterPlanNotAsTableSelected) { }
}