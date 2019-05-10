import { AsifDetail } from "app/main/_models/account-statement-import/account-statement-import-file.model";
import { ISelect } from "app/main/_models/generics/select.model";
import { FilterAsifDetail } from "app/main/_models/filters/account-statement-import-file.filter";
import { FilterOperation } from "app/main/_models/filters/operation.filter";

export const ASIF_DETAIL_LOAD = 'asif-detail-load';
export const ASIF_DETAIL_LOAD_SUCCESS = 'asif-detail-load-success';
export const ASIF_DETAIL_OPERATION_TYPE_FAMILY_CHANGE = 'asif-detail-operation-type-family-change'
export const ASIF_DETAIL_OPERATION_TYPE_FAMILY_CHANGE_SUCCESS = 'asif-detail-operation-type-family-change-success'
export const ASIF_DETAIL_OPERATION_TYPE_CHANGE = 'asif-detail-operation-type-change'
export const ASIF_DETAIL_OPERATION_TYPE_CHANGE_SUCCESS = 'asif-detail-operation-type-change-success'
export const ASIF_DETAIL_CLEAR = 'asif-detail-clear';

export class LoadAsifDetail {
    static readonly type = ASIF_DETAIL_LOAD;
 
    constructor(public payload: FilterAsifDetail) { }
}

export class LoadAsifDetailSuccess {
    static readonly type = ASIF_DETAIL_LOAD_SUCCESS;
 
    constructor(public payload: AsifDetail) { }
}

export class ClearAsifDetail {
    static readonly type = ASIF_DETAIL_CLEAR;
    // constructor(public payload: any) { }
}

//OperationTypeFamily CHANGE
export class asifDetailChangeOperationTypeFamily {
    static readonly type = ASIF_DETAIL_OPERATION_TYPE_FAMILY_CHANGE;
    constructor(public payload: ISelect) { }
}

export class asifDetailChangeOperationTypeFamilySuccess {
    static readonly type = ASIF_DETAIL_OPERATION_TYPE_FAMILY_CHANGE_SUCCESS;
 
    constructor(public payload: ISelect[]) { }
}

//OperationType CHANGE
export class asifDetailChangeOperationType {
    static readonly type = ASIF_DETAIL_OPERATION_TYPE_CHANGE;
    constructor(public payload: FilterOperation) { }
}

export class asifDetailChangeOperationTypeSuccess {
    static readonly type = ASIF_DETAIL_OPERATION_TYPE_CHANGE_SUCCESS;
 
    constructor(public payload: ISelect[]) { }
}
