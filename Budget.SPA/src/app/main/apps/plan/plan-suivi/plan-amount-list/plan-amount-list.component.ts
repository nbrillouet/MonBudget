import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatPaginator, MatSort, MatDialogRef } from '@angular/material';
import { PlanAmountFilter } from 'app/main/_models/filters/plan-amount.filter';
import { Store, Select } from '@ngxs/store';
import { ChangePlanAmountTableFilter } from 'app/main/_ngxs/plan/plan-amount-list/plan-amount-list.action';
import { PlanAmountTableState } from 'app/main/_ngxs/plan/plan-amount-list/plan-amount-list.state';
import { Observable } from 'rxjs';
import { TableInfo } from 'app/main/_models/generics/table-info.model';
import { AsTable } from 'app/main/_models/account-statement/account-statement-table.model';

@Component({
  selector: 'plan-amount-list',
  templateUrl: './plan-amount-list.component.html',
  styleUrls: ['./plan-amount-list.component.scss']
})
export class PlanAmountListComponent implements OnInit {
  @Select(PlanAmountTableState.get) planAmountTable$: Observable<TableInfo<AsTable,PlanAmountFilter>>;
  
  planAmountFilter: PlanAmountFilter;
  dataSource: AsTable[];
  displayedColumns = ['id','operationMethod','operationTypeFamily','operationType','operation','dateIntegration','amountOperation'];

  constructor(
    private _store: Store,
    private _dialogRef: MatDialogRef<PlanAmountListComponent>,
    @Inject(MAT_DIALOG_DATA) filter
  ) { 
    this.planAmountFilter = filter;
    console.log('this.planAmountFilter',this.planAmountFilter);
    this._store.dispatch(new ChangePlanAmountTableFilter(this.planAmountFilter));
  }

  ngOnInit() {
    this.planAmountTable$.subscribe(x=>{
      if(x.dataInfos.loadingInfo.loaded==true)
      {
        this.dataSource = x.dataInfos.datas;
      }
    });
  }

  close() {
    this._dialogRef.close();
  }


}
