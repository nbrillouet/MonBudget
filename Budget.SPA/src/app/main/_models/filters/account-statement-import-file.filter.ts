import { ComboSimple } from "../generics/combo.model";
import { ISelect, ISelectGroup } from "../generics/select.model";
import { Pagination } from "../pagination.model";
import { IUserForGroup } from "../user.model";

export class FilterAsifTableSelected {
    user: IUserForGroup= null;
    idImport: number;
    account: ISelect;
    asifState: ISelect;
    indexTabAsifState: number;
    asiBankAgencyLabel: string;
    asiDateImport: Date;
    pagination: Pagination;
    
    constructor () {
        this.idImport = null;
        this.account = null; 
        this.asifState =null;
        this.indexTabAsifState = 0;
        this.pagination = new Pagination();
    }
}

export class FilterAsifTableSelection {
    // asiBankAgencyLabel: string;
    // asiDateImport: Date;
    account: ISelect[];
    asifState: ISelect[];
    
    operationMethod: ISelect[]=null;
    operationTypeFamily: ISelectGroup[]=null;
    operationType: ISelectGroup[]=null;
    operation: ISelect[]=null;

    constructor () {
    }
}

export class FilterAsifDetail {
    idAsif: number;
    user: IUserForGroup;
}

