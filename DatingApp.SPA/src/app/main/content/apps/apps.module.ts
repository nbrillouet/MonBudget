import { NgModule } from '@angular/core';
import { SharedModule } from '../../../core/modules/shared.module';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '../../../_guards/auth.guard';
import { DialogGuardComponent } from '../../../_guards/dialog-guard.component';
// import { UserDetailResolver } from './user/user-detail/user-detail.resolver';

const routes = [
    {
        path        : 'users',
        loadChildren: './user/user.module#UserModule',
        canActivate: [AuthGuard]
    },
    {
        path        : 'importStatement',
        loadChildren: './importStatement/importStatement.module#ImportStatementModule',
        canActivate: [AuthGuard]
    }
    
];

@NgModule({
    imports     : [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    // providers : [ UserDetailResolver ],
    declarations: [DialogGuardComponent],
    entryComponents: [DialogGuardComponent]
})
export class FuseAppsModule
{
}