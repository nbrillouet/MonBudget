import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { AsTableFilterState } from 'app/main/_ngxs/account-statement/account-statement-list-filter/account-statement-filter.state';
import { Observable } from 'rxjs';
import { FilterAsTable, FilterAsTableSelected } from 'app/main/_models/filters/account-statement.filter';
import { FilterInfo } from 'app/main/_models/generics/filter.info.model';
import { LoadAsInternalTransferCouple } from 'app/main/_ngxs/account-statement/account-statement-internal-transfer/as-internal-transfer.action';
import { AsInternalTransferState } from 'app/main/_ngxs/account-statement/account-statement-internal-transfer/as-internal-transfer.state';
import { DetailInfo } from 'app/main/_models/generics/detail-info.model';
import { AsTable } from 'app/main/_models/account-statement/account-statement-table.model';
import { InternalTransferCouple } from 'app/main/_models/account-statement/account-statement-internal-transfer.model';

@Component({
  selector: 'as-internal-transfer-main',
  templateUrl: './as-internal-transfer-main.component.html',
  styleUrls: ['./as-internal-transfer-main.component.scss']
})
export class AsInternalTransferMainComponent implements OnInit, OnChanges {
  @Select(AsTableFilterState.get) asTableFilter$: Observable<FilterInfo<FilterAsTable>>;
  @Select(AsInternalTransferState.get) asInternalTransferCouple$: Observable<DetailInfo<InternalTransferCouple[],FilterAsTableSelected>>;
  
  @Input() headerPanelVisible: boolean;
  
  constructor(
    private _store: Store
  ) {
      this.asTableFilter$.subscribe(asifTableFilter=>{
        if(asifTableFilter.loadingInfo.loaded) {

          this._store.dispatch(new LoadAsInternalTransferCouple(asifTableFilter.filters.selected));
        };
        });
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.headerPanelVisible = changes.headerPanelVisible.currentValue;
  }
}
