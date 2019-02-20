import { ISelect, SelectYear } from "./generics/select.model";

// export interface IMonth {
//     id: number;
//     label: string;
// }

export interface IMonthYear {
    month: ISelect;
    year: number;
}

export class MonthYear {
    month:ISelect;
    year:SelectYear;
}

export class DateTimeFactory {
    
    public static get getMonths() : ISelect[] {
        return [
            {id:1,label:'Jan'},
            {id:2,label:'Fev'},
            {id:3,label:'Mar'},
            {id:4,label:'Avr'},
            {id:5,label:'Mai'},
            {id:6,label:'Jui'},
            {id:7,label:'Jui'},
            {id:8,label:'Aou'},
            {id:9,label:'Sep'},
            {id:10,label:'Oct'},
            {id:11,label:'Nov'},
            {id:12,label:'Dec'}
        ];
    };
}
