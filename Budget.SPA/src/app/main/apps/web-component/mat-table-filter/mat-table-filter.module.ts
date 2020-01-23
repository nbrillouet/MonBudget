import { NgModule } from "@angular/core";
import { MatTableFilterComponent } from "./component/mat-table-filter.component";
import { ResizeObserverDirective } from "./directive/resize-observer.directive";
import { DateFormatPipe } from "./pipe/pipe-date";
import { MatTableFilterColResizeService } from "./service/mat-table-filter-col-resize.service";
import { MiniFilterModule } from "app/main/apps/web-component/mini-filter/mini-filter.module";
// import { MaterialModule } from "@fuse/material.module";
import { CommonModule } from "@angular/common";
import { FuseSharedModule } from "@fuse/shared.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FuseThemeOptionsModule } from "@fuse/components";

@NgModule({
    imports: [

    //   FuseSharedModule,
    //   RouterModule.forChild(routes),
    //   FuseWidgetModule,
    //   WidgetsModule,
    //   GMapModule,
        // FuseSharedModule,
        MiniFilterModule,
        FuseThemeOptionsModule,
        CommonModule,
        FlexLayoutModule
    //   NgxsModule.forFeature([
    //     AsTableFilterState,
    //     AsTableState,
    //     AsDetailState,
    //     AsSoldeState,
    //     AsChartState,
    //     AsInternalTransferState
    // ])
      
    ],
    declarations: [
        MatTableFilterComponent,
        ResizeObserverDirective,
        DateFormatPipe
    ],
    exports:      [
        MatTableFilterComponent,
        FlexLayoutModule

     ],
    providers : [
        DateFormatPipe,
        MatTableFilterColResizeService
  
    ]
  })
  export class MatTableFilterModule { }