import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { ErrorService } from 'app/main/_services/error.service';
import { FilterAsTableSelected, FilterAsTable, FilterAsDetail } from 'app/main/_models/filters/account-statement.filter';
import { AsTable } from 'app/main/_models/account-statement/account-statement-table.model';
import { HttpClient } from '@angular/common/http';
import { AsDetail } from 'app/main/_models/account-statement/account-statement-detail.model';
import { ISelect } from 'app/main/_models/generics/select.model';
import { AsChartEvolutionCustomOtfFilter, AsChartEvolutionCustomOtfFilterSelected } from 'app/main/_models/account-statement/account-statement-chart.model';
import { InternalTransferCouple } from 'app/main/_models/account-statement/account-statement-internal-transfer.model';
import { IUserForGroup } from 'app/main/_models/user.model';

@Injectable()
export class AsService {
    baseUrl = environment.apiUrl;
    user = JSON.parse(localStorage.getItem('currentUser'));
    userForGroup = <IUserForGroup> {id:this.user.id,idUserGroup:this.user.idUserGroup};

    constructor(
        private http: HttpClient
    ) { }
    
    getAsTableFilter(filter: FilterAsTableSelected) {
        filter.user=this.userForGroup;
        return this.http
            .post(`${this.baseUrl}account-statements/table-filter`,filter)
            .map((response: FilterAsTable) => {
                return response;
            });
    }

    getAsTable (filter: FilterAsTableSelected) {
        filter.user=this.userForGroup;
        return this.http
            .post(`${this.baseUrl}account-statements/filter`,filter)
            .map((response: AsTable) => {
                return response;
            });
    }

    getAsDetail(filter: FilterAsDetail) {
        filter.user=this.userForGroup;
        return this.http
            .post(`${this.baseUrl}account-statements/detail`,filter)
            .map(response => <AsDetail>response)
    }

    getAsSolde (filter: FilterAsTableSelected) {
        filter.user=this.userForGroup;
        return this.http
            .post(`${this.baseUrl}account-statements/solde-filter`,filter)
            .map((response) => {
                return response;
            });
    }

    getAsInternalTransferCouple(filter: FilterAsTableSelected) {
        filter.user=this.userForGroup;
        return this.http
            .post(`${this.baseUrl}account-statement-internal-transfers/list-filter`,filter)
            .map(resp=><InternalTransferCouple[]>resp);
    }

    update(asDetail: AsDetail) {
        asDetail.user= this.userForGroup;
        return this.http
            .post(`${this.baseUrl}account-statements/update`,asDetail)
            .map(resp=><boolean>resp);
    }

    getAsChartEvolutionBrut (filter: FilterAsTableSelected) {
        filter.user=this.userForGroup;
        return this.http
            .post(`${this.baseUrl}account-statement-charts/chart-evolution-brut`,filter)
            .map((response) => {
                return response;
            });
    }

    getAsChartEvolutionNoIntTransfer(filter: FilterAsTableSelected) {
        filter.user=this.userForGroup;
        return this.http
            .post(`${this.baseUrl}account-statement-charts/chart-evolution-no-int-transfer`,filter)
            .map((response) => {
                return response;
            });
    }

    getAsChartEvolutionCustomOtf(filter: FilterAsTableSelected) {
        filter.user=this.userForGroup;
        return this.http
            .post(`${this.baseUrl}account-statement-charts/chart-evolution-custom-otf`,filter)
            .map((response) => {
                return response;
            });
    }

    getAsChartEvolutionCustomOtfFilter(filter: FilterAsTableSelected) {
        filter.user=this.userForGroup;
        return this.http
            .post(`${this.baseUrl}account-statement-charts/chart-evolution-custom-otf-filter`,filter)
            .map((response) => {
                return response;
            });
    }

    updateAsChartEvolutionCustomOtfFilter(filter: AsChartEvolutionCustomOtfFilterSelected){
        filter.user=this.userForGroup;
        return this.http
            .post(`${this.baseUrl}account-statement-charts/chart-evolution-custom-otf-filter/update`,filter)
            .map((response) => {
                return response;
            });
    }



}


