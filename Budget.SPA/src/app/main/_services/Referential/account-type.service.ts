import { Injectable } from "@angular/core";
import { environment } from "../../../../environments/environment";
import { ErrorService } from "../error.service";
import { HttpClient } from '@angular/common/http';
import { ISelect } from "app/main/_models/generics/select.model";

@Injectable()
export class AccountTypeService {
baseUrl = environment.apiUrl;

    constructor(
        private http: HttpClient
        // private errorService: ErrorService
    ) { }

    GetSelectList(idSelectType: number) {
        return this.http
        .get(this.baseUrl + `referential/account-types/select-type/${idSelectType}/select-list`)
        .map(response => <ISelect[]>response);
        // .catch(this.errorService.handleError);
    }

}