import { Component, OnInit,OnDestroy, Input,Output,EventEmitter, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { fuseAnimations } from '@fuse/animations';
import { AsiTable } from 'app/main/_models/account-statement-import/account-statement-import.model';
import { AsiTableState } from 'app/main/_ngxs/account-statement-import/asi-list/asi-list.state';
import { Select, Store } from '@ngxs/store';
import { AsiTableFilterState } from 'app/main/_ngxs/account-statement-import/asi-list-filter/asi-list-filter.state';
import { FilterInfo } from 'app/main/_models/generics/filter.info.model';
import { FilterAsiTable, FilterAsiTableSelected } from 'app/main/_models/filters/account-statement-import.filter';
import { ChangeAsiTableFilter, LoadAsiTableFilter } from 'app/main/_ngxs/account-statement-import/asi-list-filter/asi-list-filter.action';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Datas } from 'app/main/_models/generics/detail-info.model';
import { Column, EnumFilterType, EnumStyleType } from '../../web-component/mat-table-filter/model/mat-table-filter.model';

@Component({
  selector: 'asi-list',
  templateUrl: './asi-list.component.html',
  styleUrls: ['./asi-list.component.scss'],
  animations : fuseAnimations
})

export class AsiListComponent {
  @Select(AsiTableState.get) asiTable$: Observable<Datas<AsiTable[]>>;
  @Select(AsiTableFilterState.get) asiTableFilter$: Observable<FilterInfo<FilterAsiTable>>;
  
  filterAsi: FilterAsiTable;
  columns : Column[]=
    [ 
      {index:0, field: 'id',label:'id',isSortable:true,width:{isFixed:true,value:70},filter: {type:EnumFilterType.none, datas: null, isEmpty: true}, pipe: false,style:{type:EnumStyleType.label,datas:null }},
      {index:1, field: 'fileImport',label:'nom fichier',isSortable:true,width:{isFixed:false,value:-1},filter: {type:EnumFilterType.none, datas: null, isEmpty: true}, pipe: false,style:{type: EnumStyleType.label,datas:null}},
      // {index:2, field: 'operationMethod-label',label:'Méthode opérations',isSortable:true,width:{isFixed:false,value:-1},filter: {type:EnumFilterType.comboMultiple, datas: null, isEmpty: true}, pipe: false,style:{type:EnumStyleType.label,datas:null}},
      // {index:3, field: 'operationTypeFamily-label',label:'Catégorie operations',isSortable:true,width:{isFixed:false,value:-1},filter: {type:EnumFilterType.comboMultipleGroup, datas: null, isEmpty: true},pipe:false,style:{type:EnumStyleType.label,datas:null}},
      // {index:4, field: 'operationType-label',label:'Type operations',isSortable:true,width:{isFixed:false,value:-1},filter: {type:EnumFilterType.comboMultipleGroup, datas: null, isEmpty: true},pipe:false,style:{type:EnumStyleType.label,datas:null}},
      // {index:5, field: 'operation-label',label:'Operations',isSortable:true,width:{isFixed:false,value:-1},filter: {type:EnumFilterType.comboMultiple, datas: null, isEmpty: true},pipe:false,style:{type:EnumStyleType.label,datas:null}},
      {index:2, field: 'dateImport',label:'Date import',isSortable:true,width:{isFixed:true,value:100}, filter: {type:EnumFilterType.none, datas: null, isEmpty: true},pipe:true,style:{type:EnumStyleType.label,datas:null} }
      // {index:7, field: 'amountOperation',label:'montant',isSortable:true,width:{isFixed:false,value:-1},filter: {type:EnumFilterType.numberRange, datas: null, isEmpty: true},pipe:false,style: {type:EnumStyleType.numberUpDown,datas:{isoNumber:0}} }
    ];

  constructor(
    private _router: Router,
    private _store: Store,
    private _activatedRoute: ActivatedRoute,
    ) {

      this.asiTableFilter$.subscribe(filterAsi=>{
        if(filterAsi.loader['filters'] && filterAsi.loader['filters'].loaded) {
          this.filterAsi = filterAsi.filters;
        }
      });

  }

  onRowClick($event) {
    this._router.navigate([`${$event.id}/account-statement-import-files`], {relativeTo: this._activatedRoute});
  }

  applyFilter(selected: FilterAsiTableSelected) {
   
    this._store.dispatch(new ChangeAsiTableFilter(selected));
    
  }

  // @Select(AsiTableState.get) asiTable$: Observable<Datas<AsiTable[]>>;
  // @Select(AsiTableFilterState.get) asiTableFilter$: Observable<FilterInfo<FilterAsiTable>>;
  
  // filterAsi: FilterAsiTable;

  // dataSource = new MatTableDataSource<AsiTable>();
  // displayedColumns =   ['checkbox','id', 'fileImport', 'dateImport' ];
  
  // @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  // @ViewChild(MatSort, { static: false }) sort: MatSort;

  // checkboxes: {};

  // constructor ( 
  //   private _store: Store,
  //   private activatedRoute: ActivatedRoute,
  //   public router: Router,) { 

  //     this.asiTable$.subscribe(asifTable=>{
  //         this.dataSource.data = asifTable.datas; 
  //     });
  // }


  // ngOnInit() {
  //   this.asiTableFilter$.subscribe(filter=>{
  //     this.filterAsi = filter.filters;
  //   });
  // }
 
  // onTabChanged($event) {
  //   this.filterAsi.selected.idBankAgency = this.filterAsi.bankAgencies[$event.index].id;

  //   this._store.dispatch(new LoadAsiTableFilter(this.filterAsi));

  // }
  
  // onPageChangeEvent($event) {
  //   this.filterAsi.selected.pagination.currentPage = this.paginator.pageIndex;
  //   this.loadPage();
  // }
  
  // onSortChangeEvent($event): void {

  //   this.filterAsi.selected.pagination.currentPage=0;
  //   this.loadPage();
  // }

  // onRowClick(row) {

  //   this.router.navigate([`${row.id}/account-statement-import-files`], {relativeTo: this.activatedRoute});

  // }

  // loadPage() {
  //   this.filterAsi.selected.pagination.nbItemsPerPage = this.paginator.pageSize;
  //   this.filterAsi.selected.pagination.sortColumn = this.sort.active;
  //   this.filterAsi.selected.pagination.sortDirection = this.sort.direction;

  //   this._store.dispatch(new ChangeAsiTableFilter(this.filterAsi.selected));
  // }

}

