import { IUserForGroup } from "../user.model";
import { Pagination } from "../pagination.model";
import { ISelect } from "../generics/select.model";

export class FilterOtTableSelected {
    user: IUserForGroup = null;
    label: string = null;
    operationTypeFamily: ISelect = null;
    pagination: Pagination = new Pagination();
}

export class FilterOtTableSelection {
    operationTypeFamily: ISelect[];
    // selected : FilterOtTableSelected;

    constructor () {
        // this.selected = new FilterOtTableSelected();
    }
}