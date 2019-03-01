import { ISelect } from "./generics/select.model";

export interface IOperation {
    id: number;
    idOperationMethod: number;
    idOperationType: number;
    keyword: string;
    label: string;
    reference: string;
}

export class OperationFilter {
    operationMethod: ISelect;
    operationType: ISelect;
}