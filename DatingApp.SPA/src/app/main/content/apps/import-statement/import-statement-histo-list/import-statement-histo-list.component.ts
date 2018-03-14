import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { User } from '../../../../_models/User';
import { IBank } from '../../../../_models/Bank';
import { ImportStatementService } from '../import-statement.service';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { NotificationsService } from 'angular2-notifications';
import { ActivatedRoute } from '@angular/router';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { DataSource } from '@angular/cdk/table';

@Component({
  selector: 'import-statement-histo-list',
  templateUrl: './import-statement-histo-list.component.html',
  styleUrls: ['./import-statement-histo-list.component.css']
})
export class ImportStatementHistoListComponent implements AfterViewInit, OnInit {
  @Input() user: User;
  banks: IBank[];
  pagination: Pagination;

  dataSource : ImportStatementImportDataSource;
  displayedColumns =   ['id', 'fileImport', 'dateImport' ];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor ( private importStatementService: ImportStatementService,
    private notificationService: NotificationsService,
    private route: ActivatedRoute) {}


  ngOnInit() {
    this.importStatementService.getDistinctBank(this.user.id)
      .subscribe((res: IBank[]) => { 
        this.banks = res;
    });
  }

  ngAfterViewInit() {
    // reset the paginator after sorting
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
          tap(() => this.loadPage())
      )
      .subscribe();
  }

  loadPage() {
    this.pagination.currentPage = this.paginator.pageIndex + 1;
    this.pagination.itemsPerPage = this.paginator.pageSize;
    this.pagination.sortColumn = this.sort.active;
    this.pagination.sortDirection = this.sort.direction;
    console.log(this.sort);
    this.dataSource.load(this.pagination);
  }

}

export class AccountStatementImportDataSource extends DataSource<AccountStatementImport> {
  private accountStatementImportsSubject = new BehaviorSubject<User[]>([]);
  private paginationSubject = new BehaviorSubject<Pagination>(null);
  private loadingSubject = new BehaviorSubject<boolean>(false);

  public loading$ = this.loadingSubject.asObservable();
  public pagination$ = this.paginationSubject.asObservable();

  constructor (
    private importStatementService: ImportStatementService,
    private route: ActivatedRoute
  ) {
    super();
  }

  connect(collectionViewer: CollectionViewer): Observable<AccountStatementImport[]> {
      return this.AccountStatementImportsSubject.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer): void {
      this.AccountStatementImportsSubject.complete();
      this.loadingSubject.complete();
      this.paginationSubject.complete();
  }
  
  load(pagination: Pagination) {

    this.loadingSubject.next(true);

    // this.userService.getUsers(pagination.currentPage,pagination.itemsPerPage)
    this.ImportStatementService.getUsers(pagination)
      .subscribe((res: PaginatedResult<AccountStatementImport[]>) => {
        this.AccountStatementImportsSubject.next(res.result);
        this.paginationSubject.next(res.pagination);
        this.loadingSubject.next(false);
      });

    }