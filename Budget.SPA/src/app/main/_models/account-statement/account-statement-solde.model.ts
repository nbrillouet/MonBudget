import { ISelect } from "../generics/select.model";

export class AsSolde {
    account: ISelect;
    credit: number;
    debit: number;
    total: number;
    solde: number;
    dateMax: Date;
    // isWithItTransfer: boolean;
}