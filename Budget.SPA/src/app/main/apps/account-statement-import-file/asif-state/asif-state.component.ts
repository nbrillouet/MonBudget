import { Component, OnInit, Input, SimpleChanges, OnChanges, ViewEncapsulation } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { FilterSelected, FilterSelection } from 'app/main/_models/generics/filter.info.model';
import { FilterAsifTableSelected, FilterAsifTableSelection } from 'app/main/_models/filters/account-statement-import-file.filter';
import { SynchronizeAsifTableFilterSelected } from 'app/main/_ngxs/account-statement-import-file/asif-table/asif-table-filter-selected/asif-table-filter-selected.action';
import { AsifTableFilterSelectedState } from 'app/main/_ngxs/account-statement-import-file/asif-table/asif-table-filter-selected/asif-table-filter-selected.state';
import { AsifTableFilterSelectionState } from 'app/main/_ngxs/account-statement-import-file/asif-table/asif-table-filter-selection/asif-table-filter-selection.state';


@Component({
  selector: 'asif-state',
  templateUrl: './asif-state.component.html',
  styleUrls: ['./asif-state.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AsifStateComponent implements OnInit {
  @Select(AsifTableFilterSelectedState.get) asifTableFilterSelected$: Observable<FilterSelected<FilterAsifTableSelected>>;
  @Select(AsifTableFilterSelectionState.get) asifTableFilterSelection$: Observable<FilterSelection<FilterAsifTableSelection>>;
  
  filterAsifSelected: FilterAsifTableSelected;
  filterAsifSelection: FilterAsifTableSelection;

  constructor(
    private _store: Store
  ) { 

    this.asifTableFilterSelected$.subscribe(selected=>{
      if(selected?.loader['filter-selected']?.loaded
        && (!this.filterAsifSelected || selected?.selected?.account!=this.filterAsifSelected?.account)) {
          this.filterAsifSelected = selected.selected;
      }
    });

    this.asifTableFilterSelection$.subscribe(selection=>{
      if(selection?.loader['filter-selection']?.loaded  && !this.filterAsifSelection) {
        this.filterAsifSelection = selection.selection;
      }
    });
  }

  ngOnInit() {
 
  }

  onTabChanged($event) {
    debugger;
    this.filterAsifSelected.indexTabAsifState=$event.index;
    this.filterAsifSelected.asifState = this.filterAsifSelection.asifState[$event.index]; //.find(x=>x.id==$event.index);

    this._store.dispatch(new SynchronizeAsifTableFilterSelected(this.filterAsifSelected));
  }
 

}
