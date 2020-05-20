import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { FilterAsTableSelected } from 'app/main/_models/filters/account-statement.filter';
import { FilterSelected } from 'app/main/_models/generics/filter.info.model';
import { LoadAsInternalTransferCouple } from 'app/main/_ngxs/account-statement/account-statement-internal-transfer/as-internal-transfer.action';
import { AsTableFilterSelectedState } from 'app/main/_ngxs/account-statement/as-table/as-table-filter-selected/as-table-filter-selected.state';
import { AsInternalTransferState } from 'app/main/_ngxs/account-statement/account-statement-internal-transfer/as-internal-transfer.state';
import { DatasFilter } from 'app/main/_models/generics/detail-info.model';
import { InternalTransferCouple } from 'app/main/_models/account-statement/account-statement-internal-transfer.model';

@Component({
  selector: 'as-internal-transfer-main',
  templateUrl: './as-internal-transfer-main.component.html',
  styleUrls: ['./as-internal-transfer-main.component.scss']
})
export class AsInternalTransferMainComponent implements OnInit {
  @Select(AsTableFilterSelectedState.get) asTableFilterSelected$: Observable<FilterSelected<FilterAsTableSelected>>;
  @Select(AsInternalTransferState.get) asInternalTransferCouple$: Observable<DatasFilter<InternalTransferCouple[],FilterAsTableSelected>>;
  
  constructor(
    private _store: Store
  ) {
      this.asTableFilterSelected$.subscribe(asifTableFilter=>{
        if(asifTableFilter?.loader['filter-selected']?.loaded) {
          this._store.dispatch(new LoadAsInternalTransferCouple(asifTableFilter.selected));
        };
      });
  }

  ngOnInit() {
  }

}
