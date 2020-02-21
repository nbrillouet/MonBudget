import { FilterAsTableSelected } from "app/main/_models/filters/account-statement.filter";

export const AS_TABLE_FILTER_SELECTION_LOAD = 'as-table-filter-selection-load';
// export const AS_TABLE_FILTER_SELECTION_CHANGE = 'as-table-filter-selection-change';


export class LoadAsTableFilterSelection {
    static readonly type = AS_TABLE_FILTER_SELECTION_LOAD;
 
    constructor(public payload: FilterAsTableSelected) { }
}

// export class ChangeAsTableFilterSelection {
//     static readonly type = AS_TABLE_FILTER_SELECTION_CHANGE;
 
//     constructor(public payload: FilterAsTableSelected) { }
// }

