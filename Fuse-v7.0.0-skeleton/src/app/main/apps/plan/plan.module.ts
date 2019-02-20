import { AuthGuard } from "app/_guards/auth.guard";
import { NgModule } from "@angular/core";
import { FuseSharedModule } from "@fuse/shared.module";
import { RouterModule } from "@angular/router";
import { PlanService } from "./plan.service";
import { PlanDetailComponent } from "./plan-detail/plan-detail.component";
import { PlanDetailResolver } from "./plan-detail/plan-detail.resolver";
import { ChipAutocompleteComponent } from "../web-component/chip-autocomplete/chip-autocomplete.component";
import { PlanPosteDetailComponent } from "./plan-detail/plan-poste-detail/plan-poste-detail.component";
import { WidgetsModule } from "../widgets/widgets.module";
import { PlanPosteListComponent } from "./plan-detail/plan-poste-list/plan-poste-list.component";
import { PlanListComponent } from "./plan-list/plan-list.component";
import { PlanSuiviComponent } from "./plan-suivi/plan-suivi.component";
import { NgxGaugeModule } from 'ngx-gauge';
import { MonthYearSelectionComponent } from "../web-component/month-year-selection/month-year-selection.component";
import { FuseWidgetModule } from "@fuse/components";
import { ColorPickerModule } from 'ngx-color-picker';
import { NgxsModule } from "@ngxs/store";
import { PlanTableState } from "app/main/_ngxs/plan/plan-list/plan-list.state";
import { PlanTableComboFilterState } from "app/main/_ngxs/plan/plan-list-filter/plan-list-filter.state";
import { PlanDetailState } from "app/main/_ngxs/plan/plan-detail/plan-detail.state";
import { PlanPosteDetailState } from "app/main/_ngxs/plan-poste/plan-poste-detail/plan-poste-detail.state";
import { PlanForTrackingState } from "app/main/_ngxs/plan-tracking/plan-tracking.state";
import { UserState } from "app/main/_ngxs/user/user.state";
import { NgxsReduxDevtoolsPluginModule } from "@ngxs/devtools-plugin";
import { environment } from "environments/environment";

const routes = [
    {
        path     : '',
        component: PlanListComponent,
        // resolve  : { users: ImportStatementListResolver },
        canActivate: [AuthGuard]
    },
    // {
    //     path     : 'planPoste',
    //     component: PlanPosteDetailComponent
    //     // outlet: 'recette'
        
    //     // resolve  : { planDetail: BudgetDetailResolver },
    //     // canActivate: [AuthGuard]
    // },
    {
        path     : 'suivi',
        component: PlanSuiviComponent,
        // resolve  : { planSuivi: PlanSuiviResolver },
        canActivate: [AuthGuard]
    },
    {
        path     : ':idPlan',
        component: PlanDetailComponent,
        resolve  : { planDetail: PlanDetailResolver },
        canActivate: [AuthGuard]
    },
   
    {
        path      : '**',
        redirectTo: ''
    }
  ];

  @NgModule({
    imports: [
      FuseSharedModule,
      NgxGaugeModule,
      RouterModule.forChild(routes),
      WidgetsModule,
      FuseWidgetModule,
      ColorPickerModule,
      NgxsModule.forFeature([
        // UserState,
        PlanTableState,
        PlanTableComboFilterState,
        PlanDetailState,
        PlanPosteDetailState,
        PlanForTrackingState
    ])
    
        //NgxsReduxDevtoolsPluginModule.forRoot({ disabled: environment.production ? true : false })


    //   AgmCoreModule.forRoot({
    //     apiKey: 'AIzaSyD6F176dnusdXdDH35db9iOGGlCiZYNDvw'
    // })
    ],
    declarations: [
        PlanListComponent,
        PlanDetailComponent,
        PlanPosteListComponent,
        PlanPosteDetailComponent,
        PlanSuiviComponent,
        ChipAutocompleteComponent,
        MonthYearSelectionComponent
    ],
    providers : [
        PlanService,
        PlanDetailResolver

    ],
    entryComponents: [
        PlanPosteDetailComponent
    ]
  })

  export class PlanModule { }