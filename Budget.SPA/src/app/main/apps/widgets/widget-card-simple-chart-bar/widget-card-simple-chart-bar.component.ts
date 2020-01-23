import { Component, OnInit, ViewEncapsulation, EventEmitter, Output, Input, ViewChild } from '@angular/core';
import * as shape from 'd3-shape';
import { fuseAnimations } from '@fuse/animations';
import { WidgetCardChartBarModel } from './widget-card-simple-chart-bar.model';
import { BehaviorSubject } from 'rxjs';
import { BaseChart, ChartValue } from 'app/main/_models/chart/base-chart.model';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'widget-card-simple-chart-bar',
  templateUrl: './widget-card-simple-chart-bar.component.html',
  styleUrls: ['./widget-card-simple-chart-bar.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations   : fuseAnimations
})
export class WidgetCardSimpleChartBarComponent implements OnInit {
  private _data = new BehaviorSubject<BaseChart>(new BaseChart());

    // change data to use getter and setter
    @Input()
    set data(value) {
        // set the latest value for _data BehaviorSubject
        this._data.next(value);
    };

    get data() {
        // get the latest value from _data BehaviorSubject
        return this._data.getValue();
    }
  
  widget: any = {};
  @Output() getCurrentMonthInfo = new EventEmitter<ChartValue>();
  showChart: boolean;
  
  // @ViewChild("baseChart") widget: BaseChartDirective;
  @ViewChild(BaseChartDirective, {static: false}) private _chart;

toto:boolean=false;
  constructor() {
    this.widget = WidgetCardChartBarModel.getEmptyGraph;
    // this.widget.title='montants estimés sur la période';

    // this.


  // this.widget.datasets = [
  //   {
  //   label: 'Conversion',
  //   data : [0, 428, 492, 471, 413, 344, 294,300,350,250,700,750]
  //   }
  // ];
  // this.widget.labels= ['Jan', 'Fev', 'mar', 'avr', 'mai', 'jui', 'jui','aou','sep','oct','nov','dec'];


   }

  ngOnInit() {
    this._data
      .subscribe(x => {


          this.widget = WidgetCardChartBarModel.getEmptyGraph;
          // this.widget.datasets=null;

          this.widget.datasets = x.dataSets;
          this.widget.labels = x.labels.map(x=>x.label);
          this.getScale(x.dataSets[0].data);
          //force refresh graph
          setTimeout(() => {
            this._chart.refresh();
        }, 10);

          
      });
  }

  onSelect($event) {
    if ($event.active.length > 0) {
      const chart = $event.active[0]._chart;
      const activePoints = chart.getElementAtEvent($event.event);
        if ( activePoints.length > 0) {
          // get the internal index of slice in pie chart
          const clickedElementIndex = activePoints[0]._index;
          const label = chart.data.labels[clickedElementIndex];
          // get value by index
          const value = chart.data.datasets[0].data[clickedElementIndex];
          let chartValue = <ChartValue>({
            xValue:label,
            yValue:value
          });

          this.getCurrentMonthInfo.emit(chartValue);
          
        }
       }
  }

  getScale(datas:number[]){
    let maxValue=Math.ceil(Math.max.apply(Math,datas)*1.5);
    let minValue=Math.ceil(maxValue/10);
    this.widget.options.scales.yAxes[0].ticks.min=0;
    // this.widget.options.scales.yAxes[0].ticks.max=minValue*11;
    this.widget.options.scales.yAxes[0].ticks.stepValue=minValue;
    // this.widget.options.scales.yAxes[0].ticks.max=maxValue;

  }

}
