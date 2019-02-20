import { IUserForLabel } from "./user.model";
import { ComboSimple, ComboMultiple } from "./generics/combo.model";
import { ISelect, ISelectGroup, SelectYear } from "./generics/select.model";

export class PlanPostes {
    recettes: PlanPoste;
    depenseFixes: PlanPoste;//PlanPosteForList[];
    depenseVariables: PlanPoste; //PlanPosteForList[];
}

export class PlanPoste {
    poste: ISelect;
    list: PlanPosteForList[];
}

export class PlanPosteForList {
    id: number;
    idPlan:number;
    idPoste: number;
    label: string;
}

export class PlanPosteForDetail {
    id: number;
    idPlan: number;
    idPoste: number;
    label: string;
    poste: ISelect;
    referenceTable: ComboSimple<ISelect>;
    planPosteUser: PlanPosteUserForDetail[];
    planPosteReference: ComboMultiple<ISelectGroup>;
    planPosteFrequencies: PlanPosteFrequencyForDetail[];
}

export class PlanPosteForDetailSave {
    id: number;
    idPlan: number;
    idPoste: number;
    label: string;
    referenceTable: ISelect[];
    planPosteUser: PlanPosteUserForDetail[];
    planPosteReference: ISelect[];
    planPosteFrequencies: PlanPosteFrequencyForDetail[];
}

export class PlanPosteUserForDetail {
    id: number;
    idPlanUser: number;
    user: IUserForLabel;
    isSalaryEstimatedPart: boolean;
    percentage: number;
}

export class PlanPosteFrequencyForDetail {
    id: number;
    frequency: Frequency;
    previewAmount: number;
}

export class Frequency {
    id: number;
    monthNumber: number;
    monthLabel: string;
    monthLabelShort: string;
}


