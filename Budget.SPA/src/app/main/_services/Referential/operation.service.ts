import { Injectable } from "@angular/core";
import { environment } from "environments/environment";
import { HttpClient } from "@angular/common/http";
import { IOperation, OperationTable, OperationForDetail } from "app/main/_models/referential/operation.model";
import { ISelect, EnumSelectType } from "app/main/_models/generics/select.model";
import { IUserForGroup } from "app/main/_models/user.model";
import { FilterOperationTableSelected, FilterOperationTable } from "app/main/_models/filters/operation.filter";


@Injectable()
export class OperationService {
baseUrl = environment.apiUrl;
user = JSON.parse(localStorage.getItem('currentUser'));
userForGroup = this.user!=null ? <IUserForGroup> {id:this.user.id,idUserGroup:this.user.idUserGroup} : null;
    
constructor(
        private _http: HttpClient
    ) { }

    GetSelectList(idOperationMethod: number,idOperationType: number, enumSelectType: EnumSelectType) {
        return this._http
            .get(`${this.baseUrl}referential/operations/user-groups/${this.user.idUserGroup}/operation-methods/${idOperationMethod}/operation-types/${idOperationType}/select-type/${enumSelectType}/operations`)
            .map(response => <ISelect[]>response);
    }

    GetSelectListByOperationMethods(operationMethods: ISelect[]) {
        return this._http
            .post(`${this.baseUrl}referential/operations/user-groups/${this.user.idUserGroup}/select-list`,operationMethods)
            .map(res=><ISelect[]>res);
    }

    Create(operation: IOperation) {
        operation.idUserGroup = this.user.idUserGroup;
        return this._http
            .post(`${this.baseUrl}referential/operations/create`,operation)
            .map(res=><IOperation>res);
    }


    /*---------------------------------------------------------------*/
  
    getTable (filter: FilterOperationTableSelected) {
        filter.user =  this.userForGroup;
        
        return this._http
            .post(`${this.baseUrl}referential/operations/filter`,filter)
            .map((response: OperationTable) => {
                return response;
            });
    }

    getTableFilter(filter: FilterOperationTableSelected) {
        filter.user =  this.userForGroup;
            
        return this._http
            .post(`${this.baseUrl}referential/operations/table-filter`,filter)
            .map((response: FilterOperationTable) => {
                return response;
            });
    }

    getDetail(idOperation: number) {
        return this._http
            .get(`${this.baseUrl}referential/operations/${idOperation}/user-groups/${this.userForGroup.idUserGroup}/detail`)
            .map(response => <OperationForDetail>response)
    }

    saveDetail(operationDetail: OperationForDetail) {
        operationDetail.user =  this.userForGroup;
        
        return this._http
            .post(`${this.baseUrl}referential/operations/save`,operationDetail)
            .map((response: OperationForDetail) => {
                return response;
            });
    }

    deleteDetail(idOperation: number) {
        
    return this._http
            .delete(`${this.baseUrl}referential/operations/${idOperation}/delete`)
            .map((response: boolean) => {
                return response;
            });
    }
}