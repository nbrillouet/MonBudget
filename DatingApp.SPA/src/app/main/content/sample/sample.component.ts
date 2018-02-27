import { Component, OnInit } from '@angular/core';
import { FuseTranslationLoaderService } from '../../../core/services/translation-loader.service';
import { Http } from '@angular/http';

import { locale as english } from './i18n/en';
import { locale as french } from './i18n/fr';

@Component({
    selector   : 'fuse-sample',
    templateUrl: './sample.component.html',
    styleUrls  : ['./sample.component.scss']
})
export class FuseSampleComponent implements OnInit
{
    values: any;
    
    constructor(private http: Http, private translationLoader: FuseTranslationLoaderService)
    {
        this.translationLoader.loadTranslations(english, french);
    }

    ngOnInit() {
        this.getValues();
      }

      getValues()
      {
        this.http.get('http://localhost:5001/api/user').subscribe(response => {
          this.values = response.json();
        });
      }
}
