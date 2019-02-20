export interface IMonth {
    id: number;
    label: string;
}

export interface IMonthYear {
    month: IMonth;
    year: number;
}

export class DateTimeFactory {
    
    public static get getMonths() : IMonth[] {
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
