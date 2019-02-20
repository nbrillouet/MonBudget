import { LoadingInfo } from "./loading-info.model";

interface NoParamConstructor<T> {
    new (): T;
}

// export class FilterInfo<T> {
//     filters: T;
//     loadingInfo : LoadingInfo;

//     constructor(filters: NoParamConstructor<T>){

//         this.filters = new filters();
//         this.loadingInfo = new LoadingInfo();
//     }
// }

export class FilterInfo<T> {
    filters: T;
    loadingInfo : LoadingInfo;

    constructor(TCreator: { new (): T; }){

        this.filters = new TCreator();
        this.loadingInfo = new LoadingInfo();
    }
}