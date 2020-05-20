import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';
import * as _ from 'lodash';

import { FuseConfigService } from '@fuse/services/config.service';
import { FuseSidebarService } from '@fuse/components/sidebar/sidebar.service';

import { navigation } from 'app/navigation/navigation';
import { AuthService } from 'app/main/_services/auth.service';
import { NotificationsService } from 'angular2-notifications';
import { Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { IUser } from 'app/main/_models/user.model';
import { UserDetailState } from 'app/main/_ngxs/user/user-detail/user-detail.state';
import { ClearUserDetail } from 'app/main/_ngxs/user/user-detail/user-detail.action';

@Component({
    selector     : 'toolbar',
    templateUrl  : './toolbar.component.html',
    styleUrls    : ['./toolbar.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class ToolbarComponent implements OnInit, OnDestroy
{
    @Select(UserDetailState.getUser) user$: Observable<IUser>;
    
    horizontalNavbar: boolean;
    rightNavbar: boolean;
    hiddenNavbar: boolean;
    fullscreen: boolean;
    fuseConfig: any;
    languages: any;
    navigation: any;
    selectedLanguage: any;
    userStatusOptions: any[];

    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {FuseConfigService} _fuseConfigService
     * @param {FuseSidebarService} _fuseSidebarService
     * @param {TranslateService} _translateService
     */
    constructor(
        private _fuseConfigService: FuseConfigService,
        private _fuseSidebarService: FuseSidebarService,
        private _translateService: TranslateService,
        private _authService: AuthService,
        private _notificationsService: NotificationsService,
        private _router: Router,
        private _store: Store
    )
    {
      
        // Set the defaults
        this.userStatusOptions = [
            {
                'title': 'Online',
                'icon' : 'icon-checkbox-marked-circle',
                'color': '#4CAF50'
            },
            {
                'title': 'Away',
                'icon' : 'icon-clock',
                'color': '#FFC107'
            },
            {
                'title': 'Do not Disturb',
                'icon' : 'icon-minus-circle',
                'color': '#F44336'
            },
            {
                'title': 'Invisible',
                'icon' : 'icon-checkbox-blank-circle-outline',
                'color': '#BDBDBD'
            },
            {
                'title': 'Offline',
                'icon' : 'icon-checkbox-blank-circle-outline',
                'color': '#616161'
            }
        ];

        this.languages = [
            {
                id   : 'en',
                title: 'English',
                flag : 'us'
            },
            {
                id   : 'fr',
                title: 'Français',
                flag : 'fr'
            }
        ];

        this.navigation = navigation;

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
        // Subscribe to the config changes
        this._fuseConfigService.config
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((settings) => {
                this.fuseConfig = settings;
                this.horizontalNavbar = settings.layout.navbar.position === 'top';
                this.rightNavbar = settings.layout.navbar.position === 'right';
                this.hiddenNavbar = settings.layout.navbar.hidden === true;
                this.fullscreen = this.fuseConfig.layout.toolbar.fullscreen;
                
                this.fullscreen 
                    ? document.documentElement.requestFullscreen() 
                    : document.fullscreenElement ? document.exitFullscreen() : null;
            });

        // Set the selected language from default languages
        this.selectedLanguage = _.find(this.languages, {'id': this._translateService.currentLang});
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

    // toggleFullscreen(): void
    // {

    //     this.fuseConfig.layout.toolbar.fullscreen=!this.fullscreen;
    //     this._fuseConfigService.setConfig(this.fuseConfig);

    // }

    /**
     * Search
     *
     * @param value
     */
    search(value): void
    {
        // Do your search here...

    }

    /**
     * Set the language
     *
     * @param lang
     */
    setLanguage(lang): void
    {
        // Set the selected language for the toolbar
        this.selectedLanguage = lang;

        // Use the selected language for translations
        this._translateService.use(lang.id);
    }

    logout()
    {
        this._authService.logout();

        // this._authService.currentUser = null;
        // this._notificationsService.info('logged out success','Vous êtes maintenant déconnecté');
        // this._router.navigate(['/pages/auth/login']);
    }

    getUserProfile(idUser: number) {
        this._router.navigate([`apps/referential/users/${idUser}/detail`]);
    }
}
