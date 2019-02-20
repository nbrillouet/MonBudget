import { NgModule } from '@angular/core';
import { SharedModule } from '../../../../../core/modules/shared.module';
import { RouterModule } from '@angular/router';
import { RegisterService } from './register.service';
import { FuseRegisterComponent } from './register.component';

const routes = [
    {
        path     : 'auth/register',
        component: FuseRegisterComponent
    }
];

@NgModule({
    declarations: [
        FuseRegisterComponent
    ],
    imports     : [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    providers:[
        RegisterService
    ]
})

export class RegisterModule
{

}
