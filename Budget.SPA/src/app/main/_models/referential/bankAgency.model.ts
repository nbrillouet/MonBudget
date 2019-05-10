import { IAccountForDetail } from "../account.model";

export interface IBankAgency {
    id : number;
    labelShort : string;
    labelLong : string;
    adviserFirstName : string;
    adviserLastName : string;
    adviserMail : string;
    adviserFixedPhone : string;
    adviserMobilePhone : string;
    logoClassName : string;
    folderFileSave : string;
}

export interface IBankAgencyAccounts {
    id : number;
    labelShort : string;
    labelLong : string;
    logoClassName : string;
    accounts: IAccountForDetail[];
}