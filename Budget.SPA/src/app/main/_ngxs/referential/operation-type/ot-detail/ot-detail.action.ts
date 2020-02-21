import { OtDetail } from "app/main/_models/referential/operation-type.model";

export const OT_DETAIL_LOAD = 'ot-detail-load';
export const OT_DETAIL_CLEAR = 'ot-detail-clear';

export class LoadOtDetail {
    static readonly type = OT_DETAIL_LOAD;
 
    constructor(public payload: number) { }
}

export class ClearOtDetail {
    static readonly type = OT_DETAIL_CLEAR;
}