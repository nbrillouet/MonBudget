import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ISelectGroup, EnumSelectType, ISelect } from 'app/main/_models/generics/select.model';
import { IUserForGroup, UserForDetail } from 'app/main/_models/user.model';
import { FilterOtfTableSelected, FilterOtfTableSelection, FilterOtfDetail } from 'app/main/_models/filters/operation-type-family.filter';
import { OtfForDetail } from 'app/main/_models/referential/operation-type-family.model';
import { FilterForDetail } from 'app/main/_models/filters/shared/filterDetail.filter';
import { Select } from '@ngxs/store';
import { UserDetailState } from 'app/main/_ngxs/user/user-detail/user-detail.state';
import { Observable } from 'rxjs';

@Injectable()
export class OtfService {
    @Select(UserDetailState.getUser) user$: Observable<UserForDetail>;
    
    baseUrl = environment.apiUrl;
    currentUser: UserForDetail;
    // user = JSON.parse(localStorage.getItem('currentUser'));
    userForGroup: IUserForGroup; // = this.user!=null ? <IUserForGroup> {id:this.user.id,idUserGroup:this.user.idUserGroup} : null;
  
        constructor(
            private _httpClient: HttpClient
        ) {
            this.user$.subscribe((user:UserForDetail) => {
                this.currentUser = user;
                this.userForGroup = this.currentUser!=null ? <IUserForGroup> {id:this.currentUser.id,idUserGroup:this.currentUser.idUserGroup} : null;
            });
         }
            
        getSelectGroupList() {
            return this._httpClient
                .get(this.baseUrl + `referential/operation-type-families/users/${this.currentUser.id}/select-group-list`)
                .map(response => <ISelectGroup[]>response);
        }
    
        getSelectList(idMovement: number,enumSelectType: EnumSelectType) {
            return this._httpClient
                .get(this.baseUrl + `referential/operation-type-families/user-groups/${this.currentUser.idUserGroup}/movements/${idMovement}/select-type/${<number>enumSelectType}/select-list`)
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
