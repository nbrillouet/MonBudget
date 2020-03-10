import { ISelect, ISelectGroup } from "../generics/select.model";
import { IUserForGroup } from "../user.model";
import { Pagination } from "../pagination.model";

export class FilterOperationDetail {
    operationMethod: ISelect[];
    operationType: ISelect[];
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

    constructor () {

    }
}

export class FilterOperation {
    operationMethod: ISelect;
    operationType: ISelect;
}