import { Pagination } from "../pagination.model";
import { IMonthYear, DateTimeFactory } from "../date-time.model";
import { ISelect } from "../generics/select.model";

export class FilterAccountStatement {
    idAccount: number;
    pagination: Pagination;
    filter: AsFilter;
    operations: ISelect[];
    operationSelected: ISelect[];

    operationMethods: ISelect[];
    operationMethodSelected: ISelect[];

    operationTypeFamilySelected: ISelect[];
    operationTypeSelected: ISelect[];

    dateIntegrationMin: Date = null; //this.getMinDate();
    dateIntegrationMax: Date = null; //this.getMaxDate();

    amountMin: number = null;
    amountMax: number = null;
    
    monthYearSelected: IMonthYear = this.getMonthYear();
    isWithItTransfer: boolean;

    getMinDate() {
        var currentDate = new Date();
        currentDate.setMonth(currentDate.getMonth()-1);
        var dt= new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
        
        dt.setMinutes(dt.getMinutes() - dt.getTimezoneOffset());
        return dt;
    }

    getMaxDate() {
        var currentDate = new Date();
        currentDate.setMonth(currentDate.getMonth()-1);
        var dt= new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
        
        dt.setMinutes(dt.getMinutes() - dt.getTimezoneOffset());
        return dt;
    }

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

export class AsFilter extends FilterAccountStatement 
{
    constructor() {
        super();
        this.pagination = new Pagination();
    }
}


