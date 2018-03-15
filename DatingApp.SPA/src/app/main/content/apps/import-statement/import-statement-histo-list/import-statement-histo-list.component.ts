import { Component, OnInit, AfterViewInit, Input, ViewChild } from '@angular/core';
import { fuseAnimations } from '../../../../../core/animations';
import { User } from '../../../../_models/User';
import { IBank } from '../../../../_models/Bank';
import { IPagination, Pagination, MatPagination, PaginatedResult } from '../../../../_models/IPagination';
import { IAccountStatementImport } from '../../../../_models/AccountStatementImport';
import { ImportStatementService } from '../import-statement.service';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { NotificationsService } from 'angular2-notifications';
import { ActivatedRoute } from '@angular/router';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { DataSource } from '@angular/cdk/table';
import { map, filter, tap } from 'rxjs/operators';
import { merge } from 'rxjs/observable/merge';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { CollectionViewer } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'import-statement-histo-list',
  templateUrl: './import-statement-histo-list.component.html',
  styleUrls: ['./import-statement-histo-list.component.css'],
  animations : fuseAnimations
})

export class ImportStatementHistoListComponent implements OnInit {
  @Input() user: User;
  banks: IBank[];
  pagination: Pagination;
  idUser : number;
  idBank : number;
  dataSource : AccountStatementImportDataSource;
  displayedColumns =   ['id', 'fileImport', 'dateImport' ];
  paginSubs : any;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor ( private importStatementService: ImportStatementService,
    private notificationService: NotificationsService,
    private route: ActivatedRoute) {}


  ngOnInit() {
    this.dataSource = new AccountStatementImportDataSource(this.importStatementService, this.route);
    
    this.dataSource.pagination$
    .subscribe(res=>{
      this.pagination = res;
    });
    
    this.importStatementService.getDistinctBank(this.user.id)
      .subscribe((res: IBank[]) => { 
        this.banks = res;
        this.idUser = this.user.id;
        this.idBank = this.banks[0].id;
        this.dataSource.load(this.idUser,this.idBank,new Pagination());
      });
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

  loadPage() {
    this.pagination.currentPage = this.paginator.pageIndex + 1;
    this.pagination.itemsPerPage = this.paginator.pageSize;
    this.pagination.sortColumn = this.sort.active;
    this.pagination.sortDirection = this.sort.direction;

    this.dataSource.load(this.idUser,this.idBank,this.pagination);
  }

}

export class AccountStatementImportDataSource extends DataSource<IAccountStatementImport> {
  private accountStatementImportsSubject = new BehaviorSubject<IAccountStatementImport[]>([]);
  private paginationSubject = new BehaviorSubject<Pagination>(null);
  private loadingSubject = new BehaviorSubject<boolean>(false);

  public loading$ = this.loadingSubject.asObservable();
  public pagination$ = this.paginationSubject.asObservable();

  constructor (private importStatementService: ImportStatementService,
    private route: ActivatedRoute) {
    super();
  }

  connect(collectionViewer: CollectionViewer): Observable<IAccountStatementImport[]> {
      return this.accountStatementImportsSubject.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer): void {
      this.accountStatementImportsSubject.complete();
      this.loadingSubject.complete();
      this.paginationSubject.complete();
  }
  
  load(idUser: number,idBank: number, pagination: Pagination) {

    this.loadingSubject.next(true);

    this.importStatementService.getAccountStatementImport(idUser,idBank,pagination)
      .subscribe((res: PaginatedResult<IAccountStatementImport[]>) => {
        this.accountStatementImportsSubject.next(res.result);
        this.paginationSubject.next(res.pagination);
        this.loadingSubject.next(false);
        console.log('passed service');
      });

    }
  }