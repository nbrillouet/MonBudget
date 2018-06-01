import { Component, OnInit,OnDestroy, Input,Output,EventEmitter, ViewChild } from '@angular/core';
import { fuseAnimations } from '../../../../../../core/animations';
import { User } from '../../../../../_models/User';
import { IBank } from '../../../../../_models/Bank';
import { IPagination, Pagination, MatPagination, PaginatedResult } from '../../../../../_models/IPagination';
import { ImportStatementHistoService } from '../import-statement-histo.service';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { NotificationsService } from 'angular2-notifications';
import { ActivatedRoute } from '@angular/router';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { DataSource } from '@angular/cdk/table';
// import { map, filter, tap } from 'rxjs/operators';
// import { merge } from 'rxjs/observable/merge';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { CollectionViewer } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { IAccountStatementImport } from '../../../../../_models/AccountStatementImport';

// import {SelectionModel} from '@angular/cdk/collections';

@Component({
  selector: 'import-statement-histo-list',
  templateUrl: './import-statement-histo-list.component.html',
  styleUrls: ['./import-statement-histo-list.component.scss'],
  animations : fuseAnimations
})

export class ImportStatementHistoListComponent implements OnInit, OnDestroy {
  @Input() user: User;
  @Output() idImportChanged = new EventEmitter<number>();
  
  banks: IBank[];
  pagination: Pagination;
  data : any;
  idUser : number;
  idBank : number;
  dataSource : AccountStatementImportDataSource;
  displayedColumns =   ['checkbox','id', 'fileImport', 'dateImport' ];
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  checkboxes: {};
  rows: any;
  selectedRows: any[];
  onRowsChangedSubscription: Subscription;
  onSelectedRowsChangedSubscription: Subscription;
  // selection = new SelectionModel<Element>(true, []);
  booleanValue: boolean;

  constructor ( 
    private importStatementHistoService: ImportStatementHistoService,
    private notificationService: NotificationsService,
    private route: ActivatedRoute) {

      this.onRowsChangedSubscription =
        this.importStatementHistoService.onRowsChanged.subscribe(rows => {
          
            this.rows = rows;

            this.checkboxes = {};
            rows.map(row => {
                this.checkboxes[row.id] = false;
            });
        });

      this.onSelectedRowsChangedSubscription =
      this.importStatementHistoService.onSelectedRowsChanged.subscribe(selectedRows => {
        for ( const id in this.checkboxes )
        {
            if ( !this.checkboxes.hasOwnProperty(id) )
            {
                continue;
            }

            this.checkboxes[id] = selectedRows.includes(+id);
            console.log(id + ':' + this.checkboxes[id] + ':' + selectedRows.includes(+id));

        }
        this.selectedRows = selectedRows;
      });
  }


  ngOnInit() {
    this.dataSource = new AccountStatementImportDataSource(this.importStatementHistoService, this.route);
    console.log('dataSource',this.dataSource);
    // this.dataSource.data$
    // .subscribe(res=>{
    //   this.data = res;
      
    // });

    this.dataSource.pagination$
    .subscribe(res=>{
      this.pagination = res;
      console.log('paginationHisto',res);
    });

    this.importStatementHistoService
      .getDistinctBank(this.user.id)
      .subscribe((res: IBank[]) => { 
        this.banks = res;
        this.idUser = this.user.id;
        this.idBank = this.banks[0].id;
        this.dataSource.load(this.idUser,this.idBank,new Pagination());
      });
  }

  ngOnDestroy() {
      this.onRowsChangedSubscription.unsubscribe();
      this.onSelectedRowsChangedSubscription.unsubscribe();
  }

  onTabChanged(event) {
    this.pagination = new Pagination();
    this.idUser = this.user.id;
    this.idBank = this.banks[event.index].id;
    this.dataSource.load(this.idUser,this.idBank,this.pagination);
  }
  
  onPageChangeEvent(event) {
    this.loadPage();
  }
  
  onSortChangeEvent(event): void {
    this.loadPage();
  }

  onRowClick(row) {
    this.idImportChanged.emit(row.id);
    console.log(row);
  }

  loadPage() {
    this.pagination.currentPage = this.paginator.pageIndex + 1;
    this.pagination.itemsPerPage = this.paginator.pageSize;
    this.pagination.sortColumn = this.sort.active;
    this.pagination.sortDirection = this.sort.direction;

    this.dataSource.load(this.idUser,this.idBank,this.pagination);
  }


  onSelectedChange(rowId)
  {
    // this.booleanValue = !this.booleanValue;
    // console.log(this.booleanValue);
    // console.log(this.checkboxes);
    this.importStatementHistoService.toggleSelectedRow(rowId);

  }



  // /** Whether the number of selected elements matches the total number of rows. */
  // isAllSelected() {
  //   const numSelected = this.selection.selected.length;
  //   const numRows = this.data.length;
  //   // console.log(numSelected === numRows);
  //   return numSelected === numRows;
  // }

  // /** Selects all rows if they are not all selected; otherwise clear selection. */
  // masterToggle() {
  //   // console.log('all ' + this.isAllSelected());
  //   this.isAllSelected() ?
  //       this.selection.clear() :
  //       this.data.forEach(row => this.selection.select(row));
        
  //   console.log(this.selection.selected);
  // }

}

export class AccountStatementImportDataSource extends DataSource<IAccountStatementImport> {
  private accountStatementImportsSubject = new BehaviorSubject<IAccountStatementImport[]>([]);
  private paginationSubject = new BehaviorSubject<Pagination>(null);
  private loadingSubject = new BehaviorSubject<boolean>(false);

  public loading$ = this.loadingSubject.asObservable();
  public pagination$ = this.paginationSubject.asObservable();
  // public data$ = this.accountStatementImportsSubject.asObservable();

  constructor (private importStatementHistoService: ImportStatementHistoService,
    private route: ActivatedRoute) {
    super();
  }

  connect(collectionViewer: CollectionViewer): Observable<IAccountStatementImport[]> {
    return this.importStatementHistoService.onRowsChanged.asObservable();
    // return this.accountStatementImportsSubject.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer): void {
      this.accountStatementImportsSubject.complete();
      this.loadingSubject.complete();
      this.paginationSubject.complete();
  }
  
  load(idUser: number,idBank: number, pagination: Pagination) {

    this.loadingSubject.next(true);
    
    this.importStatementHistoService.getAccountStatementImport(idUser,idBank,pagination)
      .subscribe((res: PaginatedResult<IAccountStatementImport[]>) => {
        this.importStatementHistoService.onRowsChanged.next(res.result);
        this.accountStatementImportsSubject.next(res.result);
        this.paginationSubject.next(res.pagination);
        this.loadingSubject.next(false);
      });

    }
  }