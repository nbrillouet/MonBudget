import { FilterAsTableSelected } from "app/main/_models/filters/account-statement.filter";
import { InternalTransferCouple } from "app/main/_models/account-statement/account-statement-internal-transfer.model";

export const AS_INTERNAL_TRANSFER_LOAD = 'as-internal-transfer-load';
export const AS_INTERNAL_TRANSFER_LOAD_SUCCESS = 'as-internal-transfer-load-success';
export const AS_INTERNAL_TRANSFER_CHANGE = 'as-internal-transfer-change';

export class LoadAsInternalTransferCouple {
    static readonly type = AS_INTERNAL_TRANSFER_LOAD;
 
    constructor(public payload: FilterAsTableSelected) { }
}

export class LoadAsInternalTransferCoupleSuccess {
    static readonly type = AS_INTERNAL_TRANSFER_LOAD_SUCCESS;
 
    constructor(public payload: InternalTransferCouple[]) { }
}

export class ChangeAsInternalTransferFilter {
    static readonly type = AS_INTERNAL_TRANSFER_CHANGE;
 
    constructor(public payload: FilterAsTableSelected) { }
}