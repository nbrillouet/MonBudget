import { PlanPosteDetailFilter, PlanPosteReferenceFilter } from "app/main/_models/filters/plan-poste.filter";


export const PLAN_POSTE_DETAIL_LOAD = 'plan-poste-detail-load';
export const PLAN_POSTE_DETAIL_LOAD_SUCCESS = 'plan-poste-detail-load-success';
export const PLAN_POSTE_DETAIL_FILTER_CHANGE = 'plan-poste-detail-filter-change';
export const PLAN_POSTE_DETAIL_CLEAR = 'plan-poste-detail-clear';
export const PLAN_POSTE_REFERENCE_CHANGE= 'plan-poste-reference-change';

export class LoadPlanPosteDetailDatas {
    static readonly type = PLAN_POSTE_DETAIL_LOAD;
 
    constructor(public payload: any) { }
}

export class LoadPlanPosteDetailDatasSuccess {
    static readonly type = PLAN_POSTE_DETAIL_LOAD_SUCCESS;
 
    constructor(public payload: any) { }
}

export class ChangePlanPosteDetailFilter {
    static readonly type = PLAN_POSTE_DETAIL_FILTER_CHANGE;
 
    constructor(public payload: PlanPosteDetailFilter) { }
}

export class ChangePlanPosteReference {
    static readonly type = PLAN_POSTE_REFERENCE_CHANGE;
    constructor(public payload: PlanPosteReferenceFilter) { }
}

export class ClearPlanPosteDetailDatas {
    static readonly type = PLAN_POSTE_DETAIL_CLEAR;
}

