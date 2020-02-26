import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { PlanAmountFilter } from 'app/main/_models/filters/plan-amount.filter';
import { Store, Select } from '@ngxs/store';
import { ChangePlanAmountTableFilter } from 'app/main/_ngxs/plan/plan-amount-list/plan-amount-list.action';
import { PlanAmountTableState } from 'app/main/_ngxs/plan/plan-amount-list/plan-amount-list.state';
import { Observable } from 'rxjs';
import { AsTable } from 'app/main/_models/account-statement/account-statement-table.model';
import { DatasFilter } from 'app/main/_models/generics/detail-info.model';

@Component({
  selector: 'plan-amount-list',
  templateUrl: './plan-amount-list.component.html',
  styleUrls: ['./plan-amount-list.component.scss']
})
export class PlanAmountListComponent implements OnInit {
  @Select(PlanAmountTableState.get) planAmountTable$: Observable<DatasFilter<AsTable[],PlanAmountFilter>>;
  
  planAmountFilter: PlanAmountFilter;
  dataSource: AsTable[];
  displayedColumns = ['id','operationMethod','operationTypeFamily','operationType','operation','dateIntegration','amountOperation'];

  constructor(
    private _store: Store,
    private _dialogRef: MatDialogRef<PlanAmountListComponent>,
    @Inject(MAT_DIALOG_DATA) filter
  ) { 
    this.planAmountFilter = filter;
    this._store.dispatch(new ChangePlanAmountTableFilter(this.planAmountFilter));
  }

  ngOnInit() {
    console.log('plan');
    this.planAmountTable$.subscribe(x=>{
      if(x.loader['datas'].loaded==true)
      {
        this.dataSource = x.datas;
      }
    });
  }

  close() {
    this._dialogRef.close();
  }


}
