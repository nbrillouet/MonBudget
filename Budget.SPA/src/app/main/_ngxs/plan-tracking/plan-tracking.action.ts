import { FilterPlanTracking } from "app/main/_models/filters/plan-tracking.filter";

export const PLAN_TRACKING_LOAD = 'plan-tracking-load';
export const PLAN_TRACKING_LOAD_SUCCESS = 'plan-tracking-load-success';
export const PLAN_TRACKING_FILTER_CHANGE = 'plan-tracking-filter-change';
export const PLAN_TRACKING_CLEAR = 'plan-tracking-clear';

export class LoadPlanForTracking {
    static readonly type = PLAN_TRACKING_LOAD;
 
    constructor(public payload: FilterPlanTracking) { }
}

export class LoadPlanForTrackingSuccess {
    static readonly type = PLAN_TRACKING_LOAD_SUCCESS;
 
    constructor(public payload: any) { }
}

export class ChangePlanForTrackingFilter {
    static readonly type = PLAN_TRACKING_FILTER_CHANGE;
 
    constructor(public payload: FilterPlanTracking) { }
}

export class ClearPlanForTracking {
    static readonly type = PLAN_TRACKING_CLEAR;
}

