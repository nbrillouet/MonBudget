import { DetailInfo } from "app/main/_models/generics/detail-info.model";
import { AsTable } from "app/main/_models/account-statement/account-statement-table.model";
import { FilterAsTableSelected } from "app/main/_models/filters/account-statement.filter";
import { State, Selector, Action, StateContext } from "@ngxs/store";
import { AsService } from "app/main/apps/account-statement/account-statement.service";
import { LoadAsInternalTransferCouple, LoadAsInternalTransferCoupleSuccess } from "./as-internal-transfer.action";
import { AsSoldeStateModel } from "../account-statement-solde/account-statement-solde.state";
import { InternalTransferCouple } from "app/main/_models/account-statement/account-statement-internal-transfer.model";

export class AsInternalTransferStateModel extends DetailInfo<InternalTransferCouple[],FilterAsTableSelected> {
    constructor () {
        super();
        this.filter = new FilterAsTableSelected();
    }
}

let detailInfo = new AsInternalTransferStateModel();

@State<AsInternalTransferStateModel>({
    
    name: 'asInternalTransfer',
    defaults : detailInfo 
})

export class AsInternalTransferState {
    constructor(
        private _asService: AsService
    ) {
        
    }

    @Selector()
    static get(state: AsInternalTransferStateModel) {
        return state;
    }

    @Selector()
    static getFilter(state: FilterAsTableSelected) {
        return state;
    }

    @Action(LoadAsInternalTransferCouple)
    loadGrid(context: StateContext<AsInternalTransferStateModel>, action: LoadAsInternalTransferCouple) {
        const state = context.getState();
        state.dataInfos.loadingInfo.loaded=false;
        state.dataInfos.loadingInfo.loading=true;
        state.filter = action.payload;
        state.dataInfos.datas = null;

        context.patchState(state);

        this._asService.getAsInternalTransferCouple(action.payload)
            .subscribe(result=> {
                context.dispatch(new LoadAsInternalTransferCoupleSuccess(result));
            })
    }

    @Action(LoadAsInternalTransferCoupleSuccess)
    loadSuccess(context: StateContext<AsInternalTransferStateModel>, action: LoadAsInternalTransferCoupleSuccess) {
        let state = context.getState();
        state.dataInfos.loadingInfo.loaded = true;
        state.dataInfos.loadingInfo.loading = false;
        state.dataInfos.datas = action.payload;

        context.patchState(state);
        
    }


}