import { IGMapAddress } from "./g-map.model.";

export interface IOperationDetail {
    id: number;
    keywordOperation: string;
    keywordPlace: string;
    gMapAddress: IGMapAddress;
}