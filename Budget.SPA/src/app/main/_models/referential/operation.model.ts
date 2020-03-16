import { ISelect, ISelectGroup } from "../generics/select.model";
import { IUserForGroup } from "../user.model";
import { ComboSimple } from "../generics/combo.model";

export interface IOperation {
    id: number;
    idOperationMethod: number;
    idOperationType: number;
    keyword: string;
    label: string;
    reference: string;
    idUserGroup: number;
}


export interface OperationTable {
    id : number;
    label : string;
    operationMethod: ISelect;
    operationType: ISelect;
    user: IUserForGroup;
    isMandatory: boolean;
    isUsed: boolean;
}

export interface OperationForDetail {
    id : number;
    label : string;
    operationMethod: ISelect;
    operationType : ISelect;
    user: IUserForGroup;
    isMandatory: boolean;
}
