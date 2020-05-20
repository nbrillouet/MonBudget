import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { FilterAsTableSelected, FilterAsDetail, FilterAsTableSelection } from 'app/main/_models/filters/account-statement.filter';
import { HttpClient } from '@angular/common/http';
import { AsForDetail } from 'app/main/_models/account-statement/account-statement-detail.model';
import { AsChartEvolutionCustomOtfFilterSelected, AsChartEvolutionCdb, AsChartEvolutionCustomOtfFilter } from 'app/main/_models/account-statement/as-chart/as-chart-evolution.model';
import { InternalTransferCouple } from 'app/main/_models/account-statement/account-statement-internal-transfer.model';
import { IUserForGroup, IUser } from 'app/main/_models/user.model';
import { WidgetCardChartBar } from 'app/main/_models/chart/widget-card-chart-bar.model';
import { AsChartCategorisationSelect } from 'app/main/_models/account-statement/as-chart/as-chart-categorisation.model';
import { AsSolde } from 'app/main/_models/account-statement/account-statement-solde.model';
import { FilterForDetail } from 'app/main/_models/filters/shared/filterDetail.filter';
import { Select } from '@ngxs/store';
import { UserDetailState } from 'app/main/_ngxs/user/user-detail/user-detail.state';
import { Observable } from 'rxjs';

@Injectable()
export class AsService {
@Select(UserDetailState.getUser) user$: Observable<IUser>;

    baseUrl = environment.apiUrl;
    currentUser: IUser;
    userForGroup: IUserForGroup; 

    constructor(
        private _httpClient: HttpClient
    ) { 
        this.user$.subscribe((user:IUser) => {
            this.currentUser = user;
            this.userForGroup = this.currentUser!=null ? <IUserForGroup> {id:this.currentUser.id,idUserGroup:this.currentUser.idUserGroup} : null;
        });
    }
    
    getAsTableFilter(filter: FilterAsTableSelected) {
        filter.user=this.userForGroup;
        return this._httpClient
            .post(`${this.baseUrl}account-statements/table-filter`,filter)
            .map((response: FilterAsTableSelection) => {
                return response;
            });
    }

    getAsTable (filter: FilterAsTableSelected) {
        filter.user=this.userForGroup;
        return this._httpClient
            .post(`${this.baseUrl}tables/datas`,filter)
            .map((response: any) => {
                return response;
            });
    }

    getDetailFilter(filter: AsForDetail) {
        filter.user = this.userForGroup;
        return this._httpClient
            .post<FilterAsDetail>(`${this.baseUrl}account-statements/as-detail-filter`,filter)
    }

    getForDetail(filter: FilterForDetail) {
        return this._httpClient
            .get(`${this.baseUrl}account-statements/${filter.id}/as-detail`)
            .map(response => <AsForDetail>response)
    }
    
    // getAsDetail(filter: FilterAsDetail) {
    //     filter.user=this.userForGroup;
    //     return this.http
    //         .post(`${this.baseUrl}account-statements/detail`,filter)
    //         .map(response => <AsDetail>response)
    // }

    getAsSolde (filter: FilterAsTableSelected) {
        filter.user=this.userForGroup;
        return this._httpClient
            .post(`${this.baseUrl}account-statements/solde-filter`,filter)
            .map(response => <AsSolde>response);
    }

    getAsInternalTransferCouple(filter: FilterAsTableSelected) {
        filter.user=this.userForGroup;
        return this._httpClient
            .post(`${this.baseUrl}account-statement-internal-transfers/list-filter`,filter)
            .map(resp=><InternalTransferCouple[]>resp);
    }

    update(asForDetail: AsForDetail) {
        asForDetail.user= this.userForGroup;
        return this._httpClient
            .post(`${this.baseUrl}account-statements/update`,asForDetail)
            .map(resp=><boolean>resp);
    }

    getAsChartEvolutionBrut (filter: FilterAsTableSelected) {
        filter.user=this.userForGroup;
        return this._httpClient
            .post(`${this.baseUrl}account-statement-charts/chart-evolution-brut`,filter)
            .map(response => <AsChartEvolutionCdb>response);
    }

    getAsChartEvolutionNoIntTransfer(filter: FilterAsTableSelected) {
        filter.user=this.userForGroup;
        return this._httpClient
            .post(`${this.baseUrl}account-statement-charts/chart-evolution-no-int-transfer`,filter)
            .map(response => <AsChartEvolutionCdb>response);
    }

    getAsChartEvolutionCustomOtf(filter: FilterAsTableSelected) {
        filter.user=this.userForGroup;
        return this._httpClient
            .post(`${this.baseUrl}account-statement-charts/chart-evolution-custom-otf`,filter)
            .map(response => <WidgetCardChartBar[]>response);
    }

    getAsChartEvolutionCustomOtfFilter(filter: FilterAsTableSelected) {
        filter.user=this.userForGroup;
        return this._httpClient
            .post(`${this.baseUrl}account-statement-charts/chart-evolution-custom-otf-filter`,filter)
            .map(response => <AsChartEvolutionCustomOtfFilter>response)
    }

    updateAsChartEvolutionCustomOtfFilter(filter: AsChartEvolutionCustomOtfFilterSelected){
        filter.user=this.userForGroup;
        return this._httpClient
            .post(`${this.baseUrl}account-statement-charts/chart-evolution-custom-otf-filter/update`,filter)
            .map((response) => {
                return response;
            });
    }

    GetAsChartCategorisationDebit(filter: FilterAsTableSelected) {
        filter.user=this.userForGroup;
        return this._httpClient
            .post(`${this.baseUrl}account-statement-charts/chart-categorisation-debit`,filter)
            .map(response => <AsChartCategorisationSelect>response);
    }



}


