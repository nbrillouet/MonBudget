import { NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";
import { RouterModule } from "@angular/router";
import { FuseSharedModule } from "@fuse/shared.module";
import { HomeNavigationComponent } from "./home-navigation/home-navigation.component";
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";

const routes = [
    {
        path     : 'home_old',
        component: HomeComponent
    }
];

@NgModule({
    declarations: [
        HomeComponent,
        HomeNavigationComponent
    ],
    imports     : [
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
    
        // AngularMaterialModule,
        RouterModule.forChild(routes),
        FuseSharedModule
        // AngularMaterialModule
    ]
})
export class HomeModule
{
}