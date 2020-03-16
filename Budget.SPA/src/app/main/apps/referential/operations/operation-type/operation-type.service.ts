// import { Injectable } from '@angular/core';
// import { environment } from 'environments/environment';
// import { IUserForGroup } from 'app/main/_models/user.model';
// import { HttpClient } from '@angular/common/http';
// import { FilterOtTableSelected, FilterOtTableSelection } from 'app/main/_models/filters/operation-type.filter';
// import { OtTable, OtDetail } from 'app/main/_models/referential/operation-type.model';

// @Injectable()
// export class OtService {

//   baseUrl = environment.apiUrl;
//   user = JSON.parse(localStorage.getItem('currentUser'));
//   userForGroup = this.user!=null ? <IUserForGroup> {id:this.user.id,idUserGroup:this.user.idUserGroup} : null;

//       constructor(
//           private _http: HttpClient
//       ) { }
  
//       getOtTable (filter: FilterOtTableSelected) {
//         filter.user =  this.userForGroup;
        
//         return this._http
//           .post(`${this.baseUrl}referential/operation-types/filter`,filter)
//           .map((response: any) => {
//               return response;
//           });
//       }
  
//       getOtTableFilter(filter: FilterOtTableSelected) {
//         filter.user =  this.userForGroup;
          
//         return this._http
//               .post(`${this.baseUrl}referential/operation-types/table-filter`,filter)
//               .map((response: FilterOtTableSelection) => {
//                   return response;
//               });
//       }

//       getOtDetail(idOperationType: number) {
//         return this._http
//             .get(`${this.baseUrl}referential/operation-types/${idOperationType}/user-groups/${this.userForGroup.idUserGroup}/detail`)
//             .map(response => <OtDetail>response)
//       }

//       saveOtDetail(otDetail: OtDetail) {
//         otDetail.user =  this.userForGroup;
          
//         return this._http
//               .post(`${this.baseUrl}referential/operation-types/save`,otDetail)
//               .map((response: OtDetail) => {
//                   return response;
//               });
//       }

//       deleteOtDetail(idOt: number) {
          
//         return this._http
//               .delete(`${this.baseUrl}referential/operation-types/${idOt}/delete`)
//               .map((response: boolean) => {
//                   return response;
//               });
//       }

// }