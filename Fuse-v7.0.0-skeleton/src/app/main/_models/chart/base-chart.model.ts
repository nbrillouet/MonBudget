import { ISelect } from "../generics/select.model";
import { XAxisTicksComponent } from "@swimlane/ngx-charts";

export class BaseChart {
    dataSets: DataSet[];
    labels: ISelect[];
    options: Options;
    colors: Color[];
}

export class DataSet {
    label:string;
    data:number[];
    backgroundColor:string[];
}

export class Color {
    backgroundColor: string[];
}

export class ChartValue {
    id:number;
    xValue: string;
    yValue: number;
}

export class Options {
    scales: Scales;
}

export class Scales {
    yAxes: YAxe[];
}

export class YAxe {
    display: boolean;
    ticks: Tick;
}

export class Tick {
    beginAtZero: boolean;
    display: boolean;
    min: number;
    max: number;
    steps: number;
    stepValue: number;
}
