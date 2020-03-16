import { FilterForDetail } from "app/main/_models/filters/shared/filterDetail.filter";
import { OtForDetail } from "app/main/_models/referential/operation-type.model";

export const OT_DETAIL_LOAD = 'ot-detail-load';
export const OT_DETAIL_SYNCHRONIZE = 'ot-detail-synchronize';
export const OT_DETAIL_CLEAR = 'ot-detail-clear';

export class LoadOtDetail {
    static readonly type = OT_DETAIL_LOAD;
    
    constructor(public payload: FilterForDetail) { }
}

export class SynchronizeOtDetail {
    static readonly type = OT_DETAIL_SYNCHRONIZE;

    constructor(public payload: OtForDetail) { }
}

export class ClearOtDetail {
    static readonly type = OT_DETAIL_CLEAR;
}

// import { OtDetail } from "app/main/_models/referential/operation-type.model";

// export const OT_DETAIL_LOAD = 'ot-detail-load';
// export const OT_DETAIL_CLEAR = 'ot-detail-clear';

// export class LoadOtDetail {
//     static readonly type = OT_DETAIL_LOAD;
 
//     constructor(public payload: number) { }
// }

// export class ClearOtDetail {
//     static readonly type = OT_DETAIL_CLEAR;
// }