import { ISelect, ISelectGroup } from "../generics/select.model";
import { IUserForGroup } from "../user.model";
import { Pagination } from "../pagination.model";

export class FilterOperationDetail {
    operationMethod: ISelect[];
    operationType: ISelectGroup[];
}

export class FilterOperationTableSelected {
    user: IUserForGroup = null;
    label: string = null;
    operationMethod: ISelect[] = null;
    operationType: ISelect[] = null;
    pagination: Pagination = new Pagination();
}

export class FilterOperationTableSelection {
    operationMethod: ISelect[];
    operationType: ISelectGroup[];

    constructor () {

    }
}

export class FilterOperation {
    operationMethod: ISelect;
    operationType: ISelect;
}