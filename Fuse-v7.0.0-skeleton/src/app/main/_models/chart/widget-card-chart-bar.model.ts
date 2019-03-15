import { BaseChart } from "./base-chart.model";

export class WidgetCardChartBar {
    chart: BaseChart;
    title: WidgetCardChartBarTitle;
    isLoaded: boolean;

    constructor () {
        this.chart = null;
        this.title = null;
        this.isLoaded =false;
    }
}

export class WidgetCardChartBarTitle {
    label: string;
    averageAmount: number;
    ratioNumber: number;
    ratioLabel: string;
}
