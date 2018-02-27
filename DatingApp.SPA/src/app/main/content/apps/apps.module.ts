import { NgModule } from '@angular/core';
import { SharedModule } from '../../../core/modules/shared.module';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '../../../_guards/auth.guard';
import { UserDetailResolver } from './user/user-detail/user-detail.resolver';

const routes = [
    {
        path        : 'users',
        loadChildren: './user/user.module#UserModule',
        canActivate: [AuthGuard]
    }
    
];

@NgModule({
    imports     : [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    // providers : [ UserDetailResolver ],
    declarations: []
})
export class FuseAppsModule
{
}