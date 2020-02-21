import { FilterAsiTableSelected } from "app/main/_models/filters/account-statement-import.filter";

export const ASI_TABLE_FILTER_SELECTION_LOAD = 'asi-table-filter-selection-load';

export class LoadAsiTableFilterSelection {
    static readonly type = ASI_TABLE_FILTER_SELECTION_LOAD;
 
    constructor(public payload: FilterAsiTableSelected) { }
}