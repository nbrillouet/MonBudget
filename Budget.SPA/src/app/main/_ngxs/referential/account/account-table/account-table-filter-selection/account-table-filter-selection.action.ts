import { FilterAccountTableSelected } from "app/main/_models/filters/account.filter";

export const ACCOUNT_TABLE_FILTER_SELECTION_LOAD = 'account-table-filter-selection-load';

export class LoadAccountTableFilterSelection {
    static readonly type = ACCOUNT_TABLE_FILTER_SELECTION_LOAD;
 
    constructor(public payload: FilterAccountTableSelected) { }
}