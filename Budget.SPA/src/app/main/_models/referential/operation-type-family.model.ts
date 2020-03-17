import { ISelect, ISelectCode } from "../generics/select.model";
import { IUserForGroup } from "../user.model";

export interface OtfTable {
    id : number;
    label : string;
    asset: ISelectCode;
    movement: ISelect;
    user: IUserForGroup;
    isMandatory: boolean;
    isUsed: boolean;
}

export interface OtfForDetail {
    id : number;
    label : string;
    asset: ISelectCode;
    movement : ISelect;
    user: IUserForGroup;
    isMandatory: boolean;
}