
import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { fuseAnimations } from '@fuse/animations';
import { Store, Select } from '@ngxs/store';
import { AsTable } from 'app/main/_models/account-statement/account-statement-table.model';
import { FilterSelection, FilterSelected } from 'app/main/_models/generics/filter.info.model';
import { FilterAsTableSelected, FilterAsTableSelection } from 'app/main/_models/filters/account-statement.filter';
import { Datas } from 'app/main/_models/generics/detail-info.model';
import { AsTableState } from 'app/main/_ngxs/account-statement/as-table/as-table.state';
import { AsTableFilterSelectionState } from 'app/main/_ngxs/account-statement/as-table/as-table-filter-selection/as-table-filter-selection.state';
import { AsTableFilterSelectedState } from 'app/main/_ngxs/account-statement/as-table/as-table-filter-selected/as-table-filter-selected.state';
import { LoadAsTable } from 'app/main/_ngxs/account-statement/as-table/as-table.action';
import { LoadAsTableFilterSelection } from 'app/main/_ngxs/account-statement/as-table/as-table-filter-selection/as-table-filter-selection.action';
import { Subscription } from 'rxjs';
import { AS_MODEL_1_COLUMNS } from 'app/main/_constants/mat-table-filter-column.const';
import { MatTableFilter } from '../../web-component/mat-table-filter/model/mat-table-filter.model';


@Component({
  selector: 'account-statement-table',
  templateUrl: './account-statement-table.component.html',
  styleUrls: ['./account-statement-table.component.scss'],
  animations : fuseAnimations,
  encapsulation: ViewEncapsulation.None
})

export class AccountStatementTableComponent implements OnInit, OnDestroy {

  @Select(AsTableFilterSelectionState.get) asTableFilterSelection$: Observable<FilterSelection<FilterAsTableSelection>>;
  @Select(AsTableFilterSelectedState.get) asTableFilterSelected$: Observable<FilterSelected<FilterAsTableSelected>>;
  @Select(AsTableState.get) asTable$: Observable<Datas<AsTable[]>>;
  
  asTableFilterSelection$$: Subscription;
  asTableFilterSelected$$: Subscription;
  asTable$$: Subscription;

  filterAsSelected: FilterAsTableSelected = new FilterAsTableSelected();
  matTableFilter: MatTableFilter = {
    columns: AS_MODEL_1_COLUMNS,
    filterSelection$: this.asTableFilterSelection$,
    filterSelected$: this.asTableFilterSelected$,
    table$: this.asTable$,
    toolbar: null
  };

  // columns = AS_MODEL_1_COLUMNS;

  // Column[]=
  //   [ 
  //     {index:0, field: 'id',label:'id',isSortable:true,width:{isFixed:true,value:70},filter: {type:EnumFilterType.none, datas: null, isEmpty: true}, pipe: false,style:{type:EnumStyleType.label,datas:null }},
  //     {index:1, field: 'plans',label:'budget',isSortable:false,width:{isFixed:true,value:70},filter: {type:EnumFilterType.none, datas: null, isEmpty: true}, pipe: false,style:{type: EnumStyleType.dotDatas,datas:null}},
  //     {index:2, field: 'operationMethod-label',label:'Méthode opérations',isSortable:true,width:{isFixed:false,value:-1},filter: {type:EnumFilterType.comboMultiple, datas: null, isEmpty: true}, pipe: false,style:{type:EnumStyleType.label,datas:null}},
  //     {index:3, field: 'operationTypeFamily-label',label:'Catégorie operations',isSortable:true,width:{isFixed:false,value:-1},filter: {type:EnumFilterType.comboMultipleGroup, datas: null, isEmpty: true},pipe:false,style:{type:EnumStyleType.label,datas:null}},
  //     {index:4, field: 'operationType-label',label:'Type operations',isSortable:true,width:{isFixed:false,value:-1},filter: {type:EnumFilterType.comboMultipleGroup, datas: null, isEmpty: true},pipe:false,style:{type:EnumStyleType.label,datas:null}},
  //     {index:5, field: 'operation-label',label:'Operations',isSortable:true,width:{isFixed:false,value:-1},filter: {type:EnumFilterType.comboMultiple, datas: null, isEmpty: true},pipe:false,style:{type:EnumStyleType.label,datas:null}},
  //     {index:6, field: 'dateIntegration',label:'Date int.',isSortable:true,width:{isFixed:false,value:-1}, filter: {type:EnumFilterType.dateRange, datas: null, isEmpty: true},pipe:true,style:{type:EnumStyleType.label,datas:null} },
  //     {index:7, field: 'amountOperation',label:'montant',isSortable:true,width:{isFixed:false,value:-1},filter: {type:EnumFilterType.numberRange, datas: null, isEmpty: true},pipe:false,style: {type:EnumStyleType.numberUpDown,datas:{isoNumber:0}} }
  //   ];

  constructor(
    private _router: Router,
    private _store: Store
    ) {
      this._store.dispatch(new LoadAsTableFilterSelection(this.filterAsSelected));

      this.asTableFilterSelected$$ = this.asTableFilterSelected$
        .subscribe(selected => {
          if(selected?.loader['filter-selected']?.loaded) {
            this.filterAsSelected = selected.selected;
          }
        });

   }

  ngOnInit() {
  
  }

  ngOnDestroy(): void {
    this.asTableFilterSelected$$.unsubscribe();
  }

  onRowClick($event) {
    this._router.navigate(
      [`apps/account-statements/accounts/${this.filterAsSelected.idAccount}/account-statements/${$event.id}/detail`]);
  }

  applyFilterSelected(selected: FilterAsTableSelected) {
    this._store.dispatch(new LoadAsTable(selected));
  }

  applyFilterSelection(selected: FilterAsTableSelected) {
    this._store.dispatch(new LoadAsTableFilterSelection(selected));
  }

}





