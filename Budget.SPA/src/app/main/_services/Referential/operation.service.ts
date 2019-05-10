import { Injectable } from "@angular/core";
import { environment } from "environments/environment";
import { HttpClient } from "@angular/common/http";
import { IOperation } from "app/main/_models/referential/operation.model";
import { ISelect, EnumSelectType } from "app/main/_models/generics/select.model";


@Injectable()
export class OperationService {
baseUrl = environment.apiUrl;
user = JSON.parse(localStorage.getItem('currentUser'));

    constructor(
        private _http: HttpClient
    ) { }

    GetSelectList(idOperationMethod: number,idOperationType: number, enumSelectType: EnumSelectType) {
        return this._http
            .get(this.baseUrl + `referential/operations/user-groups/${this.user.idUserGroup}/operation-methods/${idOperationMethod}/operation-types/${idOperationType}/select-type/${enumSelectType}/operations`)
            .map(response => <ISelect[]>response);
    }

    GetSelectListByOperationMethods(operationMethods: ISelect[]) {
        return this._http
            .post(`${this.baseUrl}/referential/operations/user-groups/${this.user.idUserGroup}/select-list`,operationMethods)
            .map(res=><ISelect[]>res);
    }

    Create(operation: IOperation) {
        operation.idUserGroup = this.user.idUserGroup;
        return this._http
            .post(`${this.baseUrl}/referential/operations/create`,operation)
            .map(res=><IOperation>res);
    }
}