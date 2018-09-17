import { IAccountForLabel } from "./Account";

export interface IBank {
    id : number;
    labelBankShort : string;
    labelBankLong : string;
    addressBank : string;
    postalCodeBank : number;
    adviserFirstName : string;
    adviserLastName : string;
    adviserMail : string;
    adviserFixedPhone : string;
    adviserMobilePhone : string;
    logoClassName : string;
    folderFileSave : string;
}

export interface IBankAccounts {
    id : number;
    labelBankShort : string;
    labelBankLong : string;
    accounts: IAccountForLabel[];
}