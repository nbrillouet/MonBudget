import { ISelect } from "./select.model";


export interface IAccountStatementImport {
    id : number;
    idUser : number;
    user : ISelect; 
    bank : ISelect; 
    fileImport : string;
    dateImport : Date;
}