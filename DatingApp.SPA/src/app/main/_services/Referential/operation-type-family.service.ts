import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { AuthHttp } from '../../../../../node_modules/angular2-jwt';
import { ErrorService } from '../error.service';
import { ISelectGroup } from '../../_models/Select';

@Injectable()
export class OperationTypeFamilyService {
baseUrl = environment.apiUrl;

    constructor(
        private authHttp: AuthHttp,
        private errorService: ErrorService
    ) { }

    GetSelectGroupList() {
        return this.authHttp
        .get(this.baseUrl + `referential/operation-type-families/select-group-list`)
        .map(response => <ISelectGroup[]>response.json())
        .catch(this.errorService.handleError);
    }

}
