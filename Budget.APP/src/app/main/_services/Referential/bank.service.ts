import { Injectable } from "@angular/core";
import { environment } from "../../../../environments/environment";
import { AuthHttp } from "angular2-jwt";
import { ErrorService } from "../error.service";
import { ISelect } from "../../_models/select.model";

@Injectable()
export class BankService {
baseUrl = environment.apiUrl;

    constructor(
        private authHttp: AuthHttp,
        private errorService: ErrorService
    ) { }

    GetSelectList(idSelectType: number) {
        return this.authHttp
        .get(this.baseUrl + `referential/banks/select-type/${idSelectType}/select-list`)
        .map(response => <ISelect[]>response.json())
        .catch(this.errorService.handleError);
    }

}