import { IPagination, Pagination } from "../pagination.model";
import { ISelect } from "../select.model";
import { IMonth, IMonthYear, DateTimeFactory } from "../date-time.model";
import { getMatIconFailedToSanitizeError } from "@angular/material";

export class loader<T> {
    loading: boolean;
    loaded: boolean;
    filter:T;
}

export class FilterAccountStatement {
    idAccount: number;
    pagination: Pagination;

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
        console.log('MONTHHHHHH',currentDate);
        currentDate.setMonth(currentDate.getMonth()-1);
        console.log('MONTHHHHHHHHHH',currentDate);
        var id = currentDate.getMonth()+1;
        console.log('MONTHHHHHHHHHH',id);
        let month =  DateTimeFactory.getMonths.filter(x=>x.id===id)[0];
        let monthYear = <IMonthYear> {
            month: month,
            year: currentDate.getFullYear() 
        }
        return monthYear;
    }

}


