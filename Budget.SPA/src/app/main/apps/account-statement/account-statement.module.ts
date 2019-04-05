import { NgModule } from '@angular/core';
import { AccountStatementMainComponent } from './account-statement-main/account-statement-main.component';
import { RouterModule } from '@angular/router';
import { AccountStatementFilterComponent } from './account-statement-filter/account-statement-filter.component';
import { AccountStatementListComponent } from './account-statement-list/account-statement-list.component';
import { OperationFilterComponent } from './account-statement-list/account-statement-list-filter/operation-filter/operation-filter.component';
import { OperationMethodFilterComponent } from './account-statement-list/account-statement-list-filter/operation-method-filter/operation-method-filter.component';
import { OperationTypeFamilyFilterComponent } from './account-statement-list/account-statement-list-filter/operation-type-family-filter/operation-type-family-filter.component';
import { OperationTypeFilterComponent } from './account-statement-list/account-statement-list-filter/operation-type-filter/operation-type-filter.component';
import { DateIntegrationFilterComponent } from './account-statement-list/account-statement-list-filter/date-integration-filter/date-integration-filter.component';
import { AmountFilterComponent } from './account-statement-list/account-statement-list-filter/amount-filter/amount-filter.component';
import { AccountStatementDetailComponent } from './account-statement-detail/account-statement-detail.component';
import { GMapModule } from '../g-map/g-map.module';
import { AuthGuard } from 'app/_guards/auth.guard';
import { FuseSharedModule } from '@fuse/shared.module';
import { FuseWidgetModule } from '@fuse/components';
import { WidgetsModule } from '../widgets/widgets.module';
import { NgxsModule } from '@ngxs/store';
import { AsSoldeState } from 'app/main/_ngxs/account-statement/account-statement-solde/account-statement-solde.state';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { environment } from 'environments/environment';
import { AsTableFilterState } from 'app/main/_ngxs/account-statement/account-statement-list-filter/account-statement-filter.state';
import { AsTableState } from 'app/main/_ngxs/account-statement/account-statement-list/account-statement-list.state';
import { AsService } from './account-statement.service';
import { AsDetailState } from 'app/main/_ngxs/account-statement/account-statement-detail/account-statement-detail.state';
import { AsChartState } from 'app/main/_ngxs/account-statement/account-statement-chart/account-statement-chart.state';
import { AsChartEvolutionComponent } from './account-statement-chart/as-chart-evolution/as-chart-evolution.component';
import { AsInternalTransferCoupleComponent } from './account-statement-internal-transfer/as-internal-transfer-couple/as-internal-transfer-couple.component';
import { AsInternalTransferMainComponent } from './account-statement-internal-transfer/as-internal-transfer-main/as-internal-transfer-main.component';
import { AsInternalTransferState } from 'app/main/_ngxs/account-statement/account-statement-internal-transfer/as-internal-transfer.state';


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
    RouterModule.forChild(routes),
    FuseWidgetModule,
    WidgetsModule,
    GMapModule,
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
    OperationFilterComponent,
    OperationMethodFilterComponent,
    OperationTypeFamilyFilterComponent,
    OperationTypeFilterComponent,
    DateIntegrationFilterComponent,
    AmountFilterComponent,
    AccountStatementDetailComponent,
    AsChartEvolutionComponent,
    AsInternalTransferMainComponent,
    AsInternalTransferCoupleComponent
  ],
  providers : [
    AsService
  ]
})
export class AccountStatementModule { }
