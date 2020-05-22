import { IUserForGroup } from "../user.model";
import { Pagination } from "../pagination.model";

export class FilterAccountTableSelected {
    user: IUserForGroup= null;
    accountNumber: string = null;
    accountName: string = null;
    pagination: Pagination = new Pagination();
}

export class FilterAccountTableSelection {
    accountNumber: string = null;
    accountName: string = null;

    constructor () {
    }
}