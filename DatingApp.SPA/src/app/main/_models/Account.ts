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