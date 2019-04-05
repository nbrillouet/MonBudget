import { IMonthYear } from "../generics/date-time.model";

export class PlanAmountFilter {
    monthYear: IMonthYear;
    idPlanPoste: number;
    idPlan: number;
    idPoste: number;

    constructor () {
        this.monthYear = null; 
        this.idPlanPoste = null;
        this.idPlan = null;
        this.idPoste = null;
    }
}