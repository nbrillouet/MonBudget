import { FilterPlanTableSelected, FilterPlanTableSelection } from "app/main/_models/Filters/plan.filter";
import { environment } from "environments/environment";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { FilterPlanTracking } from "app/main/_models/filters/plan-tracking.filter";
import { SelectYear } from "app/main/_models/generics/select.model";
import { PlanDetail } from "app/main/_models/plan/plan.model";
import { PlanForTracking } from "app/main/_models/plan/plan-tracking.model";
import { PlanAmountFilter } from "app/main/_models/filters/plan-amount.filter";
import { AsTable } from "app/main/_models/account-statement/account-statement-table.model";
import { IUserForGroup, UserForDetail, UserForAuth } from "app/main/_models/user.model";
import { FilterAsTableSelected } from "app/main/_models/filters/account-statement.filter";
import { FilterPlanNotAsTableSelected, FilterPlanNotAsTableSelection, FilterPlanNotAsTableGroupSelected } from "app/main/_models/filters/plan-not-as.filter";
import { Select } from "@ngxs/store";
import { UserDetailState } from "app/main/_ngxs/user/user-detail/user-detail.state";
import { Observable } from "rxjs";

@Injectable()
export class PlanService {
userAuth: UserForAuth = JSON.parse(localStorage.getItem('userInfo'));
userForGroup: IUserForGroup = {id: this.userAuth.id,idUserGroup:this.userAuth.idUserGroup};
baseUrl = environment.apiUrl;

    constructor(
        private http: HttpClient
    ) {
        // this.user$.subscribe((user:UserForDetail) => {
        //     this.currentUser = user;
        //     this.userForGroup = this.currentUser!=null ? <IUserForGroup> {id:this.currentUser.id,idUserGroup:this.currentUser.idUserGroup} : null;
        // });
     }
    
    getPlanTableFilter(filter: FilterPlanTableSelected) {
        filter.user=this.userForGroup;
        return this.http
            .post(`${this.baseUrl}plans/plan-table-filter`,filter)
            .map((response: FilterPlanTableSelection) => {
                return response;
            });
    }

    getPlanTable (filter: FilterAsTableSelected) {
        filter.user=this.userForGroup;
        return this.http
            .post(`${this.baseUrl}plans/plan-table-data`,filter)
            .map((response: any) => {
                return response;
            });
    }

    GetForDetailById(idPlan: number) {
        return this.http
        .get(`${this.baseUrl}user-groups/${this.userForGroup.idUserGroup}/plans/${idPlan}/plan-detail`)
        .map(response => <PlanDetail>response);
    }

    savePlanDetail(planDetail: PlanDetail) {
        return this.http
            .post(`${this.baseUrl}plans/plan-details/save`,planDetail)
            .map(res=><number>res);
    }

    deletePlans(idList: number[]) {
        return this.http
            .post(`${this.baseUrl}plans/delete-plans`,idList)
            .map(res=><string>res);
    }

    GetPlanTracking(filterPlanTracking: FilterPlanTracking) {
        return this.http
            .post(`${this.baseUrl}plans/${filterPlanTracking.idPlan}/plan-tracking`,filterPlanTracking)
            .map(response => <PlanForTracking>response);
    }

    GetPlanList(idUser:number) {
        return this.http
            .get(`${this.baseUrl}plans/users/${idUser}/list`)
            .map(response => <SelectYear[]>response);
    }

    getPlanAmountTable(PlanAmountFilter: PlanAmountFilter) {
        return this.http
        .post(`${this.baseUrl}plan-amounts/filter`,PlanAmountFilter)
        .map(response => <AsTable[]>response)
    }

    getPlanNotAsTableFilter(filter: FilterPlanNotAsTableSelected) {
        filter.user=this.userForGroup;
        return this.http
            .post(`${this.baseUrl}plan-not-as/plan-not-as-table-filter`,filter)
            .map((response: FilterPlanNotAsTableSelection) => response);
    }

    getPlanNotAsTable (filter: FilterPlanNotAsTableGroupSelected) {
        filter.filterFixedPlanNotAsTableSelected.idUserGroup=this.userForGroup.idUserGroup;
        return this.http
            .post(`${this.baseUrl}plan-not-as/plan-not-as-table-data`,filter)
            .map((response: any) => response);
    }

}