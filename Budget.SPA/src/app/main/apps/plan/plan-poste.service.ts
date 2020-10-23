import { environment } from "environments/environment";
import { Injectable } from "@angular/core";
import { IUserForGroup, UserForDetail, UserForAuth } from "app/main/_models/user.model";
import { HttpClient } from "@angular/common/http";
import { FilterPlanPosteTableSelected, FilterPlanPosteTableSelection, PlanPosteReferenceFilter } from "app/main/_models/filters/plan-poste.filter";
import { PlanPosteForDetail, PlanPosteFrequencyFilter, PlanPosteFrequencyForDetail } from "app/main/_models/plan.model";
import { ComboMultiple } from "app/main/_models/generics/combo.model";
import { ISelectGroup } from "app/main/_models/generics/select.model";
import { Select } from "@ngxs/store";
import { UserDetailState } from "app/main/_ngxs/user/user-detail/user-detail.state";
import { Observable } from "rxjs";

@Injectable()
export class PlanPosteService {
    // @Select(UserDetailState.getUser) user$: Observable<UserForDetail>;
userAuth: UserForAuth = JSON.parse(localStorage.getItem('userInfo'));
userForGroup: IUserForGroup = {id:this.userAuth.id,idUserGroup:this.userAuth.idUserGroup};
baseUrl = environment.apiUrl;
// currentUser: UserForDetail;
// userForGroup: IUserForGroup; 

    constructor(
        private http: HttpClient
    ) {
        // this.user$.subscribe((user:UserForDetail) => {
        //     this.currentUser = user;
        //     this.userForGroup = this.currentUser!=null ? <IUserForGroup> {id:this.currentUser.id,idUserGroup:this.currentUser.idUserGroup} : null;
        // });
     }
    
    getPlanPosteTableFilter(filter: FilterPlanPosteTableSelected) {
        return this.http
            .post(`${this.baseUrl}plan-postes/plan-poste-table-filter`,filter)
            .map((response: FilterPlanPosteTableSelection) => {
                return response;
            });
    }

    getPlanPosteTable (filter: FilterPlanPosteTableSelected) {
        return this.http
            .post(`${this.baseUrl}plan-postes/plan-poste-table-data`,filter)
            .map((response: any) => {
                return response;
            });
    }

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
        return this.http
            .get(`${this.baseUrl}plan-poste-references/user-groups/${this.userForGroup.idUserGroup}/plan-postes/${planPosteReferenceFilter.idPlanPoste}/reference-table/${planPosteReferenceFilter.idReferenceTable}/postes/${planPosteReferenceFilter.idPoste}/plan-poste-reference-combo`)
            .map(response => <ComboMultiple<ISelectGroup>>response);
    }

    getPlanPosteFrequencies(planPosteFrequencyFilter: PlanPosteFrequencyFilter) {
        return this.http
        .get(`${this.baseUrl}plan-poste-frequencies/plan-postes/${planPosteFrequencyFilter.idPlanPoste}/is-annual-estimation/${planPosteFrequencyFilter.isAnnualEstimation}`)
        .map(response => <PlanPosteFrequencyForDetail[]>response)
    }

}