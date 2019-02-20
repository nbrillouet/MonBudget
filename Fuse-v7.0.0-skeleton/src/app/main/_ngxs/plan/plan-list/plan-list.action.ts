import { PlanFilter } from "app/main/_models/Filters/plan.filter";


export const PLAN_TABLE_LOAD = 'plan-table-load';
export const PLAN_TABLE_LOAD_SUCCESS = 'plan-table-load-success';
export const PLAN_TABLE_FILTER_CHANGE = 'plan-table-filter-change';
export const PLAN_TABLE_CLEAR = 'plan-table-clear';

export class LoadPlanTableDatas {
    static readonly type = PLAN_TABLE_LOAD;
 
    constructor(public payload: any) { }
}

export class LoadPlanTableDatasSuccess {
    static readonly type = PLAN_TABLE_LOAD_SUCCESS;
 
    constructor(public payload: any) { }
}

export class ChangePlanTableFilter {
    static readonly type = PLAN_TABLE_FILTER_CHANGE;
 
    constructor(public payload: PlanFilter) { }
}
export class ClearPlanTableDatas {
    static readonly type = PLAN_TABLE_CLEAR;
    // constructor(public payload: any) { }
}
