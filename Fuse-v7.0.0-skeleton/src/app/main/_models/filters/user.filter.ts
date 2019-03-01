import { Pagination } from "../pagination.model";

export class FilterUserTableSelected {
    // idImport: number;
    // account: ISelect;
    // asifState: ISelect;
    // indexTabAsifState: number;
    keyword: number;
    pagination: Pagination;
    
    constructor () {
        // this.idImport = null;
        // this.account = null; 
        // this.asifState =null;
        // this.indexTabAsifState = 0;
        this.keyword = null;
        this.pagination = new Pagination();
    }
}

export class FilterUserTable {
    // asiBankLabel: string;
    // asiDateImport: Date;
    // accounts: ISelect[];
    // asifStates: ISelect[];
    selected : FilterUserTableSelected;

    constructor () {
        this.selected = new FilterUserTableSelected();
    }
}