import { FilterOperationTableSelected } from "app/main/_models/filters/operation.filter";

export const OPERATION_TABLE_FILTER_SELECTION_LOAD = 'operation-table-filter-selection-load';

export class LoadOperationTableFilterSelection {
    static readonly type = OPERATION_TABLE_FILTER_SELECTION_LOAD;
 
    constructor(public payload: FilterOperationTableSelected) { }
}