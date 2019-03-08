import { FilterAsTableSelected } from "app/main/_models/filters/account-statement.filter";


export const AS_SOLDE_LOAD = 'as-solde-load';
export const AS_SOLDE_LOAD_SUCCESS = 'as-solde-load-success';
export const AS_SOLDE_CHANGE = 'as-solde-change';

export class LoadAsSolde {
    static readonly type = AS_SOLDE_LOAD;
 
    constructor(public payload: FilterAsTableSelected) { }
}

export class LoadAsSoldeSuccess {
    static readonly type = AS_SOLDE_LOAD_SUCCESS;
 
    constructor(public payload: any) { }
}

export class ChangeAsSoldeFilter {
    static readonly type = AS_SOLDE_CHANGE;
 
    constructor(public payload: FilterAsTableSelected) { }
}