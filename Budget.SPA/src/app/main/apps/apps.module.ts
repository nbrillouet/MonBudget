import { NgModule } from '@angular/core';
import { FuseSharedModule } from '@fuse/shared.module';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'app/_guards/auth.guard';

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
        path        : 'referential/operations',
        loadChildren: './referential/operations/operations.module#OperationsModule',
        canActivate: [AuthGuard]
    },
    {
        path        : 'account-statement-imports',
        loadChildren: './account-statement-import/asi.module#AsiModule',
        canActivate: [AuthGuard]
    },
    {
        path        : 'account-statements',
        loadChildren: './account-statement/account-statement.module#AccountStatementModule',
        canActivate: [AuthGuard]
    },
    {
        path        : 'plans',
        loadChildren: './plan/plan.module#PlanModule',
        canActivate: [AuthGuard]
    }
    
];

@NgModule({
    declarations: [
        
    ],
    imports     : [
        FuseSharedModule,
        RouterModule.forChild(routes)
    ],
    // providers : [ UserDetailResolver ],
    // declarations: [DialogGuardComponent],
    // entryComponents: [DialogGuardComponent]
})

export class FuseAppsModule
{
}