
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
  
  // @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  // @ViewChild(MatSort, { static: false }) sort: MatSort;


  // toto: B<FilterAsTable> = new B<FilterAsTable>(FilterAsTable);
  // rows: Row[];
  // columns: Column[];
  // pagination: Pagination;
  // onloading: boolean;
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
        {index:7, field: 'amountOperation',label:'montant',isSortable:true,width:{isFixed:false,value:-1},filter: {type:EnumFilterType.numberRange, datas: null, isEmpty: true},pipe:false,style: {type:EnumStyleType.numberUpDown,datas:{isoNumber:0}} },
        {index:8, field: 'button',label:'',isSortable:false,width:{isFixed:true,value:50},filter: {type:EnumFilterType.none, datas: null, isEmpty: true},pipe:false,style: {type:EnumStyleType.buttonIcon,datas:{icon:'more_horiz',tooltip:'détail'}} }
        ];

  constructor(
    private _router: Router,
    private _store: Store
    ) {

      // this.asTable$.subscribe(asifTable=>{
      //   this.onloading= (asifTable.loader['datas'] && asifTable.loader['datas'].loading);
      //   if(asifTable.loader['datas'] && asifTable.loader['datas'].loaded){
      //     // console.log('go');
      //     //this.rows=this.getMatTableFilterRows(asifTable);
      //   }
      // });

      this.asTableFilter$.subscribe(asTableFilter=>{
        // this.onloading= (asTableFilter.loader['filters'] && asTableFilter.loader['filters'].loading);
        if(asTableFilter.loader['filters'] && asTableFilter.loader['filters'].loaded) {
          // console.log('change filter',asTableFilter.filters);
          this.filterAs = asTableFilter.filters;
          // this.pagination=this.filterAs.selected.pagination;
          //this.columns=this.getMatTableFilterColumns(asTableFilter.filters);
        }
      });

   }

  ngOnInit() {
    // console.log('initRelevé');
  
  }
  onRowClick($event) {
    this._router.navigate(
      [`apps/account-statements/accounts/${this.filterAs.selected.idAccount}/account-statements/${$event.id}/detail`]);
  }

  viewDetail($event:Row) {
   
  }

  // applyFilterAmount(data) {
  //   this.filterAs.selected.amountMin = data.numberMin;
  //   this.filterAs.selected.amountMax = data.numberMax;
  //   this.applyFilter();
  // }

  // applyFilterOperationMethod(data) {
  //   this.filterAs.selected.operationMethods = data;
  //   this.applyFilter();
  // }

  // applyFilterOperationTypeFamily(data) {
  //   this.filterAs.selected.operationTypeFamilies = data;
  //   this.applyFilter();
  // }

  // applyFilterOperationType(data) {
  //   this.filterAs.selected.operationTypes = data;
  //   this.applyFilter();
  // }

  // applyFilterOperation(data) {
  //   this.filterAs.selected.operations = data;
  //   this.applyFilter();
  // }

  // applyFilterDateIntegration(data) {
  //   this.filterAs.selected.dateIntegrationMin= data.dateMin;
  //   this.filterAs.selected.dateIntegrationMax= data.dateMax;
  //   this.applyFilter();
  // }

  applyFilter(selected: FilterAsTableSelected) {
    // this.filterAs.selected.pagination.currentPage=0;
    // this._store.dispatch(new LoadAsTableFilter(this.filterAs.selected));
    console.log('----EMIT DONE', selected);
    
    this._store.dispatch(new ChangeAsTableFilter(selected));
    
  }


  // getMatTableFilterColumns(filterDatas) {
  //   let operationComboMultiple: FilterComboMultiple = null;
  //   let operationMethodComboMultiple: FilterComboMultiple = null;
  //   let operationTypeFamilyComboMultipleGroup: FilterComboMultipleGroup = null;
  //   let operationTypeComboMultipleGroup: FilterComboMultipleGroup = null;
  //   let filterDateIntegration: FilterDateRange = { placeholder:'Intégration',dateMin:null,dateMax:null }; 
  //   let filterNumberRange: FilterNumberRange ={ placeholder:'Montant',suffixIcon:'euro_symbol',numberMin:null,numberMax:null };

  //   if(filterDatas!=null) {

  //     operationComboMultiple = <FilterComboMultiple> { placeholder:'opération',combos:{list : filterDatas.operations, listSelected: filterDatas.selected.operations} };
  //     operationMethodComboMultiple= <FilterComboMultiple> { placeholder:'Méthode d opération',combos:{list : filterDatas.operationMethods, listSelected: filterDatas.selected.operationMethods} };
  //     operationTypeFamilyComboMultipleGroup = <FilterComboMultipleGroup> { placeholder:'Catégorie opération',combos:{list : filterDatas.operationTypeFamilies, listSelected: filterDatas.selected.operationTypeFamilies} };
  //     operationTypeComboMultipleGroup = <FilterComboMultipleGroup> { placeholder:'Type opération',combos:{list : filterDatas.operationTypes, listSelected: filterDatas.selected.operationTypes} };
  //     // filterDateIntegration = <FilterDateRange> { placeholder:'Intégration',dateMin:null,dateMax:null };
    
  //   }
    
    // let columns : Column[]= [];
    // columns = [ 
    //     {index:0, field: 'id',label:'id',isSortable:true,width:{isFixed:true,value:70},filter: {type:EnumFilterType.none, datas: null}, pipe: false,style:{type:EnumStyleType.label,datas:null }},
    //     {index:1, field: 'plan',label:'budget',isSortable:false,width:{isFixed:true,value:70},filter: {type:EnumFilterType.none, datas: null}, pipe: false,style:{type: EnumStyleType.dotDatas,datas:null}},
    //     {index:2, field: 'operationMethod',label:'Méthode opérations',isSortable:true,width:{isFixed:false,value:-1},filter: {type:EnumFilterType.comboMultiple, datas: operationMethodComboMultiple}, pipe: false,style:{type:EnumStyleType.label,datas:null}},
    //     {index:3, field: 'operationTypeFamily',label:'Catégorie operations',isSortable:true,width:{isFixed:false,value:-1},filter: {type:EnumFilterType.comboMultipleGroup, datas: operationTypeFamilyComboMultipleGroup},pipe:false,style:{type:EnumStyleType.label,datas:null}},
    //     {index:4, field: 'operationType',label:'Type operations',isSortable:true,width:{isFixed:false,value:-1},filter: {type:EnumFilterType.comboMultipleGroup, datas: operationTypeComboMultipleGroup},pipe:false,style:{type:EnumStyleType.label,datas:null}},
    //     {index:5, field: 'operation',label:'Operations',isSortable:true,width:{isFixed:false,value:-1},filter: {type:EnumFilterType.comboMultiple, datas: operationComboMultiple},pipe:false,style:{type:EnumStyleType.label,datas:null}},
    //     {index:6, field: 'dateIntegration',label:'Date int.',isSortable:true,width:{isFixed:false,value:-1}, filter: {type:EnumFilterType.dateRange, datas: filterDateIntegration},pipe:true,style:{type:EnumStyleType.label,datas:null} },
    //     {index:7, field: 'amountOperation',label:'montant',isSortable:true,width:{isFixed:false,value:-1},filter: {type:EnumFilterType.numberRange, datas: filterNumberRange},pipe:false,style: {type:EnumStyleType.numberUpDown,datas:{isoNumber:0}} },
    //     {index:8, field: 'button',label:'',isSortable:false,width:{isFixed:true,value:50},filter: {type:EnumFilterType.none, datas: null},pipe:false,style: {type:EnumStyleType.buttonIcon,datas:{icon:'more_horiz',tooltip:'détail'}} }
    //     ];
    // columns = [ 
    //       {index:0, field: 'id',label:'id',isSortable:true,width:{isFixed:true,value:70},filter: {type:EnumFilterType.none, datas: null}, pipe: false,style:{type:EnumStyleType.label,datas:null }},
    //       {index:1, field: 'plans',label:'budget',isSortable:false,width:{isFixed:true,value:70},filter: {type:EnumFilterType.none, datas: null}, pipe: false,style:{type: EnumStyleType.dotDatas,datas:null}},
    //       {index:2, field: 'operationMethod-label',label:'Méthode opérations',isSortable:true,width:{isFixed:false,value:-1},filter: {type:EnumFilterType.comboMultiple, datas: operationMethodComboMultiple}, pipe: false,style:{type:EnumStyleType.label,datas:null}},
    //       {index:3, field: 'operationTypeFamily-label',label:'Catégorie operations',isSortable:true,width:{isFixed:false,value:-1},filter: {type:EnumFilterType.comboMultipleGroup, datas: operationTypeFamilyComboMultipleGroup},pipe:false,style:{type:EnumStyleType.label,datas:null}},
    //       {index:4, field: 'operationType-label',label:'Type operations',isSortable:true,width:{isFixed:false,value:-1},filter: {type:EnumFilterType.comboMultipleGroup, datas: operationTypeComboMultipleGroup},pipe:false,style:{type:EnumStyleType.label,datas:null}},
    //       {index:5, field: 'operation-label',label:'Operations',isSortable:true,width:{isFixed:false,value:-1},filter: {type:EnumFilterType.comboMultiple, datas: operationComboMultiple},pipe:false,style:{type:EnumStyleType.label,datas:null}},
    //       {index:6, field: 'dateIntegration',label:'Date int.',isSortable:true,width:{isFixed:false,value:-1}, filter: {type:EnumFilterType.dateRange, datas: filterDateIntegration},pipe:true,style:{type:EnumStyleType.label,datas:null} },
    //       {index:7, field: 'amountOperation',label:'montant',isSortable:true,width:{isFixed:false,value:-1},filter: {type:EnumFilterType.numberRange, datas: filterNumberRange},pipe:false,style: {type:EnumStyleType.numberUpDown,datas:{isoNumber:0}} },
    //       {index:8, field: 'button',label:'',isSortable:false,width:{isFixed:true,value:50},filter: {type:EnumFilterType.none, datas: null},pipe:false,style: {type:EnumStyleType.buttonIcon,datas:{icon:'more_horiz',tooltip:'détail'}} }
    //       ];
  //   let columns : Column[]= [];
  //   columns = [ 
  //       {index:0, field: 'id',label:'id',isSortable:true,width:{isFixed:true,value:70},filter: {type:EnumFilterType.none, datas: null}, pipe: false,style:{type:EnumStyleType.label,datas:null }},
  //       {index:1, field: 'plans',label:'budget',isSortable:false,width:{isFixed:true,value:70},filter: {type:EnumFilterType.none, datas: null}, pipe: false,style:{type: EnumStyleType.dotDatas,datas:null}},
  //       {index:2, field: 'operationMethod-label',label:'Méthode opérations',isSortable:true,width:{isFixed:false,value:-1},filter: {type:EnumFilterType.comboMultiple, datas: operationMethodComboMultiple}, pipe: false,style:{type:EnumStyleType.label,datas:null}},
  //       {index:3, field: 'operationTypeFamily-label',label:'Catégorie operations',isSortable:true,width:{isFixed:false,value:-1},filter: {type:EnumFilterType.comboMultipleGroup, datas: operationTypeFamilyComboMultipleGroup},pipe:false,style:{type:EnumStyleType.label,datas:null}},
  //       {index:4, field: 'operationType-label',label:'Type operations',isSortable:true,width:{isFixed:false,value:-1},filter: {type:EnumFilterType.comboMultipleGroup, datas: operationTypeComboMultipleGroup},pipe:false,style:{type:EnumStyleType.label,datas:null}},
  //       {index:5, field: 'operation-label',label:'Operations',isSortable:true,width:{isFixed:false,value:-1},filter: {type:EnumFilterType.comboMultiple, datas: operationComboMultiple},pipe:false,style:{type:EnumStyleType.label,datas:null}},
  //       {index:6, field: 'dateIntegration',label:'Date int.',isSortable:true,width:{isFixed:false,value:-1}, filter: {type:EnumFilterType.dateRange, datas: filterDateIntegration},pipe:true,style:{type:EnumStyleType.label,datas:null} },
  //       {index:7, field: 'amountOperation',label:'montant',isSortable:true,width:{isFixed:false,value:-1},filter: {type:EnumFilterType.numberRange, datas: filterNumberRange},pipe:false,style: {type:EnumStyleType.numberUpDown,datas:{isoNumber:0}} },
  //       {index:8, field: 'button',label:'',isSortable:false,width:{isFixed:true,value:50},filter: {type:EnumFilterType.none, datas: null},pipe:false,style: {type:EnumStyleType.buttonIcon,datas:{icon:'more_horiz',tooltip:'détail'}} }
  //       ];
  //   return columns;
  // }


  // getMatTableFilterRows(datas: Datas<AsTable[]> ) {
  //   let tableRows: Row[] = [];
  //   // console.log('in it',datas.datas);
  //   // if (datas.loader['datas'] && datas.loader['datas'].loaded) {
  //     for (let data of datas.datas) {

  //       //creation de la ligne
  //       let tableRow = new Row();
  //       tableRow['id']= data.id;
  //       tableRow['plan']= data.plans;
  //       tableRow['operationMethod']=data.operationMethod.label;
  //       tableRow['operationTypeFamily']=data.operationTypeFamily.label;
  //       tableRow['operationType']=data.operationType.label;
  //       tableRow['operation']=data.operation.label;
  //       tableRow['dateIntegration']=data.dateIntegration;
  //       tableRow['amountOperation']=data.amountOperation;
  //       tableRow['button']=null;
  //       // console.log('tableRow',tableRow);
  //       //ajout d'une ligne
  //       tableRows.push(tableRow);
  //     }

  //   //  console.log('tableRows',tableRows);

  //     return tableRows;
  // }
  

  changeFilterEvent($event: FilterTable) {
    // switch($event.columnName) {
    //   case 'operation':
    //     this.applyFilterOperation($event.value);
    //     break;
    //   case 'operationMethod':
    //     this.applyFilterOperationMethod($event.value);
    //     break;
    //   case 'operationTypeFamily':
    //       this.applyFilterOperationTypeFamily($event.value);
    //       break;
    //   case 'operationType':
    //       this.applyFilterOperationType($event.value);
    //       break;
    //   case 'dateIntegration':
    //       this.applyFilterDateIntegration($event.value);
    //       break;
    //   case 'amountOperation':
    //       this.applyFilterAmount($event.value);
    //       break;

    }

    // this.applyFilter();
  }

  // changePaginationEvent($event){
  //   // this.filterAs.selected.pagination = $event;

  //   // this._store.dispatch(new ChangeAsTableFilter(this.filterAs.selected));
  // }

  // onRowClickEvent($event) {
  //   // console.log('row on component',$event);
  // }




