import { Injectable } from "@angular/core";
import { environment } from "environments/environment";
import { ErrorService } from "app/main/_services/error.service";
import { HttpClient } from '@angular/common/http';
import { FilterAsifTableSelected, FilterAsifTable, FilterAsifDetail } from "app/main/_models/filters/account-statement-import-file.filter";
import { AsifTable, AsifDetail } from "app/main/_models/account-statement-import/account-statement-import-file.model";
import { IUserForGroup } from "app/main/_models/user.model";

@Injectable()
export class AsifService {
baseUrl = environment.apiUrl;
user = JSON.parse(localStorage.getItem('currentUser'));
userForGroup = this.user!=null ? <IUserForGroup> {id:this.user.id,idUserGroup:this.user.idUserGroup} : null;
    
    constructor(
        private http: HttpClient,
        private errorService: ErrorService
    ) { }

    getAsifTable (filter: FilterAsifTableSelected) {
        return this.http
        .post(`${this.baseUrl}account-statement-import-files/filter`,filter)
        .map((response: AsifTable) => {
            return response;
        });
    }

    getAsifTableFilter(filter: FilterAsifTableSelected) {
        return this.http
            .post(`${this.baseUrl}account-statement-import-files/table-filter`,filter)
            .map((response: FilterAsifTable) => {
                return response;
            });
    }

    getAsifDetail(filterAsifDetail: FilterAsifDetail) {
        filterAsifDetail.user=this.userForGroup;
        return this.http
            .post(this.baseUrl + `account-statement-import-files/detail`,filterAsifDetail)
            .map(response => <AsifDetail>response)
    }

    getById(id: number) {
        return this.http
            .get(this.baseUrl + `account-statement-import-files/${id}/detail`)
            .map(response => <AsifDetail>response);
    }

    isSaveableInAccountStatement(idImport: number) {
        return this.http
            .get(`${this.baseUrl}account-statement-import-files/imports/${idImport}/isSaveableInAccountStatement`)
            .map(resp=><boolean>resp);
    }

    saveInAccountStatement(idImport: number) {
        return this.http
            .get(`${this.baseUrl}account-statement-import-files/imports/${idImport}/saveInAccountStatement`)
            .map(resp=><boolean>resp);
    }

    update(asifDetail: AsifDetail) {
        asifDetail.user = this.userForGroup;
        return this.http
            .post(`${this.baseUrl}account-statement-import-files/update`,asifDetail)
            .map(resp=><boolean>resp);
    }
    

    


}