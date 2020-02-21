
export const OTF_DETAIL_LOAD = 'otf-detail-load';
export const OTF_DETAIL_CLEAR = 'otf-detail-clear';

export class LoadOtfDetail {
    static readonly type = OTF_DETAIL_LOAD;
 
    constructor(public payload: number) { }
}


export class ClearOtfDetail {
    static readonly type = OTF_DETAIL_CLEAR;
}

