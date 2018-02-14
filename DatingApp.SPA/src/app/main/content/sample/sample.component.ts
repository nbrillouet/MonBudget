import { Component, OnInit } from '@angular/core';
import { FuseTranslationLoaderService } from '../../../core/services/translation-loader.service';
import { Http } from '@angular/http';

import { locale as english } from './i18n/en';
import { locale as turkish } from './i18n/tr';

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
        this.translationLoader.loadTranslations(english, turkish);
    }

    ngOnInit() {
        this.getValues();
      }

      getValues()
      {
        this.http.get('http://localhost:5001/api/values').subscribe(response => {
          this.values = response.json();
        });
      }
}
