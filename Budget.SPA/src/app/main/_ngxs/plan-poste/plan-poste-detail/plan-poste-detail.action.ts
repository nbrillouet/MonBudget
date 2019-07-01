import { PlanPosteDetailFilter, PlanPosteReferenceFilter } from "app/main/_models/filters/plan-poste.filter";
import { PlanPosteFrequencyForDetail, PlanPosteFrequencyFilter } from "app/main/_models/plan.model";


export const PLAN_POSTE_DETAIL_LOAD = 'plan-poste-detail-load';
export const PLAN_POSTE_DETAIL_LOAD_SUCCESS = 'plan-poste-detail-load-success';
export const PLAN_POSTE_DETAIL_FILTER_CHANGE = 'plan-poste-detail-filter-change';
export const PLAN_POSTE_DETAIL_CLEAR = 'plan-poste-detail-clear';
export const PLAN_POSTE_REFERENCE_CHANGE= 'plan-poste-reference-change';
export const PLAN_POSTE_DETAIL_CHANGE_PLAN_POSTE_FREQUENCIES = 'plan-poste-detail-change-plan-poste-frequencies';
export const PLAN_POSTE_DETAIL_CHANGE_PLAN_POSTE_FREQUENCIES_SUCCESS = 'plan-poste-detail-change-plan-poste-frequencies-success';

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

export class PlanPosteDetailChangePlanPosteFrequencies {
    static readonly type = PLAN_POSTE_DETAIL_CHANGE_PLAN_POSTE_FREQUENCIES;
 
    constructor(public payload: PlanPosteFrequencyFilter) { }
}

export class PlanPosteDetailChangePlanPosteFrequenciesSuccess {
    static readonly type = PLAN_POSTE_DETAIL_CHANGE_PLAN_POSTE_FREQUENCIES_SUCCESS;
 
    constructor(public payload: PlanPosteFrequencyForDetail[]) { }
}

