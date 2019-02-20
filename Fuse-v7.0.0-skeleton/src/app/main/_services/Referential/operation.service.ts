import { Injectable } from "@angular/core";
import { environment } from "environments/environment";
import { HttpClient } from "@angular/common/http";
import { IOperation } from "app/main/_models/operation.model";
import { ISelect } from "app/main/_models/generics/select.model";


@Injectable()
export class OperationService {
baseUrl = environment.apiUrl;

    constructor(
        private _http: HttpClient
    ) { }

    
    GetList(idOperationMethod: number,idOperationType: number) {
        return this._http
            .get(this.baseUrl + `referential/operations/operation-methods/${idOperationMethod}/operation-types/${idOperationType}/operations`)
            .map(response => <IOperation[]>response);
    }

    GetSelectListByOperationMethods(operationMethods: ISelect[]) {
        return this._http
            .post(`${this.baseUrl}/referential/operations/select-list`,operationMethods)
            .map(res=><ISelect[]>res);
    }

    Create(operation: IOperation) {
        return this._http
            .post(`${this.baseUrl}/referential/operations/create`,operation)
            .map(res=><IOperation>res);
    }
}