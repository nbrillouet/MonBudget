import { FilterOtfTable, FilterOtfTableSelected } from "app/main/_models/filters/operation-type-family.filter";
import { FilterInfo } from "app/main/_models/generics/filter.info.model";
import { State, Store, Selector, Action, StateContext } from "@ngxs/store";
import { LoadOtfTableFilter, ChangeOtfTableFilter, UpdatePaginationOtfTableFilter } from "./operation-type-family-list-filter.action";
import { LoadOtfTableDatas } from "../operation-type-family-list/operation-type-family-list.action";
import { OtfService } from "app/main/apps/referential/operations/operation-type-family/operation-type-family.service";
import { LoaderState } from "app/main/_ngxs/_base/loader-state";


export class OtfTableFilterStateModel extends FilterInfo<FilterOtfTable> {
    constructor () {
        super(FilterOtfTable);
    }
}

let otfTableFilterStateModel = new OtfTableFilterStateModel();

@State<OtfTableFilterStateModel>({
    name: 'OtfTableFilter',
    defaults : otfTableFilterStateModel
})

export class OtfTableFilterState extends LoaderState {

    constructor(
        private _otfService: OtfService,
        private _store: Store
        ) {
            super();
    }

    // async delay(ms: number) {
    //     await new Promise(resolve => setTimeout(()=>resolve(), ms)).then(()=>console.log("fired"));
    //   }

    @Selector()
    static get(state: OtfTableFilterStateModel) {
 
        return state;
    }

    // @Selector()
    // static getFilter(state: PlanTableComboFilterStateModel) {
    //     return state.filter;
    // }

    @Action(LoadOtfTableFilter)
    loadOtfTableFilter(context: StateContext<OtfTableFilterStateModel>, action: LoadOtfTableFilter) {
        this.loading(context,'filters');
        
        const state = context.getState();
        state.filters = null;
        context.patchState(state);

        this._otfService.getOtfTableFilter(action.payload.selected)
            .subscribe(result=> {
          
                //conserver le payload
                let payload = JSON.parse(JSON.stringify(action.payload.selected));
                let state = context.getState();
                state.filters = action.payload;
                context.patchState(state);
                
                //TODO a controler
                context.dispatch(new ChangeOtfTableFilter(payload));

                this.loaded(context,'filters');
            });

    }

    // @Action(LoadOtfTableFilterSuccess)
    // loadSuccess(context: StateContext<OtfTableFilterStateModel>, action: LoadOtfTableFilterSuccess) {
        
    //     //conserver le payload
    //     let payload = JSON.parse(JSON.stringify(action.payload.selected));

    //     let state = context.getState();
    //     state.filters = action.payload;

    //     context.patchState(state);
        
    //     context.dispatch(new ChangeOtfTableFilter(payload));
        
    // }
        // this.delay(3000).then(any=>{
    @Action(ChangeOtfTableFilter)
    changeFilter(context: StateContext<OtfTableFilterStateModel>, action: ChangeOtfTableFilter) {
        
        this._store.dispatch(new LoadOtfTableDatas(action.payload));

     }

    @Action(UpdatePaginationOtfTableFilter)
    UpdatePaginationOtfTableFilter(context: StateContext<OtfTableFilterStateModel>, action: UpdatePaginationOtfTableFilter) {
        const state = context.getState();
        
        state.filters.selected.pagination = action.payload;
        // this.delay(3000).then(any=>{
            context.patchState(state);
        // });
    }

    // HasChangedState( state: FilterOtfTableSelected, payload : FilterOtfTableSelected ) {

    //     return false;
    //     // if(payload.account == null || payload.otfState == null ) {
    //     //     return false;
    //     // }
    //     if( state.movement==null && payload.movement!=null) {
    //         return true;
    //     };
    //     if(state.label!=payload.label) {
    //         return true;
    //     }

    //     if(state.pagination != payload.pagination) {
    //         return true;
    //     }
    //     return false;
        
    // }

    // ReloadFilters(state: FilterOtfTable, payload:FilterOtfTable ) {
        
    //     if(state.selected.idImport==null) {
            
    //         return true;
    //     }
        
    //     if(state.selected.idImport != payload.selected.idImport) {
            
    //         return true;
    //     }

    //     if(state.selected.account && payload.selected.account && state.selected.account.id != payload.selected.account.id) {

    //         return true;
    //     }

    //     return false;
    // }
}