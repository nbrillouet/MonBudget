import { Component, OnInit } from '@angular/core';
import { WidgetCardChartBar } from './widget-card-chart-bar.model';

@Component({
  selector: 'widget-card-chart-bar',
  templateUrl: './widget-card-chart-bar.component.html',
  styleUrls: ['./widget-card-chart-bar.component.scss']
})
export class WidgetCardChartBarComponent implements OnInit {
widget: any;
isLoaded: boolean;

  constructor() {
    this.widget = WidgetCardChartBar.getEmptyGraph;
    this.widget.datasets = [
      {
      label: 'Conversion',
      data : [221, 428, 492, 471, 413, 344, 294,300,350,250,700,750]
      }
    ];
    this.widget.labels= ['Jan', 'Fev', 'mar', 'avr', 'mai', 'jui', 'jui','aou','sep','oct','nov','dec'];
    this.widget.conversion = {
      value   : 492,
      ofTarget: -13
    };
    this.isLoaded=true;

   }

  ngOnInit() {
  }

  chartClicked($event) {
    console.log('chart-event',$event);
    console.log("Index", $event.active[0]._index);
    console.log("Data" , $event.active[0]._chart.config.data.datasets[0].data[$event.active[0]._index]);
    console.log("Label" , $event.active[0]._chart.config.data.labels[$event.active[0]._index]);
  }

}
