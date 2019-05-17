import { FilterInfo } from "app/main/_models/generics/filter.info.model";
import { FilterAsiTable, FilterAsiTableSelected } from "app/main/_models/filters/account-statement-import.filter";
import { LoadAsiTableFilter, LoadAsiTableFilterSuccess, ChangeAsiTableFilter, UpdatePaginationAsiTableFilter } from "./asi-list-filter.action";
import { LoadAsiTableDatas } from "../asi-list/asi-list.action";
import { AsiService } from "app/main/apps/account-statement-import/asi.service";
import { State, Selector, Action, StateContext, Store } from "@ngxs/store";

export class AsiTableFilterStateModel extends FilterInfo<FilterAsiTable> {
    constructor () {
        super(FilterAsiTable);
    }
}

let planTableComboFilter = new AsiTableFilterStateModel();

@State<AsiTableFilterStateModel>({
    name: 'AsiTableFilter',
    defaults : planTableComboFilter
})

export class AsiTableFilterState {

    changedState: boolean;
    
    constructor(
        private _asiService: AsiService,
        private _store: Store
        ) {
            
    }

    @Selector()
    static get(state: AsiTableFilterStateModel) {

        return state;
    }

    // @Selector()
    // static getFilter(state: PlanTableComboFilterStateModel) {
    //     return state.filter;
    // }

    @Action(LoadAsiTableFilter)
    loadAsiTableFilter(context: StateContext<AsiTableFilterStateModel>, action: LoadAsiTableFilter) {
        const state = context.getState();

        state.loadingInfo.loaded=false;
        state.loadingInfo.loading=true;
        state.filters = null;
        
        context.patchState(state);
   
        this._asiService.getAsiTableFilter(action.payload.selected)
            .subscribe(result=> {

                context.dispatch(new LoadAsiTableFilterSuccess(result));
            });

    }

    @Action(LoadAsiTableFilterSuccess)
    loadSuccess(context: StateContext<AsiTableFilterStateModel>, action: LoadAsiTableFilterSuccess) {
        //conserver le payload
        let payload = JSON.parse(JSON.stringify(action.payload.selected));
        
        let state = context.getState();
        state.loadingInfo.loaded = true;
        state.loadingInfo.loading = false;
        state.filters = action.payload;
 
        context.patchState(state);

        context.dispatch(new ChangeAsiTableFilter(payload));
        
    }

    @Action(ChangeAsiTableFilter)
    changeFilter(context: StateContext<AsiTableFilterStateModel>, action: ChangeAsiTableFilter) {
        
        this._store.dispatch(new LoadAsiTableDatas(action.payload));
        
        // const state = context.getState();

        // if(this.ReloadFilters(state.filters.selected,action.payload.selected)) {
        //     context.dispatch(new LoadAsiTableFilter(action.payload));
        // }
        // else {
        //     // changedState = this.HasChangedState(state.filters.selected,action.payload.selected);
        //     if(this.ReloadTable(state.filters.selected,action.payload.selected)) {
        //         state.filters = action.payload;
        //         context.patchState(state);

        //         this._store.dispatch(new LoadAsiTableDatas(state.filters.selected));
    
        //     }
        // }
    }

    @Action(UpdatePaginationAsiTableFilter)
    UpdatePaginationAsiTableFilter(context: StateContext<AsiTableFilterStateModel>, action: UpdatePaginationAsiTableFilter) {
        const state = context.getState();

        state.filters.selected.pagination = action.payload;
            
        context.patchState(state);


    }


    // ReloadTable( state: FilterAsiTableSelected, payload : FilterAsiTableSelected ) {

    //     if(payload.idBank == null) {
    //         return false;
    //     }
    //     // if( state.idBank && payload.account!=null) {
    //     //     return true;
    //     // };
    //     if(state.idBank!=payload.idBank) {
    //         return true;
    //     }
    //     // if(state.paginationll && payload.asifState!=null) {
    //     //     return true;
    //     // }
    //     // if(state.asifState.id!=payload.asifState.id) {
    //     //     return true;
    //     // }
    //     if(state.pagination != payload.pagination) {
    //         return true;
    //     }
    //     return false;
        
    // }

    // ReloadFilters(state: FilterAsiTableSelected, payload:FilterAsiTableSelected ) {
    //     if(state.idUser==null && payload.idUser!=null) {
    //         return true;
    //     }
    //     if(state.idUser != payload.idUser) {
    //         return true;
    //     }
    //     // if(state.selected.account && state.selected.account.id != payload.selected.account.id) {
    //     //     return true;
    //     // }
    //     return false;
    // }
}