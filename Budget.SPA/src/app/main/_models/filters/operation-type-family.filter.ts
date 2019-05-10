import { Pagination } from "../pagination.model";
import { ISelect } from "../generics/select.model";
import { IUserForGroup } from "../user.model";

export class FilterOtfTableSelected {
    user: IUserForGroup = null;
    label: string = null;
    movement: ISelect = null;

    pagination: Pagination = new Pagination();
}

export class FilterOtfTable {
    movements: ISelect[];

    selected : FilterOtfTableSelected;

    constructor () {
        this.selected = new FilterOtfTableSelected();
    }
}