export const PLAN_TABLE_FILTER_LOAD = 'plan-table-filter-load';
export const PLAN_TABLE_FILTER_LOAD_SUCCESS = 'plan-table-filter-load-success';
export const PLAN_TABLE_COMBO_FILTER_CHANGE = 'plan-table-combo-filter-change';

export class LoadPlanTableComboFilter {
    static readonly type = PLAN_TABLE_FILTER_LOAD;
 
    constructor() { }
}

export class LoadPlanTableComboFilterSuccess {
    static readonly type = PLAN_TABLE_FILTER_LOAD_SUCCESS;
 
    constructor(public payload: any) { }
}

export class ChangePlanTableComboFilter {
    static readonly type = PLAN_TABLE_COMBO_FILTER_CHANGE;
 
    constructor(public payload: any) { }
}