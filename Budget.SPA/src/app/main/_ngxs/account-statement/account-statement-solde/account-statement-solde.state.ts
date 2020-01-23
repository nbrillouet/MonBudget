import { AsService } from "app/main/apps/account-statement/account-statement.service";
import { LoadAsSolde } from "./account-statement-solde.action";
import { FilterAsTableSelected } from "app/main/_models/filters/account-statement.filter";
import { AsSolde } from "app/main/_models/account-statement/account-statement-solde.model";
import { State, Selector, StateContext, Action } from "@ngxs/store";
import { LoaderState } from "../../_base/loader-state";
import { DatasFilter } from "app/main/_models/generics/detail-info.model";

export class AsSoldeStateModel extends DatasFilter<AsSolde,FilterAsTableSelected> {
    constructor () {
        super();
        this.filter = new FilterAsTableSelected();
    }
}

let detailInfo = new AsSoldeStateModel();

@State<AsSoldeStateModel>({
    
    name: 'asSolde',
    defaults : detailInfo 
})

export class AsSoldeState extends LoaderState {
    constructor(
        private _asService: AsService
    ) {
        super();
    }

    @Selector()
    static get(state: AsSoldeStateModel) {
        return state;
    }

    @Selector()
    static getFilter(state: FilterAsTableSelected) {
        return state;
    }

    @Action(LoadAsSolde)
    loadGrid(context: StateContext<AsSoldeStateModel>, action: LoadAsSolde) {
        this.loading(context,'datas');
        
        const state = context.getState();
        state.filter = action.payload;
        state.datas = null;
        context.patchState(state);

        this._asService.getAsSolde(action.payload)
            .subscribe(result=> {
                let state = context.getState();
                state.datas = result;
                context.patchState(state);

                this.loaded(context,'datas');
            })

    }

    // @Action(LoadAsSoldeSuccess)
    // loadSuccess(context: StateContext<AsSoldeStateModel>, action: LoadAsSoldeSuccess) {
    //     let state = context.getState();
    //     state.dataInfos.datas = action.payload;

    //     context.patchState(state);
        
    // }

    // @Action(ChangeAsSoldeFilter)
    // changeFilter(context: StateContext<AsSoldeStateModel>, action: ChangeAsSoldeFilter) {
    //     const state = context.getState();
    //     state.filter=action.payload


    //     context.patchState(state);
    //     context.dispatch(new LoadAsSolde(action.payload));
    // }



}