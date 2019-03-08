import { FilterAsDetail } from "app/main/_models/filters/account-statement.filter";
import { AsDetail } from "app/main/_models/account-statement.model";
import { ISelect } from "app/main/_models/generics/select.model";
import { OperationFilter } from "app/main/_models/operation.model";

export const AS_DETAIL_LOAD = 'as-detail-load';
export const AS_DETAIL_LOAD_SUCCESS = 'as-detail-load-success';
export const AS_DETAIL_OPERATION_TYPE_FAMILY_CHANGE = 'as-detail-operation-type-family-change'
export const AS_DETAIL_OPERATION_TYPE_FAMILY_CHANGE_SUCCESS = 'as-detail-operation-type-family-change-success'
export const AS_DETAIL_OPERATION_TYPE_CHANGE = 'as-detail-operation-type-change'
export const AS_DETAIL_OPERATION_TYPE_CHANGE_SUCCESS = 'as-detail-operation-type-change-success'


export class LoadAsDetail {
    static readonly type = AS_DETAIL_LOAD;
 
    constructor(public payload: FilterAsDetail) { }
}

export class LoadAsDetailSuccess {
    static readonly type = AS_DETAIL_LOAD_SUCCESS;
 
    constructor(public payload: AsDetail) { }
}

//OperationTypeFamily CHANGE
export class asDetailChangeOperationTypeFamily {
    static readonly type = AS_DETAIL_OPERATION_TYPE_FAMILY_CHANGE;
    constructor(public payload: ISelect) { }
}

export class asDetailChangeOperationTypeFamilySuccess {
    static readonly type = AS_DETAIL_OPERATION_TYPE_FAMILY_CHANGE_SUCCESS;
 
    constructor(public payload: ISelect[]) { }
}

//OperationType CHANGE
export class asDetailChangeOperationType {
    static readonly type = AS_DETAIL_OPERATION_TYPE_CHANGE;
    constructor(public payload: OperationFilter) { }
}

export class asDetailChangeOperationTypeSuccess {
    static readonly type = AS_DETAIL_OPERATION_TYPE_CHANGE_SUCCESS;
 
    constructor(public payload: ISelect[]) { }
}
