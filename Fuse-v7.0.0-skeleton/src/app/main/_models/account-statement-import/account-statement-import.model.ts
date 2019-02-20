import { ISelect } from "../generics/select.model";

export class AsiTable {
    id : number;
    idUser : number;
    user : ISelect; 
    bank : ISelect; 
    fileImport : string;
    dateImport : Date;
}

