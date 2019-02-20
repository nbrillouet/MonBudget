import { NgModule } from '@angular/core';
import { SharedModule } from '../../../core/modules/shared.module';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '../../../_guards/auth.guard';
import { DialogGuardComponent } from '../../../_guards/dialog-guard.component';
// import { UserDetailResolver } from './user/user-detail/user-detail.resolver';

const routes = [
    {
        path        : 'referential/users',
        loadChildren: './referential/user/user.module#UserModule',
        canActivate: [AuthGuard]
    },
    {
        path        : 'referential/accounts',
        loadChildren: './referential/account/account.module#AccountModule',
        canActivate: [AuthGuard]
    },
    {
        path        : 'import-statement-archives',
        loadChildren: './import-statement/import-statement.module#ImportStatementModule',
        canActivate: [AuthGuard]
    },
    {
        path        : 'account-statements',
        loadChildren: './account-statement/account-statement.module#AccountStatementModule',
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