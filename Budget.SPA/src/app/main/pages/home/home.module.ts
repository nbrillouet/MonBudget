import { NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";
import { RouterModule } from "@angular/router";
import { FuseSharedModule } from "@fuse/shared.module";
import { HomeNavigationComponent } from "./home-navigation/home-navigation.component";
// import { AngularMaterialModule } from "app/angular-material.module";
// import * as material from '@angular/material';
import { MatToolbarModule, MatIconModule } from "@angular/material";
import { AngularMaterialModule } from "app/angular-material.module";

const routes = [
    {
        path     : 'home',
        component: HomeComponent
    }
];

@NgModule({
    declarations: [
        HomeComponent,
        HomeNavigationComponent
    ],
    imports     : [
        // MatToolbarModule,
        // MatIconModule,
        // AngularMaterialModule,
        RouterModule.forChild(routes),

        FuseSharedModule,
        AngularMaterialModule
    ]
})
export class HomeModule
{
}