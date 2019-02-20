import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { ErrorService } from '../error.service';
import { HttpClient } from '@angular/common/http';
import { ISelectGroup, EnumSelectType, ISelect } from 'app/main/_models/generics/select.model';

@Injectable()
export class OperationTypeFamilyService {
baseUrl = environment.apiUrl;

    constructor(
        private http: HttpClient,
        private errorService: ErrorService
    ) { }

    GetSelectGroupList() {
        return this.http
        .get(this.baseUrl + `referential/operation-type-families/select-group-list`)
        .map(response => <ISelectGroup[]>response);
        // .catch(this.errorService.handleError);
    }

    GetSelectList(idMovement: number,enumSelectType: EnumSelectType) {
        return this.http
        .get(this.baseUrl + `referential/operation-type-families/movements/${idMovement}/selectType/${<number>enumSelectType}/select-list`)
        .map(response => <ISelect[]>response);
        // .catch(this.handleError);
    }

}
