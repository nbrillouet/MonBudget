export interface ISelect {
    id: number;
    label: string;
}

export interface ISelectGroup extends ISelect {
    selects: ISelect[];
}

export class SelectYear {
    id:number;
    label:string;
    year:number;
}

export interface ISelectCode {
    id: number;
    label: string;
    code: string;
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

export class SelectNameValue<T> {
    id: number;
    name: string;
    value: T;
}

export class SelectNameValueGroup<T> {
    id: number;
    name: string;
    selects: SelectNameValue<T>[];
}

