export interface ILoadingInfo {
    loading: boolean;
    loaded: boolean;
}

export class LoadingInfo implements ILoadingInfo {
    loading: boolean;
    loaded: boolean;

    constructor() {
        this.loading = false;
        this.loaded = false;
    }
}