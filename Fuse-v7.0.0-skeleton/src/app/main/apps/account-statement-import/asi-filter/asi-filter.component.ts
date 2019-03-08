import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { AsiTableFilterState } from 'app/main/_ngxs/account-statement-import/asi-list-filter/asi-list-filter.state';
import { Observable } from 'rxjs';
import { FilterInfo } from 'app/main/_models/generics/filter.info.model';
import { FilterAsiTable } from 'app/main/_models/filters/account-statement-import.filter';
import { Pagination } from 'app/main/_models/pagination.model';
import { ChangeAsiTableFilter, LoadAsiTableFilter } from 'app/main/_ngxs/account-statement-import/asi-list-filter/asi-list-filter.action';

@Component({
  selector: 'asi-filter',
  templateUrl: './asi-filter.component.html',
  styleUrls: ['./asi-filter.component.scss']
})
export class AsiFilterComponent implements OnInit {
  @Select(AsiTableFilterState.get) asiTableFilter$: Observable<FilterInfo<FilterAsiTable>>;
  filterAsi: FilterAsiTable;

  constructor(
    private _store : Store
  ) {
    // this.selectedIndex = 0;
  }

  ngOnInit() {
    this.asiTableFilter$.subscribe(asiTableFilter=>{
      this.filterAsi = asiTableFilter.filters; // JSON.parse(JSON.stringify(asiTableFilter.filters));
    });
  }

  onTabChanged($event) {

    this.filterAsi.selected.indexTabBank=$event.index;
    this.filterAsi.selected.idBank = this.filterAsi.banks[$event.index].id;
    console.log('this.filterAsi.selected',this.filterAsi.selected);
    this._store.dispatch(new LoadAsiTableFilter(this.filterAsi));


  }

}
