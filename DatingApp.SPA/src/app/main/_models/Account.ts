import { IAccountType } from "./AccountType";
import { IBank } from "./Bank";

export interface IAccount {
    id : number,
    number : string,
    Label : string,
    IdBank :number,
    Bank : IBank,
    StartAmount: number,
    idAccountType : number,
    accountType: IAccountType,
    alertThreshold: number
}

export interface AreaImport {
    historicView: boolean,
    fileView: boolean,
    errorView: boolean,
    loadingView:boolean
}