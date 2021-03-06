import { Component } from '@angular/core';

import { FuseTranslationLoaderService } from '@fuse/services/translation-loader.service';

import { locale as english } from './i18n/en';
import { locale as french } from './i18n/fr';
import { IUser } from '../_models/user.model';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { UserDetailState } from '../_ngxs/user/user-detail/user-detail.state';

@Component({
    selector   : 'sample',
    templateUrl: './sample.component.html',
    styleUrls  : ['./sample.component.scss']
})
export class SampleComponent
{
    @Select(UserDetailState.getUser) user: Observable<IUser>;
    /**
     * Constructor
     *
     * @param {FuseTranslationLoaderService} _fuseTranslationLoaderService
     */
    constructor(
        private store: Store,
        private _fuseTranslationLoaderService: FuseTranslationLoaderService
    )
    {
        this._fuseTranslationLoaderService.loadTranslations(english, french);
    }
}
