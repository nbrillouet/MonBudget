import { DataInfo } from "app/main/_models/generics/detail-info.model";
import { AsChart, AsChartEvolutionCdb } from "app/main/_models/account-statement/account-statement-chart.model";
import { State, Selector, Action, StateContext } from "@ngxs/store";
import { AsService } from "app/main/apps/account-statement/account-statement.service";
import { LoadAsChartEvolutionBrut, LoadAsChartEvolutionBrutSuccess, LoadAsChartEvolutionNoIntTransfer, LoadAsChartEvolutionNoIntTransferSuccess } from "./account-statement-chart.action";
import { WidgetCardChartBar } from "app/main/_models/chart/widget-card-chart-bar.model";


export class AsChartStateModel extends DataInfo<AsChart> {
    constructor () {
        super();
        this.datas = new AsChart();
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
        const state = context.getState();
        
        state.loadingInfo.loaded=false;
        state.loadingInfo.loading=true;

        console.log('AsChartEvolutionBrut-->state.datas',state.datas);
        state.datas.asChartEvolution.brut.balance= new WidgetCardChartBar();
        state.datas.asChartEvolution.brut.credit=new WidgetCardChartBar();
        state.datas.asChartEvolution.brut.debit=new WidgetCardChartBar();
        
        context.patchState(state);
        this._asService.getAsChartEvolutionBrut(action.payload)
            .subscribe(result=> {
                context.dispatch(new LoadAsChartEvolutionBrutSuccess(<AsChartEvolutionCdb>result));
            });

    }

    @Action(LoadAsChartEvolutionBrutSuccess)
    LoadAsChartEvolutionBrutSuccess(context: StateContext<AsChartStateModel>, action: LoadAsChartEvolutionBrutSuccess) {
        let state = context.getState();
        state.loadingInfo.loaded = true;
        state.loadingInfo.loading = false;

        state.datas.asChartEvolution.brut = action.payload;

        context.patchState(state);

        console.log(state.loadingInfo.loaded);

    }

    @Action(LoadAsChartEvolutionNoIntTransfer)
    loadAsChartEvolutionNoIntTransfer(context: StateContext<AsChartStateModel>, action: LoadAsChartEvolutionNoIntTransfer) {
        const state = context.getState();
        
        state.loadingInfo.loaded=false;
        state.loadingInfo.loading=true;

        console.log('AsChartEvolutionNoIntTransfer-->state.datas',state.datas);
        state.datas.asChartEvolution.noIntTransfer.balance= new WidgetCardChartBar();
        state.datas.asChartEvolution.noIntTransfer.credit=new WidgetCardChartBar();
        state.datas.asChartEvolution.noIntTransfer.debit=new WidgetCardChartBar();
        
        context.patchState(state);
        this._asService.getAsChartEvolutionNoIntTransfer(action.payload)
            .subscribe(result=> {
                context.dispatch(new LoadAsChartEvolutionNoIntTransferSuccess(<AsChartEvolutionCdb>result));
            });

    }

    @Action(LoadAsChartEvolutionNoIntTransferSuccess)
    LoadAsChartEvolutionNoIntTransferSuccess(context: StateContext<AsChartStateModel>, action: LoadAsChartEvolutionNoIntTransferSuccess) {
        let state = context.getState();
        state.loadingInfo.loaded = true;
        state.loadingInfo.loading = false;
        console.log('noIntTransfer',action.payload);
        state.datas.asChartEvolution.noIntTransfer = action.payload;

        context.patchState(state);

        console.log(state.loadingInfo.loaded);

    }


    
    
}