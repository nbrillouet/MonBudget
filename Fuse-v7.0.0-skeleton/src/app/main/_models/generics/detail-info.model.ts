import { LoadingInfo } from "./loading-info.model";

export class DetailInfo<T,U>  {
    dataInfos : DataInfo<T>;
    filter: U;

    constructor () {
        this.dataInfos = new DataInfo<T>();
    }
}

export class DataInfo<T> {
    datas: T;
    loadingInfo : LoadingInfo;

    constructor(){
        this.datas = null;
        this.loadingInfo = new LoadingInfo();
    }
}