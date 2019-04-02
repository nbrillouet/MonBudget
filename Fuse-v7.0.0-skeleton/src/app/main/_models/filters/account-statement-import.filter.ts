import { ComboSimple } from "../generics/combo.model";
import { ISelect, ISelectColor } from "../generics/select.model";
import { Pagination } from "../pagination.model";

export class FilterAsiTableSelected {
    idUser: number;
    idBankAgency: number;
    indexTabBankAgency: number;
    pagination: Pagination;

    constructor () {
        this.idUser = null;
        this.idBankAgency = null;
        this.pagination = new Pagination();
        this.indexTabBankAgency = 0;
        // this.pagination = new Pagination();
    }
}

export class FilterAsiTable {
    bankAgencies: ISelect[];
    selected: FilterAsiTableSelected;

    constructor () {

        this.selected = new FilterAsiTableSelected();
    }
}