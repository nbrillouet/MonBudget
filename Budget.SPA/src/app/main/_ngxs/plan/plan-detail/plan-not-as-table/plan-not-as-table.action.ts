import { FilterPlanNotAsTableGroupSelected } from "app/main/_models/filters/plan-not-as.filter";

export const PLAN_NOT_AS_TABLE_LOAD = 'plan-not-as-table-load';
export const PLAN_NOT_AS_TABLE_CLEAR = 'plan-not-as-table-clear';

export class LoadPlanNotAsTable {
    static readonly type = PLAN_NOT_AS_TABLE_LOAD;
 
    constructor(public payload: FilterPlanNotAsTableGroupSelected) { }
}

export class ClearPlanNotAsTable {
    static readonly type = PLAN_NOT_AS_TABLE_CLEAR;
}

// import { FilterAsPlan } from "app/main/_models/filters/account-statement-plan.filter";
// import { AsTable } from "app/main/_models/account-statement/account-statement-table.model";

// export const AS_PLAN_LOAD = 'as-plan-load';
// export const AS_PLAN_FILTER_CHANGE = 'as-plan-filter-change';
// export const AS_PLAN_CLEAR = 'as-plan-clear';

// export class LoadAsPlanForTable {
//     static readonly type = AS_PLAN_LOAD;
 
//     constructor(public payload: any) { }
// }

// export class ChangeAsPlanForTableFilter {
//     static readonly type = AS_PLAN_FILTER_CHANGE;
 
//     constructor(public payload: FilterAsPlan) { }
// }

// export class ClearAsPlanForTable {
//     static readonly type = AS_PLAN_CLEAR;
// }