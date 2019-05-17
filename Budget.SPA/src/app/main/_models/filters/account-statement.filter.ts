import { Pagination } from "../pagination.model";
import { IMonthYear, DateTimeFactory } from "../generics/date-time.model";
import { ISelect, ISelectGroup } from "../generics/select.model";
import { IUserForGroup } from "../user.model";

export class FilterAsTableSelected {
    idAccount: number = null;
    user: IUserForGroup= null;
    operationMethods: ISelect[] = null;
    operationTypeFamilies: ISelect[] = null;
    operationTypes: ISelect[] = null;
    operations: ISelect[] = null;
    dateIntegrationMin: Date = null; 
    dateIntegrationMax: Date = null; 
    amountMin: number = null;
    amountMax: number = null;
    monthYear: IMonthYear = this.getMonthYear();
    isWithItTransfer: boolean;
    pagination: Pagination = null;

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

export class FilterAsTable {
    operationMethods: ISelect[];
    operationTypeFamilies: ISelectGroup[];
    operationTypes: ISelectGroup[];
    operations: ISelect[];

    selected : FilterAsTableSelected;

    constructor () {
        this.selected = new FilterAsTableSelected();
    }
}

export class FilterAsDetail {
    idAs: number;
    user: IUserForGroup;
}



