import { ISelect } from "./generics/select.model";


export interface IAccountStatementImport {
    id : number;
    idUser : number;
    user : ISelect; 
    bankAgency : ISelect; 
    fileImport : string;
    dateImport : Date;
}