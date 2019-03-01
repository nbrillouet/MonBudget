import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';
import 'hammerjs';

import { FuseModule } from '@fuse/fuse.module';
import { FuseSharedModule } from '@fuse/shared.module';
import { FuseProgressBarModule, FuseSidebarModule, FuseThemeOptionsModule } from '@fuse/components';

import { fuseConfig } from 'app/fuse-config';

import { AppComponent } from 'app/app.component';
import { LayoutModule } from 'app/layout/layout.module';
import { SampleModule } from 'app/main/sample/sample.module';
import { AuthGuard } from './_guards/auth.guard';
import { LoginModule } from './main/pages/authentication/login/login.module';
import { RegisterModule } from './main/pages/authentication/register/register.module';
import { HttpModule } from '@angular/http';
import { AuthService } from './main/_services/auth.service';
import { ErrorService } from './main/_services/error.service';
import { GoogleMapService } from './main/_services/google-map.service';
import { FuseSplashScreenService } from '@fuse/services/splash-screen.service';
import { FuseConfigService } from '@fuse/services/config.service';
import { FuseNavigationService } from '@fuse/components/navigation/navigation.service';
// import { ReferentialService } from './main/_services/referential.service';
import { OperationTypeFamilyService } from './main/_services/Referential/operation-type-family.service';
import { OperationTypeService } from './main/_services/Referential/operation-type.service';
import { AccountService } from './main/_services/Referential/account.service';
import { NavigationService } from './main/_services/navigation.service';
import { BankService } from './main/_services/Referential/bank.service';
import { AccountTypeService } from './main/_services/Referential/account-type.service';
// import { JwtInterceptor } from './main/pages/authentication/jwt.interceptor';
import { DatePipe } from '@angular/common';
import { UserDetailResolver } from './main/apps/referential/user/user-detail/user-detail.resolver';
// import { AuthModule, AuthConfig } from 'angular2-jwt';
import { ErrorInterceptor } from './_interceptor/error.interceptor';
import { JwtInterceptor } from './_interceptor/jwt.interceptor';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { environment } from 'environments/environment';
import { UserLoaded } from './main/_models/user.model';
import { UserService } from './main/apps/referential/user/user.service';
import { NavigationState } from './main/_ngxs/navigation/navigation.state';
import { AsListState } from './main/_ngxs/account-statement/account-statement-list/account-statement-list.state';
import { AccountStatementService } from './main/apps/account-statement/account-statement.service';
import { PlanService } from './main/apps/plan/plan.service';
import { PlanTableState } from './main/_ngxs/plan/plan-list/plan-list.state';
import { PlanDetailState } from './main/_ngxs/plan/plan-detail/plan-detail.state';
import { PlanPosteDetailState } from './main/_ngxs/plan-poste/plan-poste-detail/plan-poste-detail.state';
import { PlanForTrackingState } from './main/_ngxs/plan-tracking/plan-tracking.state';
import { PlanTableComboFilterState } from './main/_ngxs/plan/plan-list-filter/plan-list-filter.state';
import { AsSoldeState } from './main/_ngxs/account-statement/account-statement-solde/account-statement-solde.state';
import { OperationMethodService } from './main/_services/Referential/operation-method.service';
// import { ReferentialTestService } from './main/_services/Referential/referential.service';
import { ReferentialServiceModule } from './main/_services/Referential/referential.service.module';
import { UserDetailState } from './main/_ngxs/user/user-detail/user-detail.state';
// import { PlanDetailState } from './main/_ngxs/plan/planDetail/plan-detail.state';
// import { AsFilterState } from './main/_ngxs/account-statement/account-statement-filter/account-statement-filter.state';

const NGXS_MODULES = [
    NgxsModule.forRoot([]),
    NgxsReduxDevtoolsPluginModule.forRoot({ disabled: environment.production ? true : false }),
]


const appRoutes: Routes = [
    { path : 'pages', loadChildren: './main/pages/pages.module#FusePagesModule' },
    { path : 'apps', loadChildren: './main/apps/apps.module#FuseAppsModule' },

    // otherwise redirect to home
    // { path: '**', redirectTo: '',canActivate: [AuthGuard] }
];

@NgModule({
    declarations: [
        AppComponent
    ],
    imports     : [
        // AuthModule,
        // AuthConfig,

        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes),

        TranslateModule.forRoot(),
        SimpleNotificationsModule.forRoot(),
        
        // Material moment date module
        MatMomentDateModule,

        // Material
        MatButtonModule,
        MatIconModule,

        // Fuse modules
        FuseModule.forRoot(fuseConfig),
        FuseProgressBarModule,
        FuseSharedModule,
        FuseSidebarModule,
        FuseThemeOptionsModule,

        // App modules
        LayoutModule,
        SampleModule,

        LoginModule,
        RegisterModule,
        HttpModule,

        ReferentialServiceModule,

        NgxsModule.forRoot([
            UserDetailState,
            NavigationState
         ]),
        NgxsReduxDevtoolsPluginModule.forRoot({ disabled: environment.production ? true : false })
        
    ],
    providers   : [
        AuthGuard,
        AuthService,
        ErrorService,
        GoogleMapService,
        FuseSplashScreenService,
        FuseConfigService,
        FuseNavigationService,
        // ReferentialService,
        // ReferentialTestService,

        // OperationTypeFamilyService,
        // OperationTypeService,
        // OperationMethodService,
        AccountService,
        NavigationService,
        BankService,
        AccountTypeService,
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
        // {
        //     provide: HTTP_INTERCEPTORS,
        //     useClass: JwtInterceptor,
        //     multi: true
        // },
        DatePipe,
        UserDetailResolver,
        UserLoaded,
        UserService,

        AccountStatementService,
        PlanService
    ],
    bootstrap   : [
        AppComponent
    ]
})
export class AppModule
{
}
