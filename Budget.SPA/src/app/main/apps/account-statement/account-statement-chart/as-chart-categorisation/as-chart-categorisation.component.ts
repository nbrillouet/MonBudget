import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';
import { AsChartState } from 'app/main/_ngxs/account-statement/account-statement-chart/account-statement-chart.state';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { DataInfo } from 'app/main/_models/generics/detail-info.model';
import { AsChart } from 'app/main/_models/account-statement/as-chart/as-chart.model';
import { WidgetCardChartPieSelect } from 'app/main/_models/chart/widget-card-chart-pie-select.model';

@Component({
  selector: 'as-chart-categorisation',
  templateUrl: './as-chart-categorisation.component.html',
  styleUrls: ['./as-chart-categorisation.component.scss'],
  animations   : fuseAnimations,
  encapsulation: ViewEncapsulation.None,
})
export class AsChartCategorisationComponent implements OnInit {
  @Select(AsChartState.get) asChart$: Observable<DataInfo<AsChart>>;

  asChartCategorisationSelectOperationMethod: WidgetCardChartPieSelect;
  asChartCategorisationSelectOperationTypeFamily: WidgetCardChartPieSelect;
  asChartCategorisationSelectOperationType: WidgetCardChartPieSelect;

  constructor() {
    this.asChart$.subscribe(x=>{
      this.asChartCategorisationSelectOperationMethod = x.datas.asChartCategorisation.debit.operationMethod;
      this.asChartCategorisationSelectOperationTypeFamily = x.datas.asChartCategorisation.debit.operationTypeFamily;
      this.asChartCategorisationSelectOperationType = x.datas.asChartCategorisation.debit.operationType;
    });
   }

  ngOnInit() {
  }

}
