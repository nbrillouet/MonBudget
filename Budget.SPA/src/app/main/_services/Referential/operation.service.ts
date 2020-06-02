import { Injectable } from "@angular/core";
import { environment } from "environments/environment";
import { HttpClient } from "@angular/common/http";
import { IOperation, OperationForDetail } from "app/main/_models/referential/operation.model";
import { ISelect, EnumSelectType } from "app/main/_models/generics/select.model";
import { IUserForGroup, UserForDetail } from "app/main/_models/user.model";
import { FilterOperationTableSelected, FilterOperationTableSelection, FilterOperationDetail } from "app/main/_models/filters/operation.filter";
import { FilterForDetail } from "app/main/_models/filters/shared/filterDetail.filter";
import { Select } from "@ngxs/store";
import { UserDetailState } from "app/main/_ngxs/user/user-detail/user-detail.state";
import { Observable } from "rxjs";

@Injectable()
export class OperationService {
@Select(UserDetailState.getUser) user$: Observable<UserForDetail>;

baseUrl = environment.apiUrl;
currentUser: UserForDetail;
userForGroup: IUserForGroup; 

constructor(
        private _httpClient: HttpClient
    ) {
        this.user$.subscribe((user:UserForDetail) => {
            this.currentUser = user;
            this.userForGroup = this.currentUser!=null ? <IUserForGroup> {id:this.currentUser.id,idUserGroup:this.currentUser.idUserGroup} : null;
        });
     }

    GetSelectList(idOperationMethod: number,idOperationType: number, enumSelectType: EnumSelectType) {
        return this._httpClient
            .get(`${this.baseUrl}referential/operations/user-groups/${this.currentUser.idUserGroup}/operation-methods/${idOperationMethod}/operation-types/${idOperationType}/select-type/${enumSelectType}/operations`)
            .map(response => <ISelect[]>response);
    }

    GetSelectListByOperationMethods(operationMethods: ISelect[]) {
        return this._httpClient
            .post(`${this.baseUrl}referential/operations/user-groups/${this.currentUser.idUserGroup}/select-list`,operationMethods)
            .map(res=><ISelect[]>res);
    }

    Create(operation: IOperation) {
        operation.idUserGroup = this.currentUser.idUserGroup;
        return this._httpClient
            .post(`${this.baseUrl}referential/operations/create`,operation)
            .map(res=><IOperation>res);
    }


    /*---------------------------------------------------------------*/
  
    getOperationTable (filter: FilterOperationTableSelected) {
        filter.user =  this.userForGroup;
        
        return this._httpClient
            .post(`${this.baseUrl}referential/operations/filter`,filter)
            .map((response: any) => {
                return response;
            });
    }

    getOperationTableFilter(filter: FilterOperationTableSelected) {
        filter.user =  this.userForGroup;
            
        return this._httpClient
            .post(`${this.baseUrl}referential/operations/table-filter`,filter)
            .map((response: FilterOperationTableSelection) => {
                return response;
            });
    }
 
    getDetailFilter(filter: OperationForDetail) {
        return this._httpClient
            .post<FilterOperationDetail>(`${this.baseUrl}referential/operations/operation-detail-filter`,filter);
    }

    getForDetail(filter: FilterForDetail) {
        return this._httpClient
            .get(`${this.baseUrl}referential/operations/${filter.id}/users/${this.userForGroup.id}/operation-detail`)
            .map(response => <OperationForDetail>response)
    }

    saveDetail(operationDetail: OperationForDetail) {
        operationDetail.user =  this.userForGroup;
        
        return this._httpClient
            .post(`${this.baseUrl}referential/operations/save`,operationDetail)
            .map((response: OperationForDetail) => {
                return response;
            });
    }

    // deleteOperationDetail(idOperation: number) {
  
    //     return this._httpClient
    //         .delete(`${this.baseUrl}referential/operations/${idOperation}/delete`)
    //         .map((response: boolean) => {
    //             return response;
    //         });
    // }

    deleteOperations(idOperationList: number[]) {
        return this._httpClient
            .post(`${this.baseUrl}referential/operations/user-groups/${this.userForGroup.idUserGroup}/delete-operations`,idOperationList)
            .map((response: boolean) => {
                return response;
            });
    }
}