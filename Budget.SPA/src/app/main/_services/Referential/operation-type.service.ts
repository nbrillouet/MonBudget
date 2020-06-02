import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ISelect, EnumSelectType } from 'app/main/_models/generics/select.model';
import { IUserForGroup, UserForDetail } from 'app/main/_models/user.model';
import { FilterOtTableSelected, FilterOtTableSelection, FilterOtDetail } from 'app/main/_models/filters/operation-type.filter';
import { OtForDetail } from 'app/main/_models/referential/operation-type.model';
import { FilterForDetail } from 'app/main/_models/filters/shared/filterDetail.filter';
import { Select } from '@ngxs/store';
import { UserDetailState } from 'app/main/_ngxs/user/user-detail/user-detail.state';
import { Observable } from 'rxjs';

@Injectable()
export class OtService {
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
                .post(`${this.baseUrl}referential/operation-types/user-groups/${this.currentUser.idUserGroup}/select-list`,operationTypeFamilies)
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
