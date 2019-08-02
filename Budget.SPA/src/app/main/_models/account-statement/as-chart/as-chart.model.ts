import { AsChartEvolution } from "./as-chart-evolution.model";
import { AsChartCategorisation } from "./as-chart-categorisation.model";


export class AsChart {
    asChartEvolution: AsChartEvolution;
    asChartCategorisation: AsChartCategorisation;

    constructor() {
        this.asChartEvolution = new AsChartEvolution();
        this.asChartCategorisation = new AsChartCategorisation();
    }
}



