import { IGMapAddress } from "./GMap";

export interface IOperationDetail {
    id: number;
    keywordOperation: string;
    keywordPlace: string;
    gMapAddress: IGMapAddress;
}