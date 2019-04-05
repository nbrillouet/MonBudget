import { Component, OnInit } from '@angular/core';
import { WidgetFullGraphLine } from './widget-full-graph-line.model';

@Component({
  selector: 'widget-full-graph-line',
  templateUrl: './widget-full-graph-line.component.html',
  styleUrls: ['./widget-full-graph-line.component.scss']
})
export class WidgetFullGraphLineComponent implements OnInit {
widget: any;

  constructor() { 
    this.widget = WidgetFullGraphLine.getEmptyGraph;
    this.widget.datasets = [
        {
            label: 'dépenses globales',
            data : [800, 100, 0,20, 0, 600, 50, 200, 0, 0, 20, 0,0,0,0,0,0,0,0,0,0,0,10,25,600,40,522,30,25,44],
            fill : 'start'
        }

    ];
    this.widget.labels = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    this.widget.labels = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30'];
    this.registerCustomChartJSPlugin();
  }

  ngOnInit() {
    

}

/**
     * Register a custom plugin
     */
    registerCustomChartJSPlugin()
    {
        (<any>window).Chart.plugins.register({
            afterDatasetsDraw: function (chart, easing) {
                // Only activate the plugin if it's made available
                // in the options
                if (
                    !chart.options.plugins.xLabelsOnTop ||
                    (chart.options.plugins.xLabelsOnTop && chart.options.plugins.xLabelsOnTop.active === false)
                )
                {
                    return;
                }

                // To only draw at the end of animation, check for easing === 1
                const ctx = chart.ctx;

                chart.data.datasets.forEach(function (dataset, i) {
                    const meta = chart.getDatasetMeta(i);
                    if ( !meta.hidden )
                    {
                        meta.data.forEach(function (element, index) {

                            // Draw the text in black, with the specified font
                            ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
                            const fontSize = 13;
                            const fontStyle = 'normal';
                            const fontFamily = 'Roboto, Helvetica Neue, Arial';
                            ctx.font = (<any>window).Chart.helpers.fontString(fontSize, fontStyle, fontFamily);

                            // Just naively convert to string for now
                            const dataString = dataset.data[index].toString() + 'k';

                            // Make sure alignment settings are correct
                            ctx.textAlign = 'center';
                            ctx.textBaseline = 'middle';
                            const padding = 15;
                            const startY = 24;
                            const position = element.tooltipPosition();
                            ctx.fillText(dataString, position.x, startY);

                            ctx.save();

                            ctx.beginPath();
                            ctx.setLineDash([5, 3]);
                            ctx.moveTo(position.x, startY + padding);
                            ctx.lineTo(position.x, position.y - padding);
                            ctx.strokeStyle = 'rgba(255,255,255,0.12)';
                            ctx.stroke();

                            ctx.restore();
                        });
                    }
                });
            }
        });
    }
}