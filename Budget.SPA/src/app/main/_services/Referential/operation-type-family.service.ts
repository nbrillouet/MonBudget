import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ISelectGroup, EnumSelectType, ISelect } from 'app/main/_models/generics/select.model';
import { IUserForGroup } from 'app/main/_models/user.model';
import { FilterOtfTableSelected, FilterOtfTableSelection, FilterOtfDetail } from 'app/main/_models/filters/operation-type-family.filter';
import { OtfForDetail } from 'app/main/_models/referential/operation-type-family.model';
import { FilterForDetail } from 'app/main/_models/filters/shared/filterDetail.filter';

@Injectable()
export class OtfService {
    baseUrl = environment.apiUrl;
    user = JSON.parse(localStorage.getItem('currentUser'));
    userForGroup = this.user!=null ? <IUserForGroup> {id:this.user.id,idUserGroup:this.user.idUserGroup} : null;
  
        constructor(
            private _httpClient: HttpClient
        ) { }
            
        getSelectGroupList() {
            return this._httpClient
                .get(this.baseUrl + `referential/operation-type-families/users/${this.user.id}/select-group-list`)
                .map(response => <ISelectGroup[]>response);
        }
    
        getSelectList(idMovement: number,enumSelectType: EnumSelectType) {
            return this._httpClient
                .get(this.baseUrl + `referential/operation-type-families/user-groups/${this.user.idUserGroup}/movements/${idMovement}/select-type/${<number>enumSelectType}/select-list`)
                .map(response => <ISelect[]>response);
        }

        getOtfTable (filter: FilterOtfTableSelected) {
          filter.user =  this.userForGroup;
          return this._httpClient
            .post(`${this.baseUrl}referential/operation-type-families/filter`,filter)
            .map((response: any) => {
                return response;
            });
        }
    
        getOtfTableFilter(filter: FilterOtfTableSelected) {
          filter.user =  this.userForGroup;
          
          return this._httpClient
                .post(`${this.baseUrl}referential/operation-type-families/table-filter`,filter)
                .map((response: FilterOtfTableSelection) => {
                    return response;
                });
        }
        
        getForDetailFilter(filter: OtfForDetail) {
            return this._httpClient
                .post<FilterOtfDetail>(`${this.baseUrl}referential/operation-type-families/operation-type-family-detail-filter`,filter)
        }

        getForDetail(filter: FilterForDetail) {
            return this._httpClient
                .get(`${this.baseUrl}referential/operation-type-families/${filter.id}/users/${this.userForGroup.id}/operation-type-family-detail`)
                .map(response => <OtfForDetail>response)
          }
          
        // getForDetail(idOperationTypeFamily: number) {
        //   return this._httpClient
        //       .get(`${this.baseUrl}referential/operation-type-families/${idOperationTypeFamily}/operation-type-family-detail`)
        //       .map(response => <OtfDetail>response)
        // }
  
        save(otfDetail: OtfForDetail) {
          otfDetail.user =  this.userForGroup;
            
          return this._httpClient
                .post(`${this.baseUrl}referential/operation-type-families/operation-type-family-save`,otfDetail)
                .map((response: OtfForDetail) => {
                    return response;
                });
        }
  
        deleteOtfList(idOtfList: number[]) {
            return this._httpClient
                .post(`${this.baseUrl}referential/operation-type-families/user-groups/${this.userForGroup.idUserGroup}/delete-operation-type-family-list`,idOtfList)
                .map((response: boolean) => {
                    return response;
                });
        }
}







// baseUrl = environment.apiUrl;
// user = JSON.parse(localStorage.getItem('currentUser'));

//     constructor(
//         private _httpClient: HttpClient
//     ) { }

//     getSelectGroupList() {
//         return this._httpClient
//             .get(this.baseUrl + `referential/operation-type-families/users/${this.user.id}/select-group-list`)
//             .map(response => <ISelectGroup[]>response);
//     }

//     getSelectList(idMovement: number,enumSelectType: EnumSelectType) {
//         return this._httpClient
//             .get(this.baseUrl + `referential/operation-type-families/user-groups/${this.user.idUserGroup}/movements/${idMovement}/select-type/${<number>enumSelectType}/select-list`)
//             .map(response => <ISelect[]>response);
//     }

//     deleteOtfList(idOtfList: number[]) {
//         return this._httpClient
//             .post(`${this.baseUrl}referential/operation-type-families/user-groups/${this.userForGroup.idUserGroup}/delete-operation-type-list`,idOtList)
//             .map((response: boolean) => {
//                 return response;
//             });
//     }

    

// }
