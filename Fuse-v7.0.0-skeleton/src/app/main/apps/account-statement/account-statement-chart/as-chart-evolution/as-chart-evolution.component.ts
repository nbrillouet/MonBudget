import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { AsChartState } from 'app/main/_ngxs/account-statement/account-statement-chart/account-statement-chart.state';
import { Observable } from 'rxjs';
import { DataInfo } from 'app/main/_models/generics/detail-info.model';
import { AsChart, AsChartEvolutionCustomOtfFilter, AsChartEvolutionCustomOtfFilterSelected } from 'app/main/_models/account-statement/account-statement-chart.model';
import { WidgetCardChartBar } from 'app/main/_models/chart/widget-card-chart-bar.model';
import { fuseAnimations } from '@fuse/animations';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ISelect } from 'app/main/_models/generics/select.model';
import { UpdateAsChartEvolutionCustomOtfFilter } from 'app/main/_ngxs/account-statement/account-statement-chart/account-statement-chart.action';

@Component({
  selector: 'as-chart-evolution',
  templateUrl: './as-chart-evolution.component.html',
  styleUrls: ['./as-chart-evolution.component.scss'],
  animations   : fuseAnimations
})

export class AsChartEvolutionComponent implements OnInit {
  @Select(AsChartState.get) asChart$: Observable<DataInfo<AsChart>>;

  customOtfForm: FormGroup;

  asChartEvolutionBrutDebit: WidgetCardChartBar;
  asChartEvolutionBrutCredit: WidgetCardChartBar;
  asChartEvolutionBrutBalance: WidgetCardChartBar;

  asChartEvolutionNoIntTransferDebit: WidgetCardChartBar;
  asChartEvolutionNoIntTransferCredit: WidgetCardChartBar;
  asChartEvolutionNoIntTransferBalance: WidgetCardChartBar;

  asChartEvolutionCustomOtfs: WidgetCardChartBar[];
  asChartEvolutionCustomOtfFilter : AsChartEvolutionCustomOtfFilter;
  
  constructor(
    private _formBuilder: FormBuilder,
    private _store: Store
  ) {
    this.asChart$.subscribe(x=>{

      this.asChartEvolutionBrutDebit = x.datas.asChartEvolution.brut.debit;
      this.asChartEvolutionBrutCredit = x.datas.asChartEvolution.brut.credit;
      this.asChartEvolutionBrutBalance = x.datas.asChartEvolution.brut.balance;

      this.asChartEvolutionNoIntTransferDebit = x.datas.asChartEvolution.noIntTransfer.debit;
      this.asChartEvolutionNoIntTransferCredit = x.datas.asChartEvolution.noIntTransfer.credit;
      this.asChartEvolutionNoIntTransferBalance = x.datas.asChartEvolution.noIntTransfer.balance;
    
      this.asChartEvolutionCustomOtfs = x.datas.asChartEvolution.customOtfs.widgetCardChartBars;
      this.asChartEvolutionCustomOtfFilter = x.datas.asChartEvolution.customOtfs.filter;
      
      console.log('this.asChartEvolutionCustomOtfFilter.operationTypeFamiliesSelected',this.asChartEvolutionCustomOtfFilter.selected.operationTypeFamilies);
      this.customOtfForm = this._formBuilder.group({
        operationTypeFamilies: [this.asChartEvolutionCustomOtfFilter.selected.operationTypeFamilies]
      });

      this.onChanges();
    });
   }

  ngOnInit() {
    

  }

  onChanges() {
    this.customOtfForm.get('operationTypeFamilies').valueChanges
        .subscribe(val => {
          console.log('changeOperationTypeFamily',val);
          
          let filter = <AsChartEvolutionCustomOtfFilterSelected> {
            idAccount : this.asChartEvolutionCustomOtfFilter.selected.idAccount,
            idUser: this.asChartEvolutionCustomOtfFilter.selected.idUser,
            monthYear: this.asChartEvolutionCustomOtfFilter.selected.monthYear,
            operationTypeFamilies:val
          };
          this._store.dispatch(new UpdateAsChartEvolutionCustomOtfFilter(filter));
          
        });
  }

  change($event) {

    // console.log(this.customOtfForm.get('operationTypeFamilies').value);
    //this.asChartEvolutionCustomOtfFilter.operationTypeFamiliesSelected = this.customOtfForm.get('operationTypeFamilies').value;
    //this._store.dispatch(new UpdateAsChartEvolutionCustomOtfFilter(this.asChartEvolutionCustomOtfFilter));

  }

  compareObjects(o1: ISelect, o2: ISelect) {
    return o1 && o2 ? o1.id === o2.id : o1 === o2;
  }

}
