import { Scheduler } from "rxjs";
import { PieChart } from "./pie-chart.model";
import { ComboMultiple, ComboNameValueMultiple,} from "../generics/combo.model";
import { ISelect, SelectNameValue, SelectNameValueGroup } from "../generics/select.model";

export class WidgetCardChartPieSelect {
    pieChart: PieChart;
    data: DataPieChart;
    isLoaded: boolean;

    constructor (colors:string[]) {
        this.pieChart = new PieChart(colors);
        this.data = null;
        this.isLoaded =false;
    }
}

export class DataPieChart {
    title : string;
    ranges:  ComboNameValueMultiple<SelectNameValueGroup<number>, number>; // ComboMultipleValue<number>;
    mainChart: SelectNameValue<number>[];
}

