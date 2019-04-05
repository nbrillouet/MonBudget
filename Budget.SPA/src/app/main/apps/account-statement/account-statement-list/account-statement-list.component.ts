
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
import { ChangeAsTableFilter } from 'app/main/_ngxs/account-statement/account-statement-list-filter/account-statement-filter.action';


@Component({
  selector: 'account-statement-list',
  templateUrl: './account-statement-list.component.html',
  styleUrls: ['./account-statement-list.component.scss'],
  animations : fuseAnimations,
  encapsulation: ViewEncapsulation.None
})

export class AccountStatementListComponent implements OnInit, OnChanges {
  @Select(AsTableFilterState.get) asTableFilter$: Observable<FilterInfo<FilterAsTable>>;
  @Select(AsTableState.get) asTable$: Observable<DataInfos<AsTable>>;
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  @Input() headerPanelVisible: boolean;

  dataSource = new MatTableDataSource<AsTable>();// AsifDataSource;
  filterAs: FilterAsTable;
  idAccountStatement: number;
  selectedIndex: number = 0;
  displayedColumns = ['id','plan','operationMethod','operationTypeFamily','operationType','operation','dateIntegration','amountOperation','button'];
  templateFor:string;

  constructor(
    private _router: Router,
    private _store: Store) {

      this.asTable$.subscribe(asifTable=>{
        this.dataSource.data = asifTable.datas; 
      });

   }

  ngOnInit() {
    this.asTableFilter$.subscribe(asTableFilter=>{
      this.filterAs = asTableFilter.filters;
    });
  
  }
  
  ngOnChanges(changes: SimpleChanges) {
    this.headerPanelVisible = changes.headerPanelVisible.currentValue;
  }

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
    if(!this.filterAs)
      return false;
    if(filter=='operation')
      return this.filterAs.selected!=null && this.filterAs.selected.operations!=null && this.filterAs.selected.operations.length>0;
    if(filter=='operationMethod')
    {
      return this.filterAs.selected!=null && this.filterAs.selected.operationMethods!=null && this.filterAs.selected.operationMethods.length>0;
    }
    if(filter=='operationTypeFamily')
      return this.filterAs.selected!=null && this.filterAs.selected.operationTypeFamilies!=null && this.filterAs.selected.operationTypeFamilies.length>0;
    if(filter=='operationType')
      return this.filterAs.selected!=null && this.filterAs.selected.operationTypes!=null && this.filterAs.selected.operationTypes.length>0;
    if(filter=='dateIntegration')
      return this.filterAs.selected!=null && this.filterAs.selected.dateIntegrationMin!=null;
    if(filter=='amount')
      return this.filterAs.selected!=null && this.filterAs.selected.amountMin!=null;
      
  }

  detail(data) {
   
    this._router.navigate(
      [`apps/account-statements/accounts/${this.filterAs.selected.idAccount}/account-statements/${data.id}/detail`]);
  }


}


