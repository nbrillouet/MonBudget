import { ISelect, SelectNameValue } from "./select.model";

export class ComboSimple<T> {
    list: T[];
    selected: ISelect;

    constructor() {
        this.list=null;
        this.selected=null;
    }
}

export class ComboMultiple<T> {
    list: T[];
    listSelected: ISelect[];

    constructor() {
        this.list=null;
        this.listSelected=null;
    }
}

// export class ComboMultipleValue<T,U> {
//     list: ISelectValue<T>[];
//     listSelected: ISelectValue<T>[];
// }

export class ComboNameValueMultiple<T,U> {
    list: T[];
    listSelected: SelectNameValue<U>[];
}

