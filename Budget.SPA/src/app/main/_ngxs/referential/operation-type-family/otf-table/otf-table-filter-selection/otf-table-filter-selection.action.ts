import { FilterOtfTableSelected } from "app/main/_models/filters/operation-type-family.filter";

export const OTF_TABLE_FILTER_SELECTION_LOAD = 'otf-table-filter-selection-load';

export class LoadOtfTableFilterSelection {
    static readonly type = OTF_TABLE_FILTER_SELECTION_LOAD;
 
    constructor(public payload: FilterOtfTableSelected) { }
}