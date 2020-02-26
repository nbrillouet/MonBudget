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
    operationMethod: ISelect[] = null;
    operationType: ISelect[] = null;
    pagination: Pagination = new Pagination();
}

export class FilterOperationTableSelection {
    operationType: ISelectGroup[];
    operationMethod: ISelect[];
    // selected : FilterOperationTableSelected;

    constructor () {
        // this.selected = new FilterOperationTableSelected();
    }
}