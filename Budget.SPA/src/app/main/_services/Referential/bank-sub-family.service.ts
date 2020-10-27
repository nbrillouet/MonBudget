import { Injectable } from "@angular/core";
import { environment } from "../../../../environments/environment";
import { HttpClient } from '@angular/common/http';
import { ISelect } from "app/main/_models/generics/select.model";

@Injectable()
export class BankSubFamilyService {
baseUrl = environment.apiUrl;

    constructor(
        private http: HttpClient
    ) { }

    GetSelectList(idBankFamily:number, idSelectType: number) {
        return this.http
        .get(this.baseUrl + `referential/bank-sub-families/bank-families/${idBankFamily}/select-type/${idSelectType}/select-list`)
        .map(response => <ISelect[]>response);

    }

}