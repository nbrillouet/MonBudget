import { IAccountForDetail } from "../../_models/account.model";
import { ErrorService } from "../error.service";
// import { AuthHttp } from "angular2-jwt";
// import { AuthHttp } from "@auth0/angular-jwt";
import { environment } from "../../../../environments/environment";
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AccountService {
baseUrl = environment.apiUrl;

    constructor(
        private http: HttpClient
        // private errorService: ErrorService
    ) { }

    GetForDetailById(id: number) {
        return this.http
        .get(this.baseUrl + `referential/accounts/${id}/account-detail`)
        .map(response => <IAccountForDetail>response);
        // .catch(this.errorService.handleError);
    }

    update(account: IAccountForDetail) {
        return this.http
        .post(`${this.baseUrl}/referential/accounts/${account.id}/update`,account)
        .map(res=><IAccountForDetail>res);
        // .catch(this.errorService.handleError);
    }

    create(idUser:number, account: IAccountForDetail) {
        return this.http
        .post(`${this.baseUrl}/referential/accounts/${account.id}/users/${idUser}/create`,account)
        .map(res=><IAccountForDetail>res);
        // .catch(this.errorService.handleError);
    }

    delete(idUser:number, account: IAccountForDetail) {
        return this.http
        .post(`${this.baseUrl}/referential/accounts/${account.id}/users/${idUser}/delete`,account)
        .map(res=><IAccountForDetail>res);
        // .catch(this.errorService.handleError);
    }

}