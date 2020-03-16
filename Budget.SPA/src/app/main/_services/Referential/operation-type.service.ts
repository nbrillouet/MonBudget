import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ISelect, EnumSelectType } from 'app/main/_models/generics/select.model';
import { IUserForGroup } from 'app/main/_models/user.model';
import { FilterOtTableSelected, FilterOtTableSelection, FilterOtDetail } from 'app/main/_models/filters/operation-type.filter';
import { OtForDetail } from 'app/main/_models/referential/operation-type.model';
import { FilterForDetail } from 'app/main/_models/filters/shared/filterDetail.filter';

@Injectable()
export class OtService {

    baseUrl = environment.apiUrl;
    user = JSON.parse(localStorage.getItem('currentUser'));
    userForGroup = this.user!=null ? <IUserForGroup> {id:this.user.id,idUserGroup:this.user.idUserGroup} : null;
  
    constructor(
            private _httpClient: HttpClient
        ) { }
        
        GetSelectList(idOperationTypeFamily: number, enumSelectType: EnumSelectType) {
            return this._httpClient
            .get(`${this.baseUrl}referential/operation-types/operation-type-families/${idOperationTypeFamily}/select-type/${<number>enumSelectType}/select-list`)
            .map(response => <ISelect[]>response);
        }
    

        getOtTable(filter: FilterOtTableSelected) {
          filter.user =  this.userForGroup;
          
          return this._httpClient
            .post(`${this.baseUrl}referential/operation-types/filter`,filter)
            .map((response: any) => {
                return response;
            });
        }
    
        getForTableFilter(filter: FilterOtTableSelected) {
          filter.user =  this.userForGroup;
            
          return this._httpClient
                .post(`${this.baseUrl}referential/operation-types/table-filter`,filter)
                .map((response: FilterOtTableSelection) => {
                    return response;
                });
        }
        
        getForDetail(filter: FilterForDetail) {
          return this._httpClient
              .get(`${this.baseUrl}referential/operation-types/${filter.id}/users/${this.userForGroup.id}/detail`)
              .map(response => <OtForDetail>response)
        }

        getForDetailFilter(filter: OtForDetail) {
            return this._httpClient
                .post<FilterOtDetail>(`${this.baseUrl}referential/operation-types/operation-type-detail-filter`,filter)
        }

        getSelectListByOperationTypeFamily(operationTypeFamilies: ISelect[]) {
            return this._httpClient
                .post(`${this.baseUrl}referential/operation-types/user-groups/${this.user.idUserGroup}/select-list`,operationTypeFamilies)
                .map(res=><ISelect[]>res);
        }

        saveOtDetail(otForDetail: OtForDetail) {
          otForDetail.user =  this.userForGroup;
            
          return this._httpClient
                .post(`${this.baseUrl}referential/operation-types/save`,otForDetail)
                .map((response: OtForDetail) => {
                    return response;
                });
        }

        deleteOtList(idOtList: number[]) {
            return this._httpClient
                .post(`${this.baseUrl}referential/operation-types/user-groups/${this.userForGroup.idUserGroup}/delete-operation-type-list`,idOtList)
                .map((response: boolean) => {
                    return response;
                });
        }
        // deleteOtDetail(idOt: number) {
            
        //   return this._httpClient
        //         .delete(`${this.baseUrl}referential/operation-types/${idOt}/delete`)
        //         .map((response: boolean) => {
        //             return response;
        //         });
        // }

        
        







// baseUrl = environment.apiUrl;
// user = JSON.parse(localStorage.getItem('currentUser'));

//     constructor(
//         private _httpClient: HttpClient
//     ) { }


    // GetSelectListByOperationTypeFamily(operationTypeFamilies: ISelect[]) {
    //     return this._httpClient
    //         .post(`${this.baseUrl}referential/operation-types/user-groups/${this.user.idUserGroup}/select-list`,operationTypeFamilies)
    //         .map(res=><ISelect[]>res);
    // }

    
}
