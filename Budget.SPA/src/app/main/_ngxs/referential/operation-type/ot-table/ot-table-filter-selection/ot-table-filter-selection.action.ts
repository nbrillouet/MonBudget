import { FilterOtTableSelected } from "app/main/_models/filters/operation-type.filter";

export const OT_TABLE_FILTER_SELECTION_LOAD = 'ot-table-filter-selection-load';

export class LoadOtTableFilterSelection {
    static readonly type = OT_TABLE_FILTER_SELECTION_LOAD;
 
    constructor(public payload: FilterOtTableSelected) { }
}