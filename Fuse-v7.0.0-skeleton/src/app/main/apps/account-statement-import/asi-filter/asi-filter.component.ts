import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { AsiTableFilterState } from 'app/main/_ngxs/account-statement-import/asi-list-filter/asi-list-filter.state';
import { Observable } from 'rxjs';
import { FilterInfo } from 'app/main/_models/generics/filter.info.model';
import { FilterAsiTable } from 'app/main/_models/filters/account-statement-import.filter';
import { Pagination } from 'app/main/_models/pagination.model';
import { ChangeAsiTableFilter } from 'app/main/_ngxs/account-statement-import/asi-list-filter/asi-list-filter.action';

@Component({
  selector: 'asi-filter',
  templateUrl: './asi-filter.component.html',
  styleUrls: ['./asi-filter.component.scss']
})
export class AsiFilterComponent implements OnInit,AfterViewInit {
  @Select(AsiTableFilterState.get) asiTableFilter$: Observable<FilterInfo<FilterAsiTable>>;
  filter: FilterAsiTable;
  // selectedIndex: number;

  constructor(
    private _store : Store
  ) {
    // this.selectedIndex = 0;
  }

  ngOnInit() {
    this.asiTableFilter$.subscribe(asiTableFilter=>{
      this.filter = JSON.parse(JSON.stringify(asiTableFilter.filters));
      // this.filter = filter.filters;
    });
  }

  ngAfterViewInit() {

  }

  onTabChanged($event) {

    this.filter.selected.indexTabBank=$event.index;
    this.filter.selected.pagination=new Pagination();
    this.filter.selected.idBank = this.filter.banks[$event.index].id;

    this._store.dispatch(new ChangeAsiTableFilter(this.filter));

  }

}
