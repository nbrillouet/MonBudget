import { State, Selector, Action, StateContext } from "@ngxs/store";
import { AccountStatementService } from "app/main/apps/account-statement/account-statement.service";
import { AsFilter } from "app/main/_models/Filters/filter-account-statement";
import { AsTable } from "app/main/_models/account-statement.model";
import { LoadAsDatas, LoadAsDatasSuccess, ChangeAsFilter } from "./account-statement-list.action";
import { TableInfo } from "app/main/_models/generics/table-info.model";

export class AsTableStateModel extends TableInfo<AsTable,AsFilter> {
   
    constructor () {
        super();
        this.filter = new AsFilter();
    }
}

// var loading = <LoadingInfo> {loading:false,loaded:false}
// var gridInfo = <GridInfo<IAsGrid>> {datas:null,pagination:null,loadingInfo:loading};
let tableInfo = new AsTableStateModel();

@State<AsTableStateModel>({
    
    name: 'accountStatementTable',
    defaults : tableInfo 
    // {
    //     gridInfo: gridInfo
    // }
})

export class AsListState {
    constructor(private accountStatementService: AccountStatementService) {
        
    }

    @Selector()
    static get(state: AsTableStateModel) {
        return state;
    }

    @Selector()
    static getFilter(state: AsFilter) {
        return state.filter;
    }

    @Action(LoadAsDatas)
    loadGrid(context: StateContext<AsTableStateModel>, action: LoadAsDatas) {
        const state = context.getState();
        state.dataInfos.loadingInfo.loaded=false;
        state.dataInfos.loadingInfo.loading=true;
        state.filter = action.payload;
        state.dataInfos.datas = null;
        
        // state.pagination = new Pagination();
        context.patchState(state);

        this.accountStatementService.get(action.payload)
            .subscribe(result=> {
                context.dispatch(new LoadAsDatasSuccess(result));
            })

    }

    @Action(LoadAsDatasSuccess)
    loadSuccess(context: StateContext<AsTableStateModel>, action: LoadAsDatasSuccess) {
        let state = context.getState();
        state.dataInfos.loadingInfo.loaded = true;
        state.dataInfos.loadingInfo.loading = false;
        state.dataInfos.datas = action.payload.datas;

        state.filter.pagination = action.payload.pagination;


        context.patchState(state);
        
    }

    @Action(ChangeAsFilter)
    changeFilter(context: StateContext<AsTableStateModel>, action: ChangeAsFilter) {
        const state = context.getState();
        state.filter=action.payload

        // state.loadingInfo.loaded=false;
        // state.loadingInfo.loading=true;
        // state.datas = null;
        // state.pagination = new Pagination();
        context.patchState(state);
        context.dispatch(new LoadAsDatas(action.payload));
    }



}

