import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { fuseAnimations } from '@fuse/animations';
import { AsiTable } from 'app/main/_models/account-statement-import/account-statement-import.model';
import { Select, Store } from '@ngxs/store';
import { FilterSelection, FilterSelected } from 'app/main/_models/generics/filter.info.model';
import { Datas } from 'app/main/_models/generics/detail-info.model';
import { AsiTableFilterSelectionState } from 'app/main/_ngxs/account-statement-import/asi-table/asi-table-filter-selection/asi-table-filter-selection.state';
import { AsiTableFilterSelectedState } from 'app/main/_ngxs/account-statement-import/asi-table/asi-table-filter-selected/asi-table-filter-selected.state';
import { FilterAsiTableSelection, FilterAsiTableSelected } from 'app/main/_models/filters/account-statement-import.filter';
import { AsiTableState } from 'app/main/_ngxs/account-statement-import/asi-table/asi-table.state';
import { LoadAsiTable } from 'app/main/_ngxs/account-statement-import/asi-table/asi-table.action';
import { ASI_COLUMNS } from 'app/main/_constants/mat-table-filter-column.const';
import { MatTableFilter } from '../../web-component/mat-table-filter/model/mat-table-filter.model';

@Component({
  selector: 'asi-table',
  templateUrl: './asi-table.component.html',
  styleUrls: ['./asi-table.component.scss'],
  animations : fuseAnimations
})

export class AsiTableComponent {
  @Select(AsiTableFilterSelectionState.get) asiTableFilterSelection$: Observable<FilterSelection<FilterAsiTableSelection>>;
  @Select(AsiTableFilterSelectedState.get) asiTableFilterSelected$: Observable<FilterSelected<FilterAsiTableSelected>>;
  @Select(AsiTableState.get) asiTable$: Observable<Datas<AsiTable[]>>;

  matTableFilter: MatTableFilter = {
    columns: ASI_COLUMNS,
    filterSelection$: this.asiTableFilterSelection$,
    filterSelected$: this.asiTableFilterSelected$,
    table$: this.asiTable$,
    toolbar: null
  };

  // columns = ASI_COLUMNS;
  // : Column[]=
  //   [ 
  //     {index:0, field: 'id',label:'id',isSortable:true,width:{isFixed:true,value:70},filter: {type:EnumFilterType.none, datas: null, isEmpty: true}, pipe: false,style:{type:EnumStyleType.label,datas:null }},
  //     {index:1, field: 'fileImport',label:'nom fichier',isSortable:true,width:{isFixed:false,value:-1},filter: {type:EnumFilterType.none, datas: null, isEmpty: true}, pipe: false,style:{type: EnumStyleType.label,datas:null}},
  //     {index:2, field: 'dateImport',label:'Date import',isSortable:true,width:{isFixed:true,value:100}, filter: {type:EnumFilterType.none, datas: null, isEmpty: true},pipe:true,style:{type:EnumStyleType.label,datas:null} }
  //   ];

  constructor(
    private _router: Router,
    private _store: Store,
    private _activatedRoute: ActivatedRoute,
    ) {
      
      // this.asiTableFilterSelected$.subscribe(filterAsi=>{
      //   if(filterAsi?.loader['filter-selected']?.loaded) {
      //     this.filterAsi = filterAsi.filters;
      //   }
      // });

  }

  onRowClick($event) {
    this._router.navigate([`${$event.id}/account-statement-import-files`], {relativeTo: this._activatedRoute});
  }

  applyFilterSelected(selected: FilterAsiTableSelected) {
    this._store.dispatch(new LoadAsiTable(selected));
  }

  applyFilterSelection(selected: FilterAsiTableSelected) {

  }



}

