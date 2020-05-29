import { DashboardHomeComponent } from "./dashboard-home/dashboard-home.component";
import { RouterModule } from "@angular/router";
import { FuseSharedModule } from "@fuse/shared.module";
import { AngularMaterialModule } from "app/angular-material.module";
import { FuseWidgetModule } from "@fuse/components";
import { NgModule } from "@angular/core";

const routes = [
    {
        path     : 'dashboard-home',
        component: DashboardHomeComponent,
        // resolve  : {
        //     academy: AcademyCoursesService
        // }
    }
    // ,
    // {
    //     path     : 'courses/:courseId/:courseSlug',
    //     component: AcademyCourseComponent,
    //     resolve  : {
    //         academy: AcademyCourseService
    //     }
    // },
    // {
    //     path      : '**',
    //     redirectTo: 'courses'
    // }
];

@NgModule({
    declarations: [
        DashboardHomeComponent
        // AcademyCourseComponent
    ],
    imports     : [
        FuseSharedModule,
        AngularMaterialModule,
        RouterModule.forChild(routes),
        FuseWidgetModule,
    ],
    providers   : [
        // AcademyCoursesService,
        // AcademyCourseService
    ]
})
export class DashboardModule
{
}