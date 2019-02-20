import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { FuseConfigService } from '../../../../../core/services/config.service';
// import { fuseAnimations } from '../../../../../core/animations';
import { Router } from '@angular/router';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { NotificationsService } from 'angular2-notifications';
// import { AuthService } from '../../../../_services/auth.service';
import { FuseConfigService }    from '@fuse/services/config.service';
import { fuseAnimations }       from '@fuse/animations';
import { AuthService } from 'app/main/_services/auth.service';

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
        private fuseConfig: FuseConfigService,
        private formBuilder: FormBuilder,
        private authService : AuthService,
        private router: Router,
        private notif: NotificationsService
    )
    {
        // Configure the layout
        this.fuseConfig.config = {
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
//this.loginForm.value.
    login(){

        this.authService
            .login(this.loginForm.value.username,this.loginForm.value.password)
            .subscribe(data=>{

                this.notif.success('Connexion réussie!','Vous êtes maintenant connecté');
            },error => {
                this.notif.error('Erreur connexion',error);
            },() => {
                this.router.navigate(['/']);
            });
    }

    
}
