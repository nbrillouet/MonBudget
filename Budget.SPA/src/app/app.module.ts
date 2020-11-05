import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { MatMomentDateModule, MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';
import { FuseModule } from '@fuse/fuse.module';
import { FuseSharedModule } from '@fuse/shared.module';
import { FuseProgressBarModule, FuseSidebarModule, FuseThemeOptionsModule } from '@fuse/components';
import { fuseConfig } from 'app/fuse-config';
import { AppComponent } from 'app/app.component';
import { LayoutModule } from 'app/layout/layout.module';
import { AuthGuard } from './_guards/auth.guard';
import { FuseSplashScreenService } from '@fuse/services/splash-screen.service';
import { FuseConfigService } from '@fuse/services/config.service';
import { FuseNavigationService } from '@fuse/components/navigation/navigation.service';
import { NavigationService } from './main/_services/navigation.service';
import { ErrorInterceptor } from './_interceptor/error.interceptor';
import { JwtInterceptor } from './_interceptor/jwt.interceptor';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { NgxsModule } from '@ngxs/store';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { environment } from 'environments/environment';
import { UserLoaded } from './main/_models/user.model';
import { UserService } from './main/apps/referential/user/user.service';
import { NavigationState } from './main/_ngxs/navigation/navigation.state';
import { UserDetailState } from './main/_ngxs/user/user-detail/user-detail.state';
import { HelperService } from './main/_services/helper.service';
import { DateAdapter, MAT_DATE_LOCALE, MAT_DATE_FORMATS, MatDateFormats } from '@angular/material/core';
import { CustomDatePickerAdapter, CUSTOM_DATE_FORMATS } from './_shared/date-adapter';
import { UserAuthService } from './main/_services/auth.service';
import { UserAuthState } from './main/_ngxs/user/user-auth/user-auth.state';

// export const MY_DATE_FORMAT: MatDateFormats = {
//     parse: {
//       dateInput: 'DD/MM/YYYY',
//     },
//     display: {
//       dateInput: 'DD/MM/YYYY',
//       monthYearLabel: 'MMM YYYY',
//       dateA11yLabel: 'DD/MM/YYYY',
//       monthYearA11yLabel: 'MMMM YYYY',
//     },
//   };
  
const appRoutes: Routes = [
    { path: '', redirectTo: 'pages/home', pathMatch:'full' },
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

        BrowserModule,
        BrowserAnimationsModule,
        MatIconModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes),
        TranslateModule.forRoot(),
        SimpleNotificationsModule.forRoot(),
        
        // Material moment date module
        // MatMomentDateModule,

        // Material
        // MatButtonModule,
        // MatIconModule,

        // Fuse modules
        FuseModule.forRoot(fuseConfig),
        FuseProgressBarModule,
        FuseSharedModule,
        FuseSidebarModule,
        FuseThemeOptionsModule,

        // App modules
        LayoutModule,
        // SampleModule,
        // LoginModule,
        // RegisterModule,
        // ReferentialServiceModule,
        
        NgxsModule.forRoot([
            UserDetailState,
            NavigationState,
            UserAuthState
        ]),
        // NgxsStoragePluginModule.forRoot({
        //     key: [UserAuthState]
        // }),
        NgxsReduxDevtoolsPluginModule.forRoot({ disabled: environment.production ? true : false })
    ],
    providers   : [
        AuthGuard,
        UserAuthService,
        FuseSplashScreenService,
        FuseConfigService,
        FuseNavigationService,
        NavigationService,
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        
        {provide: DateAdapter, useClass: CustomDatePickerAdapter},
        {provide: MAT_DATE_FORMATS, useValue: CUSTOM_DATE_FORMATS},


        // { provide: MAT_DATE_LOCALE, useValue: 'fr-FR' },
        // { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMAT },
        // { provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: { useUtc: true } },
        
        // { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
        // { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMAT },

        //{ provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
                
        UserLoaded,
        UserService,
        HelperService
    ],
    bootstrap   : [
        AppComponent
    ]
})
export class AppModule
{
}
