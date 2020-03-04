// import { Resolve } from "@angular/router";
// import { PlanPosteForDetail, PlanDetail } from "app/main/_models/plan.model";
// import { PlanService } from "../../plan.service";
// import { NotificationsService } from "angular2-notifications";
// import { Observable } from "rxjs";
// import { PlanListState } from "app/main/_ngxs/plan/plan-list/plan-list.state";
// import { TableInfo } from "app/main/_models/generics/table-info.model";
// import { PlanDetailFilter } from "app/main/_models/Filters/plan.filter";
// import { Select } from "@ngxs/store";
// import { Injectable } from "@angular/core";


// @Injectable()
// export class BudgetDetailResolver implements Resolve<PlanPosteForDetail> {
    
    
//     constructor(
//         private _planService: PlanService,
//         // private router: Router,
//         private notificationService: NotificationsService
//     ) {}

//     resolve(route: ActivatedRouteSnapshot): Observable<PlanPosteForDetail> {

//         if(route.params['idPlan']=='new') {
//             let planDetail = this.createPlanDetail(); 

//             let observable = new Observable<PlanDetail>((observer) => {
//                 // observable execution
//                 observer.next(planDetail);
//                 observer.complete()
//             })

//             return observable;
//         }
//         else {

//             return this._planService.GetForDetailById(route.params['idPlan'])
//                 .catch(error => {
//                     this.notificationService.error('Erreur de retour de données', error);
//                     this.router.navigate(['/apps']);
//                     return Observable.of(null);
//                 })
//         }
//     }

//     createPlanDetail()  {
//         return <PlanDetail>  {
//             plan: {
//                 id:0,
//                 label:'nouveau',
//                 year: (new Date()).getFullYear()
//             }

//         }
//     }
// }