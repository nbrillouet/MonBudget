import { ComboSimple } from "../generics/combo.model";
import { ISelect } from "../generics/select.model";
import { IUserForGroup } from "../user.model";
import { Pagination } from "../pagination.model";

// export class PlanFilter {
//     yearSelected: number;

//     constructor (year: number) {
//         this.yearSelected = year; 
//     }
// }

export class PlanDetailFilter {
    id: number;

    constructor () {
        this.id = 0;
    }
}

export class FilterPlanTableSelected {
    user: IUserForGroup= null;
    year: number;
    pagination: Pagination = new Pagination();
}

export class FilterPlanTableSelection {
    year: number[];
}

