import { IAccountType } from "./account-type.model";
import { IBank } from "./bank.model";
import { IUserForLabel } from "./user.model";
import { ISelect } from "./select.model";

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

export interface IAccountForDetail {
    id : number,
    number : string,
    label : string,
    bank : ISelect,
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

