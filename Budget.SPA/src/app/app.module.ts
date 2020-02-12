import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';
// import 'hammerjs';

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
// import { HttpModule } from '@angular/http';
import { AuthService } from './main/_services/auth.service';
import { ErrorService } from './main/_services/error.service';
import { GoogleMapService } from './main/_services/google-map.service';
import { FuseSplashScreenService } from '@fuse/services/splash-screen.service';
import { FuseConfigService } from '@fuse/services/config.service';
import { FuseNavigationService } from '@fuse/components/navigation/navigation.service';
import { AccountService } from './main/_services/Referential/account.service';
import { NavigationService } from './main/_services/navigation.service';
import { AccountTypeService } from './main/_services/Referential/account-type.service';
import { DatePipe } from '@angular/common';
import { UserDetailResolver } from './main/apps/referential/user/user-detail/user-detail.resolver';
import { ErrorInterceptor } from './_interceptor/error.interceptor';
import { JwtInterceptor } from './_interceptor/jwt.interceptor';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { environment } from 'environments/environment';
import { UserLoaded } from './main/_models/user.model';
import { UserService } from './main/apps/referential/user/user.service';
import { NavigationState } from './main/_ngxs/navigation/navigation.state';
import { PlanService } from './main/apps/plan/plan.service';
import { ReferentialServiceModule } from './main/_services/Referential/referential.service.module';
import { UserDetailState } from './main/_ngxs/user/user-detail/user-detail.state';
import { BankAgencyService } from './main/_services/Referential/bank-agency.service';

const NGXS_MODULES = [
    NgxsModule.forRoot([]),
    NgxsReduxDevtoolsPluginModule.forRoot({ disabled: environment.production ? true : false }),
]

const appRoutes: Routes = [
    { path : 'pages', loadChildren: () => import('./main/pages/pages.module').then(m => m.FusePagesModule) },
    { path : 'apps', loadChildren: () => import('./main/apps/apps.module').then(m => m.FuseAppsModule) },

    // otherwise redirect to home
    { path: '**', redirectTo: 'pages/home' }
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
        // HttpModule,

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
        BankAgencyService,
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
        PlanService
    ],
    bootstrap   : [
        AppComponent
    ]
})
export class AppModule
{
}
