import { PlanDetailFilter } from "app/main/_models/Filters/plan.filter";

export const PLAN_DETAIL_LOAD = 'plan-detail-load';
export const PLAN_DETAIL_FILTER_CHANGE = 'plan-detail-filter-change';
export const PLAN_DETAIL_CLEAR = 'plan-detail-clear';
export const PLAN_DETAIL_SAVE = 'plan-detail-save';


export class LoadPlanDetailDatas {
    static readonly type = PLAN_DETAIL_LOAD;
 
    constructor(public payload: any) { }
}

export class ChangePlanDetailFilter {
    static readonly type = PLAN_DETAIL_FILTER_CHANGE;
 
    constructor(public payload: PlanDetailFilter) { }
}

export class ClearPlanDetailDatas {
    static readonly type = PLAN_DETAIL_CLEAR;
    // constructor(public payload: any) { }
}