import { Pagination } from "../pagination.model";

export class FilterUserTableSelected {
    keyword: number;
    pagination: Pagination;
    
    constructor () {
        this.keyword = null;
        this.pagination = new Pagination();
    }
}

export class FilterUserTable {
    selected : FilterUserTableSelected;

    constructor () {
        this.selected = new FilterUserTableSelected();
    }
}