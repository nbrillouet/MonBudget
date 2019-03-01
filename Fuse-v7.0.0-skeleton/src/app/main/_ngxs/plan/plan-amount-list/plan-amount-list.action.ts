import { PlanAmountFilter } from "app/main/_models/filters/plan-amount.filter";

export const PLAN_AMOUNT_TABLE_LOAD = 'plan-amount-table-load';
export const PLAN_AMOUNT_TABLE_LOAD_SUCCESS = 'plan-amount-table-load-success';
export const PLAN_AMOUNT_TABLE_FILTER_CHANGE = 'plan-amount-table-filter-change';
export const PLAN_AMOUNT_TABLE_CLEAR = 'plan-amount-table-clear';

export class LoadPlanAmountTableDatas {
    static readonly type = PLAN_AMOUNT_TABLE_LOAD;
 
    constructor(public payload: any) { }
}

export class LoadPlanAmountTableDatasSuccess {
    static readonly type = PLAN_AMOUNT_TABLE_LOAD_SUCCESS;
 
    constructor(public payload: any) { }
}

export class ChangePlanAmountTableFilter {
    static readonly type = PLAN_AMOUNT_TABLE_FILTER_CHANGE;
 
    constructor(public payload: PlanAmountFilter) { }
}
export class ClearPlanAmountTableDatas {
    static readonly type = PLAN_AMOUNT_TABLE_CLEAR;
    // constructor(public payload: any) { }
}