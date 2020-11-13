import { MatHomeComponent } from "./mat-home.component";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatListModule } from "@angular/material/list";
import { MatSidenavModule } from "@angular/material/sidenav";
import { RouterModule } from "@angular/router";
import { FuseSharedModule } from "@fuse/shared.module";
import { NgModule } from "@angular/core";

const routes = [
    {
        path     : 'home_mat',
        component: MatHomeComponent
    }
];

@NgModule({
    declarations: [
        MatHomeComponent
    ],
    imports     : [
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatListModule,
        MatSidenavModule,
        RouterModule.forChild(routes),
        FuseSharedModule
    ]
})
export class MatHomeModule
{
}