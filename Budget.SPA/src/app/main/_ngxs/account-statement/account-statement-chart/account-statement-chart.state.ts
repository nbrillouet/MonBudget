import { DataInfo } from "app/main/_models/generics/detail-info.model";
import { AsChartEvolutionCdb, AsChartEvolutionCustomOtfFilter, AsChartEvolutionCustomOtfFilterSelected } from "app/main/_models/account-statement/as-chart/as-chart-evolution.model";
import { AsService } from "app/main/apps/account-statement/account-statement.service";
import { LoadAsChartEvolutionBrut, LoadAsChartEvolutionBrutSuccess, LoadAsChartEvolutionNoIntTransfer, LoadAsChartEvolutionNoIntTransferSuccess, LoadAsChartEvolutionCustomOtfSuccess, LoadAsChartEvolutionCustomOtf, LoadAsChartEvolutionSuccess, LoadAsChartEvolution, LoadAsChartEvolutionCustomOtfFilterSuccess, LoadAsChartEvolutionCustomOtfFilter, UpdateAsChartEvolutionCustomOtfFilter, UpdateAsChartEvolutionCustomOtfFilterSuccess, LoadAsChartCategorisation, LoadAsChartCategorisationDebit, LoadAsChartCategorisationDebitSuccess, LoadAsChartCategorisationSuccess } from "./account-statement-chart.action";
import { WidgetCardChartBar } from "app/main/_models/chart/widget-card-chart-bar.model";
import { FilterAsTableSelected } from "app/main/_models/filters/account-statement.filter";
import { State, Selector, Action, StateContext } from "@ngxs/store";
import { zip } from "rxjs";
import { AsChart } from "app/main/_models/account-statement/as-chart/as-chart.model";
import { WidgetCardChartPieSelect } from "app/main/_models/chart/widget-card-chart-pie-select.model";
import { AsChartCategorisationSelect, AsChartCategorisation } from "app/main/_models/account-statement/as-chart/as-chart-categorisation.model";


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

    @Action(LoadAsChartEvolution)
    loadAsChartEvolution(context: StateContext<AsChartStateModel>, action: LoadAsChartEvolution) {
        const state = context.getState();
        
        state.loadingInfo.loaded=false;
        state.loadingInfo.loading=true;

        // console.log('AsChartEvolution-->ACTION.PAYLOAD',action.payload);
        // state.datas.asChartEvolution=null;
        
        context.patchState(state);

        zip(   
            context.dispatch(new LoadAsChartEvolutionBrut(action.payload)),
            context.dispatch(new LoadAsChartEvolutionNoIntTransfer(action.payload)),
            context.dispatch(new LoadAsChartEvolutionCustomOtfFilter(action.payload)),
            context.dispatch(new LoadAsChartEvolutionCustomOtf(action.payload))
        ).subscribe(x=>{
            context.dispatch(new LoadAsChartEvolutionSuccess());
        });
        
            
            
        //     document$, (name: string, document: string) => ({name, document}))
        // .subscribe(pair => {
        //     this.name = pair.name;
        //     this.document = pair.document;
        //     this.showForm();
        // });
        // context.dispatch(new LoadAsChartEvolutionBrut(action.payload));
        // context.dispatch(new LoadAsChartEvolutionNoIntTransfer(action.payload));
        // context.dispatch(new LoadAsChartEvolutionCustomOtf(action.payload));

        // this._asService.getAsChartEvolutionBrut(action.payload)
        //     .subscribe(result=> {
        //         context.dispatch(new LoadAsChartEvolutionBrutSuccess(<AsChartEvolutionCdb>result));
        //     });

    }

    @Action(LoadAsChartEvolutionSuccess)
    LoadAsChartEvolutionSuccess(context: StateContext<AsChartStateModel>, action: LoadAsChartEvolutionSuccess) {
        let state = context.getState();
        state.loadingInfo.loaded = true;
        state.loadingInfo.loading = false;

        context.patchState(state);

    }



    @Action(LoadAsChartEvolutionBrut)
    loadAsChartEvolutionBrut(context: StateContext<AsChartStateModel>, action: LoadAsChartEvolutionBrut) {
        const state = context.getState();
        
        state.loadingInfo.loaded=false;
        state.loadingInfo.loading=true;

        // console.log('AsChartEvolutionBrut-->state.datas',state.datas);
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

        // console.log(state.loadingInfo.loaded);

    }

    @Action(LoadAsChartEvolutionNoIntTransfer)
    loadAsChartEvolutionNoIntTransfer(context: StateContext<AsChartStateModel>, action: LoadAsChartEvolutionNoIntTransfer) {
        const state = context.getState();
        
        state.loadingInfo.loaded=false;
        state.loadingInfo.loading=true;

        // console.log('AsChartEvolutionNoIntTransfer-->state.datas',state.datas);
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
        // console.log('noIntTransfer',action.payload);
        state.datas.asChartEvolution.noIntTransfer = action.payload;

        context.patchState(state);

        // console.log(state.loadingInfo.loaded);
    }

    @Action(LoadAsChartEvolutionCustomOtf)
    loadAsChartEvolutionCustomOtf(context: StateContext<AsChartStateModel>, action: LoadAsChartEvolutionCustomOtf) {
        const state = context.getState();
        
        // state.loadingInfo.loaded=false;
        // state.loadingInfo.loading=true;

        // console.log('AsChartEvolutionCustomOtf-->state.datas',state.datas);
        state.datas.asChartEvolution.customOtfs.widgetCardChartBars = null;
        context.patchState(state);

        this._asService.getAsChartEvolutionCustomOtf(action.payload)
            .subscribe(result=> {
                context.dispatch(new LoadAsChartEvolutionCustomOtfSuccess(<WidgetCardChartBar[]>result));
            });
    }

    @Action(LoadAsChartEvolutionCustomOtfSuccess)
    LoadAsChartEvolutionCustomOtfSuccess(context: StateContext<AsChartStateModel>, action: LoadAsChartEvolutionCustomOtfSuccess) {
        let state = context.getState();
        // state.loadingInfo.loaded = true;
        // state.loadingInfo.loading = false;
        // console.log('customOtf',action.payload);
        state.datas.asChartEvolution.customOtfs.widgetCardChartBars = action.payload;

        context.patchState(state);

        // console.log(state.loadingInfo.loaded);
    }
    
    @Action(LoadAsChartEvolutionCustomOtfFilter)
    loadAsChartEvolutionCustomOtfFilter(context: StateContext<AsChartStateModel>, action: LoadAsChartEvolutionCustomOtfFilter) {
        const state = context.getState();

        // console.log('AsChartEvolutionCustomOtf-->state.datas',state.datas);
        state.datas.asChartEvolution.customOtfs.filter.selected = new AsChartEvolutionCustomOtfFilterSelected();
        state.datas.asChartEvolution.customOtfs.filter.operationTypeFamilies = [] ;

        context.patchState(state);
        this._asService.getAsChartEvolutionCustomOtfFilter(action.payload)
            .subscribe(result=> {
                context.dispatch(new LoadAsChartEvolutionCustomOtfFilterSuccess(<AsChartEvolutionCustomOtfFilter>result));
            });
    }

    @Action(LoadAsChartEvolutionCustomOtfFilterSuccess)
    LoadAsChartEvolutionCustomOtfFilterSuccess(context: StateContext<AsChartStateModel>, action: LoadAsChartEvolutionCustomOtfFilterSuccess) {
        let state = context.getState();
        // state.loadingInfo.loaded = true;
        // state.loadingInfo.loading = false;
        // console.log('customOtfFilter',action.payload);
        state.datas.asChartEvolution.customOtfs.filter = action.payload;

        context.patchState(state);

    }
    

    @Action(UpdateAsChartEvolutionCustomOtfFilter)
    UpdateAsChartEvolutionCustomOtfFilter(context: StateContext<AsChartStateModel>, action: UpdateAsChartEvolutionCustomOtfFilter) {

        this._asService.updateAsChartEvolutionCustomOtfFilter(action.payload)
            .subscribe(result=> {
                context.dispatch(new UpdateAsChartEvolutionCustomOtfFilterSuccess(<AsChartEvolutionCustomOtfFilterSelected>action.payload));
            });
    }

    @Action(UpdateAsChartEvolutionCustomOtfFilterSuccess)
    UpdateAsChartEvolutionCustomOtfFilterSuccess(context: StateContext<AsChartStateModel>, action: UpdateAsChartEvolutionCustomOtfFilterSuccess) {
        // let state = context.getState();
        
        let filterAsTableSelected = <FilterAsTableSelected> {
            idAccount : action.payload.idAccount,
            user: action.payload.user,
            monthYear: action.payload.monthYear
        };
        
        context.dispatch(new LoadAsChartEvolutionCustomOtfFilter(filterAsTableSelected));
        context.dispatch(new LoadAsChartEvolutionCustomOtf(filterAsTableSelected));
    }









    @Action(LoadAsChartCategorisation)
    loadAsChartCategorisation(context: StateContext<AsChartStateModel>, action: LoadAsChartCategorisation) {
        const state = context.getState();
        
        state.loadingInfo.loaded=false;
        state.loadingInfo.loading=true;

        // console.log('AsChartCategorisation-->ACTION.PAYLOAD',action.payload);
        // state.datas.asChartEvolution=null;
        
        context.patchState(state);

        zip(   
            context.dispatch(new LoadAsChartCategorisationDebit(action.payload))
        ).subscribe(x=>{
            context.dispatch(new LoadAsChartCategorisationSuccess());
        });

    }

    @Action(LoadAsChartCategorisationSuccess)
    LoadAsChartCategorisationSuccess(context: StateContext<AsChartStateModel>, action: LoadAsChartCategorisationSuccess) {
        let state = context.getState();
        state.loadingInfo.loaded = true;
        state.loadingInfo.loading = false;

        context.patchState(state);

    }

    @Action(LoadAsChartCategorisationDebit)
    loadAsChartCategorisationDebit(context: StateContext<AsChartStateModel>, action: LoadAsChartCategorisationDebit) {
        const state = context.getState();
        
        state.loadingInfo.loaded=false;
        state.loadingInfo.loading=true;

        // state.datas.asChartCategorisation.debit.operationMethod= new WidgetCardChartPieSelect([]);
        state.datas.asChartCategorisation.debit = new AsChartCategorisationSelect();
        
        
        // state.datas.asChartEvolution.brut.credit=new WidgetCardChartBar();
        // state.datas.asChartEvolution.brut.debit=new WidgetCardChartBar();
        
        context.patchState(state);
        this._asService.GetAsChartCategorisationDebit(action.payload)
            .subscribe(result=> {
                context.dispatch(new LoadAsChartCategorisationDebitSuccess(<AsChartCategorisationSelect>result));
            });

    }

    @Action(LoadAsChartCategorisationDebitSuccess)
    LoadAsChartCategorisationDebitSuccess(context: StateContext<AsChartStateModel>, action: LoadAsChartCategorisationDebitSuccess) {
        let state = context.getState();
        state.loadingInfo.loaded = true;
        state.loadingInfo.loading = false;
        // console.log('action.payload-->DEBIT',action.payload);
        state.datas.asChartCategorisation.debit = action.payload;

        context.patchState(state);

        // console.log(state.loadingInfo.loaded);

    }
}