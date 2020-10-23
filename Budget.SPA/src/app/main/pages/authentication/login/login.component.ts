import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';
import { FuseConfigService }    from '@fuse/services/config.service';
import { fuseAnimations }       from '@fuse/animations';
import { UserAuthService } from 'app/main/_services/auth.service';
import { Store } from '@ngxs/store';
import { Login } from 'app/main/_ngxs/user/user-auth/user-auth.action';

@Component({
    selector   : 'fuse-login',
    templateUrl: './login.component.html',
    styleUrls  : ['./login.component.scss'],
    animations : fuseAnimations
})
export class FuseLoginComponent implements OnInit
{
    loginForm: FormGroup;
    loginFormErrors: any;

    constructor(
        private _fuseConfigService: FuseConfigService,
        private formBuilder: FormBuilder,
        private userAuthService : UserAuthService,
        private router: Router,
        private notificationsService: NotificationsService,
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

        this.loginFormErrors = {
            username   : {},
            password: {}
        };
        
    }

    ngOnInit()
    {
        this.loginForm = this.formBuilder.group({
            username   : ['', [Validators.required]],
            password: ['', Validators.required]
        });

        this.loginForm.valueChanges.subscribe(() => {
            this.onLoginFormValuesChanged();
        });
    }

    onLoginFormValuesChanged()
    {
        for ( const field in this.loginFormErrors )
        {
            if ( !this.loginFormErrors.hasOwnProperty(field) )
            {
                continue;
            }

            // Clear previous errors
            this.loginFormErrors[field] = {};

            // Get the control
            const control = this.loginForm.get(field);

            if ( control && control.dirty && !control.valid )
            {
                this.loginFormErrors[field] = control.errors;
            }
        }
    }

    login(){
        this._store.dispatch(new Login({username: this.loginForm.value.username, password: this.loginForm.value.password}));
        
        
        // this.userAuthService
        //     .login(this.loginForm.value.username,this.loginForm.value.password)
        //     .subscribe(data=>{
        //         this.notificationsService.success('Connexion réussie!','Vous êtes maintenant connecté');
        //     },error => {
        //         this.notificationsService.error('Erreur connexion',error);
        //     },() => {
        //         this.router.navigate(['/']);
        //     });
    }

    
}
