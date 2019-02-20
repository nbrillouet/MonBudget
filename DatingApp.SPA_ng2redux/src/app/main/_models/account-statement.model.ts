import { ISelect } from "./select.model";
import { IGMapAddress } from "./g-map.model.";
import { IOperationDetail } from "./operation-detail.model";
import { IPagination } from "./pagination.model";

export interface IAsGrid {
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

export interface IAsDetail extends IAsGrid {
    idMovement: number;
    logoName: string;
    isLocalisable: boolean;
    operationDetail: IOperationDetail;
}

