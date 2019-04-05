import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, Router } from "@angular/router";
// import { IAccountForDetail } from "../../../../../_models/account.model";
// import { Observable } from "../../../../../../../../node_modules/rxjs/Observable";
import { NotificationsService } from "angular2-notifications";
import { IAccountForDetail } from "app/main/_models/account.model";
// import { AccountService } from "app/main/_services/Referential/account.service";
import { Observable } from "rxjs";
import { Select, Store, State, Actions } from "@ngxs/store";

import { PlanDetailFilter, PlanFilter } from "app/main/_models/Filters/plan.filter";
// import { PlanDetailState } from "app/main/_ngxs/plan/planDetail/plan-detail.state";
// import { ChangePlanFilter } from "app/main/_ngxs/plan/plan-list/plan-list.action";
// import { ChangePlanDetailFilter, LoadPlanDetailDatas } from "app/main/_ngxs/plan/planDetail/plan-detail.action";
// import { AccountService } from "../../../../../_services/Referential/account.service";
import 'rxjs/add/operator/delay';
import { DetailInfo } from "app/main/_models/generics/detail-info.model";
import { take } from 'rxjs/operators';
import { LoadPlanDetailDatas } from "app/main/_ngxs/plan/plan-detail/plan-detail.action";
import { PlanDetailState } from "app/main/_ngxs/plan/plan-detail/plan-detail.state";
import { PlanDetail } from "app/main/_models/plan/plan.model";

@Injectable()
// export class BudgetDetailResolver implements Resolve<PlanDetail> {
    export class PlanDetailResolver implements Resolve<DetailInfo<PlanDetail,PlanDetailFilter>> {
    // @Select(PlanDetailState.get) detailInfo$: Observable<DetailInfo<PlanDetail,PlanDetailFilter>>;
    
    constructor(
        // private _planService: PlanService,
        // private router: Router,
        // private notificationService: NotificationsService,
        private store: Store

    ) {}

    // resolve(route: ActivatedRouteSnapshot): Observable<PlanDetail> {
    resolve(route: ActivatedRouteSnapshot):Observable<DetailInfo<PlanDetail,PlanDetailFilter>> {
        const planDetailFilter = new PlanDetailFilter();
        planDetailFilter.id = route.params['idPlan']=='new' ? 0 : route.params['idPlan'];
        this.store.dispatch(new LoadPlanDetailDatas(planDetailFilter));
        return this.store.selectOnce(PlanDetailState.get);
        
        // if(route.params['idPlan']=='new') {
        //     planDetailFilter.id=route.params['idPlan'];
        // }
        // else
        // {
        //     planDetailFilter.id=route.params['idPlan'];
        // }
        //     let detailInfo = this.createDetailInfo(); 
        //     let observable = new Observable<DetailInfo<PlanDetail,PlanDetailFilter>>((observer) => {
        //             // observable execution
        //             observer.next(detailInfo);
        //             observer.complete()
        //         });
        //     return observable;
        // }
        // else {

            
        //     // this.store.dispatch(new ChangePlanDetailFilter(planDetailFilter));
        //     this.store.dispatch(new LoadPlanDetailDatas(planDetailFilter));

        //     return this.store.selectOnce(PlanDetailState.get);

        // }
    }

    // createPlanDetail()  {
    //     return <PlanDetail>  {
    //         plan: {
    //             id:0,
    //             label:'nouveau',
    //             year: (new Date()).getFullYear()
    //         }

    //     }
    // }


    // createDetailInfo()  {
    //     const detailInfo = new DetailInfo<PlanDetail,PlanDetailFilter>();
    //     detailInfo.dataInfos.loadingInfo.loaded=true;

    //     return detailInfo;
        
    // }
}