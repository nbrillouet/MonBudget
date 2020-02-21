import { IMonthYear, DateTimeFactory } from "../generics/date-time.model";

export class FilterAccountMonthYear {
    idAccount: number = null;
    monthYear: IMonthYear = this.getMonthYear();

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