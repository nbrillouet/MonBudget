export interface ISelect {
    id: number;
    label: string;
}

export interface ISelectGroup {
    id: number;
    label: string;
    selects: ISelect[];
}

export class SelectYear {
    id:number;
    label:string;
    year:number;
}

export interface ISelectColor {
    id: number;
    label: string;
    color: string;
}

export enum EnumSelectType {
    empty = 0,
    inconnu = 1,
    inconnue = 11,
    tous =2,
    toutes=22,
    aucun=3,
    aucune=33
}

