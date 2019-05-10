import { environment } from "environments/environment";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ISelect, EnumSelectType } from "app/main/_models/generics/select.model";


@Injectable()
export class OperationMethodService {
baseUrl = environment.apiUrl;

    constructor(
        private _http: HttpClient
    ) { }

    GetSelectList(enumSelectType: EnumSelectType) {
        return this._http
            .get(this.baseUrl + `referential/operation-methods/select-type/${<number>enumSelectType}/select-list`)
            .map(response => <ISelect[]>response);
    }
}