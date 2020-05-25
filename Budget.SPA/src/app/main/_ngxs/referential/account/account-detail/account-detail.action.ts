import { FilterForDetail } from "app/main/_models/filters/shared/filterDetail.filter";
import { AccountForDetail } from "app/main/_models/referential/account.model";

export const ACCOUNT_DETAIL_LOAD = 'account-detail-load';
export const ACCOUNT_DETAIL_SYNCHRONIZE = 'account-detail-synchronize';
export const ACCOUNT_DETAIL_CLEAR = 'account-detail-clear';

export class LoadAccountDetail {
    static readonly type = ACCOUNT_DETAIL_LOAD;
    
    constructor(public payload: FilterForDetail) { }
}

export class SynchronizeAccountDetail {
    static readonly type = ACCOUNT_DETAIL_SYNCHRONIZE;

    constructor(public payload: AccountForDetail) { }
}

export class ClearAccountDetail {
    static readonly type = ACCOUNT_DETAIL_CLEAR;
}

// import { IAccountForDetail } from "app/main/_models/referential/account.model";
// import { ISelect } from "app/main/_models/generics/select.model";

// export const ACCOUNT_FOR_DETAIL_LOAD = 'account-for-detail-load';
// // export const ACCOUNT_FOR_DETAIL_LOAD_SUCCESS = 'account-for-detail-load-success';
// export const ACCOUNT_FOR_DETAIL_CLEAR = 'account-for-detail-clear';
// export const ACCOUNT_FOR_DETAIL_BANK_FAMILY_CHANGE = 'account-for-detail-bank-family-change';
// // export const ACCOUNT_FOR_DETAIL_BANK_FAMILY_CHANGE_SUCCESS = 'account-for-detail-bank-family-change-success';
// export const ACCOUNT_FOR_DETAIL_BANK_SUB_FAMILY_CHANGE = 'account-for-detail-bank-sub-family-change';
// // export const ACCOUNT_FOR_DETAIL_BANK_SUB_FAMILY_CHANGE_SUCCESS = 'account-for-detail-bank-sub-family-change-success';


// export class LoadAccountForDetail {
//     static readonly type = ACCOUNT_FOR_DETAIL_LOAD;
 
//     constructor(public payload: number) { }
// }

// // export class LoadAccountForDetailSuccess {
// //     static readonly type = ACCOUNT_FOR_DETAIL_LOAD_SUCCESS;
 
// //     constructor(public payload: IAccountForDetail) { }
// // }

// export class ClearAccountForDetail {
//     static readonly type = ACCOUNT_FOR_DETAIL_CLEAR;
// }

// //BankFamily CHANGE
// export class AccountForDetailChangeBankFamily {
//     static readonly type = ACCOUNT_FOR_DETAIL_BANK_FAMILY_CHANGE;
//     constructor(public payload: ISelect) { }
// }

// // export class AccountForDetailChangeBankFamilySuccess {
// //     static readonly type = ACCOUNT_FOR_DETAIL_BANK_FAMILY_CHANGE_SUCCESS;
 
// //     constructor(public payload: ISelect[]) { }
// // }

// //BankFamily CHANGE
// export class AccountForDetailChangeBankSubFamily {
//     static readonly type = ACCOUNT_FOR_DETAIL_BANK_SUB_FAMILY_CHANGE;
//     constructor(public payload: ISelect) { }
// }

// // export class AccountForDetailChangeBankSubFamilySuccess {
// //     static readonly type = ACCOUNT_FOR_DETAIL_BANK_SUB_FAMILY_CHANGE_SUCCESS;
 
// //     constructor(public payload: ISelect[]) { }
// // }