import { IAccountForDetail } from "./account.model";


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