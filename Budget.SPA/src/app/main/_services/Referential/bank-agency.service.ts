import { Injectable } from "@angular/core";
import { environment } from "../../../../environments/environment";
import { ErrorService } from "../error.service";
import { HttpClient } from '@angular/common/http';
import { ISelect } from "app/main/_models/generics/select.model";

@Injectable()
export class BankAgencyService {
baseUrl = environment.apiUrl;

    constructor(
        private http: HttpClient
    ) { }

    GetSelectList(idBankSubFamily: number, idSelectType: number) {
        return this.http
        .get(this.baseUrl + `referential/bank-agencies/bank-sub-families/${idBankSubFamily}/select-type/${idSelectType}/select-list`)
        .map(response => <ISelect[]>response);
    }

}