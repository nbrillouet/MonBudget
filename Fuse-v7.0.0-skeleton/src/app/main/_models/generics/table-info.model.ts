import { LoadingInfo } from "./loading-info.model";
import { Pagination } from "../pagination.model";

export class TableInfo<T,U>  {
    dataInfos : DataInfos<T>;
    filter: U;

    constructor () {
        this.dataInfos = new DataInfos<T>();
    }
}

export class DataInfos<T> {
    datas: T[];
    pagination: Pagination;
    loadingInfo : LoadingInfo;

    constructor(){
        this.datas = null;
        this.loadingInfo = new LoadingInfo();
    }
}


