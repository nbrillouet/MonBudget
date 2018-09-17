import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ISelect } from '../_models/Select';
import { AuthHttp } from 'angular2-jwt';
import { environment } from '../../../environments/environment';
import { IOperation } from '../_models/Operation';
import { ErrorService } from './error.service';

@Injectable()
export class ReferentialService {
baseUrl = environment.apiUrl;

constructor(
    private authHttp: AuthHttp,
    private errorService: ErrorService
) { }

GetOperationMethodSelectList(idSelectType: number) {
    return this.authHttp
        .get(this.baseUrl + `referential/operationMethods/selectType/${idSelectType}`)
        .map(response => <ISelect[]>response.json())
        .catch(this.handleError);
}

GetOperationTypeFamilySelectList(idMovement: number,idSelectType: number) {
    return this.authHttp
    .get(this.baseUrl + `referential/operationTypeFamilies/movements/${idMovement}/selectType/${idSelectType}`)
    .map(response => <ISelect[]>response.json())
    .catch(this.handleError);
}

GetOperationTypeSelectList(idOperationTypeFamily: number, idSelectType: number) {
    return this.authHttp
    .get(this.baseUrl + `referential/operationTypes/operationTypeFamilies/${idOperationTypeFamily}/selectType/${idSelectType}`)
    .map(response => <ISelect[]>response.json())
    .catch(this.handleError);
}

GetOperationPlaceSelectList(idSelectType: number) {
    return this.authHttp
        .get(this.baseUrl + `referential/selectType/${idSelectType}/operationPlaces`)
        .map(response => <ISelect[]>response.json())
        .catch(this.handleError);
}


AddOperation(operation: IOperation) {
    return this.authHttp
        .post(`${this.baseUrl}/referential/addOperation`,operation)
        .map(res=><IOperation>res.json())
        .catch(this.errorService.handleError);
}

//OPERATIONS
GetOperationList(idOperationMethod: number,idOperationType: number) {
    return this.authHttp
    .get(this.baseUrl + `referential/operation-methods/${idOperationMethod}/operation-types/${idOperationType}/operations`)
    .map(response => <IOperation[]>response.json())
    .catch(this.handleError);
}

GetOperationSelectListByOperationMethods(operationMethods: ISelect[]) {
    return this.authHttp
        .post(`${this.baseUrl}/referential/operations`,operationMethods)
        .map(res=><ISelect>res.json())
        .catch(this.errorService.handleError);
}

private handleError(error: any)
    {
        const applicationError = error.headers.get('Application-Error');
        if(applicationError){
            return Observable.throw(applicationError);
        }
        const serverError = error.json();
        let modelStateErrors = '';
        if(serverError) {
            for(const key in serverError)
            {
                if(serverError[key]){
                    modelStateErrors += serverError[key] + '\n';
                }
            }
        }

        return Observable.throw(
            modelStateErrors || 'Server error'
        );
    }
}
