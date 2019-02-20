export interface ISelect {
    id: number;
    label: string;
}

export interface ISelectGroup {
    id: number;
    label: string;
    selects: ISelect[];
}

export enum EnumSelectType {
    Vide = -1,
    Tous = 1,
    Toutes = 2
}