import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Platform } from '@angular/cdk/platform';
import { TranslateService } from '@ngx-translate/core';
import { Subject, Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { FuseConfigService } from '@fuse/services/config.service';
import { FuseNavigationService } from '@fuse/components/navigation/navigation.service';
import { FuseSidebarService } from '@fuse/components/sidebar/sidebar.service';
import { FuseSplashScreenService } from '@fuse/services/splash-screen.service';
import { FuseTranslationLoaderService } from '@fuse/services/translation-loader.service';

import { navigation } from 'app/navigation/navigation';
import { locale as navigationEnglish } from 'app/navigation/i18n/en';
import { locale as navigationFrench } from 'app/navigation/i18n/fr';
import { Select, Store } from '@ngxs/store';
import { UserForDetail } from './main/_models/user.model';
import { NavigationService } from './main/_services/navigation.service';
import { AddNavigation } from './main/_ngxs/navigation/navigation.action';
import { NavigationState } from './main/_ngxs/navigation/navigation.state';
import { UserDetailState } from './main/_ngxs/user/user-detail/user-detail.state';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    selector   : 'app',
    templateUrl: './app.component.html',
    styleUrls  : ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy
{
    @Select(UserDetailState.getUser) user$: Observable<UserForDetail>;
    @Select(NavigationState.getNavigation) navigation$: Observable<any>;

    fuseConfig: any;
    navigation: any;

    public notificationOptions = {
        position: ["top","right"],
        animate: "fromTop",
        timeOut: 3000,
        showProgressBar: true,
        pauseOnHover: true,
        clickToClose: true
        };              

    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {DOCUMENT} document
     * @param {FuseConfigService} _fuseConfigService
     * @param {FuseNavigationService} _fuseNavigationService
     * @param {FuseSidebarService} _fuseSidebarService
     * @param {FuseSplashScreenService} _fuseSplashScreenService
     * @param {FuseTranslationLoaderService} _fuseTranslationLoaderService
     * @param {Platform} _platform
     * @param {TranslateService} _translateService
     */
    constructor(
        @Inject(DOCUMENT) private document: any,
        private _fuseConfigService: FuseConfigService,
        private _fuseNavigationService: FuseNavigationService,
        private _fuseSidebarService: FuseSidebarService,
        private _fuseSplashScreenService: FuseSplashScreenService,
        private _fuseTranslationLoaderService: FuseTranslationLoaderService,
        private _translateService: TranslateService,
        private _platform: Platform,
        private navigationService: NavigationService,
        private store: Store,
        private matIconRegistry: MatIconRegistry,
        private domSanitizer: DomSanitizer

    )
    {
        this.matIconRegistry.addSvgIcon(
            'loginIcon',
            this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/images/home/Login.svg')
        );
        // // Get default navigation
        // this.navigation = navigation;

        // // Register the navigation to the service
        // this._fuseNavigationService.register('start', this.navigation);

        // // Set the main navigation as our current navigation
        // this._fuseNavigationService.setCurrentNavigation('start');


        // Add languages
        this._translateService.addLangs(['en', 'fr']);

        // Set the default language
        this._translateService.setDefaultLang('fr');

        // Set the navigation translations
        this._fuseTranslationLoaderService.loadTranslations(navigationEnglish, navigationFrench);

        // Use a language
        this._translateService.use('fr');

        /**
         * ----------------------------------------------------------------------------------------------------
         * ngxTranslate Fix Start
         * ----------------------------------------------------------------------------------------------------
         */

        /**
         * If you are using a language other than the default one, i.e. French in this case,
         * you may encounter an issue where some of the components are not actually being
         * translated when your app first initialized.
         *
         * This is related to ngxTranslate module and below there is a temporary fix while we
         * are moving the multi language implementation over to the Angular's core language
         * service.
         **/

        // Set the default language to 'en' and then back to 'fr'.
        // '.use' cannot be used here as ngxTranslate won't switch to a language that's already
        // been selected and there is no way to force it, so we overcome the issue by switching
        // the default language back and forth.
        /**
         setTimeout(() => {
            this._translateService.setDefaultLang('en');
            this._translateService.setDefaultLang('fr');
         });
         */

        /**
         * ----------------------------------------------------------------------------------------------------
         * ngxTranslate Fix End
         * ----------------------------------------------------------------------------------------------------
         */

        // Add is-mobile class to the body if the platform is mobile
        if ( this._platform.ANDROID || this._platform.IOS )
        {
            this.document.body.classList.add('is-mobile');
        }

        // Set the private defaults
        this._unsubscribeAll = new Subject();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Subscribe to config changes
        this._fuseConfigService.config
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((config) => {

                this.fuseConfig = config;
                
                // Boxed
                if ( this.fuseConfig.layout.width === 'boxed' )
                {
                    this.document.body.classList.add('boxed');
                }
                else
                {
                    this.document.body.classList.remove('boxed');
                }

                // Color theme - Use normal for loop for IE11 compatibility
                for ( let i = 0; i < this.document.body.classList.length; i++ )
                {
                    const className = this.document.body.classList[i];

                    if ( className.startsWith('theme-') )
                    {
                        this.document.body.classList.remove(className);
                    }
                }

                this.document.body.classList.add(this.fuseConfig.colorTheme);
            });
            
  
            this.user$.subscribe((user:UserForDetail) => {

                console.log('user',user);
                if(user) {
                    this.navigation$.subscribe(result => {
                        console.log('navigation', result);
                        if(!result) {
                            this.navigation= [{'id'      : 'applications',
                                    'title'   : 'Applications',
                                    'translate': 'NAV.APPLICATIONS',
                                    'type'    : 'group',
                                    'children': []
                            }];
                            this.navigation[0].children.push(this.navigationService.getReferentialMenu(user));
                            this.navigation[0].children.push(this.navigationService.getBankMenu(user.bankAgencies));
                            this.navigation[0].children.push(this.navigationService.getImportAccountMenu());
                            this.navigation[0].children.push(this.navigationService.getPlanMenu());
                            this.store.dispatch(new AddNavigation(this.navigation));
                        }else{
                            this.navigation = result;
                        }

                        let isRegister = this._fuseNavigationService.isRegister('admin-nav');
                        if(isRegister)
                            this._fuseNavigationService.unregister('admin-nav');
                        // Register the new navigation
                        this._fuseNavigationService.register('admin-nav', this.navigation);
                        // Set the current navigation
                        this._fuseNavigationService.setCurrentNavigation('admin-nav');
                        // else {
                        //     let currentMenu = this._fuseNavigationService.getCurrentNavigation();

                        // }
                    });
                }

 
            });

            
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Toggle sidebar open
     *
     * @param key
     */
    toggleSidebarOpen(key): void
    {
        this._fuseSidebarService.getSidebar(key).toggleOpen();
    }
}
