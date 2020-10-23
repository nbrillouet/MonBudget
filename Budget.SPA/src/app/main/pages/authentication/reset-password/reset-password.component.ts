import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators, CheckboxControlValueAccessor } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { FuseConfigService } from '@fuse/services/config.service';
import { fuseAnimations } from '@fuse/animations';
import { ActivatedRoute, Router } from '@angular/router';
import { UserAuthService } from 'app/main/_services/auth.service';
import { UserForRegister, UserForPasswordChange } from 'app/main/_models/user.model';
import { NotificationsService } from 'angular2-notifications';

@Component({
    selector     : 'reset-password',
    templateUrl  : './reset-password.component.html',
    styleUrls    : ['./reset-password.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class ResetPasswordComponent implements OnInit, OnDestroy
{
    resetPasswordForm: FormGroup;
    userForPasswordChange: UserForPasswordChange = new UserForPasswordChange();
    // Private
    private _unsubscribeAll: Subject<any>;

    constructor(
        private _fuseConfigService: FuseConfigService,
        private _formBuilder: FormBuilder,
        private _activatedRoute: ActivatedRoute,
        private _userAuthService: UserAuthService,
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
        this._activatedRoute.params.subscribe(routeParams => {
            let idUser=routeParams['encrypt'];
            this.userForPasswordChange.idCrypted = idUser; //encodeURIComponent(user)
            // this._authService.getUserEncrypt(idUser).subscribe((user)=>{
                
            //     this.userForRegister = user;
            //     console.log('user',this.userForRegister);
            // });
            // console.log('idUser',idUser);

        });

        this.resetPasswordForm = this._formBuilder.group({
            email          : ['', [Validators.required, Validators.email]],
            password       : ['', Validators.required],
            passwordConfirm: ['', [Validators.required, confirmPasswordValidator]]
        });

        // Update the validity of the 'passwordConfirm' field
        // when the 'password' field changes
        this.resetPasswordForm.get('password').valueChanges
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(() => {
                console.log(this.resetPasswordForm);
                this.resetPasswordForm.get('passwordConfirm').updateValueAndValidity();
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

    changePassword(){
        this.checkUser();
        this._userAuthService.changePassword(this.userForPasswordChange).subscribe(()=>{
            this._notificationsService.success('Modification mot de passe','votre mot de passe est modifié!');
            this._router.navigate(['/pages/auth/login']);
        }
        );
    }

    checkUser() {
        
        this.userForPasswordChange.email = this.resetPasswordForm.get('email').value;
        this.userForPasswordChange.password = this.resetPasswordForm.get('password').value;
        // if(!this.userForRegister)
        //     this._notificationsService.warn('Modification mot de passe','Utilisateur non trouvé');
        // else {
        //     if(this.userForRegister.email!=this.resetPasswordForm.controls['email'].value) {
        //         this._notificationsService.warn('Modification mot de passe','l\'adresse email renseigné ne corresponde pas au compte');
        //     }
        // }
        
    }
}

/**
 * Confirm password validator
 *
 * @param {AbstractControl} control
 * @returns {ValidationErrors | null}
 */
export const confirmPasswordValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {

    if ( !control.parent || !control )
    {
        return null;
    }

    const password = control.parent.get('password');
    const passwordConfirm = control.parent.get('passwordConfirm');

    if ( !password || !passwordConfirm )
    {
        return null;
    }

    if ( passwordConfirm.value === '' )
    {
        return null;
    }

    if ( password.value === passwordConfirm.value )
    {
        return null;
    }

    return {passwordsNotMatching: true};
};
