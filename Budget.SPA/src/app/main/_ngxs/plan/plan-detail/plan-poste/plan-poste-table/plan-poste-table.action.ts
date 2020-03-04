export const PLAN_POSTE_TABLE_LOAD = 'plan-poste-table-load';
export const PLAN_POSTE_TABLE_CLEAR = 'plan-poste-table-clear';

export class LoadPlanPosteTable {
    static readonly type = PLAN_POSTE_TABLE_LOAD;
 
    constructor(public payload: any) { }
}

export class ClearPlanPosteTable {
    static readonly type = PLAN_POSTE_TABLE_CLEAR;
}