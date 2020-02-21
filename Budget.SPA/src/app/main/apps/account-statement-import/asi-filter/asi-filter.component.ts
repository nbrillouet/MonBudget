import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { FilterSelected, FilterSelection } from 'app/main/_models/generics/filter.info.model';
import { AsiTableFilterSelectedState } from 'app/main/_ngxs/account-statement-import/asi-table/asi-table-filter-selected/asi-table-filter-selected.state';
import { FilterAsiTableSelected, FilterAsiTableSelection } from 'app/main/_models/filters/account-statement-import.filter';
import { AsiTableFilterSelectionState } from 'app/main/_ngxs/account-statement-import/asi-table/asi-table-filter-selection/asi-table-filter-selection.state';
import { LoadAsiTable } from 'app/main/_ngxs/account-statement-import/asi-table/asi-table.action';


@Component({
  selector: 'asi-filter',
  templateUrl: './asi-filter.component.html',
  styleUrls: ['./asi-filter.component.scss']
})
export class AsiFilterComponent implements OnInit {
  @Select(AsiTableFilterSelectedState.get) asiTableFilterSelected$: Observable<FilterSelected<FilterAsiTableSelected>>;
  @Select(AsiTableFilterSelectionState.get) asiTableFilterSelection$: Observable<FilterSelection<FilterAsiTableSelection>>;
  
  // @Select(AsiTableFilterState.get) asiTableFilter$: Observable<FilterInfo<FilterAsiTable>>;
  filterAsi: FilterAsiTableSelected;
  filterAsiSelection: FilterAsiTableSelection;
  
  constructor(
    private _store : Store
  ) {

  }

  ngOnInit() {
    this.asiTableFilterSelected$.subscribe(asiTableFilter=>{
      this.filterAsi = asiTableFilter.selected; // JSON.parse(JSON.stringify(asiTableFilter.filters));
    });

    this.asiTableFilterSelection$.subscribe(selection=>{
      this.filterAsiSelection = selection.selection
    });
  }

  onTabChanged($event) {
    this.filterAsi.indexTabBankAgency =$event.index;
    this.filterAsi.idBankAgency = this.filterAsiSelection.bankAgencies[$event.index].id; // this.filterAsi.bankAgencies[$event.index].id;

    this._store.dispatch(new LoadAsiTable(this.filterAsi));
  }

}
