import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { fuseAnimations } from '@fuse/animations';
import { FuseConfigService } from '@fuse/services/config.service';
import { Register } from 'app/main/_ngxs/user/user-auth/user-auth.action';
import { Store } from '@ngxs/store';

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
        private _store: Store
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
        this._store.dispatch(new Register({userForRegister: this.registerForm.value}));
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
