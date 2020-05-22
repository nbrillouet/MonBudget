
export class Pagination {
    currentPage: number;
    nbItemsPerPage: number;
    totalItems: number;
    totalPages: number;
    sortColumn: string;
    sortDirection: string;
    nbItemsPerPageOption: number[];

    constructor() {
        this.currentPage= 0;
        this.nbItemsPerPage= 15;
        this.totalItems = 0;
        this.totalPages = 0;
        this.sortColumn= 'id';
        this.sortDirection= 'asc';
        this.nbItemsPerPageOption = null;
    }
}

export class PaginatedResult<T> {
    result: T;
    pagination: Pagination;
}


