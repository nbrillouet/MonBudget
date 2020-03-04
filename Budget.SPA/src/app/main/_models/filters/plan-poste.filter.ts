import { Pagination } from "../pagination.model";

export class FilterPlanPosteTableSelected {
    idPlan: number;
    idPoste: number;
    label: string;
    pagination: Pagination;
    
    constructor () {

        this.pagination = new Pagination();
    }
}

export class FilterPlanPosteTableSelection {

    constructor () {

    }
}




export class PlanPosteDetailFilter {
    id: number;
    idPlan: number;
    idPoste: number;

    constructor () {
        this.id = 0;
        this.idPlan = 0;
        this.idPoste = 0;
    }
}

export class PlanPosteReferenceFilter {
    idPlanPoste: number;
    idReferenceTable: number;
    idPoste: number;
}