import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { ErrorService } from '../error.service';
import { HttpClient } from '@angular/common/http';
import { ISelect, EnumSelectType } from 'app/main/_models/generics/select.model';

@Injectable()
export class OperationTypeService {
baseUrl = environment.apiUrl;
user = JSON.parse(localStorage.getItem('currentUser'));

    constructor(
        private http: HttpClient
    ) { }


    GetSelectListByOperationTypeFamily(operationTypeFamilies: ISelect[]) {
        return this.http
            .post(`${this.baseUrl}referential/operation-types/user-groups/${this.user.idUserGroup}/select-list`,operationTypeFamilies)
            .map(res=><ISelect[]>res);
    }

    GetSelectList(idOperationTypeFamily: number, enumSelectType: EnumSelectType) {
        return this.http
        .get(`${this.baseUrl}referential/operation-types/operation-type-families/${idOperationTypeFamily}/select-type/${<number>enumSelectType}/select-list`)
        .map(response => <ISelect[]>response);
    }
}
