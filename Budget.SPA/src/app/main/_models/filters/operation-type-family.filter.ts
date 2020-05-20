import { Pagination } from "../pagination.model";
import { ISelect, ISelectCode } from "../generics/select.model";
import { IUserForGroup } from "../user.model";

export class FilterOtfTableSelected {
    user: IUserForGroup = null;
    label: string = null;
    movement: ISelect = null;

    pagination: Pagination = new Pagination();
}

export class FilterOtfTableSelection {
    movement: ISelect[];

    constructor () {

    }
}

export class FilterOtfDetail {
    asset: ISelectCode[];
    movement: ISelect[]
}
