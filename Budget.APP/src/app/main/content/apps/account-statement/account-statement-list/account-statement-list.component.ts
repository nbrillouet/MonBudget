
import { Component, OnInit, Input, ViewChild, SimpleChanges, SimpleChange, ViewChildren, ViewContainerRef, ComponentFactory } from '@angular/core';
import { DataSource } from '@angular/cdk/table';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { CollectionViewer } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import { MatPaginator, MatSort } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { fuseAnimations } from '../../../../../core/animations';
import { IAccount } from '../../../../_models/account.model';
import { IAsifState, IAsifGrid } from '../../../../_models/account-statement-import-file.model';
import { Pagination, PaginatedResult, IPagination, IPageList } from '../../../../_models/pagination.model';
import { ImportStatementService } from '../../import-statement/import-statement.service';
import { ImportStatementFileService } from '../../import-statement/import-statement-file/import-statement-file.service';
import { AccountStatementService } from '../account-statement.service';
import { AccountStatementListFilterService } from './account-statement-list-filter/account-statement-list-filter.service';
import { FilterAccountStatement } from '../../../../_models/Filters/FilterAccountStatement';
import { IAsGrid } from '../../../../_models/account-statement.model';
// import { Store, Select } from '@ngxs/store';
// import { AsGridState } from '../account-statement.state';


@Component({
  selector: 'account-statement-list',
  templateUrl: './account-statement-list.component.html',
  styleUrls: ['./account-statement-list.component.scss'],
  animations : fuseAnimations
})

export class AccountStatementListComponent implements OnInit {
  // @Select(AsGridState.loadAsGrid) asGrid: Observable<IPageList<IAsGrid>>;
  
  @Input() idAccount: number;
  // @Input() account: IAccount;
  // @Input() asifState: IAsifState;

  // @ViewChild('filterOperationMethod') triggerMenu;
  // @ViewChild('filterOperation') triggerMenu;
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  // expandedRow: number;
  // @ViewChildren('currentRow', { read: ViewContainerRef }) containers;

  // asifStates : IAsifState[];
  // asifStateSelected : IAsifState;
  // accountSelected: IAccount;
  idAccountStatement: number;
  
  filter: FilterAccountStatement;
  // pagination: Pagination;
  selectedIndex:number = 0;
  dataSource : AccountStatementImportFileDataSource;
  displayedColumns = ['button2','id','operationMethod','operation','operationTypeFamily','operationType','dateIntegration','amountOperation','button'];
  
  isExpansionDetailRow = (i: number, row: any) => row.hasOwnProperty('detailRow');
  expandedElement: any;

  templateFor:string;
  loading: boolean=false;
  datas:any;
  // col1:string = 'col1';

  constructor(

    private accountStatementService: AccountStatementService,
    private router: Router,
    private accountStatementListFilterService:AccountStatementListFilterService) {
      console.log('CONSTRUCTOR');
      
      this.dataSource = new AccountStatementImportFileDataSource(this.accountStatementService);

      this.accountStatementListFilterService.filter
      .subscribe(filter => {
        this.filter = filter;
        console.log('FFFFFFF',filter);
        this.dataSource.load(this.filter);
      });

      // this.dataSource.pagination$
      // .subscribe(res=>{
      //   if(res!=null)
      //     console.log('retour pagination', res);
      //     this.filter.pagination = res;
      // });

      // this.dataSource.loading$
      // .subscribe(res=>{
      //     console.log('this.dataSource.loading$', res);
      //     this.loading = res;
      // });
   }

  ngOnInit() {
    
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges.idAccount');
    // if(!this.dataSource) {
      
    // }
    if(changes.idAccount)
    {
      console.log('ON CHANGE');
      this.filter.idAccount = changes.idAccount.currentValue;

      this.filter.pagination = <IPagination> {
              currentPage: 1,
              itemsPerPage: 15,
              sortColumn: 'id',
              sortDirection: 'asc'  };

          console.log('on change',this.filter);
      this.accountStatementListFilterService.changeFilter(this.filter);
      // this.idAccount = changes.idAccount.currentValue;
      // this.pagination = new Pagination();
      // this.dataSource.load(this.idAccount,this.pagination);
      // console.log('changes.account',this.idAccount);
      // console.log('expandedElement',this.expandedElement);
    }

  }

  onPageChangeEvent(event) {
    this.filter.pagination.currentPage = this.paginator.pageIndex + 1;
    this.loadPage();
  }
  
  onSortChangeEvent(event): void {
    this.filter.pagination.currentPage=1;
    this.loadPage();
  }

  onRowClick(data) {
    console.log('rowclick');
  }

  loadPage() {

    this.filter.pagination.itemsPerPage = this.paginator.pageSize;
    this.filter.pagination.sortColumn = this.sort.active;
    this.filter.pagination.sortDirection = this.sort.direction;
    
    this.accountStatementListFilterService.changeFilter(this.filter);
    console.log('loadPage',this.filter);
    // this.dataSource.load(this.filter);
  }

  // load(filter: FilterAccountStatement) {
  //   if(filter.idAccount!=null)
  //   {
      
  //     console.log('filter in datasource',filter);
  //     // this.loadingSubject.next(true);
      
  //     this.accountStatementService.get(filter)
  //       .subscribe((res: IPageList<IAsGrid>) => {
          
  //         let toto:any[]=[];
  //         res.datas.forEach(element => toto.push(element, { detailRow: true, element }));
  //         this.datas = toto;
  //         this.filter.pagination=res.pagination;
  //         // this.accountStatementImportFilesSubject.next(toto);
  //         // this.paginationSubject.next(res.pagination);
  //         // this.loadingSubject.next(false);
  //         console.log('REEEEEEESSS',res);
          
  //       });
  //   }

  //   }


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
    console.log('asifRow',data);
    this.router.navigate(
      [`apps/account-statements/accounts/${this.idAccount}/account-statements/${data.id}/detail`]);
  }


}

export class AccountStatementImportFileDataSource extends DataSource<IAsGrid> {
  private accountStatementImportFilesSubject = new BehaviorSubject<IAsGrid[]>([]);
  private paginationSubject = new BehaviorSubject<Pagination>(null);
  private loadingSubject = new BehaviorSubject<boolean>(false);

  public loading$ = this.loadingSubject.asObservable();
  public pagination$ = this.paginationSubject.asObservable();

  constructor (private accountStatementService: AccountStatementService,
    ) {
    super();
  }

  connect(collectionViewer: CollectionViewer): Observable<IAsGrid[]> {
    return this.accountStatementImportFilesSubject.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer): void {
      this.accountStatementImportFilesSubject.complete();
      this.loadingSubject.complete();
      this.paginationSubject.complete();
  }
  
  clear()
  {
    this.loadingSubject.next(true);
    this.accountStatementImportFilesSubject.next([]);
    this.loadingSubject.next(false);
  }

  load(filter: FilterAccountStatement) {
    if(filter.idAccount!=null)
    {
      this.accountStatementImportFilesSubject.next(null);
      console.log('filter in datasource',filter);
      this.loadingSubject.next(true);
      
      this.accountStatementService.get(filter)
        .subscribe((res: IPageList<IAsGrid>) => {
          
          let toto:any[]=[];
          res.datas.forEach(element => toto.push(element, { detailRow: true, element }));
          this.accountStatementImportFilesSubject.next(toto);
          this.paginationSubject.next(res.pagination);
          this.loadingSubject.next(false);
          console.log('loading$ ',this.loading$ );
          
        });
    }

    }
  }
