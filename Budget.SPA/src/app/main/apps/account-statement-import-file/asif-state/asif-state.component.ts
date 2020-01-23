import { Component, OnInit, Input, SimpleChanges, OnChanges, ViewEncapsulation } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { AsifTableFilterState } from 'app/main/_ngxs/account-statement-import-file/asif-list-filter/asif-list-filter.state';
import { Observable } from 'rxjs';
import { FilterInfo } from 'app/main/_models/generics/filter.info.model';
import { FilterAsifTable } from 'app/main/_models/filters/account-statement-import-file.filter';
import { ChangeAsifTableFilter, LoadAsifTableFilter } from 'app/main/_ngxs/account-statement-import-file/asif-list-filter/asif-list-filter.action';
import { AsiService } from '../../account-statement-import/asi.service';


@Component({
  selector: 'asif-state',
  templateUrl: './asif-state.component.html',
  styleUrls: ['./asif-state.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AsifStateComponent implements OnInit {
  @Select(AsifTableFilterState.get) asifTableFilter$: Observable<FilterInfo<FilterAsifTable>>;
  
  filter: FilterAsifTable

  constructor(
    private _store: Store
  ) { 
    this.asifTableFilter$.subscribe(asifTableFilter=>{
      if(asifTableFilter.loader['datas'].loaded) {
        this.filter = asifTableFilter.filters;
      }
    })
  }

  ngOnInit() {
 
  }

  onTabChanged($event) {

    this.filter.selected.indexTabAsifState=$event.index;
    this.filter.selected.asifState = this.filter.asifStates[$event.index]; //.find(x=>x.id==$event.index);

    this._store.dispatch(new LoadAsifTableFilter(this.filter));

  }
 

}
