import { Injectable } from "@angular/core";
import { environment } from "environments/environment";
import { ErrorService } from "app/main/_services/error.service";
import { HttpClient } from '@angular/common/http';
import { FilterAsifTableSelected, FilterAsifDetail, FilterAsifTableSelection } from "app/main/_models/filters/account-statement-import-file.filter";
import { AsifDetail, AsifForDetail } from "app/main/_models/account-statement-import/account-statement-import-file.model";
import { IUserForGroup, UserForDetail, UserForAuth } from "app/main/_models/user.model";
import { Select } from "@ngxs/store";
import { UserDetailState } from "app/main/_ngxs/user/user-detail/user-detail.state";
import { Observable } from "rxjs";
import { FilterForDetail } from "app/main/_models/filters/shared/filterDetail.filter";

@Injectable()
export class AsifService {
    // @Select(UserDetailState.getUser) user$: Observable<UserForDetail>;
userAuth: UserForAuth = JSON.parse(localStorage.getItem('userInfo'));
userForGroup: IUserForGroup = { id:this.userAuth.id,idUserGroup:this.userAuth.idUserGroup }; 
baseUrl = environment.apiUrl;
// currentUser: UserForDetail;


    constructor(
        private _httpClient: HttpClient
    ) { 
        // this.user$.subscribe((user:UserForDetail) => {
        //     this.currentUser = user;
        //     this.userForGroup = this.currentUser!=null ? <IUserForGroup> {id:this.currentUser.id,idUserGroup:this.currentUser.idUserGroup} : null;
        // });
    }

    getAsifTable (filter: FilterAsifTableSelected) {
        filter.user=this.userForGroup;
        return this._httpClient
        .post(`${this.baseUrl}account-statement-import-files/filter`,filter)
        .map((response: any) => response);
    }

    getAsifTableFilter(filter: FilterAsifTableSelected) {
        filter.user=this.userForGroup;
        return this._httpClient
            .post(`${this.baseUrl}account-statement-import-files/table-filter`,filter)
            .map((response: FilterAsifTableSelection) => {
                return response;
            });
    }

    getDetailFilter(filter: AsifForDetail) {
        filter.user = this.userForGroup;
        return this._httpClient
            .post<FilterAsifDetail>(`${this.baseUrl}account-statement-import-files/asif-detail-filter`,filter)
    }

    getForDetail(filter: FilterForDetail) {
        return this._httpClient
            .get(`${this.baseUrl}account-statement-import-files/${filter.id}/asif-detail`)
            .map(response => <AsifForDetail>response)
    }

    getById(id: number) {
        return this._httpClient
            .get(this.baseUrl + `account-statement-import-files/${id}/detail`)
            .map(response => <AsifDetail>response);
    }

    isSaveableInAccountStatement(idImport: number) {
        return this._httpClient
            .get(`${this.baseUrl}account-statement-import-files/imports/${idImport}/isSaveableInAccountStatement`)
            .map(resp=><boolean>resp);
    }

    saveInAccountStatement(idImport: number) {
        return this._httpClient
            .get(`${this.baseUrl}account-statement-import-files/imports/${idImport}/saveInAccountStatement`)
            .map(resp=><boolean>resp);
    }

    update(asifDetail: AsifDetail) {
        asifDetail.user = this.userForGroup;
        return this._httpClient
            .post(`${this.baseUrl}account-statement-import-files/update`,asifDetail)
            .map(resp=><boolean>resp);
    }

}