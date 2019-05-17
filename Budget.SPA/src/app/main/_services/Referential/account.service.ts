import { environment } from "../../../../environments/environment";
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { IAccountForDetail } from "app/main/_models/referential/account.model";

@Injectable()
export class AccountService {
baseUrl = environment.apiUrl;

    constructor(
        private http: HttpClient

    ) { }

    GetForDetail(id: number) {
        return this.http
        .get(this.baseUrl + `referential/accounts/${id}/account-detail`)
        .map(response => <IAccountForDetail>response);
    }

    update(account: IAccountForDetail) {
        return this.http
        .post(`${this.baseUrl}/referential/accounts/${account.id}/update`,account)
        .map(res=><IAccountForDetail>res);
    }

    create(idUser:number, account: IAccountForDetail) {
        return this.http
        .post(`${this.baseUrl}/referential/accounts/${account.id}/users/${idUser}/create`,account)
        .map(res=><IAccountForDetail>res);
    }

    saveDetail(account: IAccountForDetail) {
        return this.http
        .post(`${this.baseUrl}/referential/accounts/${account.id}/users/${account.id}/create`,account)
        .map(res=><IAccountForDetail>res);
    }

    delete(idUser:number, account: IAccountForDetail) {
        return this.http
        .post(`${this.baseUrl}/referential/accounts/${account.id}/users/${idUser}/delete`,account)
        .map(res=><IAccountForDetail>res);
    }

}