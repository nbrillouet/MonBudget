import { ComboSimple } from "../generics/combo.model";
import { ISelect, ISelectColor } from "../generics/select.model";
import { Pagination } from "../pagination.model";

export class FilterAsiTableSelected {
    idUser: number;
    idBank: number;
    indexTabBank: number;
    pagination: Pagination;

    constructor () {
        this.idUser = null;
        this.idBank = null;
        this.pagination = new Pagination();
        this.indexTabBank = 0;
        // this.pagination = new Pagination();
    }
}

export class FilterAsiTable {
    banks: ISelect[];
    selected: FilterAsiTableSelected;

    constructor () {

        this.selected = new FilterAsiTableSelected();
    }
}