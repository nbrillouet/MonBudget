import { IPageList } from "../../../_models/pagination.model";
import { IAsGrid } from "../../../_models/account-statement.model";

export const SET_FILTER = 'set-filter';
export const SET_FILTER_SUCCESS = 'set-filter-success';

export class SetFilter { 
    static readonly type = SET_FILTER; 
    
    constructor(public filter: any) { } 
}
 
// export class DeleteCustomer {
//     static readonly type = DELETE_CUSTOMER;
 
//     constructor(public id: string) { }
// }

// export class loadAsGrid {
//     static readonly type = AS_LOAD;

//     constructor(public asGrid: IPageList<IAsGrid>) {}
// }