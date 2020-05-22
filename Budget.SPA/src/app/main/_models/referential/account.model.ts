import { IBankAgency } from "./bank-agency.model";
import { ISelect } from "../generics/select.model";
import { ComboSimple } from "../generics/combo.model";

export interface IAccount {
    id : number,
    number : string,
    label : string,
    idBank :number,
    bankAgency : IBankAgency,
    startAmount: number,
    idAccountType : number,
    accountType: ISelect,
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
    bankAgency : ComboSimple<ISelect>,
    bankSubFamily: ComboSimple<ISelect>,
    bankFamily: ComboSimple<ISelect>,
    startAmount: number,
    accountType: ComboSimple<ISelect>,
    alertThreshold: number,
    linkedUsers: ISelect[]
}

export interface AreaImport {
    historicView: boolean,
    fileView: boolean,
    errorView: boolean,
    loadingView:boolean
}

export class AccountForTable {
    id : number;
    number : string;
    label : string;
    bankAgency : ISelect;
    bankSubFamily: ISelect;
    bankFamily: ISelect;
    startAmount: number;
    accountType: ISelect;
    alertThreshold: number;
    linkedUsers: ISelect[];
    solde: number;
}