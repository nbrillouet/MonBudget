import { WidgetCardChartBar } from "../chart/widget-card-chart-bar.model";
import { ISelectGroup, ISelect } from "../generics/select.model";
import { IMonthYear } from "../generics/date-time.model";

export class AsChart {
    asChartEvolution: AsChartEvolution;

    constructor() {
        this.asChartEvolution = new AsChartEvolution();
    }
}

export class AsChartEvolution {
    brut: AsChartEvolutionCdb;
    noIntTransfer: AsChartEvolutionCdb;
    customOtfs: AsChartEvolutionCustomOtf;

    constructor() {
        this.brut = new AsChartEvolutionCdb();
        this.noIntTransfer = new AsChartEvolutionCdb();
        this.customOtfs = new AsChartEvolutionCustomOtf();
    }
}

export class AsChartEvolutionCdb {
    debit: WidgetCardChartBar;
    credit: WidgetCardChartBar;
    balance: WidgetCardChartBar;
}

export class AsChartEvolutionCustomOtf {
    filter: AsChartEvolutionCustomOtfFilter=new AsChartEvolutionCustomOtfFilter();
    widgetCardChartBars: WidgetCardChartBar[]=null;
}

export class AsChartEvolutionCustomOtfFilter {
    selected: AsChartEvolutionCustomOtfFilterSelected;
    operationTypeFamilies: ISelectGroup[]= null;
    
    constructor() {
        this.selected = new AsChartEvolutionCustomOtfFilterSelected();
    }
}

export class AsChartEvolutionCustomOtfFilterSelected {
    idAccount: number = null;
    idUser: number = null;
    monthYear: IMonthYear;
    operationTypeFamilies: ISelect[] = null;
}

