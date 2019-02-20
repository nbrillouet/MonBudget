import { NgModule } from '@angular/core';
import { SharedModule } from '../../../../../core/modules/shared.module';
import { RouterModule } from '@angular/router';

import { FuseLoginComponent } from './login.component';
import { LoginService } from './login.service';

const routes = [
    {
        path     : 'auth/login',
        component: FuseLoginComponent
    }
];

@NgModule({
    declarations: [
        FuseLoginComponent
    ],
    imports     : [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    providers:[
        LoginService
    ]
})

export class LoginModule
{

}
