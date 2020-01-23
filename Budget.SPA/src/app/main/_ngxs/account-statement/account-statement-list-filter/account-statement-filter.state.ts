import { FilterInfo } from "app/main/_models/generics/filter.info.model";
import { FilterAsTable } from "app/main/_models/filters/account-statement.filter";
import { AsService } from "app/main/apps/account-statement/account-statement.service";
import { LoadAsTableFilter, ChangeAsTableFilter, UpdatePaginationAsTableFilter } from "./account-statement-filter.action";
import { LoadAsTableDatas } from "../account-statement-list/account-statement-list.action";
import { Store, State, Selector, Action, StateContext } from "@ngxs/store";
import { LoaderState } from "../../_base/loader-state";

export class AsTableFilterStateModel extends FilterInfo<FilterAsTable> {
    constructor () {
        super(FilterAsTable);
    }
}

let asTableFilterStateModel = new AsTableFilterStateModel();

@State<AsTableFilterStateModel>({
    name: 'AsTableFilter',
    defaults : asTableFilterStateModel
})

export class AsTableFilterState extends LoaderState {

    constructor(
        private _asService: AsService,
        private _store: Store
        ) {
            super();
    }

    async delay(ms: number) {
        await new Promise(resolve => setTimeout(()=>resolve(), ms)).then(()=>console.log("fired"));
      }

    @Selector()
    static get(state: AsTableFilterStateModel) {
 
        return state;
    }

    // @Selector()
    // static getFilter(state: PlanTableComboFilterStateModel) {
    //     return state.filter;
    // }

    @Action(LoadAsTableFilter)
    loadAsTableFilter(context: StateContext<AsTableFilterStateModel>, action: LoadAsTableFilter) {
        this.loading(context,'filters');
        
        const state = context.getState();
        state.filters = null;
    
        context.patchState(state);
        this._asService.getAsTableFilter(action.payload)
            .subscribe(result=> {
                //conserver le payload
                let payload = JSON.parse(JSON.stringify(result.selected));
                let state = context.getState();
                state.filters = result; // action.payload;
                context.patchState(state);

                context.dispatch(new ChangeAsTableFilter(payload));

                this.loaded(context,'filters');
                // context.dispatch(new LoadAsTableFilterSuccess(result));
            });
    }

    // @Action(LoadAsTableFilterSuccess)
    // loadSuccess(context: StateContext<AsTableFilterStateModel>, action: LoadAsTableFilterSuccess) {
        
    //     // //conserver le payload
    //     // let payload = JSON.parse(JSON.stringify(action.payload.selected));
    //     // console.log('-->action.payload.selected',action.payload.selected)
    //     // let state = context.getState();
    //     // state.filters = action.payload;

    //     // context.patchState(state);
        
    //     // context.dispatch(new ChangeAsTableFilter(payload));
    // }
        // this.delay(3000).then(any=>{
    @Action(ChangeAsTableFilter)
    changeFilter(context: StateContext<AsTableFilterStateModel>, action: ChangeAsTableFilter) {
        this._store.dispatch(new LoadAsTableDatas(action.payload));
     }

    @Action(UpdatePaginationAsTableFilter)
    UpdatePaginationAsTableFilter(context: StateContext<AsTableFilterStateModel>, action: UpdatePaginationAsTableFilter) {
        const state = context.getState();
        state.filters.selected.pagination = action.payload;
        context.patchState(state);
    }

}