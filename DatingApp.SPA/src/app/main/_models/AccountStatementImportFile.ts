import { IAccount } from "./Account";
import { ISelect } from "./Select";

export interface IAsifGroupByAccounts {
    accounts : IAccount[],
    idImport: number
}

export interface IAsifState {
    id : number,
    label : string
}

export interface IAccountStatementImportFile {
    id: number;
    operation : ISelect;
    operationMethod: ISelect;
    operationType: ISelect;
    operationTypeFamily: ISelect;
    operationPlace: ISelect;
    amountOperation : number;
}

// export interface IAccountStatementImport {
//     id : number;
//     idUser : number;
//     // User : User 
//     idBank : number;
//     // Bank : Bank 
//     fileImport : string;
//     dateImport : Date;
// }

// export interface IAsifsAccount {
    
    
// }