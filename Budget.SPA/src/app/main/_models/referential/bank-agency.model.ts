import { IAccountForDetail } from "./account.model";
import { Select } from "../generics/select.model";
import { BankSubFamilyForDetail } from "./bank-sub-family.model";


export interface IBankGeneric {
    id: number;
    labelShort: string;
    labelLong: string;
    logoClassName: string;
}

export interface IBankAgency {
    id : number;
    label: string;
    bankSubFamily: IBankGeneric;
    bankFamily: IBankGeneric;
}

export interface IBankAgencyAccounts extends IBankAgency {

    accounts: IAccountForDetail[];
}

export class BankAgencyForDetail extends Select {
    // id : number;
    // label: string;
    bankSubFamily: BankSubFamilyForDetail;
    // bankFamily: IBankGeneric;
}