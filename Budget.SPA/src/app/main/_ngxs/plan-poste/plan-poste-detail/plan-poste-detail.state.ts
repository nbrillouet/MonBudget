import { PlanPosteForDetail } from "app/main/_models/plan.model";
import { PlanPosteDetailFilter } from "app/main/_models/filters/plan-poste.filter";
import { PlanService } from "app/main/apps/plan/plan.service";
import { LoadPlanPosteDetailDatas, ChangePlanPosteDetailFilter, ClearPlanPosteDetailDatas, PlanPosteDetailChangePlanPosteFrequencies } from "./plan-poste-detail.action";
import { State, Selector, Action, StateContext } from "@ngxs/store";
import { NotificationsService } from "angular2-notifications";
import { LoaderState } from "../../_base/loader-state";
import { DatasFilter } from "app/main/_models/generics/detail-info.model";
import { Injectable } from "@angular/core";

export class PlanPosteDetailStateModel extends DatasFilter<PlanPosteForDetail,PlanPosteDetailFilter> {
    
    constructor () {
        super();
        this.filter = new PlanPosteDetailFilter();
    }
}

let detailInfo = new PlanPosteDetailStateModel();
@State<PlanPosteDetailStateModel>({
    name: 'PlanPosteDetail',
    defaults : detailInfo
})

@Injectable()
export class PlanPosteDetailState extends LoaderState {
    constructor(
        private _planService: PlanService,
        private _notification: NotificationsService) {
            super();
    }

    @Selector()
    static get(state: PlanPosteDetailStateModel) {

        return state;
    }

    @Selector()
    static getFilter(state: PlanPosteDetailStateModel) {
        return state.filter;
    }

    @Action(LoadPlanPosteDetailDatas)
    load(context: StateContext<PlanPosteDetailStateModel>, action: LoadPlanPosteDetailDatas) {
        this.loading(context,'datas');
        
        const state = context.getState();
        state.filter = action.payload;
        state.datas = null;
        context.patchState(state);

        this._planService.GetPlanPosteForDetailById(action.payload.id,action.payload.idPlan,action.payload.idPoste)
            .subscribe(result=> {
                let state = context.getState();
                state.datas = action.payload;
                context.patchState(state);

                this.loaded(context,'datas');
            });
    }

    // @Action(LoadPlanPosteDetailDatasSuccess)
    // loadSuccess(context: StateContext<PlanPosteDetailStateModel>, action: LoadPlanPosteDetailDatasSuccess) {
    //     let state = context.getState();
    //     state.dataInfos.datas = action.payload;

    //     context.patchState(state);
        
    // }

    @Action(ChangePlanPosteDetailFilter)
    changeFilter(context: StateContext<PlanPosteDetailStateModel>, action: ChangePlanPosteDetailFilter) {
        const state = context.getState();
        state.filter=action.payload

        context.patchState(state);
        context.dispatch(new LoadPlanPosteDetailDatas(action.payload));
    }

    // @Action(ChangePlanPosteReference)
    // changePlanPosteReference(context: StateContext<PlanPosteDetailStateModel>, action: ChangePlanPosteReference) {
        

    //     this._planService.GetPlanPosteReferenceByIdReferenceTable(action.payload).subscribe(x=>{
    //         const state = context.getState();
            
    //         state.dataInfos.datas.planPosteReference = x;
    //         context.patchState(state);
    //         // this.data.planPosteReference.list = x;
    //       });
        
        
    //     // const state = context.getState();
    //     // state.filter=action.payload


    //     // context.patchState(state);
    //     // context.dispatch(new LoadPlanPosteDetailDatas(action.payload));
    // }

    @Action(ClearPlanPosteDetailDatas)
    clear(context: StateContext<PlanPosteDetailStateModel>) {
        return context.setState(new PlanPosteDetailStateModel());
    }

    //====================================
    //          PlanPosteFrequencies
    //====================================
    @Action(PlanPosteDetailChangePlanPosteFrequencies)
    PlanPosteDetailChangePlanPosteFrequencies(context: StateContext<PlanPosteDetailStateModel>, action: PlanPosteDetailChangePlanPosteFrequencies) {
        this.loading(context,'planPosteFrequencies');

        const state = context.getState();
        state.datas.planPosteFrequencies = null;
        context.patchState(state);

        this._planService.getPlanPosteFrequencies(action.payload)
            .subscribe(result=> {
                let state = context.getState();
                state.datas.planPosteFrequencies = result;
                context.patchState(state);

                this.loaded(context,'planPosteFrequencies');
            });
    }

    // @Action(PlanPosteDetailChangePlanPosteFrequenciesSuccess)
    // PlanPosteDetailChangePlanPosteFrequenciesSuccess(context: StateContext<PlanPosteDetailStateModel>, action: PlanPosteDetailChangePlanPosteFrequenciesSuccess) {
   
    //     let state = context.getState();
    //     state.dataInfos.datas.planPosteFrequencies = action.payload;
    //     // state.datas.operationType.selected = action.payload[0];

    //     context.patchState(state);
    // }

    
}