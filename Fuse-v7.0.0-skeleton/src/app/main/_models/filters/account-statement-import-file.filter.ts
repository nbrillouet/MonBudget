import { ComboSimple } from "../generics/combo.model";
import { ISelect } from "../generics/select.model";
import { Pagination } from "../pagination.model";

export class FilterAsifTableSelected {
    idImport: number;
    account: ISelect;
    asifState: ISelect;
    indexTabAsifState: number;
    pagination: Pagination;
    
    constructor () {
        this.idImport = null;
        this.account = null; 
        this.asifState =null;
        this.indexTabAsifState = 0;
        this.pagination = new Pagination();
    }
}

export class FilterAsifTable {
    asiBankLabel: string;
    asiDateImport: Date;
    accounts: ISelect[];
    asifStates: ISelect[];
    selected : FilterAsifTableSelected;

    constructor () {
        this.selected = new FilterAsifTableSelected();
    }
}

