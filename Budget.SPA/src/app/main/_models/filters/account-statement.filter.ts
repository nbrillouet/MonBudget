import { Pagination } from "../pagination.model";
import { IMonthYear, DateTimeFactory } from "../generics/date-time.model";
import { ISelect, ISelectGroup } from "../generics/select.model";
import { IUserForGroup } from "../user.model";
import { FilterDateRange } from "./mini-filter/date-range.filter";
import { FilterNumberRange } from "./mini-filter/number-range.filter";

export class FilterAsTableSelected {
    idAccount: number = null;
    user: IUserForGroup= null;
    operationMethod: ISelect[] = null;
    operationTypeFamily: ISelect[] = null;
    operationType: ISelect[] = null;
    operation: ISelect[] = null;
    dateIntegration: FilterDateRange = null; 
    amountOperation: FilterNumberRange = null;
    monthYear: IMonthYear = this.getMonthYear();
    isWithItTransfer: boolean;
    pagination: Pagination = new Pagination();
    enumFilterTableSelectedType : EnumFilterTableSelectedType;
    getMonthYear() {
        var currentDate = new Date();
        currentDate.setMonth(currentDate.getMonth()-1);
        var id = currentDate.getMonth()+1;
        let month =  DateTimeFactory.getMonths.filter(x=>x.id===id)[0];
        let monthYear = <IMonthYear> {
            month: month,
            year: currentDate.getFullYear() 
        }
        return monthYear;
    }
   
}

export enum EnumFilterTableSelectedType {
    AS=0
}

export class FilterAsTable {
    operationMethod: ISelect[];
    operationTypeFamily: ISelectGroup[];
    operationType: ISelectGroup[];
    operation: ISelect[];

    selected : FilterAsTableSelected;

    constructor () {
        this.selected = new FilterAsTableSelected();
    }
}

export class FilterAsDetail {
    idAs: number;
    user: IUserForGroup;
}



