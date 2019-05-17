import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs";
import { Select, Store, State, Actions } from "@ngxs/store";
import { PlanDetailFilter, PlanFilter } from "app/main/_models/Filters/plan.filter";
import 'rxjs/add/operator/delay';
import { DetailInfo } from "app/main/_models/generics/detail-info.model";
import { LoadPlanDetailDatas } from "app/main/_ngxs/plan/plan-detail/plan-detail.action";
import { PlanDetailState } from "app/main/_ngxs/plan/plan-detail/plan-detail.state";
import { PlanDetail } from "app/main/_models/plan/plan.model";

@Injectable()

    export class PlanDetailResolver implements Resolve<DetailInfo<PlanDetail,PlanDetailFilter>> {

    constructor(
        private store: Store

    ) {}


    resolve(route: ActivatedRouteSnapshot):Observable<DetailInfo<PlanDetail,PlanDetailFilter>> {
        const planDetailFilter = new PlanDetailFilter();
        planDetailFilter.id = route.params['idPlan']=='new' ? 0 : route.params['idPlan'];
        this.store.dispatch(new LoadPlanDetailDatas(planDetailFilter));
        return this.store.selectOnce(PlanDetailState.get);

    }

}