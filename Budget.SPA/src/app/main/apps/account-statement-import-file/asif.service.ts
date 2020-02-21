import { Injectable } from "@angular/core";
import { environment } from "environments/environment";
import { ErrorService } from "app/main/_services/error.service";
import { HttpClient } from '@angular/common/http';
import { FilterAsifTableSelected, FilterAsifDetail, FilterAsifTableSelection } from "app/main/_models/filters/account-statement-import-file.filter";
import { AsifDetail } from "app/main/_models/account-statement-import/account-statement-import-file.model";
import { IUserForGroup } from "app/main/_models/user.model";

@Injectable()
export class AsifService {
baseUrl = environment.apiUrl;
user = JSON.parse(localStorage.getItem('currentUser'));
userForGroup = this.user!=null ? <IUserForGroup> {id:this.user.id,idUserGroup:this.user.idUserGroup} : null;
    
    constructor(
        private http: HttpClient
    ) { }

    getAsifTable (filter: FilterAsifTableSelected) {
        filter.user=this.userForGroup;
        return this.http
        .post(`${this.baseUrl}account-statement-import-files/filter`,filter)
        .map((response: any) => response);
    }

    getAsifTableFilter(filter: FilterAsifTableSelected) {
        filter.user=this.userForGroup;
        return this.http
            .post(`${this.baseUrl}account-statement-import-files/table-filter`,filter)
            .map((response: FilterAsifTableSelection) => {
                return response;
            });
    }

    getAsifDetail(filter: FilterAsifDetail) {
        filter.user=this.userForGroup;
        return this.http
            .post(this.baseUrl + `account-statement-import-files/detail`,filter)
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