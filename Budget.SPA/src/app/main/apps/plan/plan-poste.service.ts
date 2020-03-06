import { environment } from "environments/environment";
import { Injectable } from "@angular/core";
import { IUserForGroup } from "app/main/_models/user.model";
import { HttpClient } from "@angular/common/http";
import { FilterPlanPosteTableSelected, FilterPlanPosteTableSelection, PlanPosteReferenceFilter } from "app/main/_models/filters/plan-poste.filter";
import { PlanPosteForDetail, PlanPosteFrequencyFilter, PlanPosteFrequencyForDetail } from "app/main/_models/plan.model";
import { ComboMultiple } from "app/main/_models/generics/combo.model";
import { ISelectGroup } from "app/main/_models/generics/select.model";

@Injectable()
export class PlanPosteService {
baseUrl = environment.apiUrl;
user = JSON.parse(localStorage.getItem('currentUser'));
userForGroup = this.user!=null ? <IUserForGroup> {id:this.user.id,idUserGroup:this.user.idUserGroup} : null;

    constructor(
        private http: HttpClient
    ) { }
    
    getPlanPosteTableFilter(filter: FilterPlanPosteTableSelected) {
        // filter.user=this.userForGroup;
        return this.http
            .post(`${this.baseUrl}plan-postes/plan-poste-table-filter`,filter)
            .map((response: FilterPlanPosteTableSelection) => {
                return response;
            });
    }

    getPlanPosteTable (filter: FilterPlanPosteTableSelected) {
        // filter.user=this.userForGroup;
        return this.http
            .post(`${this.baseUrl}plan-postes/plan-poste-table-data`,filter)
            .map((response: any) => {
                return response;
            });
    }

    // GetForDetailById(idPlan: number) {
     
    //     return this.http
    //     .get(`${this.baseUrl}user-groups/${this.userForGroup.idUserGroup}/plans/${idPlan}/plan-detail`)
    //     .map(response => <PlanDetail>response)
    //     .catch(this.errorService.handleError);
    // }

    // savePlanDetail(planDetail: PlanDetail) {
      
    //     return this.http
    //         .post(`${this.baseUrl}plans/plan-details/save`,planDetail)
    //         .map(res=><number>res);
    //         // .catch(this.errorService.handleError);
    // }

    savePlanPosteDetail(planPosteForDetail: PlanPosteForDetail) {
        return this.http
            .post(`${this.baseUrl}plan-postes/plan-poste-detail-save`,planPosteForDetail)
            .map(res=><number>res);
    }

    deletePlanPosteDetail(listIdPlanPoste: number[]) {
        return this.http
            .post(`${this.baseUrl}plan-postes/plan-poste-detail-delete`,listIdPlanPoste)
            .map(res=><number>res);
    }

    GetPlanPosteForDetailById(idPlanPoste:number, idPlan:number, idPoste:number) {
        return this.http
            .get(`${this.baseUrl}plan-postes/${idPlanPoste}/user-groups/${this.userForGroup.idUserGroup}/plans/${idPlan}/postes/${idPoste}/plan-poste-detail`)
            .map(response => <PlanPosteForDetail>response);
    }

    GetPlanPosteReferenceByIdReferenceTable(planPosteReferenceFilter:PlanPosteReferenceFilter) {
        // return this.http
        //     .get(`${this.baseUrl}plan-poste-references/user-groups/${this.userForGroup.idUserGroup}/plan-postes/${planPosteReferenceFilter.idPlanPoste}/reference-table/${planPosteReferenceFilter.idReferenceTable}/postes/${planPosteReferenceFilter.idPoste}/combo-reference`)
        //     .map(response => <ComboMultiple<ISelectGroup>>response);

        return this.http
            .get(`${this.baseUrl}plan-poste-references/user-groups/${this.userForGroup.idUserGroup}/plan-postes/${planPosteReferenceFilter.idPlanPoste}/reference-table/${planPosteReferenceFilter.idReferenceTable}/postes/${planPosteReferenceFilter.idPoste}/plan-poste-reference-combo`)
            .map(response => <ComboMultiple<ISelectGroup>>response);
    }

    // GetPlanTracking(filterPlanTracking: FilterPlanTracking) {
    //     return this.http
    //         .post(`${this.baseUrl}plans/${filterPlanTracking.idPlan}/plan-tracking`,filterPlanTracking)
    //         .map(response => <PlanForTracking>response)
    //         .catch(this.errorService.handleError);
    // }

    // GetPlanList(idUser:number) {
    //     return this.http
    //         .get(`${this.baseUrl}plans/users/${idUser}/list`)
    //         .map(response => <SelectYear[]>response)
    //         .catch(this.errorService.handleError);
    // }

    // getPlanAmountTable(PlanAmountFilter: PlanAmountFilter) {
    //     return this.http
    //     .post(`${this.baseUrl}plan-amounts/filter`,PlanAmountFilter)
    //     .map(response => <AsTable[]>response)
    // }

    getPlanPosteFrequencies(planPosteFrequencyFilter: PlanPosteFrequencyFilter) {
        return this.http
        .get(`${this.baseUrl}plan-poste-frequencies/plan-postes/${planPosteFrequencyFilter.idPlanPoste}/is-annual-estimation/${planPosteFrequencyFilter.isAnnualEstimation}`)
        .map(response => <PlanPosteFrequencyForDetail[]>response)
    }

    // getAsNotInPlan(filterAsPlan: FilterAsPlan) {
    //     filterAsPlan.idUserGroup = this.userForGroup.idUserGroup;
    //     return this.http
    //     .get(`${this.baseUrl}plans/${filterAsPlan.idPlan}/user-groups/${filterAsPlan.idUserGroup}/as-not-in-plan`)
    //     .map(response => <AsTable[]>response)
    // }



}