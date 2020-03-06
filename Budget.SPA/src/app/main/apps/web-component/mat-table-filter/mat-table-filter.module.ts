import { NgModule } from "@angular/core";
import { MatTableFilterComponent } from "./component/mat-table-filter.component";
import { ResizeObserverDirective } from "./directive/resize-observer.directive";
import { DateFormatPipe } from "./pipe/pipe-date";
import { CommonModule } from "@angular/common";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FuseThemeOptionsModule } from "@fuse/components";
import { AngularMaterialModule } from "app/angular-material.module";
import { ObserversModule } from "@angular/cdk/observers";
import { FuseDirectivesModule } from "@fuse/directives/directives";
import { MiniFilterModule } from "./component/mini-filter/mini-filter.module";
import { MatTableFilterToolbarComponent } from "./component/mat-table-filter-toolbar/mat-table-filter-toolbar.component";


@NgModule({
    imports: [
        MiniFilterModule,
        FuseThemeOptionsModule,
        CommonModule,
        FlexLayoutModule,
        AngularMaterialModule,
        ObserversModule,
        FuseDirectivesModule
    ],
    declarations: [
        MatTableFilterComponent,
        MatTableFilterToolbarComponent,
        ResizeObserverDirective,
        DateFormatPipe
    ],
    exports:      [
        MatTableFilterComponent
     ],
    providers : [
        DateFormatPipe
    ]
  })
  export class MatTableFilterModule { }