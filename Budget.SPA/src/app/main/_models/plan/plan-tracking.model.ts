import { SelectYear, ISelect, ISelectCode } from "../generics/select.model";

export class PlanForTrackingValue {
    amountReal : number;
    amountPreview : number;
    gaugeValue : number;
}

export class PlanForTrackingPlanPosteValue extends PlanForTrackingValue{
    isAnnualPreview : boolean;
}

export class PlanForTracking extends PlanForTrackingValue {
    plan: SelectYear;
    postes: PosteForTracking[];
}

export class PosteForTracking extends PlanForTrackingValue {
    poste: ISelectCode;
    planPostes: PlanPosteForTracking[];
}

export class PlanPosteForTracking extends PlanForTrackingPlanPosteValue {
    idPlanPoste: number;
    label: string;
    planPostesUsers: PlanPosteUserForTracking[];
}

export class PlanPosteUserForTracking extends PlanForTrackingValue {
    firstName: string;
    percentage: number;
}

