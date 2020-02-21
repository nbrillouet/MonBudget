import { FilterAsTableSelected } from "app/main/_models/filters/account-statement.filter";

export const AS_TABLE_LOAD = 'as-table-load';
export const AS_TABLE_CLEAR = 'as-table-clear';

export class LoadAsTable {
    static readonly type = AS_TABLE_LOAD;
 
    constructor(public payload: FilterAsTableSelected) { }
}

export class ClearAsTable {
    static readonly type = AS_TABLE_CLEAR;
}