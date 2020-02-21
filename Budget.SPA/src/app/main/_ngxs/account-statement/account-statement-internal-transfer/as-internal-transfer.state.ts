import { FilterAsTableSelected } from "app/main/_models/filters/account-statement.filter";
import { AsService } from "app/main/apps/account-statement/account-statement.service";
import { LoadAsInternalTransferCouple } from "./as-internal-transfer.action";
import { InternalTransferCouple } from "app/main/_models/account-statement/account-statement-internal-transfer.model";
import { State, Selector, Action, StateContext } from "@ngxs/store";
import { LoaderState } from "../../_base/loader-state";
import { DatasFilter } from "app/main/_models/generics/detail-info.model";
import { Injectable } from "@angular/core";

export class AsInternalTransferStateModel extends DatasFilter<InternalTransferCouple[],FilterAsTableSelected> {
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

@Injectable()
export class AsInternalTransferState extends LoaderState {
    constructor(
        private _asService: AsService
    ) {
        super();
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
        this.loading(context,'datas');
        
        const state = context.getState();
        state.filter = action.payload;
        state.datas = null;
        context.patchState(state);

        this._asService.getAsInternalTransferCouple(action.payload)
            .subscribe(result=> {
                let state = context.getState();
                state.datas = result;
                context.patchState(state);

                this.loaded(context,'datas');
            })
    }

    // @Action(LoadAsInternalTransferCoupleSuccess)
    // loadSuccess(context: StateContext<AsInternalTransferStateModel>, action: LoadAsInternalTransferCoupleSuccess) {
    //     let state = context.getState();
    //     state.dataInfos.datas = action.payload;

    //     context.patchState(state);
        
    // }


}