import { AuthGuard } from "app/_guards/auth.guard";
import { NgModule } from "@angular/core";
import { FuseSharedModule } from "@fuse/shared.module";
import { RouterModule } from "@angular/router";
import { PlanService } from "./plan.service";
import { PlanDetailComponent } from "./plan-detail/plan-detail.component";
import { PlanDetailResolver } from "./plan-detail/plan-detail.resolver";
import { ChipAutocompleteComponent } from "../web-component/chip-autocomplete/chip-autocomplete.component";
import { WidgetsModule } from "../widgets/widgets.module";
import { PlanSuiviComponent } from "./plan-suivi/plan-suivi.component";
import { MonthYearSelectionComponent } from "../web-component/month-year-selection/month-year-selection.component";
import { FuseWidgetModule, FuseMaterialColorPickerModule } from "@fuse/components";
import { ColorPickerModule } from 'ngx-color-picker';
import { NgxsModule } from "@ngxs/store";
import { PlanDetailState } from "app/main/_ngxs/plan/plan-detail/plan-detail.state";
import { PlanAmountTableState } from "app/main/_ngxs/plan/plan-amount-list/plan-amount-list.state";
import { PlanAmountListComponent } from "./plan-suivi/plan-amount-list/plan-amount-list.component";
import { ChartsModule } from "ng2-charts";
import { AngularMaterialModule } from "app/angular-material.module";
import { ReferentialServiceModule } from "app/main/_services/Referential/referential.service.module";
import { NgxGaugeModule } from 'ngx-gauge';
import { PlanTableComponent } from "./plan-table/plan-table.component";
import { PlanTableFilterSelectionState } from "app/main/_ngxs/plan/plan-table/plan-table-filter-selection/plan-table-filter-selection.state";
import { PlanTableFilterSelectedState } from "app/main/_ngxs/plan/plan-table/plan-table-filter-selected/plan-table-filter-selected.state";
import { PlanTableState } from "app/main/_ngxs/plan/plan-table/plan-table.state";
import { MatTableFilterModule } from "../web-component/mat-table-filter/mat-table-filter.module";
import { PlanPosteService } from "./plan-poste.service";
import { PlanPosteTableComponent } from "./plan-detail/plan-poste/plan-poste-table/plan-poste-table.component";
import { PlanPosteDetailComponent } from "./plan-detail/plan-poste/plan-poste-detail/plan-poste-detail.component";
import { PlanNotAsTableComponent } from "./plan-detail/plan-not-as-table/plan-not-as-table.component";
import { PlanPosteTableFilterSelectionState } from "app/main/_ngxs/plan/plan-detail/plan-poste/plan-poste-table/plan-poste-filter-selection/plan-poste-filter-selection.state";
import { PlanPosteTableFilterSelectedState } from "app/main/_ngxs/plan/plan-detail/plan-poste/plan-poste-table/plan-poste-filter-selected/plan-poste-filter-selected.state";
import { PlanPosteDetailState } from "app/main/_ngxs/plan/plan-detail/plan-poste/plan-poste-detail/plan-poste-detail.state";
import { PlanPosteTableState } from "app/main/_ngxs/plan/plan-detail/plan-poste/plan-poste-table/plan-poste-table.state";
import { PlanForTrackingState } from "app/main/_ngxs/plan/plan-tracking/plan-tracking.state";
import { PlanNotAsTableState } from "app/main/_ngxs/plan/plan-detail/plan-not-as-table/plan-not-as-table.state";


const routes = [
    {
        path     : '',
        component: PlanTableComponent,
        canActivate: [AuthGuard]
    },
    {
        path     : 'suivi',
        component: PlanSuiviComponent,
        canActivate: [AuthGuard]
    },
    {
        path     : ':idPlan/detail',
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
      AngularMaterialModule,
      ReferentialServiceModule,
      RouterModule.forChild(routes),
      WidgetsModule,
      FuseWidgetModule,
      ColorPickerModule,
      FuseMaterialColorPickerModule,
      NgxGaugeModule,
      MatTableFilterModule,
      ChartsModule,
      NgxsModule.forFeature([
        PlanTableFilterSelectionState,
        PlanTableFilterSelectedState,
        PlanTableState,
        PlanDetailState,

        PlanPosteTableFilterSelectionState,
        PlanPosteTableFilterSelectedState,
        PlanPosteTableState,
        PlanPosteDetailState,

        PlanForTrackingState,
        PlanAmountTableState,

        PlanNotAsTableState
        ])
    ],
    declarations: [
        PlanTableComponent,
        PlanDetailComponent,
        PlanPosteTableComponent,
        PlanPosteDetailComponent,
        PlanSuiviComponent,
        ChipAutocompleteComponent,
        MonthYearSelectionComponent,
        PlanAmountListComponent,
        PlanNotAsTableComponent
    ],
    providers : [
        PlanService,
        PlanPosteService,
        PlanDetailResolver

    ],
    entryComponents: [
        PlanPosteDetailComponent,
        PlanAmountListComponent,
        PlanNotAsTableComponent
    ]
  })

  export class PlanModule { }