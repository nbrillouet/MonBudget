import { ISelect } from "../generics/select.model";

export class AsiTable {
    id : number;
    idUser : number;
    user : ISelect; 
    bankAgency : ISelect; 
    fileImport : string;
    dateImport : Date;
}

