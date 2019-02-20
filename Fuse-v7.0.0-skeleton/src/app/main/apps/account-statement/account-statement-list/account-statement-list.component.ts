
import { Component, OnInit, Input, ViewChild, SimpleChanges, SimpleChange, ViewChildren, ViewContainerRef, ComponentFactory, ViewEncapsulation } from '@angular/core';
import { DataSource } from '@angular/cdk/table';
import { CollectionViewer } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import { MatPaginator, MatSort } from '@angular/material';
import { Router } from '@angular/router';
import { AccountStatementService } from '../account-statement.service';
import { AccountStatementListFilterService } from './account-statement-list-filter/account-statement-list-filter.service';
import { fuseAnimations } from '@fuse/animations';
import { FilterAccountStatement, AsFilter } from 'app/main/_models/Filters/filter-account-statement';
import { Store, Select } from '@ngxs/store';
import { LoadAsDatas } from 'app/main/_ngxs/account-statement/account-statement-list/account-statement-list.action';
import { AsListState } from 'app/main/_ngxs/account-statement/account-statement-list/account-statement-list.state';
import { AsTable } from 'app/main/_models/account-statement.model';
import { TableInfo } from 'app/main/_models/generics/table-info.model';


@Component({
  selector: 'account-statement-list',
  templateUrl: './account-statement-list.component.html',
  styleUrls: ['./account-statement-list.component.scss'],
  animations : fuseAnimations,
  encapsulation: ViewEncapsulation.None
})

export class AccountStatementListComponent implements OnInit {
  @Select(AsListState.get) tableInfo$: Observable<TableInfo<AsTable,AsFilter>>;

  
  @Input() idAccount: number;

  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  

  idAccountStatement: number;
  filter: AsFilter;
  selectedIndex:number = 0;
  dataSource : AccountStatementImportFileDataSource;
  displayedColumns = ['id','plan','operationMethod','operationTypeFamily','operationType','operation','dateIntegration','amountOperation','button'];
  
  isExpansionDetailRow = (i: number, row: any) => row.hasOwnProperty('detailRow');
  expandedElement: any;

  templateFor:string;
  loading: boolean=false;
  datas:any;

  constructor(
    private router: Router,
    private store: Store) {
     
      
      this.dataSource = new AccountStatementImportFileDataSource(this.store);

   }

  ngOnInit() {
    this.tableInfo$.subscribe(gridInfo => {
      if(this.filter != gridInfo.filter)
      {
        this.filter = gridInfo.filter;
    
        this.dataSource.load(this.filter);
      }
    });
  
  }

  ngOnChanges(changes: SimpleChanges) {

  }

  onPageChangeEvent(event) {
   
    this.filter.pagination.currentPage = this.paginator.pageIndex;
    this.loadPage();
  }
  
  onSortChangeEvent(event): void {
   
    this.filter.pagination.currentPage=0;
    this.loadPage();
  }

  onRowClick(data) {
   
  }

  loadPage() {

    this.filter.pagination.itemsPerPage = this.paginator.pageSize;
    this.filter.pagination.sortColumn = this.sort.active;
    this.filter.pagination.sortDirection = this.sort.direction;

    this.dataSource.load(this.filter);
  }

  hasFilterData(filter:string) {
    
    if(filter=='operation')
      return this.filter!=null && this.filter.operationSelected!=null && this.filter.operationSelected.length>0;
    if(filter=='operationMethod')
    {
      return this.filter!=null && this.filter.operationMethodSelected!=null && this.filter.operationMethodSelected.length>0;
    }
    if(filter=='operationTypeFamily')
      return this.filter!=null && this.filter.operationTypeFamilySelected!=null && this.filter.operationTypeFamilySelected.length>0;
    if(filter=='operationType')
      return this.filter!=null && this.filter.operationTypeSelected!=null && this.filter.operationTypeSelected.length>0;
    if(filter=='dateIntegration')
      return this.filter!=null && this.filter.dateIntegrationMin!=null;
    if(filter=='amount')
      return this.filter!=null && this.filter.amountMin!=null;
      
  }

  detail(data) {
   
    this.router.navigate(
      [`apps/account-statements/accounts/${this.idAccount}/account-statements/${data.id}/detail`]);
  }


}

export class AccountStatementImportFileDataSource extends DataSource<TableInfo<AsTable,AsFilter>> {

  @Select(AsListState.get) gridInfo$: Observable<TableInfo<AsTable,AsFilter>>;

  constructor (
    private store: Store
    ) {
    super();
  }

  connect(collectionViewer: CollectionViewer): Observable<any[]> {
    return this.gridInfo$.map(x=>x.dataInfos.datas);
  }

  disconnect(collectionViewer: CollectionViewer): void {
  }
  
  clear()
  {
  }

  load(filter: FilterAccountStatement) {
  
    if(filter.idAccount!=null)
    {

    
      
      this.store.dispatch(new LoadAsDatas(filter));

      // this.accountStatementService.get(filter)
      //   .subscribe((res: IPageList<IAsGrid>) => {
          
      //     let toto:any[]=[];
      //     res.datas.forEach(element => toto.push(element, { detailRow: true, element }));
      //     // this.accountStatementImportFilesSubject.next(toto);
      //     // this.paginationSubject.next(res.pagination);
      //     // this.loadingSubject.next(false);
   
          
      //   });
    }

    }
  }
