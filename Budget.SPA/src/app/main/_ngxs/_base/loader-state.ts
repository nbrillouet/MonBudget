import { LoadingInfo, Loader } from "app/main/_models/generics/loading-info.model";
import { StateContext } from "@ngxs/store";

export class LoaderState {

    constructor() { }

    loading<T extends Loader>(context: StateContext<T>, key: string) {
        let loadingInfo = this.loadSwitch(true);

        this.changeLoader(context, key, loadingInfo);
    }

    loaded<T extends Loader>(context: StateContext<T>, key: string) {
        let loadingInfo = this.loadSwitch(false);
        this.changeLoader(context, key, loadingInfo);
    }

    private loadSwitch(isLoading: boolean) {
        return <LoadingInfo>{ loaded: !isLoading, loading: isLoading };
    }

    private changeLoader<T extends Loader>(context: StateContext<T>, key: string, loadingInfo: LoadingInfo) {
        let state = context.getState();
        (<T>state).loader[key] = loadingInfo;

        context.patchState(state);
    }

}