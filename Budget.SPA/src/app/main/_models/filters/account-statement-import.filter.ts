import { Pagination } from "../pagination.model";
import { IBankAgency } from "../referential/bank-agency.model";

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

export class FilterAsiTableSelection {
    bankAgencies: IBankAgency[];
    // selected: FilterAsiTableSelected;

    constructor () {

        // this.selected = new FilterAsiTableSelected();
    }
}