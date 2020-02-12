import { Component, OnInit, Input, SimpleChanges, OnChanges, ViewChild } from '@angular/core';
import { WidgetCardChartBarSkeleton } from './widget-card-chart-bar-skeleton.model';
import { WidgetCardChartBar } from 'app/main/_models/chart/widget-card-chart-bar.model';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'widget-card-chart-bar',
  templateUrl: './widget-card-chart-bar.component.html',
  styleUrls: ['./widget-card-chart-bar.component.scss']
})
export class WidgetCardChartBarComponent implements OnInit, OnChanges {
widget: any;
isLoaded: boolean;
@Input() widgetCardChartBar: WidgetCardChartBar;
@ViewChild(BaseChartDirective) private _chart;


  // widget8: any = {};


  constructor() {
  //   this.widget8 = {
  //     title    : 'Budget Distribution',
  //     mainChart: [
  //       {
  //           name : 'Wireframing',
  //           value: 12
  //       },
  //       {
  //           name : 'Design',
  //           value: 17
  //       },
  //       {
  //           name : 'Coding',
  //           value: 28
  //       },
  //       {
  //           name : 'Marketing',
  //           value: 25
  //       },
  //       {
  //           name : 'Extra',
  //           value: 13
  //       },
  //       {
  //         name : 'Extra',
  //         value: 2
  //     }
  //   ],

  //     legend       : false,
  //     explodeSlices: true,
  //     labels       : true,
  //     doughnut     : false,
  //     gradient     : true,
  //     scheme       : {
  //         domain: ['#f44336', '#9c27b0', '#03a9f4', '#e91e63', '#ffc107','#f44336','#f44336']
  //     },
  //     onSelect     : (ev) => {
  
  //     }
  // };

  }

  ngOnChanges(changes: SimpleChanges) {
    this.widgetCardChartBar = changes.widgetCardChartBar.currentValue;
    this.isLoaded = false;

    if(this.widgetCardChartBar!=null) {
      if(this.widgetCardChartBar.isLoaded) {

        this.widget = null;
        this.widget= WidgetCardChartBarSkeleton.getEmptyGraph;
        this.widget.datasets = this.widgetCardChartBar.chart.dataSets;
        this.widget.labels = this.widgetCardChartBar.chart.labels.map(x=>x.label);
        this.widget.colors = this.widgetCardChartBar.chart.colors;
        this.widget.title = this.widgetCardChartBar.title;
        this.widget.options.scales.yAxes = this.widgetCardChartBar.chart.options.scales.yAxes;

        //force refresh graph
        setTimeout(() => {
          this._chart.refresh();
        }, 10);
     
        this.isLoaded=true;

      }
    }




    
 
  }
  
  ngOnInit() {
  }

  chartClicked($event) {
    // console.log('chart-event',$event);
    // console.log("Index", $event.active[0]._index);
    // console.log("Data" , $event.active[0]._chart.config.data.datasets[0].data[$event.active[0]._index]);
    // console.log("Label" , $event.active[0]._chart.config.data.labels[$event.active[0]._index]);
  }


}
