import { ComboSimple } from "../generics/combo.model";
import { ISelect, ISelectGroup } from "../generics/select.model";
import { Pagination } from "../pagination.model";
import { IUserForGroup } from "../user.model";
import { FilterAsDetail } from "./account-statement.filter";

export class FilterAsifTableSelected {
    user: IUserForGroup= null;
    idImport: number;
    account: ISelect;
    state: ISelect;
    indexTabAsifState: number;
    asiBankAgencyLabel: string;
    asiDateImport: Date;
    pagination: Pagination;
    
    constructor () {
        this.idImport = null;
        this.account = null; 
        this.state =null;
        this.indexTabAsifState = 0;
        this.pagination = new Pagination();
    }
}

export class FilterAsifTableSelection {
    // asiBankAgencyLabel: string;
    // asiDateImport: Date;
    account: ISelect[];
    state: ISelect[];
    
    operationMethod: ISelect[]=null;
    operationTypeFamily: ISelectGroup[]=null;
    operationType: ISelectGroup[]=null;
    operation: ISelect[]=null;

    constructor () {
    }
}

export class FilterAsifDetail extends FilterAsDetail {
    // operation : ISelect[];
    // operationMethod: ISelect[];
    // operationType: ISelect[];
    // operationTypeFamily: ISelect[];
    // operationPlace: ISelect[];
    // operationTransverse: ISelect[];
}

// export class FilterAsifDetail {
//     idAsif: number;
//     user: IUserForGroup;
// }

