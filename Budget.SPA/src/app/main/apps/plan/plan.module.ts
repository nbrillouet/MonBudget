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
import { FuseWidgetModule, FuseMaterialColorPickerModule } from "@fuse/components";
import { ColorPickerModule } from 'ngx-color-picker';
import { NgxsModule } from "@ngxs/store";
import { PlanTableState } from "app/main/_ngxs/plan/plan-list/plan-list.state";
import { PlanTableComboFilterState } from "app/main/_ngxs/plan/plan-list-filter/plan-list-filter.state";
import { PlanDetailState } from "app/main/_ngxs/plan/plan-detail/plan-detail.state";
import { PlanPosteDetailState } from "app/main/_ngxs/plan-poste/plan-poste-detail/plan-poste-detail.state";
import { PlanForTrackingState } from "app/main/_ngxs/plan-tracking/plan-tracking.state";

import { NgxsReduxDevtoolsPluginModule } from "@ngxs/devtools-plugin";
import { environment } from "environments/environment";
import { PlanAmountTableState } from "app/main/_ngxs/plan/plan-amount-list/plan-amount-list.state";
import { PlanAmountListComponent } from "./plan-suivi/plan-amount-list/plan-amount-list.component";
import { AsPlanTableState } from "app/main/_ngxs/account-statement-plan/as-plan.state";
import { AsPlanListComponent } from "./plan-detail/as-plan-list/as-plan-list.component";
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { ChartsModule } from "ng2-charts";

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
      FuseMaterialColorPickerModule,
      NgxsModule.forFeature([
        PlanTableState,
        PlanTableComboFilterState,
        PlanDetailState,
        PlanPosteDetailState,
        PlanForTrackingState,
        PlanAmountTableState,
        AsPlanTableState
    ]),
    NgxChartsModule,
        ChartsModule      
    
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
        MonthYearSelectionComponent,
        PlanAmountListComponent,
        AsPlanListComponent
    ],
    providers : [
        PlanService,
        PlanDetailResolver

    ],
    entryComponents: [
        PlanPosteDetailComponent,
        PlanAmountListComponent,
        AsPlanListComponent
    ]
  })

  export class PlanModule { }