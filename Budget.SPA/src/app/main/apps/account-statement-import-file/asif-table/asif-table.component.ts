import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { fuseAnimations } from '@fuse/animations';
import { Select, Store } from '@ngxs/store';
import { AsifTable } from 'app/main/_models/account-statement-import/account-statement-import-file.model';
import { FilterSelected, FilterSelection } from 'app/main/_models/generics/filter.info.model';
import { Datas } from 'app/main/_models/generics/detail-info.model';
import { AsifTableFilterSelectedState } from 'app/main/_ngxs/account-statement-import-file/asif-table/asif-table-filter-selected/asif-table-filter-selected.state';
import { FilterAsifTableSelected, FilterAsifTableSelection } from 'app/main/_models/filters/account-statement-import-file.filter';
import { AsifTableState } from 'app/main/_ngxs/account-statement-import-file/asif-table/asif-table.state';
import { SynchronizeAsifTableFilterSelected } from 'app/main/_ngxs/account-statement-import-file/asif-table/asif-table-filter-selected/asif-table-filter-selected.action';
import { AsifTableFilterSelectionState } from 'app/main/_ngxs/account-statement-import-file/asif-table/asif-table-filter-selection/asif-table-filter-selection.state';
import { LoadAsifTableFilterSelection } from 'app/main/_ngxs/account-statement-import-file/asif-table/asif-table-filter-selection/asif-table-filter-selection.action';
import { AS_MODEL_2_COLUMNS } from 'app/main/_constants/mat-table-filter-column.const';
import { MatTableFilter } from '../../web-component/mat-table-filter/model/mat-table-filter.model';

@Component({
  selector: 'asif-table',
  templateUrl: './asif-table.component.html',
  styleUrls: ['./asif-table.component.scss'],
  animations : fuseAnimations
})
export class AsifTableComponent {
  @Select(AsifTableFilterSelectedState.get) asifTableFilterSelected$: Observable<FilterSelected<FilterAsifTableSelected>>;
  @Select(AsifTableFilterSelectionState.get) asifTableFilterSelection$: Observable<FilterSelection<FilterAsifTableSelection>>;
  @Select(AsifTableState.get) asifTable$: Observable<Datas<AsifTable[]>>;

  filterAsifSelected: FilterAsifTableSelected;
  matTableFilter: MatTableFilter = {
    columns: AS_MODEL_2_COLUMNS,
    filterSelection$: this.asifTableFilterSelection$,
    filterSelected$: this.asifTableFilterSelected$,
    table$: this.asifTable$,
    toolbar: null
  };

  // columns = AS_MODEL_2_COLUMNS;
    // Column[]=
    // [ 
    //   {index:0, field: 'id',label:'id',isSortable:true,width:{isFixed:true,value:70},filter: {type:EnumFilterType.none, datas: null, isEmpty: true}, pipe: false,style:{type:EnumStyleType.label,datas:null }},
    //   {index:1, field: 'operationMethod-label',label:'Méthode opérations',isSortable:true,width:{isFixed:false,value:-1},filter: {type:EnumFilterType.comboMultiple, datas: null, isEmpty: true}, pipe: false,style:{type:EnumStyleType.label,datas:null}},
    //   {index:2, field: 'operationTypeFamily-label',label:'Catégorie operations',isSortable:true,width:{isFixed:false,value:-1},filter: {type:EnumFilterType.comboMultipleGroup, datas: null, isEmpty: true},pipe:false,style:{type:EnumStyleType.label,datas:null}},
    //   {index:3, field: 'operationType-label',label:'Type operations',isSortable:true,width:{isFixed:false,value:-1},filter: {type:EnumFilterType.comboMultipleGroup, datas: null, isEmpty: true},pipe:false,style:{type:EnumStyleType.label,datas:null}},
    //   {index:4, field: 'operation-label',label:'Operations',isSortable:true,width:{isFixed:false,value:-1},filter: {type:EnumFilterType.comboMultiple, datas: null, isEmpty: true},pipe:false,style:{type:EnumStyleType.label,datas:null}},
    //   {index:5, field: 'dateIntegration',label:'Date int.',isSortable:true,width:{isFixed:false,value:-1}, filter: {type:EnumFilterType.dateRange, datas: null, isEmpty: true},pipe:true,style:{type:EnumStyleType.label,datas:null} },
    //   {index:6, field: 'amountOperation',label:'montant',isSortable:true,width:{isFixed:false,value:-1},filter: {type:EnumFilterType.numberRange, datas: null, isEmpty: true},pipe:false,style: {type:EnumStyleType.numberUpDown,datas:{isoNumber:0}} }
    // ];

  constructor(
    private _router: Router,
    private _store: Store
    ) {
      
      this.asifTableFilterSelected$.subscribe(selected=>{
        if(selected?.loader['filter-selected']?.loaded) {
          this.filterAsifSelected = selected.selected;
        }
      });

  }

  onRowClick($event) {
    this._router.navigate(
      [`apps/account-statement-imports/${this.filterAsifSelected.idImport}/account-statement-import-files/${$event.id}/detail`]);
  }

  applyFilterSelected(selected: FilterAsifTableSelected) {
    this._store.dispatch(new SynchronizeAsifTableFilterSelected(selected)); //ChangeAsifTableFilter(selected));
  }

  applyFilterSelection(selected: FilterAsifTableSelected) {

    this._store.dispatch(new LoadAsifTableFilterSelection(selected));
  }

  // @Select(AsifTableFilterState.get) asifTableFilter$: Observable<FilterInfo<FilterAsifTable>>;
  // @Select(AsifTableState.get) asifTable$: Observable<Datas<AsifTable[]>>;

  // // @Input() headerPanelIsVisible: boolean;

  // @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  // @ViewChild(MatSort, { static: false }) sort: MatSort;

  // dataSource = new MatTableDataSource<AsifTable>();// AsifDataSource;
  // filterAsif: FilterAsifTable;
  // displayedColumns = ['button2','id','operationMethod','operationTypeFamily','operationType','operation','dateIntegration','amountOperation','button'];

  // constructor(
  //   private router: Router,
  //   private _store: Store
  //   ) {

  //     this.asifTable$.subscribe(asifTable=>{
  //         this.dataSource.data = asifTable.datas; 
  //     });
      
  //  }

  // ngOnInit() {
  //   this.asifTableFilter$.subscribe(asifTableFilter=>{

  //     this.filterAsif = asifTableFilter.filters;

  //   });
  // }
  
  // // ngOnChanges(changes: SimpleChanges) {
  // //   this.headerPanelIsVisible = changes.headerPanelIsVisible.currentValue;
  // // }
 
  // async delay(ms: number) {
  //   await new Promise(resolve => setTimeout(()=>resolve(), ms)).then(()=>console.log("fired"));
  // }

  // onPageChangeEvent($event: MatPaginator) {
  //   this.filterAsif.selected.pagination.currentPage = this.paginator.pageIndex;
  //   this.loadPage();
  // }
  
  // onSortChangeEvent($event): void {
  //   this.filterAsif.selected.pagination.currentPage=0;
  //   this.loadPage();
  // }

  // loadPage() {
  //   this.filterAsif.selected.pagination.nbItemsPerPage = this.paginator.pageSize;
  //   this.filterAsif.selected.pagination.sortColumn = this.sort.active;
  //   this.filterAsif.selected.pagination.sortDirection = this.sort.direction;

  //   this._store.dispatch(new ChangeAsifTableFilter(this.filterAsif.selected));

  // }
 
  // detail(data) {
  //   this.router.navigate(
  //     [`apps/account-statement-imports/${this.filterAsif.selected.idImport}/account-statement-import-files/${data.id}/detail`]);
  // }

}


