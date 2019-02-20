import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { IAccount } from 'app/main/_models/account.model';
import { IAccountStatementImport } from 'app/main/_models/account-statement-import.model';
import { IAsifState } from 'app/main/_models/account-statement-import-file.model';
import { Select, Store } from '@ngxs/store';
import { AsifTableFilterState } from 'app/main/_ngxs/account-statement-import-file/asif-list-filter/asif-list-filter.state';
import { Observable } from 'rxjs';
import { FilterInfo } from 'app/main/_models/generics/filter.info.model';
import { FilterAsifTable } from 'app/main/_models/filters/account-statement-import-file.filter';
import { ChangeAsifTableFilter } from 'app/main/_ngxs/account-statement-import-file/asif-list-filter/asif-list-filter.action';
import { AsiService } from '../../account-statement-import/asi.service';
// import { AsiService } from '../../account-statement-import.service';

@Component({
  selector: 'asif-state',
  templateUrl: './asif-state.component.html',
  styleUrls: ['./asif-state.component.scss']
})
export class AsifStateComponent implements OnInit {
  @Select(AsifTableFilterState.get) asifTableFilter$: Observable<FilterInfo<FilterAsifTable>>;
  
  filter: FilterAsifTable
  
  // asifStates : IAsifState[];
  // asifStateSelected : IAsifState;


  constructor(
    private _asiService: AsiService,
    private _store: Store
  ) { 
    this.asifTableFilter$.subscribe(asifTableFilter=>{
      //deep copy
      this.filter = JSON.parse(JSON.stringify(asifTableFilter.filters));
    })
  }

  ngOnInit() {
 
  }

  onTabChanged($event) {

    this.filter.selected.indexTabAsifState=$event.index;
    this.filter.selected.asifState = this.filter.asifStates[$event.index]; //.find(x=>x.id==$event.index);

    this._store.dispatch(new ChangeAsifTableFilter(this.filter));

  }

  

}
