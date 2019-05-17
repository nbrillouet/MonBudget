import { ISelect, ISelectGroup } from "../generics/select.model";
import { IUserForGroup } from "../user.model";
import { Pagination } from "../pagination.model";

export class FilterOperation {
    operationMethod: ISelect;
    operationType: ISelect;
}

export class FilterOperationTableSelected {
    user: IUserForGroup = null;
    label: string = null;
    operationMethods: ISelect[] = null;
    operationTypes: ISelect[] = null;
    pagination: Pagination = new Pagination();
}

export class FilterOperationTable {
    operationTypes: ISelectGroup[];
    operationMethods: ISelect[];
    selected : FilterOperationTableSelected;

    constructor () {
        this.selected = new FilterOperationTableSelected();
    }
}