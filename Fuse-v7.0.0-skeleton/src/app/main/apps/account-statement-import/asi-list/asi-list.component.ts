import { Component, OnInit,OnDestroy, Input,Output,EventEmitter, ViewChild } from '@angular/core';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { NotificationsService } from 'angular2-notifications';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { DataSource } from '@angular/cdk/table';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { CollectionViewer } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { fuseAnimations } from '@fuse/animations';
import { IUser } from 'app/main/_models/user.model';
import { Pagination, PaginatedResult } from 'app/main/_models/pagination.model';
import { IBank } from 'app/main/_models/bank.model';
import { IAccountStatementImport } from 'app/main/_models/account-statement-import.model';
import { DataInfos } from 'app/main/_models/generics/table-info.model';
import { AsiTable } from 'app/main/_models/account-statement-import/account-statement-import.model';
import { AsiTableState } from 'app/main/_ngxs/account-statement-import/asi-list/asi-list.state';
import { Select, Store } from '@ngxs/store';
import { AsiTableFilterState } from 'app/main/_ngxs/account-statement-import/asi-list-filter/asi-list-filter.state';
import { FilterInfo } from 'app/main/_models/generics/filter.info.model';
import { FilterAsiTable } from 'app/main/_models/filters/account-statement-import.filter';
import { ChangeAsiTableFilter } from 'app/main/_ngxs/account-statement-import/asi-list-filter/asi-list-filter.action';
// import { ChangeAsifTableFilter } from 'app/main/_ngxs/account-statement-import-file/asif-list/asif-list.action';
import { FilterAsifTable } from 'app/main/_models/filters/account-statement-import-file.filter';
import { ChangeAsifTableFilter } from 'app/main/_ngxs/account-statement-import-file/asif-list-filter/asif-list-filter.action';
import { AsiService } from '../asi.service';


@Component({
  selector: 'asi-list',
  templateUrl: './asi-list.component.html',
  styleUrls: ['./asi-list.component.scss'],
  animations : fuseAnimations
})

export class AsiListComponent implements OnInit, OnDestroy {
  // @Input() user: IUser;
  
  @Select(AsiTableState.get) asiTable$: Observable<DataInfos<AsiTable>>;
  @Select(AsiTableFilterState.get) asiTableFilter$: Observable<FilterInfo<FilterAsiTable>>;
  
  filterAsi: FilterAsiTable;
  // filterAsif: FilterAsifTable;
  // banks: IBank[];
  // pagination: Pagination;
  // data : any;
  // idUser : number;
  // idBank : number;
  dataSource : AsiDataSource;
  displayedColumns =   ['checkbox','id', 'fileImport', 'dateImport' ];
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  checkboxes: {};
  // rows: any;
  // selectedRows: any[];
  // onRowsChangedSubscription: Subscription;
  // onSelectedRowsChangedSubscription: Subscription;
  // booleanValue: boolean;

  constructor ( 
    private _store: Store,
    private _asiService: AsiService,
    private activatedRoute: ActivatedRoute,
    public router: Router,) {
      this.dataSource = new AsiDataSource(this._store);

      // this.onRowsChangedSubscription =
      //   this._asiHistoService.onRowsChanged.subscribe(rows => {
          
      //       this.rows = rows;

      //       this.checkboxes = {};
      //       rows.map(row => {
      //           this.checkboxes[row.id] = false;
      //       });
      //   });

      // this.onSelectedRowsChangedSubscription =
      // this._asiHistoService.onSelectedRowsChanged.subscribe(selectedRows => {
      //   for ( const id in this.checkboxes )
      //   {
      //       if ( !this.checkboxes.hasOwnProperty(id) )
      //       {
      //           continue;
      //       }

      //       this.checkboxes[id] = selectedRows.includes(+id);

      //   }
      //   this.selectedRows = selectedRows;
      // });
  }


  ngOnInit() {
    // this.dataSource = new AccountStatementImportDataSource(this._asiHistoService, this.activatedRoute);

    this.asiTableFilter$.subscribe(filter=>{
      this.filterAsi = filter.filters;
    });

    // this.dataSource.pagination$
    //   .subscribe(res=>{
    //     this.pagination = res;
    //   });

    // this._asiHistoService
    //   .getDistinctBank(this.user.id)
    //   .subscribe((res: IBank[]) => { 
    //     this.banks = res;

    //     if(this.banks.length>0)
    //     {
    //       this.idUser = this.user.id;
    //       this.idBank = this.banks[0].id;
    //       this.dataSource.load(this.idUser,this.idBank,new Pagination());
    //     }
    //   });
  }

  ngOnDestroy() {
      // this.onRowsChangedSubscription.unsubscribe();
      // this.onSelectedRowsChangedSubscription.unsubscribe();
  }

  onTabChanged($event) {

    this.filterAsi.selected.pagination=new Pagination();
    // this.filter.selected.idUser=this.user.id;
    this.filterAsi.selected.idBank = this.filterAsi.banks[$event.index].id;
    // this.banks[$event.index].id;

    this.dataSource.load(this.filterAsi);

    // this.pagination = new Pagination();
    // this.idUser = this.user.id;
    // this.idBank = this.banks[event.index].id;
    // this.dataSource.load(this.idUser,this.idBank,this.pagination);
  }
  
  onPageChangeEvent($event) {
    this.filterAsi.selected.pagination.currentPage = this.paginator.pageIndex;
    this.loadPage();
  }
  
  onSortChangeEvent($event): void {

    this.filterAsi.selected.pagination.currentPage=0;
    this.loadPage();
  }

  onRowClick(row) {

    this.router.navigate([`${row.id}/account-statement-import-files`], {relativeTo: this.activatedRoute});

    
    
    // // chargement du account import file correspondant
    // this._asiService.getAsifAccounts(row.id)
    //   .subscribe(response => {
    //     let accountSelected = response.accounts[0];

    //     this.router.navigate(
    //         [`${row.id}/accounts/${accountSelected.id}/account-statement-import-files`],
    //         {relativeTo: this.activatedRoute});
    //   });
  }

  loadPage() {
    // this.pagination.currentPage = this.paginator.pageIndex + 1;
    // this.pagination.itemsPerPage = this.paginator.pageSize;
    // this.pagination.sortColumn = this.sort.active;
    // this.pagination.sortDirection = this.sort.direction;
    this.filterAsi.selected.pagination.itemsPerPage = this.paginator.pageSize;
    this.filterAsi.selected.pagination.sortColumn = this.sort.active;
    this.filterAsi.selected.pagination.sortDirection = this.sort.direction;

    // this.filter.selected.pagination.currentPage = this.paginator.pageIndex;
    // this.filter.selected.pagination.itemsPerPage = this.paginator.pageSize;

    this.dataSource.load(this.filterAsi);
  }


  // onSelectedChange(rowId)
  // {

  //   this._asiHistoService.toggleSelectedRow(rowId);

  // }

}

export class AsiDataSource extends DataSource<DataInfos<AsiTable>> {

  @Select(AsiTableState.get) asiTable$: Observable<DataInfos<AsiTable>>;

  constructor (
    private store: Store
    ) {
    super();
  }

  connect(collectionViewer: CollectionViewer): Observable<any[]> {
    return this.asiTable$.map(x=>x.datas);
  }

  disconnect(collectionViewer: CollectionViewer): void {
  }
  
  clear()
  {
  }

  load(filter: FilterAsiTable) {

    // if(filter.selected.idAccount!=null)
    // {

  
      
      this.store.dispatch(new ChangeAsiTableFilter(filter));

      // this.accountStatementService.get(filter)
      //   .subscribe((res: IPageList<IAsGrid>) => {
          
      //     let toto:any[]=[];
      //     res.datas.forEach(element => toto.push(element, { detailRow: true, element }));
      //     // this.accountStatementImportFilesSubject.next(toto);
      //     // this.paginationSubject.next(res.pagination);
      //     // this.loadingSubject.next(false);
  
          
      //   });
    // }

    }
  }

// export class AccountStatementImportDataSource extends DataSource<IAccountStatementImport> {
//   private accountStatementImportsSubject = new BehaviorSubject<IAccountStatementImport[]>([]);
//   private paginationSubject = new BehaviorSubject<Pagination>(null);
//   private loadingSubject = new BehaviorSubject<boolean>(false);

//   public loading$ = this.loadingSubject.asObservable();
//   public pagination$ = this.paginationSubject.asObservable();
//   // public data$ = this.accountStatementImportsSubject.asObservable();

//   constructor (private importStatementHistoService: AsiHistoService,
//     private route: ActivatedRoute) {
//     super();
//   }

//   connect(collectionViewer: CollectionViewer): Observable<IAccountStatementImport[]> {
//     return this.importStatementHistoService.onRowsChanged.asObservable();
//     // return this.accountStatementImportsSubject.asObservable();
//   }

//   disconnect(collectionViewer: CollectionViewer): void {
//       this.accountStatementImportsSubject.complete();
//       this.loadingSubject.complete();
//       this.paginationSubject.complete();
//   }
  
//   load(idUser: number,idBank: number, pagination: Pagination) {

//     this.loadingSubject.next(true);
    
//     this.importStatementHistoService.getAccountStatementImport(idUser,idBank,pagination)
//       .subscribe((res: PaginatedResult<IAccountStatementImport[]>) => {
//         this.importStatementHistoService.onRowsChanged.next(res.result);
//         this.accountStatementImportsSubject.next(res.result);
//         this.paginationSubject.next(res.pagination);
//         this.loadingSubject.next(false);
//       });

//     }
//   }