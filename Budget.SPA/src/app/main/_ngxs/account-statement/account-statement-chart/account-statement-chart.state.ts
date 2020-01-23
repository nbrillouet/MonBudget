import { AsChartEvolutionCustomOtfFilterSelected } from "app/main/_models/account-statement/as-chart/as-chart-evolution.model";
import { AsService } from "app/main/apps/account-statement/account-statement.service";
import { LoadAsChartEvolutionBrut, LoadAsChartEvolutionNoIntTransfer, LoadAsChartEvolutionCustomOtf, LoadAsChartEvolution, LoadAsChartEvolutionCustomOtfFilter, UpdateAsChartEvolutionCustomOtfFilter, LoadAsChartCategorisation, LoadAsChartCategorisationDebit} from "./account-statement-chart.action";
import { WidgetCardChartBar } from "app/main/_models/chart/widget-card-chart-bar.model";
import { FilterAsTableSelected } from "app/main/_models/filters/account-statement.filter";
import { State, Selector, Action, StateContext } from "@ngxs/store";
import { zip } from "rxjs";
import { AsChart } from "app/main/_models/account-statement/as-chart/as-chart.model";
import { AsChartCategorisationSelect } from "app/main/_models/account-statement/as-chart/as-chart-categorisation.model";
import { LoaderState } from "../../_base/loader-state";
import { Datas } from "app/main/_models/generics/detail-info.model";


export class AsChartStateModel extends Datas<AsChart> {
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

export class AsChartState extends LoaderState {
    constructor(
        private _asService: AsService
        ) {
            super();
    }

    @Selector()
    static get(state: AsChartStateModel) {
 
        return state;
    }

    @Action(LoadAsChartEvolution)
    loadAsChartEvolution(context: StateContext<AsChartStateModel>, action: LoadAsChartEvolution) {
        this.loading(context,'asChartEvolution');

        const state = context.getState();
        context.patchState(state);

        zip(   
            context.dispatch(new LoadAsChartEvolutionBrut(action.payload)),
            context.dispatch(new LoadAsChartEvolutionNoIntTransfer(action.payload)),
            context.dispatch(new LoadAsChartEvolutionCustomOtfFilter(action.payload)),
            context.dispatch(new LoadAsChartEvolutionCustomOtf(action.payload))
        ).subscribe(x=>{
            let state = context.getState();
            context.patchState(state);

            this.loaded(context,'asChartEvolution');
        });
    }

    // @Action(LoadAsChartEvolutionSuccess)
    // LoadAsChartEvolutionSuccess(context: StateContext<AsChartStateModel>, action: LoadAsChartEvolutionSuccess) {
    //     let state = context.getState();
    //     context.patchState(state);
    // }

    @Action(LoadAsChartEvolutionBrut)
    loadAsChartEvolutionBrut(context: StateContext<AsChartStateModel>, action: LoadAsChartEvolutionBrut) {
        this.loading(context,'asChartEvolutionBrut');

        const state = context.getState();
        state.datas.asChartEvolution.brut.balance= new WidgetCardChartBar();
        state.datas.asChartEvolution.brut.credit=new WidgetCardChartBar();
        state.datas.asChartEvolution.brut.debit=new WidgetCardChartBar();
        context.patchState(state);
        
        this._asService.getAsChartEvolutionBrut(action.payload)
            .subscribe(result=> {
                let state = context.getState();
                state.datas.asChartEvolution.brut = result;
                context.patchState(state);

                this.loaded(context,'asChartEvolutionBrut');
            });
    }

    // @Action(LoadAsChartEvolutionBrutSuccess)
    // LoadAsChartEvolutionBrutSuccess(context: StateContext<AsChartStateModel>, action: LoadAsChartEvolutionBrutSuccess) {
    //     let state = context.getState();

    //     state.datas.asChartEvolution.brut = action.payload;

    //     context.patchState(state);

 

    // }

    @Action(LoadAsChartEvolutionNoIntTransfer)
    loadAsChartEvolutionNoIntTransfer(context: StateContext<AsChartStateModel>, action: LoadAsChartEvolutionNoIntTransfer) {
        this.loading(context,'asChartEvolutionNoIntTransfer');
        
        const state = context.getState();
        state.datas.asChartEvolution.noIntTransfer.balance= new WidgetCardChartBar();
        state.datas.asChartEvolution.noIntTransfer.credit=new WidgetCardChartBar();
        state.datas.asChartEvolution.noIntTransfer.debit=new WidgetCardChartBar();
        
        context.patchState(state);
        this._asService.getAsChartEvolutionNoIntTransfer(action.payload)
            .subscribe(result=> {
                let state = context.getState();
                state.datas.asChartEvolution.noIntTransfer = result;
                context.patchState(state);

                this.loaded(context,'asChartEvolutionNoIntTransfer');
            });
    }

    // @Action(LoadAsChartEvolutionNoIntTransferSuccess)
    // LoadAsChartEvolutionNoIntTransferSuccess(context: StateContext<AsChartStateModel>, action: LoadAsChartEvolutionNoIntTransferSuccess) {
    //     let state = context.getState();
    //     // console.log('noIntTransfer',action.payload);
    //     state.datas.asChartEvolution.noIntTransfer = action.payload;

    //     context.patchState(state);


    // }

    @Action(LoadAsChartEvolutionCustomOtf)
    loadAsChartEvolutionCustomOtf(context: StateContext<AsChartStateModel>, action: LoadAsChartEvolutionCustomOtf) {
        this.loading(context,'asChartEvolutionCustomOtf');
        
        const state = context.getState();
        state.datas.asChartEvolution.customOtfs.widgetCardChartBars = null;
        context.patchState(state);

        this._asService.getAsChartEvolutionCustomOtf(action.payload)
            .subscribe(result=> {
                let state = context.getState();
                state.datas.asChartEvolution.customOtfs.widgetCardChartBars = result;
                context.patchState(state);

                this.loaded(context,'asChartEvolutionCustomOtf');
            });
    }

    // @Action(LoadAsChartEvolutionCustomOtfSuccess)
    // LoadAsChartEvolutionCustomOtfSuccess(context: StateContext<AsChartStateModel>, action: LoadAsChartEvolutionCustomOtfSuccess) {
    //     let state = context.getState();

    //     // console.log('customOtf',action.payload);
    //     state.datas.asChartEvolution.customOtfs.widgetCardChartBars = action.payload;

    //     context.patchState(state);

 
    // }
    
    @Action(LoadAsChartEvolutionCustomOtfFilter)
    loadAsChartEvolutionCustomOtfFilter(context: StateContext<AsChartStateModel>, action: LoadAsChartEvolutionCustomOtfFilter) {
        this.loading(context,'asChartEvolutionCustomOtfFilter');
        
        const state = context.getState();
        state.datas.asChartEvolution.customOtfs.filter.selected = new AsChartEvolutionCustomOtfFilterSelected();
        state.datas.asChartEvolution.customOtfs.filter.operationTypeFamilies = [] ;
        context.patchState(state);

        this._asService.getAsChartEvolutionCustomOtfFilter(action.payload)
            .subscribe(result=> {
                let state = context.getState();
                state.datas.asChartEvolution.customOtfs.filter = result;
                context.patchState(state);

                this.loaded(context,'asChartEvolutionCustomOtfFilter');
            });
    }

    // @Action(LoadAsChartEvolutionCustomOtfFilterSuccess)
    // LoadAsChartEvolutionCustomOtfFilterSuccess(context: StateContext<AsChartStateModel>, action: LoadAsChartEvolutionCustomOtfFilterSuccess) {
    //     let state = context.getState();

    //     // console.log('customOtfFilter',action.payload);
    //     state.datas.asChartEvolution.customOtfs.filter = action.payload;

    //     context.patchState(state);

    // }
    

    @Action(UpdateAsChartEvolutionCustomOtfFilter)
    UpdateAsChartEvolutionCustomOtfFilter(context: StateContext<AsChartStateModel>, action: UpdateAsChartEvolutionCustomOtfFilter) {

        this._asService.updateAsChartEvolutionCustomOtfFilter(action.payload)
            .subscribe(result=> {
                let filterAsTableSelected = <FilterAsTableSelected> {
                    idAccount : action.payload.idAccount,
                    user: action.payload.user,
                    monthYear: action.payload.monthYear
                };
                
                context.dispatch(new LoadAsChartEvolutionCustomOtfFilter(filterAsTableSelected));
                context.dispatch(new LoadAsChartEvolutionCustomOtf(filterAsTableSelected));
            });
    }

    // @Action(UpdateAsChartEvolutionCustomOtfFilterSuccess)
    // UpdateAsChartEvolutionCustomOtfFilterSuccess(context: StateContext<AsChartStateModel>, action: UpdateAsChartEvolutionCustomOtfFilterSuccess) {
    //     // let state = context.getState();
        
    //     let filterAsTableSelected = <FilterAsTableSelected> {
    //         idAccount : action.payload.idAccount,
    //         user: action.payload.user,
    //         monthYear: action.payload.monthYear
    //     };
        
    //     context.dispatch(new LoadAsChartEvolutionCustomOtfFilter(filterAsTableSelected));
    //     context.dispatch(new LoadAsChartEvolutionCustomOtf(filterAsTableSelected));
    // }









    @Action(LoadAsChartCategorisation)
    loadAsChartCategorisation(context: StateContext<AsChartStateModel>, action: LoadAsChartCategorisation) {
        this.loading(context,'asChartCategorisation');

        const state = context.getState();
        context.patchState(state);

        zip(   
            context.dispatch(new LoadAsChartCategorisationDebit(action.payload))
        ).subscribe(x=>{
            let state = context.getState();
            context.patchState(state);

            this.loaded(context,'asChartCategorisation');
        });

    }

    // @Action(LoadAsChartCategorisationSuccess)
    // LoadAsChartCategorisationSuccess(context: StateContext<AsChartStateModel>, action: LoadAsChartCategorisationSuccess) {
        

    // }

    @Action(LoadAsChartCategorisationDebit)
    loadAsChartCategorisationDebit(context: StateContext<AsChartStateModel>, action: LoadAsChartCategorisationDebit) {
        this.loading(context,'asChartCategorisationDebit');
        
        const state = context.getState();
        state.datas.asChartCategorisation.debit = new AsChartCategorisationSelect();

        context.patchState(state);
        this._asService.GetAsChartCategorisationDebit(action.payload)
            .subscribe(result=> {
                let state = context.getState();
                state.datas.asChartCategorisation.debit = result;
                context.patchState(state);

                this.loaded(context,'asChartCategorisationDebit');

            });

    }

    // @Action(LoadAsChartCategorisationDebitSuccess)
    // LoadAsChartCategorisationDebitSuccess(context: StateContext<AsChartStateModel>, action: LoadAsChartCategorisationDebitSuccess) {
    //     let state = context.getState();

    //     // console.log('action.payload-->DEBIT',action.payload);
    //     state.datas.asChartCategorisation.debit = action.payload;

    //     context.patchState(state);

 

    // }
}