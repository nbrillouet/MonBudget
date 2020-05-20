import { Component, ViewEncapsulation, OnInit } from '@angular/core';

import { FuseConfigService } from '@fuse/services/config.service';
import { fuseAnimations } from '@fuse/animations';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'app/main/_services/auth.service';
import { NotificationsService } from 'angular2-notifications';
import { Router } from '@angular/router';

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
        private _authService: AuthService,
        private _notificationsService: NotificationsService,
        private _router: Router
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
        this._authService.accountActivation(this.validateForm.controls['validationCode'].value).subscribe(()=>{
            this._notificationsService.success('Activation compte','Votre compte est activé!')
            this._router.navigate(['/pages/auth/login']);
        });
        // , error =>{
        //     this.notif.error('Registration failed',error)
        // });
    }
}
