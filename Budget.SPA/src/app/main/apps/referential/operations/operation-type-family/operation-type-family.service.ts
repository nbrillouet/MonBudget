import { Injectable } from '@angular/core';
import { OtfTable, OtfDetail } from 'app/main/_models/referential/operation-type-family.model';
import { environment } from 'environments/environment';
import { HttpClient } from '@angular/common/http';
import { FilterOtfTableSelected, FilterOtfTableSelection } from 'app/main/_models/filters/operation-type-family.filter';
import { IUserForGroup } from 'app/main/_models/user.model';

@Injectable()
export class OtfService {

  baseUrl = environment.apiUrl;
  user = JSON.parse(localStorage.getItem('currentUser'));
  userForGroup = this.user!=null ? <IUserForGroup> {id:this.user.id,idUserGroup:this.user.idUserGroup} : null;

      constructor(
          private http: HttpClient
      ) { }
  
      getOtfTable (filter: FilterOtfTableSelected) {
        filter.user =  this.userForGroup;
        return this.http
          .post(`${this.baseUrl}referential/operation-type-families/filter`,filter)
          .map((response: any) => {
              return response;
          });
      }
  
      getOtfTableFilter(filter: FilterOtfTableSelected) {
        filter.user =  this.userForGroup;
        
        return this.http
              .post(`${this.baseUrl}referential/operation-type-families/table-filter`,filter)
              .map((response: FilterOtfTableSelection) => {
                  return response;
              });
      }

      getOtfDetail(idOperationTypeFamily: number) {

        return this.http
            .get(`${this.baseUrl}referential/operation-type-families/${idOperationTypeFamily}/detail`)
            .map(response => <OtfDetail>response)
      }

      saveOtfDetail(otfDetail: OtfDetail) {
        otfDetail.user =  this.userForGroup;
          
        return this.http
              .post(`${this.baseUrl}referential/operation-type-families/save`,otfDetail)
              .map((response: OtfDetail) => {
                  return response;
              });
      }

      deleteOtfDetail(idOtf: number) {
          
        return this.http
              .delete(`${this.baseUrl}referential/operation-type-families/${idOtf}/delete`)
              .map((response: boolean) => {
                  return response;
              });
      }

}
