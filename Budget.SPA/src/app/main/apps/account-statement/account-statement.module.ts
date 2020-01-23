import { NgModule } from '@angular/core';
import { AccountStatementMainComponent } from './account-statement-main/account-statement-main.component';
import { RouterModule } from '@angular/router';
import { AccountStatementFilterComponent } from './account-statement-filter/account-statement-filter.component';
import { AccountStatementListComponent } from './account-statement-list/account-statement-list.component';
import { AccountStatementDetailComponent } from './account-statement-detail/account-statement-detail.component';
import { GMapModule } from '../g-map/g-map.module';
import { AuthGuard } from 'app/_guards/auth.guard';
import { FuseSharedModule } from '@fuse/shared.module';
import { FuseWidgetModule } from '@fuse/components';
import { WidgetsModule } from '../widgets/widgets.module';
import { NgxsModule } from '@ngxs/store';
import { AsSoldeState } from 'app/main/_ngxs/account-statement/account-statement-solde/account-statement-solde.state';
import { AsTableFilterState } from 'app/main/_ngxs/account-statement/account-statement-list-filter/account-statement-filter.state';
import { AsTableState } from 'app/main/_ngxs/account-statement/account-statement-list/account-statement-list.state';
import { AsService } from './account-statement.service';
import { AsDetailState } from 'app/main/_ngxs/account-statement/account-statement-detail/account-statement-detail.state';
import { AsChartState } from 'app/main/_ngxs/account-statement/account-statement-chart/account-statement-chart.state';
import { AsChartEvolutionComponent } from './account-statement-chart/as-chart-evolution/as-chart-evolution.component';
import { AsInternalTransferCoupleComponent } from './account-statement-internal-transfer/as-internal-transfer-couple/as-internal-transfer-couple.component';
import { AsInternalTransferMainComponent } from './account-statement-internal-transfer/as-internal-transfer-main/as-internal-transfer-main.component';
import { AsInternalTransferState } from 'app/main/_ngxs/account-statement/account-statement-internal-transfer/as-internal-transfer.state';
// import { MiniFilterModule } from '../web-component/mini-filter/mini-filter.module';
import { AsChartCategorisationComponent } from './account-statement-chart/as-chart-categorisation/as-chart-categorisation.component';
import { MatTableFilterModule } from '../web-component/mat-table-filter/mat-table-filter.module';
import { AngularMaterialModule } from 'app/angular-material.module';
// import { MatTableFilterComponent } from './account-statement-list/mat-table-filter/component/mat-table-filter.component';
// import { ResizeObserverDirective } from './account-statement-list/mat-table-filter/directive/resize-observer.directive';
// import { DateFormatPipe } from './account-statement-list/mat-table-filter/pipe/pipe-date';
// import { MatTableFilterColResizeService } from './account-statement-list/mat-table-filter/service/mat-table-filter-col-resize.service';
// import { MatTableFilterModule } from './account-statement-list/mat-table-filter/mat-table-filter.module';

const routes = [
  // {
  //     path     : '',
  //     component: AccountStatementMainComponent,
  //     // resolve  : { users: ImportStatementListResolver },
  //     canActivate: [AuthGuard]
  // },
  {
      path     : 'accounts/:idAccount',
      component: AccountStatementMainComponent,
      canActivate: [AuthGuard]
  },
  {
    path     : 'accounts/:idAccount/tabs/:idTab',
    component: AccountStatementMainComponent,
    canActivate: [AuthGuard]
  },
  {
      path     : 'accounts/:idAccount/account-statements/:idAccountStatement/detail',
      component: AccountStatementDetailComponent,
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
    RouterModule.forChild(routes),
    FuseWidgetModule,
    WidgetsModule,
    GMapModule,
    MatTableFilterModule,
    // MiniFilterModule,
    NgxsModule.forFeature([
      AsTableFilterState,
      AsTableState,
      AsDetailState,
      AsSoldeState,
      AsChartState,
      AsInternalTransferState
  ])
    
  ],
  declarations: [
    AccountStatementMainComponent,
    AccountStatementFilterComponent,
    AccountStatementListComponent,

    AccountStatementDetailComponent,
    AsChartEvolutionComponent,
    AsChartCategorisationComponent,
    AsInternalTransferMainComponent,
    AsInternalTransferCoupleComponent,

    // MatTableFilterComponent,

    // ResizeObserverDirective,
    // DateFormatPipe
    
  ],
  providers : [
    AsService,
    // DateFormatPipe,
    // MatTableFilterColResizeService

  ]
})
export class AccountStatementModule { }
