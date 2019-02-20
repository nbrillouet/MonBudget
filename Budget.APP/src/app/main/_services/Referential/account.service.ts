import { IAccountForDetail } from "../../_models/account.model";
import { ErrorService } from "../error.service";
import { AuthHttp } from "angular2-jwt";
import { environment } from "../../../../environments/environment";
import { Injectable } from "@angular/core";

@Injectable()
export class AccountService {
baseUrl = environment.apiUrl;

    constructor(
        private authHttp: AuthHttp,
        private errorService: ErrorService
    ) { }

    GetForDetailById(id: number) {
        return this.authHttp
        .get(this.baseUrl + `referential/accounts/${id}/account-detail`)
        .map(response => <IAccountForDetail>response.json())
        .catch(this.errorService.handleError);
    }

    update(account: IAccountForDetail) {
        return this.authHttp
        .post(`${this.baseUrl}/referential/accounts/${account.id}/update`,account)
        .map(res=><IAccountForDetail>res.json())
        .catch(this.errorService.handleError);
    }

    create(idUser:number, account: IAccountForDetail) {
        return this.authHttp
        .post(`${this.baseUrl}/referential/accounts/${account.id}/users/${idUser}/create`,account)
        .map(res=><IAccountForDetail>res.json())
        .catch(this.errorService.handleError);
    }

    delete(idUser:number, account: IAccountForDetail) {
        return this.authHttp
        .post(`${this.baseUrl}/referential/accounts/${account.id}/users/${idUser}/delete`,account)
        .map(res=><IAccountForDetail>res.json())
        .catch(this.errorService.handleError);
    }

}