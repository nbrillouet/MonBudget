import { NgModule } from '@angular/core';
import { FuseSharedModule } from '@fuse/shared.module';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'app/_guards/auth.guard';
import { AngularMaterialModule } from 'app/angular-material.module';

const routes = [
    {
        path        : 'referential/users',
        loadChildren: () => import('./referential/user/user.module').then(m => m.UserModule),
        canActivate: [AuthGuard]
    },
    {
        path        : 'referential/accounts',
        loadChildren: () => import('./referential/account/account.module').then(m => m.AccountModule),
        canActivate: [AuthGuard]
    },
    {
        path        : 'referential/operations',
        loadChildren: () => import('./referential/operations/operations.module').then(m => m.OperationsModule),
        canActivate: [AuthGuard]
    },
    {
        path        : 'account-statement-imports',
        loadChildren: () => import('./account-statement-import/asi.module').then(m => m.AsiModule),
        canActivate: [AuthGuard]
    },
    {
        path        : 'account-statements',
        loadChildren: () => import('./account-statement/account-statement.module').then(m => m.AccountStatementModule),
        canActivate: [AuthGuard]
    },
    {
        path        : 'plans',
        loadChildren: () => import('./plan/plan.module').then(m => m.PlanModule),
        canActivate: [AuthGuard]
    }
    
    
];

@NgModule({
    declarations: [
        
    ],
    imports     : [
        FuseSharedModule,
        AngularMaterialModule,
        RouterModule.forChild(routes)
    ],
    // providers : [ UserDetailResolver ],
    // declarations: [DialogGuardComponent],
    // entryComponents: [DialogGuardComponent]
})

export class FuseAppsModule
{
}