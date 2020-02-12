
import { Component, OnInit, Input, ViewChild, ViewEncapsulation, SimpleChanges, OnChanges } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { fuseAnimations } from '@fuse/animations';
import { Store, Select } from '@ngxs/store';
import { AsTable } from 'app/main/_models/account-statement/account-statement-table.model';
import { AsTableFilterState } from 'app/main/_ngxs/account-statement/account-statement-list-filter/account-statement-filter.state';
import { AsTableState } from 'app/main/_ngxs/account-statement/account-statement-list/account-statement-list.state';
import { FilterInfo } from 'app/main/_models/generics/filter.info.model';
import { FilterAsTable, FilterAsTableSelected } from 'app/main/_models/filters/account-statement.filter';
import { ChangeAsTableFilter, LoadAsTableFilter } from 'app/main/_ngxs/account-statement/account-statement-list-filter/account-statement-filter.action';
import { FilterComboMultiple, FilterComboMultipleGroup } from 'app/main/_models/filters/mini-filter/combo-multiple.filters';
import { FilterDateRange } from 'app/main/_models/filters/mini-filter/date-range.filter';
import { Pagination } from 'app/main/_models/pagination.model';
import { FilterNumberRange } from 'app/main/_models/filters/mini-filter/number-range.filter';
import { Row, Column, FilterTable, EnumStyleType, EnumFilterType } from '../../web-component/mat-table-filter/model/mat-table-filter.model';
import { Datas } from 'app/main/_models/generics/detail-info.model';


@Component({
  selector: 'account-statement-list',
  templateUrl: './account-statement-list.component.html',
  styleUrls: ['./account-statement-list.component.scss'],
  animations : fuseAnimations,
  encapsulation: ViewEncapsulation.None
})

export class AccountStatementListComponent implements OnInit {
  @Select(AsTableFilterState.get) asTableFilter$: Observable<FilterInfo<FilterAsTable>>;
  @Select(AsTableState.get) asTable$: Observable<Datas<AsTable[]>>;
  
  filterAs: FilterAsTable = new FilterAsTable();
  columns : Column[]=
     [ 
        {index:0, field: 'id',label:'id',isSortable:true,width:{isFixed:true,value:70},filter: {type:EnumFilterType.none, datas: null, isEmpty: true}, pipe: false,style:{type:EnumStyleType.label,datas:null }},
        {index:1, field: 'plans',label:'budget',isSortable:false,width:{isFixed:true,value:70},filter: {type:EnumFilterType.none, datas: null, isEmpty: true}, pipe: false,style:{type: EnumStyleType.dotDatas,datas:null}},
        {index:2, field: 'operationMethod-label',label:'Méthode opérations',isSortable:true,width:{isFixed:false,value:-1},filter: {type:EnumFilterType.comboMultiple, datas: null, isEmpty: true}, pipe: false,style:{type:EnumStyleType.label,datas:null}},
        {index:3, field: 'operationTypeFamily-label',label:'Catégorie operations',isSortable:true,width:{isFixed:false,value:-1},filter: {type:EnumFilterType.comboMultipleGroup, datas: null, isEmpty: true},pipe:false,style:{type:EnumStyleType.label,datas:null}},
        {index:4, field: 'operationType-label',label:'Type operations',isSortable:true,width:{isFixed:false,value:-1},filter: {type:EnumFilterType.comboMultipleGroup, datas: null, isEmpty: true},pipe:false,style:{type:EnumStyleType.label,datas:null}},
        {index:5, field: 'operation-label',label:'Operations',isSortable:true,width:{isFixed:false,value:-1},filter: {type:EnumFilterType.comboMultiple, datas: null, isEmpty: true},pipe:false,style:{type:EnumStyleType.label,datas:null}},
        {index:6, field: 'dateIntegration',label:'Date int.',isSortable:true,width:{isFixed:false,value:-1}, filter: {type:EnumFilterType.dateRange, datas: null, isEmpty: true},pipe:true,style:{type:EnumStyleType.label,datas:null} },
        {index:7, field: 'amountOperation',label:'montant',isSortable:true,width:{isFixed:false,value:-1},filter: {type:EnumFilterType.numberRange, datas: null, isEmpty: true},pipe:false,style: {type:EnumStyleType.numberUpDown,datas:{isoNumber:0}} }
        ];

  constructor(
    private _router: Router,
    private _store: Store
    ) {

      this.asTableFilter$.subscribe(asTableFilter=>{
        // this.onloading= (asTableFilter.loader['filters'] && asTableFilter.loader['filters'].loading);
        if(asTableFilter.loader['filters'] && asTableFilter.loader['filters'].loaded) {
          this.filterAs = asTableFilter.filters;
          // this.pagination=this.filterAs.selected.pagination;
          //this.columns=this.getMatTableFilterColumns(asTableFilter.filters);
        }
      });

   }

  ngOnInit() {
  
  }

  onRowClick($event) {
    this._router.navigate(
      [`apps/account-statements/accounts/${this.filterAs.selected.idAccount}/account-statements/${$event.id}/detail`]);
  }

  applyFilter(selected: FilterAsTableSelected) {

    // if(selected.operationTypeFamily)
    this._store.dispatch(new ChangeAsTableFilter(selected));

    // this._store.dispatch(new ChangeAsTableFilter(selected));
    
  }


  
}





