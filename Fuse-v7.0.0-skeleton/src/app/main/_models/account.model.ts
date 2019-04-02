import { IAccountType } from "./account-type.model";
import { ISelect } from "./generics/select.model";
import { IBankAgency } from "./referential/bankAgency.model";

export interface IAccount {
    id : number,
    number : string,
    label : string,
    idBank :number,
    bankAgency : IBankAgency,
    startAmount: number,
    idAccountType : number,
    accountType: IAccountType,
    alertThreshold: number
}

export interface IAccountForLabel {
    id : number,
    number : string,
    label : string
}

export interface IAccountForDetail {
    id : number,
    number : string,
    label : string,
    bankAgency : ISelect,
    startAmount: number,
    accountType: ISelect,
    alertThreshold: number,
    linkedUsers: ISelect[]
}

export interface AreaImport {
    historicView: boolean,
    fileView: boolean,
    errorView: boolean,
    loadingView:boolean
}

