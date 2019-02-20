import { ISelect } from "../generics/select.model";

export class AsifTable {
    id: number;
    operation : ISelect;
    operationMethod: ISelect;
    operationType: ISelect;
    operationTypeFamily: ISelect;
    amountOperation : number;
    labelOperation: string;
    dateIntegration: Date;
    idDuplicated: boolean;
}