import { IUserForGroup } from "../user.model";
import { Pagination } from "../pagination.model";
import { ISelect } from "../generics/select.model";

export class FilterAccountTableSelected {
    user: IUserForGroup= null;
    number: string = null;
    label: string = null;
    bankFamily: ISelect[];

    pagination: Pagination;// = new Pagination();

    constructor(){
        this.pagination = new Pagination();
    }
}

export class FilterAccountTableSelection {
    bankFamily: ISelect[];
    number: string = null;
    label: string = null;

    constructor () {
    }
}

export class FilterAccountDetail {
    bankAgency : ISelect[];
    bankSubFamily: ISelect[];
    bankFamily: ISelect[];
    accountType: ISelect[];
}