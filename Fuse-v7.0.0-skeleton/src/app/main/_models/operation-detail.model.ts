import { IGMapAddress, GMapAddress } from "./g-map.model.";

export interface IOperationDetail {
    id: number;
    keywordOperation: string;
    keywordPlace: string;
    gMapAddress: IGMapAddress;
}

export class OperationDetail {
    id: number;
    keywordOperation: string;
    keywordPlace: string;
    gMapAddress: GMapAddress;
}