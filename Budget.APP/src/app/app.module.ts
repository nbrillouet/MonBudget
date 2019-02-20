import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import 'hammerjs';
import { SharedModule } from './core/modules/shared.module';
import { AppComponent } from './app.component';
import { FuseMainModule } from './main/main.module';
import { FuseSplashScreenService } from './core/services/splash-screen.service';
import { FuseConfigService } from './core/services/config.service';
import { FuseNavigationService } from './core/components/navigation/navigation.service';
import { FuseSampleModule } from './main/content/sample/sample.module';
import { LoginModule } from './main/content/pages/authentication/login/login.module';
import { RegisterModule } from './main/content/pages/authentication/register/register.module';
import { TranslateModule } from '@ngx-translate/core';
import { HttpModule } from '@angular/http';
import { FuseMainComponent } from './main/main.component';
import { AuthGuard } from './_guards/auth.guard';
import { FuseSampleComponent } from './main/content/sample/sample.component';
import { FuseLoginComponent } from './main/content/pages/authentication/login/login.component';
import { JwtInterceptor } from './main/content/pages/authentication/jwt.interceptor';
import { FuseRegisterComponent } from './main/content/pages/authentication/register/register.component';
import { FusePagesModule } from './main/content/pages/pages.module';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { AuthService } from './main/_services/auth.service';
import { AuthModule } from './auth/auth.module';
import { UserDetailResolver } from './main/content/apps/referential/user/user-detail/user-detail.resolver';
import { DialogGuardComponent } from './_guards/dialog-guard.component';
import { ReferentialService } from './main/_services/referential.service';
import { DatePipe } from '@angular/common';
import { ErrorService } from './main/_services/error.service';
import { GoogleMapService } from './main/_services/google-map.service';
import { NavigationService } from './main/_services/navigation.service';
import { OperationTypeFamilyService } from './main/_services/Referential/operation-type-family.service';
import { OperationTypeService } from './main/_services/Referential/operation-type.service';
import { AccountService } from './main/_services/Referential/account.service';
import { BankService } from './main/_services/Referential/bank.service';
import { AccountTypeService } from './main/_services/Referential/account-type.service';
// import { NgxsModule } from '@ngxs/store';
// import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin'
// import { AsGridState } from './main/content/apps/account-statement/account-statement.state';
// import { environment } from '../environments/environment';
// import { FilterAccountStatementState } from './main/content/apps/account-statement/account-statement-list/account-statement-list-filter/account-statement-list-filter.state';

// .main/content/pages/login/login
const appRoutes: Routes = [
    
    // { path : '', component : FuseSampleComponent, canActivate: [AuthGuard] },
    { path : 'pages', loadChildren: './main/content/pages/pages.module#FusePagesModule' },
    { path : 'apps', loadChildren: './main/content/apps/apps.module#FuseAppsModule' },
    
    // { 
    //     path: '',
    //     runGuardsAndResolvers: 'always',
    //     canActivate: [AuthGuard],
    //     children: [
    //         { path : 'sample', component : FuseSampleComponent }
    //     ]
    // },
    // otherwise redirect to home
    { path: '**', redirectTo: '',canActivate: [AuthGuard] }

];

@NgModule({
    declarations: [
        AppComponent
    ],
    imports     : [
        BrowserModule,
        HttpClientModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(appRoutes),
        SharedModule,
        TranslateModule.forRoot(),
        SimpleNotificationsModule.forRoot(),
        FuseMainModule,
        FuseSampleModule,
        LoginModule,
        RegisterModule,
        HttpModule,
        AuthModule
        // NgxsModule.forRoot([
        //     AsGridState,
        //     FilterAccountStatementState
        //   ]),
        //   NgxsReduxDevtoolsPluginModule.forRoot({ disabled: environment.production ? true : false })
    ],
    providers   : [
        AuthGuard,
        AuthService,
        ErrorService,
        GoogleMapService,
        FuseSplashScreenService,
        FuseConfigService,
        FuseNavigationService,
        ReferentialService,
        OperationTypeFamilyService,
        OperationTypeService,
        AccountService,
        NavigationService,
        BankService,
        AccountTypeService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: JwtInterceptor,
            multi: true
        },
        DatePipe,
        UserDetailResolver
    ],
    bootstrap   : [
        AppComponent
    ]
})

export class AppModule
{
}
