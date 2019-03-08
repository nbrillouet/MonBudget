export const AS_CHART_EVOLUTION_BRUT_LOAD = 'as-chart-evolution-debit-brut-load';
export const AS_CHART_EVOLUTION_BRUT_LOAD_SUCCESS = 'as-chart-evolution-debit-brut-load-success';

export class LoadAsChartEvolutionBrut {
    static readonly type = AS_CHART_EVOLUTION_BRUT_LOAD;
 
    // constructor(public payload: FilterAsDetail) { }
}

export class LoadAsChartEvolutionBrutSuccess {
    static readonly type = AS_CHART_EVOLUTION_BRUT_LOAD_SUCCESS;
 
    // constructor(public payload: AsDetail) { }
}

