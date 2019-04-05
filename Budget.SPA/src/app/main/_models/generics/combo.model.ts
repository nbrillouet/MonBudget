import { ISelect } from "./select.model";


export class ComboSimple<T> {
    list: T[];
    selected: T;
}

export class ComboMultiple<T> {
    list: T[];
    listSelected: T[];
}