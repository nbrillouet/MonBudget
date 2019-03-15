import { BaseChart } from "../chart/base-chart.model";
import { WidgetCardChartBar } from "../chart/widget-card-chart-bar.model";

export class AsChart {
    asChartEvolution: AsChartEvolution;

    constructor() {
        this.asChartEvolution = new AsChartEvolution();
    }
}

export class AsChartEvolution {
    brut: AsChartEvolutionCdb;
    noIntTransfer: AsChartEvolutionCdb;
    constructor() {
        this.brut = new AsChartEvolutionCdb();
        this.noIntTransfer = new AsChartEvolutionCdb();
    }
}

export class AsChartEvolutionCdb {
    debit: WidgetCardChartBar;
    credit: WidgetCardChartBar;
    balance: WidgetCardChartBar;
    
}

