import { ISelect } from "../generics/select.model";

export class BaseChart {
    datasets: DataSet[];
    labels: ISelect[];
}

export class DataSet {
    label:string;
    data:number[];
}

export class ChartValue {
    id:number;
    xValue: string;
    yValue: number;
}
