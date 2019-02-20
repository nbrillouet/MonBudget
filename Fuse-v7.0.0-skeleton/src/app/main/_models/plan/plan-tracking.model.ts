import { SelectYear, ISelect } from "../generics/select.model";

export class PlanForTrackingValue {
    amountReal : number;
    amountPreview : number;
    gaugeValue : number;
}

export class PlanForTracking extends PlanForTrackingValue {
    plan: SelectYear;
    postes: PosteForTracking[];
}

export class PosteForTracking extends PlanForTrackingValue {
    poste: ISelect;
    planPostes: PlanPosteForTracking[];
}

export class PlanPosteForTracking extends PlanForTrackingValue {
    idPlanPoste: number;
    label: string;
    planPostesUsers: PlanPosteUserForTracking[];
}

export class PlanPosteUserForTracking extends PlanForTrackingValue {
    firstName: string;
    percentage: number;
}

