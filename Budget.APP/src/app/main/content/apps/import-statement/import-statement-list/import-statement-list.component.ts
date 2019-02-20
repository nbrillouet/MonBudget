import { fuseAnimations } from "../../../../../core/animations";
import { Component, OnInit, OnChanges, Input, ViewChild,SimpleChanges, SimpleChange } from "@angular/core";
import { CollectionViewer } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { DataSource } from '@angular/cdk/table';
import { MatPaginator, MatSort } from "@angular/material";
import { ActivatedRoute } from "@angular/router";

import { IAccount } from "../../../../_models/account.model";
import { IAsifState, IAsifGrid } from "../../../../_models/account-statement-import-file.model";
import { Pagination,PaginatedResult } from "../../../../_models/pagination.model";
import { AccountStatementImportFileService } from "./account-statement-import-file.service";
import { NotificationsService } from "angular2-notifications";
import { ImportStatementService } from "../import-statement.service";


@Component({
  selector: 'import-statement-list',
  templateUrl: './import-statement-list.component.html',
  styleUrls: ['./import-statement-list.component.scss'],
  animations : fuseAnimations
})
export class ImportStatementListComponent implements OnInit,OnChanges {

  @Input() account: IAccount;
  @Input() idImport: number;

  asifStates : IAsifState[];
  asifStateSelected : IAsifState;
  accountSelected: IAccount;
  
  pagination: Pagination;
  // datas : any;
  dataSource : AsifDataSource;
  displayedColumns =   ['id'];
  // ,'operation','operationMethod','operationType','operationTypeFamily','operationPlace','amountOperation'
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  constructor(
    private accountStatementImportFileService : AccountStatementImportFileService,
    private notificationService: NotificationsService,
    private route: ActivatedRoute,
    private importStatementService: ImportStatementService
    ) {
      
     }

  ngOnInit() {

    this.dataSource = new AsifDataSource(this.accountStatementImportFileService, this.route);

    
    console.log('dataSource',this.dataSource);

    this.dataSource.pagination$
      .subscribe(res=>{
        this.pagination = res;
        console.log('pagination',res);
      });
      
    this.importStatementService
      .getAsifStates(this.idImport,this.account.id)
      .subscribe(res=>{
        this.asifStates = res;
        this.asifStateSelected = this.asifStates[0];
        // this.pagination = new Pagination();
    });
    
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('changes', changes);

    let acc: SimpleChange = changes.account;
    this.accountSelected = acc.currentValue;
    
    
    // if(this.dataSource)
    // {
    //   this.dataSource.load(this.asifStateSelected,this.accountSelected,new Pagination());
    // }
  }

  onTabChanged(event) {
    console.log('tabchanged');
    this.importStatementService.getAsifStates(this.idImport,this.account.id)
      .subscribe(res=>{
        this.asifStates = res;
        this.asifStateSelected = this.asifStates[event.index];

        this.dataSource.load(this.asifStateSelected,this.accountSelected,new Pagination());
      });

  }

  onPageChangeEvent(event) {
    this.loadPage();
  }
  
  onSortChangeEvent(event): void {
    this.loadPage();
  }

  onRowClick(data) {
    console.log('rowclick');
  }

  loadPage() {
    this.pagination.currentPage = this.paginator.pageIndex + 1;
    this.pagination.itemsPerPage = this.paginator.pageSize;
    this.pagination.sortColumn = this.sort.active;
    this.pagination.sortDirection = this.sort.direction;
      
      this.dataSource.load(this.asifStateSelected,this.accountSelected,new Pagination());
  }

}

export class AsifDataSource extends DataSource<IAsifGrid> {
  private dataSubject = new BehaviorSubject<IAsifGrid[]>([]);
  private paginationSubject = new BehaviorSubject<Pagination>(null);
  private loadingSubject = new BehaviorSubject<boolean>(false);
  
  private fakeSubject = new BehaviorSubject<any>(null);

  public loading$ = this.loadingSubject.asObservable();
  public pagination$ = this.paginationSubject.asObservable();

  constructor (
    private accountStatementImportFileService : AccountStatementImportFileService,
    private route: ActivatedRoute) {
    super();
  }

  connect(collectionViewer: CollectionViewer): Observable<IAsifGrid[]> {
    return this.fakeSubject.asObservable(); //this.dataSubject.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer): void {
      this.dataSubject.complete();
      this.loadingSubject.complete();
      this.paginationSubject.complete();
  }
  
  load(asifStateSelected: IAsifState,accountSelected: IAccount, pagination: Pagination) {

    this.loadingSubject.next(true);
    // if(asifStateSelected && accountSelected && pagination)
    // {
      this.accountStatementImportFileService.get(365,asifStateSelected,accountSelected,pagination)
        .subscribe((res: PaginatedResult<IAsifGrid[]>) => {
          this.dataSubject.next(res.result);
          this.paginationSubject.next(res.pagination);
          this.loadingSubject.next(false);
          console.log('reload', res.result);
        });
    // }

    }
  }



  