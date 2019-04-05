
export class Pagination {
    currentPage: number;
    nbItemsPerPage: number;
    totalItems: number;
    totalPages: number;
    sortColumn: string;
    sortDirection: string;

    constructor() {
        this.currentPage= 0;
        this.nbItemsPerPage= 15;
        this.sortColumn= 'id';
        this.sortDirection= 'asc';
        this.totalItems = 0;
        this.totalPages = 0;
    }
}

export class PaginatedResult<T> {
    result: T;
    pagination: Pagination;
}


