import { Component, ElementRef, Input, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { CookieService } from 'ngx-cookie-service';
import { Subject, Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { FuseMatchMediaService } from '@fuse/services/match-media.service';
import { FuseNavigationService } from '@fuse/components/navigation/navigation.service';
import { Select, Store } from '@ngxs/store';
import { IUser } from 'app/main/_models/user.model';
import { navigation } from 'app/navigation/navigation';
import { NavigationState } from 'app/main/_ngxs/navigation/navigation.state';
import { User_DeleteShortcut, User_AddShortcut } from 'app/main/_ngxs/user/user-detail/user-detail.action';
import { UserDetailState } from 'app/main/_ngxs/user/user-detail/user-detail.state';

@Component({
    selector   : 'fuse-shortcuts',
    templateUrl: './shortcuts.component.html',
    styleUrls  : ['./shortcuts.component.scss']
})
export class FuseShortcutsComponent implements OnInit, OnDestroy
{
    @Select(UserDetailState.getUser) user$: Observable<IUser>;
    @Select(NavigationState.getNavigation) navigation$: Observable<any>;
    
    shortcutItems: any[];
    navigationItems: any[];
    filteredNavigationItems: any[];
    searching: boolean;
    mobileShortcutsPanelActive: boolean;

    @Input()
    navigation: any;

    @ViewChild('searchInput', {static: false})
    searchInputField;

    @ViewChild('shortcuts', {static: false})
    shortcutsEl: ElementRef;

    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {Renderer2} _renderer
     * @param {CookieService} _cookieService
     * @param {FuseMatchMediaService} _fuseMatchMediaService
     * @param {FuseNavigationService} _fuseNavigationService
     * @param {ObservableMedia} _observableMedia
     */
    constructor(
        private _cookieService: CookieService,
        private _fuseMatchMediaService: FuseMatchMediaService,
        private _fuseNavigationService: FuseNavigationService,
        private _mediaObserver: MediaObserver,
        private _renderer: Renderer2,
        private _store: Store
    )
    {
        // Set the defaults
        // this.shortcutItems = [];
        this.searching = false;
        this.mobileShortcutsPanelActive = false;

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
        this.user$.subscribe((user:IUser) => {
            if(user) {
                this.shortcutItems = user.shortcuts;
            }
        });
        this.navigation$.subscribe(navigation => {
            if(navigation) {
                this.filteredNavigationItems = this.navigationItems = this._fuseNavigationService.getFlatNavigation(navigation);
            }
        });
        // Get the navigation items and flatten them
        

        // if ( this._cookieService.check('FUSE2.shortcuts') )
        // {
        //     this.shortcutItems = JSON.parse(this._cookieService.get('FUSE2.shortcuts'));
        // }
        // else
        // {
        //     // User's shortcut items
        //     this.shortcutItems = [
        //         {
        //             'title': 'Calendar',
        //             'type' : 'item',
        //             'icon' : 'today',
        //             'url'  : '/apps/calendar'
        //         },
        //         {
        //             'title': 'Mail',
        //             'type' : 'item',
        //             'icon' : 'email',
        //             'url'  : '/apps/mail'
        //         },
        //         {
        //             'title': 'Contacts',
        //             'type' : 'item',
        //             'icon' : 'account_box',
        //             'url'  : '/apps/contacts'
        //         },
        //         {
        //             'title': 'To-Do',
        //             'type' : 'item',
        //             'icon' : 'check_box',
        //             'url'  : '/apps/todo'
        //         }
        //     ];
        // }

        // Subscribe to media changes
        this._fuseMatchMediaService.onMediaChange
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(() => {
                if ( this._mediaObserver.isActive('gt-sm') )
                {
                    this.hideMobileShortcutsPanel();
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
     * Search
     *
     * @param event
     */
    search(event): void
    {
        const value = event.target.value.toLowerCase();

        if ( value === '' )
        {
            this.searching = false;
            this.filteredNavigationItems = this.navigationItems;

            return;
        }

        this.searching = true;

        this.filteredNavigationItems = this.navigationItems.filter((navigationItem) => {
            return navigationItem.title.toLowerCase().includes(value);
        });
    }

    /**
     * Toggle shortcut
     *
     * @param event
     * @param itemToToggle
     */
    toggleShortcut(event, itemToToggle): void
    {
        event.stopPropagation();

        for ( let i = 0; i < this.shortcutItems.length; i++ )
        {
            if ( this.shortcutItems[i].url === itemToToggle.url )
            {
                //supprimer le shortcut en bd/ rafraichir le shortcut dans le shared
                this._store.dispatch(new User_DeleteShortcut(this.shortcutItems[i].id))

                
                // this.userService.deleteShortcut(this.authService.decodedToken.nameid,this.shortcutItems[i].id)
                //     .subscribe(()=>{
                //         this.shortcutItems.splice(i, 1);
                //         this.authService.changeShortcuts(this.shortcutItems);
                //         localStorage.setItem('user', JSON.stringify(this.authService.currentUser));

                //     },error =>{

                //     });
                
                
                
                // this.shortcutItems.splice(i, 1);

                // // Save to the cookies
                // this._cookieService.set('FUSE2.shortcuts', JSON.stringify(this.shortcutItems));

                return;
            }
        }

        itemToToggle.id=0;
        //sauvegarde du shortcut / maj du local storage et du service shared
        this._store.dispatch(new User_AddShortcut(itemToToggle));
        // this.shortcutItems.push(itemToToggle);

        // Save to the cookies
        this._cookieService.set('FUSE2.shortcuts', JSON.stringify(this.shortcutItems));
    }

    /**
     * Is in shortcuts?
     *
     * @param navigationItem
     * @returns {any}
     */
    isInShortcuts(navigationItem): any
    {
        return this.shortcutItems.find(item => {
            return item.url === navigationItem.url;
        });
    }

    /**
     * On menu open
     */
    onMenuOpen(): void
    {
        setTimeout(() => {
            this.searchInputField.nativeElement.focus();
        });
    }

    /**
     * Show mobile shortcuts
     */
    showMobileShortcutsPanel(): void
    {
        this.mobileShortcutsPanelActive = true;
        // this._renderer.addClass(this.shortcutsEl.nativeElement, 'show-mobile-panel');
    }

    /**
     * Hide mobile shortcuts
     */
    hideMobileShortcutsPanel(): void
    {
        this.mobileShortcutsPanelActive = false;
        // this._renderer.removeClass(this.shortcutsEl.nativeElement, 'show-mobile-panel');
    }
}
