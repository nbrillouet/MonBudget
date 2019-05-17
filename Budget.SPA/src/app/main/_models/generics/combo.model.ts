import { ISelect, ISelectGroup } from "./select.model";


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

// export class ComboMultipleGroup {
//     list: ISelectGroup[];
//     listSelected: ISelect[];

//     constructor() {
//         this.list=null;
//         this.listSelected=null;
//     }
// }