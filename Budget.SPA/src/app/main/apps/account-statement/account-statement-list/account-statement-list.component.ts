
import { Component, OnInit, Input, ViewChild, ViewEncapsulation, SimpleChanges, OnChanges } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { fuseAnimations } from '@fuse/animations';
import { Store, Select } from '@ngxs/store';
import { AsTable } from 'app/main/_models/account-statement/account-statement-table.model';
import { DataInfos } from 'app/main/_models/generics/table-info.model';
import { AsTableFilterState } from 'app/main/_ngxs/account-statement/account-statement-list-filter/account-statement-filter.state';
import { AsTableState } from 'app/main/_ngxs/account-statement/account-statement-list/account-statement-list.state';
import { FilterInfo } from 'app/main/_models/generics/filter.info.model';
import { FilterAsTable } from 'app/main/_models/filters/account-statement.filter';
import { ChangeAsTableFilter, LoadAsTableFilter } from 'app/main/_ngxs/account-statement/account-statement-list-filter/account-statement-filter.action';
import { FilterAmount } from 'app/main/_models/filters/mini-filter/amount.filter';
import { FilterComboMultiple, FilterComboMultipleGroup } from 'app/main/_models/filters/mini-filter/combo-multiple.filters';
import { FilterDateRange } from 'app/main/_models/filters/mini-filter/date-range.filter';


@Component({
  selector: 'account-statement-list',
  templateUrl: './account-statement-list.component.html',
  styleUrls: ['./account-statement-list.component.scss'],
  animations : fuseAnimations,
  encapsulation: ViewEncapsulation.None
})

export class AccountStatementListComponent implements OnInit {
  @Select(AsTableFilterState.get) asTableFilter$: Observable<FilterInfo<FilterAsTable>>;
  @Select(AsTableState.get) asTable$: Observable<DataInfos<AsTable>>;
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  // @Input() headerPanelIsVisible: boolean;

  dataSource = new MatTableDataSource<AsTable>();// AsifDataSource;
  filterAs: FilterAsTable;
  idAccountStatement: number;
  selectedIndex: number = 0;
  displayedColumns = ['id','plan','operationMethod','operationTypeFamily','operationType','operation','dateIntegration','amountOperation','button'];
  templateFor:string;

  filterAmount: FilterAmount ={ placeholder:'',amountMin:null,amountMax:null };
  filterOperationMethod: FilterComboMultiple= { placeholder:'Méthode opération',combos:null };
  filterOperationTypeFamily: FilterComboMultipleGroup = { placeholder:'Catégorie opération',combos:null };
  filterOperationType: FilterComboMultipleGroup = { placeholder:'Type opération',combos:null };
  filterOperation: FilterComboMultiple = { placeholder:'Opération',combos:null };
  filterDateIntegration: FilterDateRange = { placeholder:'Intégration',dateMin:null,dateMax:null };

  constructor(
    private _router: Router,
    private _store: Store) {

      this.asTable$.subscribe(asifTable=>{
        this.dataSource.data = asifTable.datas; 
      });

   }

  ngOnInit() {
    this.asTableFilter$.subscribe(asTableFilter=>{
      if(asTableFilter.loadingInfo.loaded) {
        this.filterAs = asTableFilter.filters;

        this.filterOperationMethod.combos = {list : asTableFilter.filters.operationMethods, listSelected: asTableFilter.filters.selected.operationMethods};
        this.filterOperationTypeFamily.combos = {list : asTableFilter.filters.operationTypeFamilies, listSelected: asTableFilter.filters.selected.operationTypeFamilies};
        this.filterOperationType.combos = {list : asTableFilter.filters.operationTypes, listSelected: asTableFilter.filters.selected.operationTypes};
        this.filterOperation.combos={list : asTableFilter.filters.operations, listSelected: asTableFilter.filters.selected.operations};
        
      }
    });
  
  }
  
  // ngOnChanges(changes: SimpleChanges) {
  //   this.headerPanelIsVisible = changes.headerPanelIsVisible.currentValue;
  // }

  onPageChangeEvent(event) {
    this.filterAs.selected.pagination.currentPage = this.paginator.pageIndex;
    this.loadPage();
  }
  
  onSortChangeEvent(event): void {
    this.filterAs.selected.pagination.currentPage=0;
    this.loadPage();
  }

  loadPage() {

    this.filterAs.selected.pagination.nbItemsPerPage = this.paginator.pageSize;
    this.filterAs.selected.pagination.sortColumn = this.sort.active;
    this.filterAs.selected.pagination.sortDirection = this.sort.direction;

    this._store.dispatch(new ChangeAsTableFilter(this.filterAs.selected));
  }

  hasFilterData(filter:string) {
    if(!this.filterAs && !this.filterAs.selected)
      return false;
    if(filter=='operation')
      return this.filterAs.selected.operations!=null && this.filterAs.selected.operations.length>0;
    if(filter=='operationMethod')
      return this.filterAs.selected.operationMethods!=null && this.filterAs.selected.operationMethods.length>0;
    if(filter=='operationTypeFamily')
      return this.filterAs.selected.operationTypeFamilies!=null && this.filterAs.selected.operationTypeFamilies.length>0;
    if(filter=='operationType')
      return this.filterAs.selected.operationTypes!=null && this.filterAs.selected.operationTypes.length>0;
    if(filter=='dateIntegration')
      return (this.filterAs.selected.dateIntegrationMin!=null || this.filterAs.selected.dateIntegrationMax);
    if(filter=='amount')
      return (this.filterAs.selected.amountMin !=null || this.filterAs.selected.amountMax !=null) ;
      
  }

  detail(data) {
   
    this._router.navigate(
      [`apps/account-statements/accounts/${this.filterAs.selected.idAccount}/account-statements/${data.id}/detail`]);
  }

  applyFilterAmount(data) {
    this.filterAs.selected.amountMin = data.amountMin;
    this.filterAs.selected.amountMax = data.amountMax;
    this.applyFilter();
  }

  applyFilterOperationMethod(data) {
    this.filterAs.selected.operationMethods = data;
    this.applyFilter();
  }

  applyFilterOperationTypeFamily(data) {
    this.filterAs.selected.operationTypeFamilies = data;
    this.applyFilter();
  }

  applyFilterOperationType(data) {
    this.filterAs.selected.operationTypes = data;
    this.applyFilter();
  }

  applyFilterOperation(data) {
    this.filterAs.selected.operations = data;
    this.applyFilter();
  }

  applyFilterDateIntegration(data) {

    this.filterAs.selected.dateIntegrationMin= data.dateMin;
    this.filterAs.selected.dateIntegrationMax= data.dateMax;
    this.applyFilter();
  }

  applyFilter() {
    this.filterAs.selected.pagination.currentPage=0;
    this._store.dispatch(new LoadAsTableFilter(this.filterAs));
  }

}


