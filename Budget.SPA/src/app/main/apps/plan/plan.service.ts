import { PlanFilter, PlanTableComboFilter } from "app/main/_models/Filters/plan.filter";
import { environment } from "environments/environment";
import { Injectable } from "@angular/core";

import { ErrorService } from "app/main/_services/error.service";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { PlanPosteForDetail, PlanPosteFrequencyForDetail, PlanPosteFrequencyFilter } from "app/main/_models/plan.model";

import { PlanPosteReferenceFilter } from "app/main/_models/filters/plan-poste.filter";
import { ComboMultiple } from "app/main/_models/generics/combo.model";
import { FilterPlanTracking } from "app/main/_models/filters/plan-tracking.filter";
import { ISelectGroup, SelectYear } from "app/main/_models/generics/select.model";
import { PlanDetail, PlanTable } from "app/main/_models/plan/plan.model";
import { PlanForTracking } from "app/main/_models/plan/plan-tracking.model";
import { Observable } from "rxjs";
import { PlanAmountFilter } from "app/main/_models/filters/plan-amount.filter";
import { AsTable } from "app/main/_models/account-statement/account-statement-table.model";
import { IUserForGroup } from "app/main/_models/user.model";
import { FilterAsPlan } from "app/main/_models/filters/account-statement-plan.filter";

@Injectable()
export class PlanService {
baseUrl = environment.apiUrl;
user = JSON.parse(localStorage.getItem('currentUser'));
userForGroup = this.user!=null ? <IUserForGroup> {id:this.user.id,idUserGroup:this.user.idUserGroup} : null;

    constructor(
        private http: HttpClient,
        private errorService: ErrorService
    ) { }
    
    get(filter: PlanFilter) {
        return this.http
            .post(`${this.baseUrl}plans/filter`,filter)
            .map((response: PlanTable[]) => {
                return response;
            })
            .catch(this.errorService.handleError);
    }

    getPlanTableComboFilter() {
        return this.http
            .get(`${this.baseUrl}plans/combo-filter`)
            .map(response => <PlanTableComboFilter>response)
            .catch(this.errorService.handleError);
    }

    GetForDetailById(idPlan: number) {
     
        return this.http
        .get(`${this.baseUrl}user-groups/${this.userForGroup.idUserGroup}/plans/${idPlan}/plan-detail`)
        .map(response => <PlanDetail>response)
        .catch(this.errorService.handleError);
    }

    // update(planDetail: PlanDetail) {
    //     return this.http
    //     .post(`${this.baseUrl}/referential/accounts/${planDetail.plan.id}/update`,planDetail)
    //     .map(res=><PlanDetail>res)
    //     .catch(this.errorService.handleError);
    // }

    savePlanDetail(planDetail: PlanDetail) {
      
        return this.http
            .post(`${this.baseUrl}plans/plan-details/save`,planDetail)
            .map(res=><number>res);
            // .catch(this.errorService.handleError);
    }

    savePlanPosteDetail(planPosteForDetail: PlanPosteForDetail) {
        return this.http
            .post(`${this.baseUrl}plan-poste-details/save`,planPosteForDetail)
            .map(res=><number>res)
            .catch(this.errorService.handleError);
    }

    deletePlanPosteDetail(listIdPlanPoste: number[]) {
        return this.http
            .post(`${this.baseUrl}plan-poste-details/delete`,listIdPlanPoste)
            .map(res=><number>res)
            .catch(this.errorService.handleError);
    }

    GetPlanPosteForDetailById(idPlanPoste: number,idPlan:number,idPoste:number) {

        return this.http
        .get(`${this.baseUrl}plan-postes/${idPlanPoste}/user-groups/${this.userForGroup.idUserGroup}/plans/${idPlan}/postes/${idPoste}/plan-poste-detail`)
        .map(response => <PlanPosteForDetail>response)
        .catch(this.errorService.handleError);
    }

    GetPlanPosteReferenceByIdReferenceTable(planPosteReferenceFilter:PlanPosteReferenceFilter) {
        return this.http
            .get(`${this.baseUrl}plan-poste-references/user-groups/${this.userForGroup.idUserGroup}/plan-postes/${planPosteReferenceFilter.idPlanPoste}/reference-table/${planPosteReferenceFilter.idReferenceTable}/postes/${planPosteReferenceFilter.idPoste}/combo-reference`)
            .map(response => <ComboMultiple<ISelectGroup>>response);

    }

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
        // .catch(this.errorService.handleError);
    }

    getPlanPosteFrequencies(planPosteFrequencyFilter: PlanPosteFrequencyFilter) {
        return this.http
        .get(`${this.baseUrl}plan-poste-frequencies/plan-postes/${planPosteFrequencyFilter.idPlanPoste}/is-annual-estimation/${planPosteFrequencyFilter.isAnnualEstimation}`)
        .map(response => <PlanPosteFrequencyForDetail[]>response)
    }

    getAsNotInPlan(filterAsPlan: FilterAsPlan) {
        filterAsPlan.idUserGroup = this.userForGroup.idUserGroup;
        return this.http
        .get(`${this.baseUrl}plans/${filterAsPlan.idPlan}/user-groups/${filterAsPlan.idUserGroup}/as-not-in-plan`)
        .map(response => <AsTable[]>response)
    }



}