import { DetailInfo } from "app/main/_models/generics/detail-info.model";
import { PlanPosteForDetail } from "app/main/_models/plan.model";
import { PlanPosteDetailFilter, PlanPosteReferenceFilter } from "app/main/_models/filters/plan-poste.filter";
import { PlanService } from "app/main/apps/plan/plan.service";
import { LoadPlanPosteDetailDatas, LoadPlanPosteDetailDatasSuccess, ChangePlanPosteDetailFilter, ClearPlanPosteDetailDatas, ChangePlanPosteReference } from "./plan-poste-detail.action";
import { State, Selector, Action, StateContext } from "@ngxs/store";
import { NotificationsService } from "angular2-notifications";

export class PlanPosteDetailStateModel extends DetailInfo<PlanPosteForDetail,PlanPosteDetailFilter> {
    
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

export class PlanPosteDetailState {
    constructor(
        private _planService: PlanService,
        private _notification: NotificationsService) {
        
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
        const state = context.getState();
        state.dataInfos.loadingInfo.loaded=false;
        state.dataInfos.loadingInfo.loading=true;
        state.filter = action.payload;
        state.dataInfos.datas = null;
        
        context.patchState(state);

        this._planService.GetPlanPosteForDetailById(action.payload.id,action.payload.idPlan,action.payload.idPoste)
            .subscribe(result=> {
                context.dispatch(new LoadPlanPosteDetailDatasSuccess(result));
            },error => {
                this._notification.error('Erreur connexion',error);
            });
    }

    @Action(LoadPlanPosteDetailDatasSuccess)
    loadSuccess(context: StateContext<PlanPosteDetailStateModel>, action: LoadPlanPosteDetailDatasSuccess) {
        let state = context.getState();
        state.dataInfos.loadingInfo.loaded = true;
        state.dataInfos.loadingInfo.loading = false;
        state.dataInfos.datas = action.payload;

        context.patchState(state);
        
    }

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

    
}