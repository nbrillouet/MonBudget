import { DataInfo } from "app/main/_models/generics/detail-info.model";
import { AsChart } from "app/main/_models/account-statement/account-statement-chart.model";
import { State, Selector, Action, StateContext } from "@ngxs/store";
import { AsService } from "app/main/apps/account-statement/account-statement.service";
import { LoadAsChartEvolutionBrut, LoadAsChartEvolutionBrutSuccess } from "./account-statement-chart.action";


export class AsChartStateModel extends DataInfo<AsChart> {
    constructor () {
        super();
    }
}

let asChartStateModel = new AsChartStateModel();

@State<AsChartStateModel>({
    name: 'AsChart',
    defaults : asChartStateModel
})

export class AsChartState {

    constructor(
        private _asService: AsService
        // private _referentialService: ReferentialService
        ) {
    }

    @Selector()
    static get(state: AsChartStateModel) {
 
        return state;
    }

    // @Selector()
    // static getFilter(state: PlanTableComboFilterStateModel) {
    //     return state.filter;
    // }

    @Action(LoadAsChartEvolutionBrut)
    loadAsChartEvolutionBrut(context: StateContext<AsChartStateModel>, action: LoadAsChartEvolutionBrut) {
        // const state = context.getState();
        
        // state.loadingInfo.loaded=false;
        // state.loadingInfo.loading=true;
        // state.datas = null;
        
        // context.patchState(state);
        // this._asService.getAsChartEvolutionBrut(action.payload)
        //     .subscribe(result=> {
        //         context.dispatch(new LoadAsChartEvolutionBrutSuccess(result));
        //     });

    }

    @Action(LoadAsChartEvolutionBrutSuccess)
    LoadAsChartEvolutionBrutSuccess(context: StateContext<AsChartStateModel>, action: LoadAsChartEvolutionBrutSuccess) {
        // let state = context.getState();
        // state.loadingInfo.loaded = true;
        // state.loadingInfo.loading = false;
        // state.datas = action.payload;

        // context.patchState(state);

    }

    
    
}