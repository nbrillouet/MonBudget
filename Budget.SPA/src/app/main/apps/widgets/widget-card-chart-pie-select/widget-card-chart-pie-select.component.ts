import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { PieChart } from 'app/main/_models/chart/pie-chart.model';
import { WidgetCardChartPieSelect } from 'app/main/_models/chart/widget-card-chart-pie-select.model';

import { ISelect, SelectNameValue } from 'app/main/_models/generics/select.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatColors } from '@fuse/mat-colors';

@Component({
  selector: 'app-widget-card-chart-pie-select',
  templateUrl: './widget-card-chart-pie-select.component.html',
  styleUrls: ['./widget-card-chart-pie-select.component.scss']
})
export class WidgetCardChartPieSelectComponent implements OnInit, OnChanges {
  selectMultipleForm: FormGroup;
  isLoaded: boolean = false;
  colorRef : any;
  test: number;

  @Input() widget: WidgetCardChartPieSelect;

  constructor(
    private _formBuilder: FormBuilder
  ) {
    this.colorRef = MatColors.getMatColorByIndex('red');

    // this.widget.chart.scheme.domain = colorRef;
    // this.calculateMainChart(this.widget.data.ranges.listSelected);
    
    // let ranges = new ComboMultipleValue<number>();
    // ranges.list=[{id:0,name:'categorie 1',value:20},{id:1,name:'categorie 2',value:20},{id:1,name:'categorie 3',value:10},{id:1,name:'categorie 4',value:50}];
    // ranges.listSelected = [{id:0,name:'categorie 1',value:20},{id:1,name:'categorie 2',value:20}];
    
    // let mainchart = [{ name: 'categorie 1', value: 20 },{name:'categorie 2',value:30},{name:'categorie 3',value:10}];

    // let data = <Data><unknown>{ title: 'test', ranges: ranges, mainChart: mainchart }
    
    // this.widget= new WidgetCardChartPieSelected(data,colors);
    
    // this.widget.data = data;

    // this.widget.isLoaded=true;

   }

  ngOnInit() {
   
  }

  ngOnChanges(changes: SimpleChanges) {
 
    this.widget = changes.widget.currentValue;
    this.isLoaded = false;
    
    if(this.widget.data!=null) {
    
      this.widget.pieChart.scheme.domain = this.colorRef;
        this.calculateMainChart(this.widget.data.ranges.listSelected);

        this.selectMultipleForm = this._formBuilder.group({
            comboMultiple: [this.widget.data.ranges.listSelected]
          });
      
        this.selectMultipleForm.valueChanges.subscribe(val=>{
            this.calculateMainChart(val.comboMultiple);
          });


        this.isLoaded = true;
    }
    
    

    // if(this.widget!=null) {
    //   if(this.widget.isLoaded) {

    //     this.widget = null;
    //     this.widget= WidgetCardChartBarSkeleton.getEmptyGraph;
    //     this.widget.datasets = this.widgetCardChartBar.chart.dataSets;
    //     this.widget.labels = this.widgetCardChartBar.chart.labels.map(x=>x.label);
    //     this.widget.colors = this.widgetCardChartBar.chart.colors;
    //     this.widget.title = this.widgetCardChartBar.title;
    //     this.widget.options.scales.yAxes = this.widgetCardChartBar.chart.options.scales.yAxes;

    //     //force refresh graph
    //     setTimeout(() => {
    //       this._chart.refresh();
    //     }, 10);
     
    //     this.isLoaded=true;

    //   }
    // }
  }

  calculateMainChart(listSelected) {
    this.widget.data.ranges.listSelected = listSelected;
        //Calcul du restant (autres) selon la selection
        var sumSelected = this.widget.data.ranges.listSelected
            .map(x=>x.value)
            .reduce((sum,current) => sum + current);
        var sumTotal = this.widget.data.ranges.list
            .map(x=>x.selects.map(x=>x.value).reduce((sum,current) => sum + current))
            .reduce(function(acc, val) { return acc + val; }, 0);
   
        this.test = sumSelected;
        // if(sumTotal-sumSelected<100) {
        //     let otherAmount = <SelectNameValue<number>> {
        //         id : -1,
        //         name: 'autres',
        //         value: sumTotal-sumSelected
        //     }
        //     this.widget.data.ranges.listSelected.push(otherAmount);
        // }

        this.widget.data.mainChart =  this.widget.data.ranges.listSelected;
  }

  onSelect($event) {
   
  }

  compareObjects(o1: ISelect, o2: ISelect) {
    return o1 && o2 ? o1.id === o2.id : o1 === o2;
  }


}
