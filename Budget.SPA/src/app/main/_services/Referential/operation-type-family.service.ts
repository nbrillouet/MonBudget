import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { ErrorService } from '../error.service';
import { HttpClient } from '@angular/common/http';
import { ISelectGroup, EnumSelectType, ISelect } from 'app/main/_models/generics/select.model';

@Injectable()
export class OperationTypeFamilyService {
baseUrl = environment.apiUrl;
user = JSON.parse(localStorage.getItem('currentUser'));

    constructor(
        private http: HttpClient
    ) { }

    GetSelectGroupList() {
        return this.http
        .get(this.baseUrl + `referential/operation-type-families/users/${this.user.id}/select-group-list`)
        .map(response => <ISelectGroup[]>response);
    }

    GetSelectList(idMovement: number,enumSelectType: EnumSelectType) {
        return this.http
        .get(this.baseUrl + `referential/operation-type-families/user-groups/${this.user.idUserGroup}/movements/${idMovement}/select-type/${<number>enumSelectType}/select-list`)
        .map(response => <ISelect[]>response);
    }

    

}
