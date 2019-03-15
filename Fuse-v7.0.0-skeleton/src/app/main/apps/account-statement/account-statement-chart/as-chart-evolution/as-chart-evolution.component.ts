import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { AsChartState } from 'app/main/_ngxs/account-statement/account-statement-chart/account-statement-chart.state';
import { Observable } from 'rxjs';
import { DataInfo } from 'app/main/_models/generics/detail-info.model';
import { AsChart } from 'app/main/_models/account-statement/account-statement-chart.model';
import { WidgetCardChartBar } from 'app/main/_models/chart/widget-card-chart-bar.model';
import { fuseAnimations } from '@fuse/animations';

@Component({
  selector: 'as-chart-evolution',
  templateUrl: './as-chart-evolution.component.html',
  styleUrls: ['./as-chart-evolution.component.scss'],
  animations   : fuseAnimations
})

export class AsChartEvolutionComponent implements OnInit {
  @Select(AsChartState.get) asChart$: Observable<DataInfo<AsChart>>;

  asChartEvolutionBrutDebit: WidgetCardChartBar;
  asChartEvolutionBrutCredit: WidgetCardChartBar;
  asChartEvolutionBrutBalance: WidgetCardChartBar;

  asChartEvolutionNoIntTransferDebit: WidgetCardChartBar;
  asChartEvolutionNoIntTransferCredit: WidgetCardChartBar;
  asChartEvolutionNoIntTransferBalance: WidgetCardChartBar;

  constructor() {
    this.asChart$.subscribe(x=>{

      this.asChartEvolutionBrutDebit = x.datas.asChartEvolution.brut.debit;
      this.asChartEvolutionBrutCredit = x.datas.asChartEvolution.brut.credit;
      this.asChartEvolutionBrutBalance = x.datas.asChartEvolution.brut.balance;

      this.asChartEvolutionNoIntTransferDebit = x.datas.asChartEvolution.noIntTransfer.debit;
      this.asChartEvolutionNoIntTransferCredit = x.datas.asChartEvolution.noIntTransfer.credit;
      this.asChartEvolutionNoIntTransferBalance = x.datas.asChartEvolution.noIntTransfer.balance;
    });
   }

  ngOnInit() {
  }

}
