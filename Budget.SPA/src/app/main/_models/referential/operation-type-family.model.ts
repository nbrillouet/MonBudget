import { ISelect } from "../generics/select.model";
import { ComboSimple } from "../generics/combo.model";
import { IUserForGroup } from "../user.model";

export interface OtfTable {
    id : number;
    label : string;
    logoClassName: string;
    movement: ISelect;
    user: IUserForGroup;
    isMandatory: boolean;
}

export interface OtfDetail {
    id : number;
    label : string;
    logoClassName: ComboSimple<ISelect>;
    movement : ComboSimple<ISelect>;
    user: IUserForGroup;
    isMandatory: boolean;
}