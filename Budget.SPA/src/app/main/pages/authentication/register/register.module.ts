import { NgModule } from '@angular/core';
// import { SharedModule } from '../../../../../core/modules/shared.module';
import { RouterModule } from '@angular/router';
import { RegisterService } from './register.service';
import { FuseRegisterComponent } from './register.component';
import { FuseSharedModule } from '@fuse/shared.module';
import { MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatIconModule, MatInputModule } from '@angular/material';
import { AngularMaterialModule } from 'app/angular-material.module';

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
        MatButtonModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        // AngularMaterialModule,
        FuseSharedModule,
        RouterModule.forChild(routes)
    ],
    providers:[
        RegisterService
    ]
})

export class RegisterModule
{

}
