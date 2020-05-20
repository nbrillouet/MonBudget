import { FilterPlanTableSelected, FilterPlanTableSelection } from "app/main/_models/Filters/plan.filter";
import { environment } from "environments/environment";
import { Injectable } from "@angular/core";
import { ErrorService } from "app/main/_services/error.service";
import { HttpClient } from "@angular/common/http";
import { FilterPlanTracking } from "app/main/_models/filters/plan-tracking.filter";
import { SelectYear } from "app/main/_models/generics/select.model";
import { PlanDetail } from "app/main/_models/plan/plan.model";
import { PlanForTracking } from "app/main/_models/plan/plan-tracking.model";
import { PlanAmountFilter } from "app/main/_models/filters/plan-amount.filter";
import { AsTable } from "app/main/_models/account-statement/account-statement-table.model";
import { IUserForGroup, IUser } from "app/main/_models/user.model";
import { FilterAsTableSelected } from "app/main/_models/filters/account-statement.filter";
import { FilterPlanNotAsTableSelected, FilterPlanNotAsTableSelection, FilterPlanNotAsTableGroupSelected } from "app/main/_models/filters/plan-not-as.filter";
import { Select } from "@ngxs/store";
import { UserDetailState } from "app/main/_ngxs/user/user-detail/user-detail.state";
import { Observable } from "rxjs";

@Injectable()
export class PlanService {
    @Select(UserDetailState.getUser) user$: Observable<IUser>;
    
baseUrl = environment.apiUrl;
currentUser: IUser;
userForGroup: IUserForGroup; 

    constructor(
        private http: HttpClient,
        private errorService: ErrorService
    ) {
        this.user$.subscribe((user:IUser) => {
            this.currentUser = user;
            this.userForGroup = this.currentUser!=null ? <IUserForGroup> {id:this.currentUser.id,idUserGroup:this.currentUser.idUserGroup} : null;
        });
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
        .map(response => <PlanDetail>response)
        .catch(this.errorService.handleError);
    }

    savePlanDetail(planDetail: PlanDetail) {
        return this.http
            .post(`${this.baseUrl}plans/plan-details/save`,planDetail)
            .map(res=><number>res);
            // .catch(this.errorService.handleError);
    }

    deletePlans(idList: number[]) {
        return this.http
            .post(`${this.baseUrl}plans/delete-plans`,idList)
            .map(res=><string>res);
    }

    // savePlanPosteDetail(planPosteForDetail: PlanPosteForDetail) {
    //     return this.http
    //         .post(`${this.baseUrl}plan-poste-details/save`,planPosteForDetail)
    //         .map(res=><number>res)
    //         .catch(this.errorService.handleError);
    // }

    // deletePlanPosteDetail(listIdPlanPoste: number[]) {
    //     return this.http
    //         .post(`${this.baseUrl}plan-poste-details/delete`,listIdPlanPoste)
    //         .map(res=><number>res)
    //         .catch(this.errorService.handleError);
    // }

    // GetPlanPosteForDetailById(idPlanPoste: number,idPlan:number,idPoste:number) {

    //     return this.http
    //     .get(`${this.baseUrl}plan-postes/${idPlanPoste}/user-groups/${this.userForGroup.idUserGroup}/plans/${idPlan}/postes/${idPoste}/plan-poste-detail`)
    //     .map(response => <PlanPosteForDetail>response)
    //     .catch(this.errorService.handleError);
    // }

    // GetPlanPosteReferenceByIdReferenceTable(planPosteReferenceFilter:PlanPosteReferenceFilter) {
    //     return this.http
    //         .get(`${this.baseUrl}plan-poste-references/user-groups/${this.userForGroup.idUserGroup}/plan-postes/${planPosteReferenceFilter.idPlanPoste}/reference-table/${planPosteReferenceFilter.idReferenceTable}/postes/${planPosteReferenceFilter.idPoste}/combo-reference`)
    //         .map(response => <ComboMultiple<ISelectGroup>>response);

    // }

    GetPlanTracking(filterPlanTracking: FilterPlanTracking) {
        return this.http
            .post(`${this.baseUrl}plans/${filterPlanTracking.idPlan}/plan-tracking`,filterPlanTracking)
            .map(response => <PlanForTracking>response)
            .catch(this.errorService.handleError);
    }

    GetPlanList(idUser:number) {
        return this.http
            .get(`${this.baseUrl}plans/users/${idUser}/list`)
            .map(response => <SelectYear[]>response)
            .catch(this.errorService.handleError);
    }

    getPlanAmountTable(PlanAmountFilter: PlanAmountFilter) {
        return this.http
        .post(`${this.baseUrl}plan-amounts/filter`,PlanAmountFilter)
        .map(response => <AsTable[]>response)
    }

    // getPlanPosteFrequencies(planPosteFrequencyFilter: PlanPosteFrequencyFilter) {
    //     return this.http
    //     .get(`${this.baseUrl}plan-poste-frequencies/plan-postes/${planPosteFrequencyFilter.idPlanPoste}/is-annual-estimation/${planPosteFrequencyFilter.isAnnualEstimation}`)
    //     .map(response => <PlanPosteFrequencyForDetail[]>response)
    // }

    // getAsNotInPlan(filterAsPlan: FilterAsPlan) {
    //     filterAsPlan.idUserGroup = this.userForGroup.idUserGroup;
    //     return this.http
    //         .get(`${this.baseUrl}plans/${filterAsPlan.idPlan}/user-groups/${filterAsPlan.idUserGroup}/as-not-in-plan`)
    //         .map(response => <AsTable[]>response)
    // }

    // getPlanNotAsTable(filter: FilterPlanNotAsTableSelected) {
    //     filter.userGroup = this.userForGroup;
    //     return this.http
    //         .post(`${this.baseUrl}plans/plan-not-as-table-filter`,filter)
    //         .map((response: FilterPlanTableSelection) => {
    //             return response;
    //         });
    // }

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