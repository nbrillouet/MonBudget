import { ISelect } from "./select.model";


export class ComboSimple<T> {
    list: T[];
    selected: T;

    constructor() {
        this.list=null;
        this.selected=null;
    }
}

export class ComboMultiple<T> {
    list: T[];
    listSelected: T[];

    constructor() {
        this.list=null;
        this.listSelected=null;
    }
}