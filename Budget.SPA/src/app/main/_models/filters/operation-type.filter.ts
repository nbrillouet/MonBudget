import { IUserForGroup } from "../user.model";
import { Pagination } from "../pagination.model";
import { ISelect, ISelectGroup } from "../generics/select.model";

export class FilterOtDetail {
    operationTypeFamily: ISelectGroup[];
}

export class FilterOtTableSelected {
    user: IUserForGroup = null;
    label: string = null;
    operationTypeFamily: ISelect = null;
    pagination: Pagination = new Pagination();
}

export class FilterOtTableSelection {
    operationTypeFamily: ISelect[];

    constructor () {

    }
}