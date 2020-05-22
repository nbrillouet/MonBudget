import { environment } from "../../../../environments/environment";
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { IAccountForDetail } from "app/main/_models/referential/account.model";
import { FilterAccountTableSelected, FilterAccountTableSelection } from "app/main/_models/filters/account.filter";
import { UserDetailState } from "app/main/_ngxs/user/user-detail/user-detail.state";
import { Observable } from "rxjs";
import { Select } from "@ngxs/store";
import { IUser, IUserForGroup } from "app/main/_models/user.model";
import { FilterAsTableSelected } from "app/main/_models/filters/account-statement.filter";

@Injectable()
export class AccountService {
    @Select(UserDetailState.getUser) user$: Observable<IUser>;
    
baseUrl = environment.apiUrl;
currentUser: IUser;
userForGroup: IUserForGroup; 

    constructor(
        private _httpClient: HttpClient

    ) {
        this.user$.subscribe((user:IUser) => {
            this.currentUser = user;
            this.userForGroup = this.currentUser!=null ? <IUserForGroup> {id:this.currentUser.id,idUserGroup:this.currentUser.idUserGroup} : null;
        });
     }

    getForDetail(id: number) {
        return this._httpClient
        .get(this.baseUrl + `referential/accounts/${id}/account-detail`)
        .map(response => <IAccountForDetail>response);
    }

    getForTable (filter: FilterAccountTableSelected) {
        filter.user=this.userForGroup;
        return this._httpClient
            .post(`${this.baseUrl}referential/accounts/account-table`,filter)
            .map((response: any) => {
                return response;
            });
    }

    getForTableFilter(filter: FilterAccountTableSelected) {
        filter.user=this.userForGroup;
        return this._httpClient
            .post(`${this.baseUrl}referential/accounts/account-table-filter`,filter)
            .map((response: FilterAccountTableSelection) => {
                return response;
            });
    }

    update(account: IAccountForDetail) {
        return this._httpClient
        .post(`${this.baseUrl}/referential/accounts/${account.id}/update`,account)
        .map(res=><IAccountForDetail>res);
    }

    create(idUser:number, account: IAccountForDetail) {
        return this._httpClient
        .post(`${this.baseUrl}/referential/accounts/${account.id}/users/${idUser}/create`,account)
        .map(res=><IAccountForDetail>res);
    }

    saveDetail(account: IAccountForDetail) {
        return this._httpClient
        .post(`${this.baseUrl}/referential/accounts/${account.id}/users/${account.id}/create`,account)
        .map(res=><IAccountForDetail>res);
    }

    delete(idUser:number, account: IAccountForDetail) {
        return this._httpClient
        .post(`${this.baseUrl}/referential/accounts/${account.id}/users/${idUser}/delete`,account)
        .map(res=><IAccountForDetail>res);
    }

    deleteList(idAccountList: number[]) {
        return this._httpClient
            .post(`${this.baseUrl}referential/accounts/delete-account-list`,idAccountList)
            .map((response: boolean) => {
                return response;
            });
    }

}