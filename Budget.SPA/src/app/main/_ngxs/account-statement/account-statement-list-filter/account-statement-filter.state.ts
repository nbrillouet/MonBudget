import { FilterInfo } from "app/main/_models/generics/filter.info.model";
import { FilterAsTable } from "app/main/_models/filters/account-statement.filter";
import { AsService } from "app/main/apps/account-statement/account-statement.service";
import { Store, State, Selector, Action, StateContext } from "@ngxs/store";
import { LoadAsTableFilter, LoadAsTableFilterSuccess, ChangeAsTableFilter, UpdatePaginationAsTableFilter } from "./account-statement-filter.action";
import { LoadAsTableDatas } from "../account-statement-list/account-statement-list.action";

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

export class AsTableFilterState {

    constructor(
        private _asService: AsService,
        private _store: Store
        ) {
            
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
        const state = context.getState();
        
        state.loadingInfo.loaded=false;
        state.loadingInfo.loading=true;
        state.filters = null;
        console.log('action.payload',action.payload);
        context.patchState(state);
        this._asService.getAsTableFilter(action.payload.selected)
            .subscribe(result=> {
                context.dispatch(new LoadAsTableFilterSuccess(result));
            });

    }

    @Action(LoadAsTableFilterSuccess)
    loadSuccess(context: StateContext<AsTableFilterStateModel>, action: LoadAsTableFilterSuccess) {
        
        //conserver le payload
        let payload = JSON.parse(JSON.stringify(action.payload.selected));

        let state = context.getState();
        state.loadingInfo.loaded = true;
        state.loadingInfo.loading = false;
        state.filters = action.payload;

        context.patchState(state);
        
        context.dispatch(new ChangeAsTableFilter(payload));
        
    }
        // this.delay(3000).then(any=>{
    @Action(ChangeAsTableFilter)
    changeFilter(context: StateContext<AsTableFilterStateModel>, action: ChangeAsTableFilter) {

        this._store.dispatch(new LoadAsTableDatas(action.payload));

     }

    @Action(UpdatePaginationAsTableFilter)
    UpdatePaginationAsTableFilter(context: StateContext<AsTableFilterStateModel>, action: UpdatePaginationAsTableFilter) {
        const state = context.getState();
        
        state.filters.selected.pagination = action.payload;
        // this.delay(3000).then(any=>{
            context.patchState(state);
        // });
    }

}