import { FilterInfo } from "app/main/_models/generics/filter.info.model";
import { FilterAsifTable, FilterAsifTableSelected } from "app/main/_models/filters/account-statement-import-file.filter";
import { State, Store, Selector, Action, StateContext } from "@ngxs/store";
import { AsifService } from "app/main/apps/account-statement-import-file/asif.service";
import { LoadAsifTableFilter, LoadAsifTableFilterSuccess, ChangeAsifTableFilter, UpdatePaginationAsifTableFilter } from "./asif-list-filter.action";
import { LoadAsifTableDatas } from "../asif-list/asif-list.action";


export class AsifTableFilterStateModel extends FilterInfo<FilterAsifTable> {
    constructor () {
        super(FilterAsifTable);
    }
}

let asifTableFilterStateModel = new AsifTableFilterStateModel();

@State<AsifTableFilterStateModel>({
    name: 'AsifTableFilter',
    defaults : asifTableFilterStateModel
})

export class AsifTableFilterState {

    constructor(
        private _asifService: AsifService,
        private _store: Store
        ) {
            
    }

    async delay(ms: number) {
        await new Promise(resolve => setTimeout(()=>resolve(), ms)).then(()=>console.log("fired"));
      }

    @Selector()
    static get(state: AsifTableFilterStateModel) {
 
        return state;
    }

    // @Selector()
    // static getFilter(state: PlanTableComboFilterStateModel) {
    //     return state.filter;
    // }

    @Action(LoadAsifTableFilter)
    loadAsifTableFilter(context: StateContext<AsifTableFilterStateModel>, action: LoadAsifTableFilter) {
        const state = context.getState();
        
        state.loadingInfo.loaded=false;
        state.loadingInfo.loading=true;
        state.filters = null;
        
        context.patchState(state);
        this._asifService.getAsifTableFilter(action.payload.selected)
            .subscribe(result=> {
                context.dispatch(new LoadAsifTableFilterSuccess(result));
            });

    }

    @Action(LoadAsifTableFilterSuccess)
    loadSuccess(context: StateContext<AsifTableFilterStateModel>, action: LoadAsifTableFilterSuccess) {
        
        //conserver le payload
        let payload = JSON.parse(JSON.stringify(action.payload.selected));

        let state = context.getState();
        state.loadingInfo.loaded = true;
        state.loadingInfo.loading = false;
        state.filters = action.payload;
        //state.filters.selected.idImport = action.payload.selected.idImport;
        context.patchState(state);
        
        context.dispatch(new ChangeAsifTableFilter(payload));
        
    }
        // this.delay(3000).then(any=>{
    @Action(ChangeAsifTableFilter)
    changeFilter(context: StateContext<AsifTableFilterStateModel>, action: ChangeAsifTableFilter) {

        // const state = context.getState();

        
        // state.loadingInfo.loaded=false;
        // state.loadingInfo.loading=true;
        
        // context.patchState(state);
        

        this._store.dispatch(new LoadAsifTableDatas(action.payload));


        // if(this.ReloadFilters(state.filters,action.payload)) {
            
        //     context.dispatch(new LoadAsifTableFilter(action.payload));
        // }
        // else {
        //     if(this.HasChangedState(state.filters.selected,action.payload.selected)) {
        //         state.filters = action.payload;
        //         context.patchState(state);
                
        //             this._store.dispatch(new LoadAsifTableDatas(state.filters.selected));
               
        //     }
            
        //         state.loadingInfo.loaded=true;
        //         state.loadingInfo.loading=false;
        //         context.patchState(state);
            
        // }

     }

    @Action(UpdatePaginationAsifTableFilter)
    UpdatePaginationAsifTableFilter(context: StateContext<AsifTableFilterStateModel>, action: UpdatePaginationAsifTableFilter) {
        const state = context.getState();
        
        state.filters.selected.pagination = action.payload;
        // this.delay(3000).then(any=>{
            context.patchState(state);
        // });
    }

    HasChangedState( state: FilterAsifTableSelected, payload : FilterAsifTableSelected ) {
        console.log('state',state);
        console.log('payload',payload);
        
        if(payload.account == null || payload.asifState == null ) {
            return false;
        }
        if( state.account==null && payload.account!=null) {
            return true;
        };
        if(state.account.id!=payload.account.id) {
            return true;
        }
        if(state.asifState==null && payload.asifState!=null) {
            return true;
        }
        if(state.asifState.id!=payload.asifState.id) {
            return true;
        }
        console.log('state.pagination != payload.pagination',state.pagination != payload.pagination);
        if(state.pagination != payload.pagination) {
            return true;
        }
        return false;
        
    }

    ReloadFilters(state: FilterAsifTable, payload:FilterAsifTable ) {
        
        if(state.selected.idImport==null) {
            
            return true;
        }
        
        if(state.selected.idImport != payload.selected.idImport) {
            
            return true;
        }

        if(state.selected.account && payload.selected.account && state.selected.account.id != payload.selected.account.id) {

            return true;
        }

        return false;
    }
}
