import { Pagination } from "../pagination.model";
import { ISelect, ISelectGroup } from "../generics/select.model";
import { IUserForGroup } from "../user.model";
import { FilterDateRange } from "./mini-filter/date-range.filter";
import { FilterNumberRange } from "./mini-filter/number-range.filter";
import { FilterAccountMonthYear } from "./account-month-year.filter";

export class FilterAsTableSelected extends FilterAccountMonthYear {
    user: IUserForGroup= null;
    operationMethod: ISelect[] = null;
    operationTypeFamily: ISelect[] = null;
    operationType: ISelect[] = null;
    operation: ISelect[] = null;
    dateIntegration: FilterDateRange = null; 
    amountOperation: FilterNumberRange = null;
    isWithItTransfer: boolean;
    pagination: Pagination = new Pagination();
}

export enum EnumFilterTableSelectedType {
    AS=0
}

export class FilterAsTableSelection {
    operationMethod: ISelect[]=null;
    operationTypeFamily: ISelectGroup[]=null;
    operationType: ISelectGroup[]=null;
    operation: ISelect[]=null;

    // selected : FilterAsTableSelected;

    constructor () {
        // this.selected = new FilterAsTableSelected();
    }
}

export class FilterAsDetail {
    idAs: number;
    user: IUserForGroup;
}



