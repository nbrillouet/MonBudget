import { Component, OnInit, Input, ViewChild, SimpleChanges, SimpleChange } from '@angular/core';
import { IAccount } from '../../../../../_models/Account';
import { IAsifState, IAsifGrid } from '../../../../../_models/AccountStatementImportFile';
import { ImportStatementService } from '../../import-statement.service';
import { ImportStatementFileService } from '../import-statement-file.service';
import { DataSource } from '@angular/cdk/table';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Pagination, PaginatedResult } from '../../../../../_models/IPagination';
import { CollectionViewer } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import { fuseAnimations } from '../../../../../../core/animations';
import { MatPaginator, MatSort } from '@angular/material';

import { SelectionModel } from '@angular/cdk/collections';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'import-statement-file-list',
  templateUrl: './import-statement-file-list.component.html',
  styleUrls: ['./import-statement-file-list.component.scss'],
  animations : fuseAnimations
})
export class ImportStatementFileListComponent implements OnInit {
  @Input() idImport: number;
  @Input() account: IAccount;
  @Input() asifState: IAsifState;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  asifStates : IAsifState[];
  asifStateSelected : IAsifState;
  accountSelected: IAccount;
  pagination: Pagination;
  selectedIndex:number = 0;
  dataSource : AccountStatementImportFileDataSource;
  displayedColumns = ['button2','id','operation','operationMethod','operationType','operationTypeFamily','dateIntegration','amountOperation','button'];
  
  //isExpansionDetailRow = (i: number, row: Object) => row.hasOwnProperty('detailRow');
  isExpansionDetailRow = (i: number, row: any) => row.hasOwnProperty('detailRow');
  expandedElement: any;

  // selection = new SelectionModel<Element>(true, []);

  constructor(
    private importStatementService: ImportStatementService,
    private importStatementFileService: ImportStatementFileService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {

   }

  ngOnInit() {
    
    console.log('entering List');
    // this.importStatementService
    //   .getAsifStates(this.idImport,this.account.id)
    //   .subscribe(res=>{
    //     this.asifStates = res;
    //     this.asifStateSelected = this.asifStates[0];
        
    //this.dataSource = new AccountStatementImportFileDataSource(this.importStatementFileService);
    //   });

    //   this.dataSource.data$
    // .subscribe(res=>{
    //   // this.pagination = res;
    //   console.log('data$',res);
    // });
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('this.asifStateSelected_INPUT',this.asifStateSelected);
    
    let valueChanged: boolean = false;

    if(!this.dataSource) {
      this.dataSource = new AccountStatementImportFileDataSource(this.importStatementFileService);
    }
    
    if(changes.account)
    {
     
      if(changes.account)
      {
        let acc: SimpleChange = changes.account;
        if (this.accountSelected==null || acc.currentValue.id!=this.accountSelected.id)
        {
          valueChanged=true;
          this.accountSelected = acc.currentValue;
        }
      }
    }

    if(changes.asifState) {
    
      let asifState: SimpleChange= changes.asifState;
      console.log(asifState.currentValue.id);
      console.log(this.asifStateSelected);
      
      if(this.asifStateSelected==null || asifState.currentValue.id!=this.asifStateSelected.id)
      {
        valueChanged=true;
        this.asifStateSelected = asifState.currentValue;
        console.log('this.asifStateSelected_OUTPUT',this.asifStateSelected);
      }
    }

    if(valueChanged) {
      this.pagination = new Pagination();
      this.dataSource.load(this.idImport,this.asifStateSelected,this.accountSelected,this.pagination);
      console.log('LOAD_LIST');
    }
  

  }

  // onTabChanged(event) {
  //     this.dataSource.clear();
  //     console.log(this.dataSource);
  //     this.selectedIndex=event.index;
  //     this.asifStateSelected = this.asifStates[event.index];
  //     console.log('asifStateSelected',this.asifStateSelected);

  //     this.dataSource.load(this.asifStateSelected,this.accountSelected,new Pagination());

  //     console.log(this.selection);

  // }

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
      
    this.dataSource.load(this.idImport,this.asifStateSelected,this.accountSelected,this.pagination);
  }

  detail(data) {
    console.log('asifRow',data);
    this.router.navigate(
      [`apps/import-statement-archives/${this.idImport}/accounts/${this.accountSelected.id}/import-statement-files/${data.id}/detail`]);
  }

}

export class AccountStatementImportFileDataSource extends DataSource<IAsifGrid> {
  private accountStatementImportFilesSubject = new BehaviorSubject<IAsifGrid[]>([]);
  private paginationSubject = new BehaviorSubject<Pagination>(null);
  private loadingSubject = new BehaviorSubject<boolean>(false);

  public loading$ = this.loadingSubject.asObservable();
  public pagination$ = this.paginationSubject.asObservable();
  // public data$ = this.accountStatementImportFilesSubject.asObservable();

  constructor (private importStatementFileService: ImportStatementFileService,
    ) {
    super();
  }

  connect(collectionViewer: CollectionViewer): Observable<IAsifGrid[]> {
    //return this.importStatementHistoService.onRowsChanged.asObservable();
    // data.forEach(element => this.accountStatementImportFilesSubject.push(element, { detailRow: true, element }));
    // console.log(this.accountStatementImportFilesSubject);
    console.log(this.accountStatementImportFilesSubject);
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

  load(idImport:number,asifStateSelected: IAsifState,accountSelected: IAccount, pagination: Pagination) {

    this.loadingSubject.next(true);

    this.importStatementFileService.get(idImport,asifStateSelected,accountSelected,pagination)
      .subscribe((res: PaginatedResult<IAsifGrid[]>) => {
        let toto:any[]=[];
        res.result.forEach(element => toto.push(element, { detailRow: true, element }));
        this.accountStatementImportFilesSubject.next(toto);
        this.paginationSubject.next(res.pagination);
        this.loadingSubject.next(false);
      });

    }
  }
