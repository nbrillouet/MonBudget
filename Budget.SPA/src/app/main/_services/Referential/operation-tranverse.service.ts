import { Injectable } from "@angular/core";
import { environment } from "environments/environment";
import { OperationTransverse } from "app/main/_models/referential/operation-transverse.model";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class OperationTransverseService {
baseUrl = environment.apiUrl;

    constructor(
        private _http: HttpClient
    ) { }
    

    Create(operationTransverse: OperationTransverse) {
        // console.log('operationTransverse',operationTransverse);
        return this._http
            .post(`${this.baseUrl}referential/operation-transverses/create`,operationTransverse)
            .map(res=><OperationTransverse>res);
    }
}