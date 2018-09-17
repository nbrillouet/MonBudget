import { IAccountType } from "./AccountType";
import { IBank } from "./Bank";

export interface IAccount {
    id : number,
    number : string,
    label : string,
    idBank :number,
    bank : IBank,
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

export interface AreaImport {
    historicView: boolean,
    fileView: boolean,
    errorView: boolean,
    loadingView:boolean
}

