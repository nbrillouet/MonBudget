import { NgModule } from '@angular/core';
import { AccountStatementMainComponent } from './account-statement-main/account-statement-main.component';
// import { AuthGuard } from '../../../../_guards/auth.guard';
// import { SharedModule } from '../../../../core/modules/shared.module';
import { RouterModule } from '@angular/router';
// import { FuseWidgetModule } from '../../../../core/components/widget/widget.module';
import { AccountStatementFilterComponent } from './account-statement-filter/account-statement-filter.component';
// import { WidgetsModule } from '../../widgets/widgets.module';
import { AccountStatementService } from './account-statement.service';
import { AccountStatementListComponent } from './account-statement-list/account-statement-list.component';
import { AccountStatementListFilterService } from './account-statement-list/account-statement-list-filter/account-statement-list-filter.service';
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
import { AsListState } from 'app/main/_ngxs/account-statement/account-statement-list/account-statement-list.state';
import { AsSoldeState } from 'app/main/_ngxs/account-statement/account-statement-solde/account-statement-solde.state';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { environment } from 'environments/environment';


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
      AsListState,
      AsSoldeState

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
    AccountStatementDetailComponent
  ],
  providers : [
    AccountStatementService,
    AccountStatementListFilterService
  ]
})
export class AccountStatementModule { }
