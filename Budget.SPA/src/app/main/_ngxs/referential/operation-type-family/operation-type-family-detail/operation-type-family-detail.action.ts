import { OtfDetail } from "app/main/_models/referential/operation-type-family.model";


export const OTF_DETAIL_LOAD = 'otf-detail-load';
export const OTF_DETAIL_LOAD_SUCCESS = 'otf-detail-load-success';
export const OTF_DETAIL_CLEAR = 'otf-detail-clear';

export class LoadOtfDetail {
    static readonly type = OTF_DETAIL_LOAD;
 
    constructor(public payload: number) { }
}

export class LoadOtfDetailSuccess {
    static readonly type = OTF_DETAIL_LOAD_SUCCESS;
 
    constructor(public payload: OtfDetail) { }
}

export class ClearOtfDetail {
    static readonly type = OTF_DETAIL_CLEAR;
}

