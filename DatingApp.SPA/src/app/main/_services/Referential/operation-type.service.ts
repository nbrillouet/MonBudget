import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { AuthHttp } from '../../../../../node_modules/angular2-jwt';
import { ErrorService } from '../error.service';
import { ISelect } from '../../_models/Select';

@Injectable()
export class OperationTypeService {
baseUrl = environment.apiUrl;

    constructor(
        private authHttp: AuthHttp,
        private errorService: ErrorService
    ) { }


    GetSelectListByOperationTypeFamily(operationTypeFamilies: ISelect[]) {
        return this.authHttp
            .post(`${this.baseUrl}/referential/operation-types/select-list`,operationTypeFamilies)
            .map(res=><ISelect>res.json())
            .catch(this.errorService.handleError);
    }
}
