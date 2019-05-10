import { IUserForGroup } from "../user.model";
import { Pagination } from "../pagination.model";
import { ISelect } from "../generics/select.model";

export class FilterOtTableSelected {
    user: IUserForGroup = null;
    label: string = null;
    otf: ISelect = null;
    pagination: Pagination = new Pagination();
}

export class FilterOtTable {
    otfs: ISelect[];
    selected : FilterOtTableSelected;

    constructor () {
        this.selected = new FilterOtTableSelected();
    }
}