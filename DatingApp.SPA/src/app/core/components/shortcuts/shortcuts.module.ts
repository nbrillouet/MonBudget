import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FuseShortcutsComponent } from './shortcuts.component';
import { SharedModule } from '../../modules/shared.module';
import { UserService } from '../../../main/content/apps/user/user.service';

@NgModule({
    declarations: [
        FuseShortcutsComponent
    ],
    imports     : [
        SharedModule,
        RouterModule
    ],
    exports     : [
        FuseShortcutsComponent
    ],
    providers : [
        UserService
    ]
})
export class FuseShortcutsModule
{
}
