import { AccountForDetail } from "app/main/_models/referential/account.model";
import { ISelect } from "app/main/_models/generics/select.model";

export const ACCOUNT_DETAIL_FILTER_LOAD = 'account-detail-filter-load';
export const ACCOUNT_DETAIL_FILTER_CLEAR = 'account-detail-filter-clear';

export const ACCOUNT_DETAIL_FILTER_CHANGE_BANK_FAMILY = 'account-detail-filter-change-bank-family';
export const ACCOUNT_DETAIL_FILTER_CHANGE_BANK_SUB_FAMILY = 'account-detail-filter-change-bank-sub-family';

export class LoadAccountDetailFilter {
    static readonly type = ACCOUNT_DETAIL_FILTER_LOAD;
 
    constructor(public payload: AccountForDetail) { }
}

export class ClearAccountDetailFilter {
    static readonly type = ACCOUNT_DETAIL_FILTER_CLEAR;
}

//CHANGE BANK FAMILY//
export class AccountDetailFilterChangeBankFamily {
    static readonly type = ACCOUNT_DETAIL_FILTER_CHANGE_BANK_FAMILY;
    constructor(public payload: ISelect) { }
}

//CHANGE BANK SUB FAMILY//
export class AccountDetailFilterChangeBankSubFamily {
    static readonly type = ACCOUNT_DETAIL_FILTER_CHANGE_BANK_SUB_FAMILY;
    constructor(public payload: ISelect) { }
}