import { PlanPoste } from "../plan.model";
import { ComboMultiple } from "../generics/combo.model";
import { ISelect, ISelectGroup } from "../generics/select.model";

export class Plan {
    id : number;
    label: string;
    year: number;
    color: string;
}

export class PlanTable extends Plan {
    // datas : Plan[];
    // comboYear: ComboSimple<ISelect>;
}

export class PlanDetail {
    plan: Plan;
    users: ComboMultiple<ISelect>;
    accounts: ComboMultiple<ISelectGroup>;
    planNotAsCount: number;
    // planPostes: PlanPoste[];
}