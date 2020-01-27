import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyPipePipe } from './nu-widget-card-flip/my-pipe.pipe';
import { WidgetCardChartBarComponent } from './widget-card-chart-bar/widget-card-chart-bar.component';
import { FuseSharedModule } from '@fuse/shared.module';
import { FuseWidgetModule } from '@fuse/components';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartsModule } from 'ng2-charts';
import { WidgetCardSimpleChartBarComponent } from './widget-card-simple-chart-bar/widget-card-simple-chart-bar.component';
import { WidgetCardChartPieSelectComponent } from './widget-card-chart-pie-select/widget-card-chart-pie-select.component';
import { AngularMaterialModule } from 'app/angular-material.module';

@NgModule({
    declarations: [
        WidgetCardSimpleChartBarComponent,
        WidgetCardChartBarComponent,
        WidgetCardChartPieSelectComponent,

        MyPipePipe],
    imports     : [
        CommonModule,
        FuseSharedModule,
        AngularMaterialModule,
        FuseWidgetModule,
        NgxChartsModule,
        ChartsModule      
    ],
    exports     : [
        WidgetCardSimpleChartBarComponent,
        WidgetCardChartBarComponent,
        WidgetCardChartPieSelectComponent
        
    ]
})

export class WidgetsModule
{
}