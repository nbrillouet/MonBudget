import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { FuseConfigService } from '@fuse/services/config.service';
import { fuseAnimations } from '@fuse/animations';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngxs/store';
import { AccountActivation } from 'app/main/_ngxs/user/user-auth/user-auth.action';

@Component({
    selector     : 'mail-confirm',
    templateUrl  : './mail-confirm.component.html',
    styleUrls    : ['./mail-confirm.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class MailConfirmComponent implements OnInit
{
    validateForm: FormGroup;
    /**
     * Constructor
     *
     * @param {FuseConfigService} _fuseConfigService
     */
    constructor(
        private _fuseConfigService: FuseConfigService,
        private _formBuilder: FormBuilder,
        private _store: Store
    )
    {
        // Configure the layout
        this._fuseConfigService.config = {
            layout: {
                navbar   : {
                    hidden: true
                },
                toolbar  : {
                    hidden: true
                },
                footer   : {
                    hidden: true
                },
                sidepanel: {
                    hidden: true
                }
            }
        };
    }

    ngOnInit(){
        this.validateForm = this._formBuilder.group({
            validationCode   : ['', [Validators.required]]
        });
    }

    validate(){
        this._store.dispatch(new AccountActivation({validationCode: this.validateForm.controls['validationCode'].value}));
    }
}
