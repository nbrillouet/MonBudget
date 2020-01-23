import { OtDetail } from "app/main/_models/referential/operation-type.model";

export const OT_DETAIL_LOAD = 'ot-detail-load';
// export const OT_DETAIL_LOAD_SUCCESS = 'ot-detail-load-success';
export const OT_DETAIL_CLEAR = 'ot-detail-clear';

export class LoadOtDetail {
    static readonly type = OT_DETAIL_LOAD;
 
    constructor(public payload: number) { }
}

// export class LoadOtDetailSuccess {
//     static readonly type = OT_DETAIL_LOAD_SUCCESS;
 
//     constructor(public payload: OtDetail) { }
// }

export class ClearOtDetail {
    static readonly type = OT_DETAIL_CLEAR;
}