import { Component } from '@angular/core';
import { FuseSplashScreenService } from './core/services/splash-screen.service';
import { TranslateService } from '@ngx-translate/core';
import { FuseTranslationLoaderService } from './core/services/translation-loader.service';

import { FuseNavigationService } from './core/components/navigation/navigation.service';
import { FuseNavigationModel } from './navigation/navigation.model';
import { locale as navigationEnglish } from './navigation/i18n/en';
import { locale as navigationFrench } from './navigation/i18n/fr';
import { AuthService } from './main/_services/auth.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { JwtHelper } from 'angular2-jwt';


@Component({
    selector   : 'fuse-root',
    templateUrl: './app.component.html',
    styleUrls  : ['./app.component.scss']
})
export class AppComponent implements OnInit
{

    jwtHelper:JwtHelper = new JwtHelper();

    public notificationOptions = {
        position: ["top","right"],
        animate: "fromTop",
        timeOut: 3000,
        showProgressBar: true,
        pauseOnHover: true,
        clickToClose: true
        };              
    

    constructor(
        private fuseNavigationService: FuseNavigationService,
        private fuseSplashScreen: FuseSplashScreenService,
        private translate: TranslateService,
        private translationLoader: FuseTranslationLoaderService,
        private authService: AuthService
    )
    {
        

        // Add languages
        this.translate.addLangs(['en', 'fr']);

        // Set the default language
        this.translate.setDefaultLang('fr');

        // Use a language
        this.translate.use('fr');

        // Set the navigation model
        this.fuseNavigationService.setNavigationModel(new FuseNavigationModel());

        // Set the navigation translations
        this.translationLoader.loadTranslations(navigationEnglish, navigationFrench);

        
    }

    ngOnInit()
    {
        const token=localStorage.getItem('budgetToken');
        if(token)
        {
            this.authService.decodedToken = this.jwtHelper.decodeToken(token);
        }
    }
}
