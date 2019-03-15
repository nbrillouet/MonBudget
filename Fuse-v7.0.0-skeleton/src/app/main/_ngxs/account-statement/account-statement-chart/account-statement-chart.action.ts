import { FilterAsTableSelected } from "app/main/_models/filters/account-statement.filter";
import { AsChartEvolutionCdb } from "app/main/_models/account-statement/account-statement-chart.model";

export const AS_CHART_EVOLUTION_BRUT_LOAD = 'as-chart-evolution-brut-load';
export const AS_CHART_EVOLUTION_BRUT_LOAD_SUCCESS = 'as-chart-evolution-brut-load-success';

export const AS_CHART_EVOLUTION_NO_INT_TRANSFER_LOAD = 'as-chart-evolution-no-int-transfer-load';
export const AS_CHART_EVOLUTION_BRUT_NO_INT_TRANSFER_SUCCESS = 'as-chart-evolution-no-int-transfer-load-success';

export class LoadAsChartEvolutionBrut {
    static readonly type = AS_CHART_EVOLUTION_BRUT_LOAD;
 
    constructor(public payload: FilterAsTableSelected) { }
}

export class LoadAsChartEvolutionBrutSuccess {
    static readonly type = AS_CHART_EVOLUTION_BRUT_LOAD_SUCCESS;
 
    constructor(public payload: AsChartEvolutionCdb) { }
}

export class LoadAsChartEvolutionNoIntTransfer {
    static readonly type = AS_CHART_EVOLUTION_NO_INT_TRANSFER_LOAD;
 
    constructor(public payload: FilterAsTableSelected) { }
}

export class LoadAsChartEvolutionNoIntTransferSuccess {
    static readonly type = AS_CHART_EVOLUTION_BRUT_NO_INT_TRANSFER_SUCCESS;
 
    constructor(public payload: AsChartEvolutionCdb) { }
}

