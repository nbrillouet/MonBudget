import { ISelect } from "../generics/select.model";
import { IUserForGroup } from "../user.model";

export interface OtfTable {
    id : number;
    label : string;
    asset: string;
    movement: ISelect;
    user: IUserForGroup;
    isMandatory: boolean;
    isUsed: boolean;
}

export interface OtfForDetail {
    id : number;
    label : string;
    asset: ISelect;
    movement : ISelect;
    user: IUserForGroup;
    isMandatory: boolean;
}