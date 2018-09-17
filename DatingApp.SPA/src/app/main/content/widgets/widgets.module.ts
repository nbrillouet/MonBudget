import { NgModule } from '@angular/core';
import { SharedModule } from '../../../core/modules/shared.module';
import { WidgetCardFlipComponent } from './widget-card-flip/widget-card-flip.component';
import { FuseWidgetModule } from '../../../core/components/widget/widget.module';
import { CommonModule } from '../../../../../node_modules/@angular/common';
import { MyPipePipe } from './widget-card-flip/my-pipe.pipe';
import { WidgetFullGraphLineComponent } from './widget-full-graph-line/widget-full-graph-line.component';
import { WidgetCardChartBarComponent } from './widget-card-chart-bar/widget-card-chart-bar.component';

@NgModule({
    declarations: [
        WidgetCardFlipComponent,
        WidgetFullGraphLineComponent,
        WidgetCardChartBarComponent,
        MyPipePipe],
    imports     : [
        CommonModule,
        SharedModule,
        FuseWidgetModule      
    ],
    exports     : [
        WidgetCardFlipComponent,
        WidgetFullGraphLineComponent,
        WidgetCardChartBarComponent
    ]
})

export class WidgetsModule
{
}