import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { FuseConfigService } from '../../../../../core/services/config.service';
// import { fuseAnimations } from '../../../../../core/animations';
import { Router } from '@angular/router';
// import { AuthService } from '../../../../_services/auth.service';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { NotificationsService } from 'angular2-notifications';
import { fuseAnimations } from '@fuse/animations';
import { FuseConfigService } from '@fuse/services/config.service';
import { AuthService } from 'app/main/_services/auth.service';

@Component({
    selector   : 'fuse-register',
    templateUrl: './register.component.html',
    styleUrls  : ['./register.component.scss'],
    animations : fuseAnimations
})
export class FuseRegisterComponent implements OnInit
{
    registerForm: FormGroup;
    registerFormErrors: any;
    
    constructor(
        private _fuseConfigService: FuseConfigService,
        private formBuilder: FormBuilder,
        private authService: AuthService,
        private notif: NotificationsService,
        private router: Router
    )
    {
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

        // this.fuseConfig.setConfig({
        //     layout: {
        //         navigation: 'none',
        //         toolbar   : 'none',
        //         footer    : 'none'
        //     }
        // });

        this.registerFormErrors = {
            name           : {},
            email          : {},
            password       : {},
            passwordConfirm: {}
        };        
    }

    ngOnInit()
    {
        this.registerForm = this.formBuilder.group({
            name           : ['', Validators.required],
            email          : ['', [Validators.required, Validators.email]],
            password       : ['', Validators.required],
            passwordConfirm: ['', [Validators.required, confirmPassword]]
        });

        this.registerForm.valueChanges.subscribe(() => {
            this.onRegisterFormValuesChanged();
        });
    }

    onRegisterFormValuesChanged()
    {
        for ( const field in this.registerFormErrors )
        {
            if ( !this.registerFormErrors.hasOwnProperty(field) )
            {
                continue;
            }

            // Clear previous errors
            this.registerFormErrors[field] = {};

            // Get the control
            const control = this.registerForm.get(field);

            if ( control && control.dirty && !control.valid )
            {
                this.registerFormErrors[field] = control.errors;
            }
        }
    }

    register()
    {
        this.authService.register(this.registerForm.value).subscribe(()=>{
            // this.notif.success('Registration success','you are now registred')
            this.router.navigate(['/pages/auth/mail-confirm']);
        }, error =>{
            this.notif.error('Registration failed',error)
        });
    }
}

function confirmPassword(control: AbstractControl)
{
    if ( !control.parent || !control )
    {
        return;
    }

    const password = control.parent.get('password');
    const passwordConfirm = control.parent.get('passwordConfirm');

    if ( !password || !passwordConfirm )
    {
        return;
    }

    if ( passwordConfirm.value === '' )
    {
        return;
    }

    if ( password.value !== passwordConfirm.value )
    {
        return {
            passwordsNotMatch: true
        };
    }
}
