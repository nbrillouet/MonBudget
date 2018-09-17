export interface IPagination {
    currentPage: number;
    itemsPerPage: number;
    totalItems: number;
    totalPages: number;
    sortColumn: string;
    sortDirection: string;
}

export class PaginatedResult<T> {
    result: T;
    pagination: IPagination;
}


export interface IPageList<T> {
    datas:T[];
    pagination: IPagination;
}

export class Pagination {
    currentPage: number;
    itemsPerPage: number;
    totalItems: number;
    totalPages: number;
    sortColumn: string;
    sortDirection: string;
}

export class MatPagination {
    length : number;
    pageSize: number;
    pageSizeOption:[5,10,20];
    pageIndex:number;

}