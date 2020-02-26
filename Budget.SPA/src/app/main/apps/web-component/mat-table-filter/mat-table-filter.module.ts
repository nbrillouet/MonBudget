import { NgModule } from "@angular/core";
import { MatTableFilterComponent } from "./component/mat-table-filter.component";
import { ResizeObserverDirective } from "./directive/resize-observer.directive";
import { DateFormatPipe } from "./pipe/pipe-date";
import { MatTableFilterColResizeService } from "./service/mat-table-filter-col-resize.service";
import { MiniFilterModule } from "app/main/apps/web-component/mini-filter/mini-filter.module";
import { CommonModule } from "@angular/common";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FuseThemeOptionsModule } from "@fuse/components";
import { AngularMaterialModule } from "app/angular-material.module";
import { ObserversModule } from "@angular/cdk/observers";
import { FuseDirectivesModule } from "@fuse/directives/directives";

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
        ResizeObserverDirective,
        DateFormatPipe
    ],
    exports:      [
        MatTableFilterComponent
        // FlexLayoutModule
     ],
    providers : [
        DateFormatPipe,
        MatTableFilterColResizeService
  
    ]
  })
  export class MatTableFilterModule { }