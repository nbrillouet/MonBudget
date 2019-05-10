import { ISelect } from "../generics/select.model";
import { IUserForGroup } from "../user.model";
import { ComboSimple } from "../generics/combo.model";

export interface OtTable {
    id : number;
    label : string;
    operationTypeFamily: ISelect;
    user: IUserForGroup;
    isMandatory: boolean;
}

export interface OtDetail {
    id : number;
    label : string;
    operationTypeFamily : ComboSimple<ISelect>;
    user: IUserForGroup;
    isMandatory: boolean;
}