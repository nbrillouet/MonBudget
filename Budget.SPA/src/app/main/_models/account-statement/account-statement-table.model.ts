
import { ISelect, ISelectCode } from "../generics/select.model";

export class AsTable {
    id: number;
    account: ISelect;
    bankAgency: ISelect;
    operation : ISelect;
    operationMethod: ISelect;
    operationType: ISelect;
    operationTypeFamily: ISelect;
    amountOperation : number;
    labelOperation: string;
    dateIntegration: Date;
    idDuplicated: boolean;
    plans: ISelectCode[];
}