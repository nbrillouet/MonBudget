import { ISelect } from "../generics/select.model";
import { IUserForGroup } from "../user.model";

export interface OtTable {
    id : number;
    label : string;
    operationTypeFamily: ISelect;
    user: IUserForGroup;
    isMandatory: boolean;
    isUsed: boolean;
}

export interface OtForDetail {
    id : number;
    label : string;
    operationTypeFamily : ISelect;
    user: IUserForGroup;
    isMandatory: boolean;
}