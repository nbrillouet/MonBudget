import { ComboSimple } from "../generics/combo.model";
import { ISelect } from "../generics/select.model";

export class PlanFilter {
    yearSelected: number;

    constructor (year: number) {
        this.yearSelected = year; //new Date().getFullYear(); //  2019;
    }
}

export class PlanDetailFilter {
    id: number;

    constructor () {
        this.id = 0;
    }
}

export class PlanTableComboFilter {
    years: ComboSimple<ISelect>;
}
