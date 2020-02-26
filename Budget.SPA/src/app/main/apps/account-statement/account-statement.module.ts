import { NgModule } from '@angular/core';
import { AccountStatementMainComponent } from './account-statement-main/account-statement-main.component';
import { RouterModule } from '@angular/router';
import { AccountStatementFilterComponent } from './account-statement-filter/account-statement-filter.component';
import { AccountStatementDetailComponent } from './account-statement-detail/account-statement-detail.component';
import { GMapModule } from '../g-map/g-map.module';
import { AuthGuard } from 'app/_guards/auth.guard';
import { FuseSharedModule } from '@fuse/shared.module';
import { FuseWidgetModule } from '@fuse/components';
import { WidgetsModule } from '../widgets/widgets.module';
import { NgxsModule } from '@ngxs/store';
import { AsSoldeState } from 'app/main/_ngxs/account-statement/account-statement-solde/account-statement-solde.state';
import { AsService } from './account-statement.service';
import { AsDetailState } from 'app/main/_ngxs/account-statement/account-statement-detail/account-statement-detail.state';
import { AsChartState } from 'app/main/_ngxs/account-statement/account-statement-chart/account-statement-chart.state';
import { AsChartEvolutionComponent } from './account-statement-chart/as-chart-evolution/as-chart-evolution.component';
import { AsInternalTransferCoupleComponent } from './account-statement-internal-transfer/as-internal-transfer-couple/as-internal-transfer-couple.component';
import { AsInternalTransferMainComponent } from './account-statement-internal-transfer/as-internal-transfer-main/as-internal-transfer-main.component';
import { AsInternalTransferState } from 'app/main/_ngxs/account-statement/account-statement-internal-transfer/as-internal-transfer.state';
import { AsChartCategorisationComponent } from './account-statement-chart/as-chart-categorisation/as-chart-categorisation.component';
import { MatTableFilterModule } from '../web-component/mat-table-filter/mat-table-filter.module';
import { AngularMaterialModule } from 'app/angular-material.module';
import { ReferentialServiceModule } from 'app/main/_services/Referential/referential.service.module';
import { SpinnerModule } from '../web-component/spinner/spinner.module';
import { AsTableState } from 'app/main/_ngxs/account-statement/as-table/as-table.state';
import { AsTableFilterSelectionState } from 'app/main/_ngxs/account-statement/as-table/as-table-filter-selection/as-table-filter-selection.state';
import { AsTableFilterSelectedState } from 'app/main/_ngxs/account-statement/as-table/as-table-filter-selected/as-table-filter-selected.state';
import { DatePipe } from '@angular/common';
import { AccountStatementTableComponent } from './account-statement-table/account-statement-table.component';

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
    ReferentialServiceModule,
    SpinnerModule,
    NgxsModule.forFeature([
      AsTableFilterSelectionState,
      AsTableFilterSelectedState,
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
    AccountStatementTableComponent,

    AccountStatementDetailComponent,
    AsChartEvolutionComponent,
    AsChartCategorisationComponent,
    AsInternalTransferMainComponent,
    AsInternalTransferCoupleComponent
    
  ],
  providers : [
    AsService,
    DatePipe
    // DateFormatPipe,
    // MatTableFilterColResizeService

  ]
})
export class AccountStatementModule { }
