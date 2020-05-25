import { AccountForDetail } from "app/main/_models/referential/account.model";

export const ACCOUNT_DETAIL_FILTER_LOAD = 'account-detail-filter-load';
export const ACCOUNT_DETAIL_FILTER_CLEAR = 'account-detail-filter-clear';

export class LoadAccountDetailFilter {
    static readonly type = ACCOUNT_DETAIL_FILTER_LOAD;
 
    constructor(public payload: AccountForDetail) { }
}

export class ClearAccountDetailFilter {
    static readonly type = ACCOUNT_DETAIL_FILTER_CLEAR;
}