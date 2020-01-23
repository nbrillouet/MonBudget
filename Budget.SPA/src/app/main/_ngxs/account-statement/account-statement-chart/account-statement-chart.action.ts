import { FilterAsTableSelected } from "app/main/_models/filters/account-statement.filter";
import { AsChartEvolutionCdb, AsChartEvolutionCustomOtfFilter, AsChartEvolutionCustomOtfFilterSelected } from "app/main/_models/account-statement/as-chart/as-chart-evolution.model";
import { WidgetCardChartBar } from "app/main/_models/chart/widget-card-chart-bar.model";
import { AsChartCategorisationSelect } from "app/main/_models/account-statement/as-chart/as-chart-categorisation.model";

export const AS_CHART_EVOLUTION_LOAD = 'as-chart-evolution-load';
// export const AS_CHART_EVOLUTION_LOAD_SUCCESS = 'as-chart-evolution-load-success';

export const AS_CHART_EVOLUTION_BRUT_LOAD = 'as-chart-evolution-brut-load';
// export const AS_CHART_EVOLUTION_BRUT_LOAD_SUCCESS = 'as-chart-evolution-brut-load-success';

export const AS_CHART_EVOLUTION_NO_INT_TRANSFER_LOAD = 'as-chart-evolution-no-int-transfer-load';
// export const AS_CHART_EVOLUTION_BRUT_NO_INT_TRANSFER_SUCCESS = 'as-chart-evolution-no-int-transfer-load-success';

export const AS_CHART_EVOLUTION_CUSTOM_OTF_LOAD = 'as-chart-evolution-custom-otf-load';
// export const AS_CHART_EVOLUTION_CUSTOM_OTF_LOAD_SUCCESS = 'as-chart-evolution-custom-otf-load-success';

export const AS_CHART_EVOLUTION_CUSTOM_OTF_FILTER_LOAD = 'as-chart-evolution-custom-otf-filter-load';
// export const AS_CHART_EVOLUTION_CUSTOM_OTF_FILTER_LOAD_SUCCESS = 'as-chart-evolution-custom-otf-filter-load-success';

export const AS_CHART_EVOLUTION_CUSTOM_OTF_FILTER_UPDATE = 'as-chart-evolution-custom-otf-filter-update';
// export const AS_CHART_EVOLUTION_CUSTOM_OTF_FILTER_UPDATE_SUCCESS = 'as-chart-evolution-custom-otf-filter-update-success';


export const AS_CHART_CATEGORISATION_LOAD = 'as-chart-categorisation-load';
// export const AS_CHART_CATEGORISATION_LOAD_SUCCESS = 'as-chart-categorisation-load-success'

export const AS_CHART_CATEGORISATION_DEBIT_LOAD = 'as-chart-categorisation-debit-load';
// export const AS_CHART_CATEGORISATION_DEBIT_LOAD_SUCCESS = 'as-chart-categorisation-debit-load-success';


export class LoadAsChartEvolution {
    static readonly type = AS_CHART_EVOLUTION_LOAD;
 
    constructor(public payload: FilterAsTableSelected) { }
}

// export class LoadAsChartEvolutionSuccess {
//     static readonly type = AS_CHART_EVOLUTION_LOAD_SUCCESS;
 
//     constructor() { }
// }


export class LoadAsChartEvolutionBrut {
    static readonly type = AS_CHART_EVOLUTION_BRUT_LOAD;
 
    constructor(public payload: FilterAsTableSelected) { }
}

// export class LoadAsChartEvolutionBrutSuccess {
//     static readonly type = AS_CHART_EVOLUTION_BRUT_LOAD_SUCCESS;
 
//     constructor(public payload: AsChartEvolutionCdb) { }
// }

export class LoadAsChartEvolutionNoIntTransfer {
    static readonly type = AS_CHART_EVOLUTION_NO_INT_TRANSFER_LOAD;
 
    constructor(public payload: FilterAsTableSelected) { }
}

// export class LoadAsChartEvolutionNoIntTransferSuccess {
//     static readonly type = AS_CHART_EVOLUTION_BRUT_NO_INT_TRANSFER_SUCCESS;
 
//     constructor(public payload: AsChartEvolutionCdb) { }
// }

export class LoadAsChartEvolutionCustomOtf {
    static readonly type = AS_CHART_EVOLUTION_CUSTOM_OTF_LOAD;
 
    constructor(public payload: FilterAsTableSelected) { }
}

// export class LoadAsChartEvolutionCustomOtfSuccess {
//     static readonly type = AS_CHART_EVOLUTION_CUSTOM_OTF_LOAD_SUCCESS;
 
//     constructor(public payload: WidgetCardChartBar[]) { }
// }

export class LoadAsChartEvolutionCustomOtfFilter {
    static readonly type = AS_CHART_EVOLUTION_CUSTOM_OTF_FILTER_LOAD;
 
    constructor(public payload: FilterAsTableSelected) { }
}

// export class LoadAsChartEvolutionCustomOtfFilterSuccess {
//     static readonly type = AS_CHART_EVOLUTION_CUSTOM_OTF_FILTER_LOAD_SUCCESS;
 
//     constructor(public payload: AsChartEvolutionCustomOtfFilter) { }
// }

export class UpdateAsChartEvolutionCustomOtfFilter {
    static readonly type = AS_CHART_EVOLUTION_CUSTOM_OTF_FILTER_UPDATE;
 
    constructor(public payload: AsChartEvolutionCustomOtfFilterSelected) { }
}

// export class UpdateAsChartEvolutionCustomOtfFilterSuccess {
//     static readonly type = AS_CHART_EVOLUTION_CUSTOM_OTF_FILTER_UPDATE_SUCCESS;
 
//     constructor(public payload: AsChartEvolutionCustomOtfFilterSelected) { }
// }









export class LoadAsChartCategorisation {
    static readonly type = AS_CHART_CATEGORISATION_LOAD;
 
    constructor(public payload: FilterAsTableSelected) { }
}

// export class LoadAsChartCategorisationSuccess {
//     static readonly type = AS_CHART_CATEGORISATION_LOAD_SUCCESS;
 
//     constructor() { }
// }

export class LoadAsChartCategorisationDebit {
    static readonly type = AS_CHART_CATEGORISATION_DEBIT_LOAD;
 
    constructor(public payload: FilterAsTableSelected) { }
}

// export class LoadAsChartCategorisationDebitSuccess {
//     static readonly type = AS_CHART_CATEGORISATION_DEBIT_LOAD_SUCCESS;
 
//     constructor(public payload: AsChartCategorisationSelect) { }
// }
