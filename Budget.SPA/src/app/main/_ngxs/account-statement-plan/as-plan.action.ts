import { FilterAsPlan } from "app/main/_models/filters/account-statement-plan.filter";
import { AsTable } from "app/main/_models/account-statement/account-statement-table.model";

export const AS_PLAN_LOAD = 'as-plan-load';
export const AS_PLAN_LOAD_SUCCESS = 'as-plan-load-success';
export const AS_PLAN_FILTER_CHANGE = 'as-plan-filter-change';
export const AS_PLAN_CLEAR = 'as-plan-clear';

export class LoadAsPlanForTable {
    static readonly type = AS_PLAN_LOAD;
 
    constructor(public payload: any) { }
}

export class LoadAsPlanForTableSuccess {
    static readonly type = AS_PLAN_LOAD_SUCCESS;
 
    constructor(public payload: AsTable[]) { }
}

export class ChangeAsPlanForTableFilter {
    static readonly type = AS_PLAN_FILTER_CHANGE;
 
    constructor(public payload: FilterAsPlan) { }
}

export class ClearAsPlanForTable {
    static readonly type = AS_PLAN_CLEAR;
}