import { PlanDetailFilter } from "app/main/_models/Filters/plan.filter";

export const PLAN_DETAIL_LOAD = 'plan-detail-load';
export const PLAN_DETAIL_LOAD_SUCCESS = 'plan-detail-load-success';
export const PLAN_DETAIL_FILTER_CHANGE = 'plan-detail-filter-change';
export const PLAN_DETAIL_CLEAR = 'plan-detail-clear';
export const PLAN_DETAIL_SAVE = 'plan-detail-save';


export class LoadPlanDetailDatas {
    static readonly type = PLAN_DETAIL_LOAD;
 
    constructor(public payload: any) { }
}

export class LoadPlanDetailDatasSuccess {
    static readonly type = PLAN_DETAIL_LOAD_SUCCESS;
 
    constructor(public payload: any) { }
}

export class ChangePlanDetailFilter {
    static readonly type = PLAN_DETAIL_FILTER_CHANGE;
 
    constructor(public payload: PlanDetailFilter) { }
}

// export class PlanDetailChangePlanPosteFrequencies {
//     static readonly type = PLAN_DETAIL_CHANGE_PLAN_POSTE_FREQUENCIES;
 
//     constructor(public payload: number) { }
// }



export class ClearPlanDetailDatas {
    static readonly type = PLAN_DETAIL_CLEAR;
    // constructor(public payload: any) { }
}