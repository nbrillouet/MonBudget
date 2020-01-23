import { NgModule } from '@angular/core';
// import { SharedModule } from '../../../../../core/modules/shared.module';
import { RouterModule } from '@angular/router';
import { FuseLoginComponent } from './login.component';
import { LoginService } from './login.service';
import { FuseSharedModule } from '@fuse/shared.module';
import { MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatIconModule, MatInputModule } from '@angular/material';
import { AngularMaterialModule } from 'app/angular-material.module';
// import { MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatIconModule, MatInputModule } from '@angular/material';

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
        LoginService
    ]
})

export class LoginModule
{

}
