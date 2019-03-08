import { Component, OnInit, Input, ViewChild, SimpleChanges, SimpleChange, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { DataSource } from '@angular/cdk/table';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { CollectionViewer } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import { MatPaginator, MatSort, MatTableDataSource, SortDirection } from '@angular/material';

import { SelectionModel } from '@angular/cdk/collections';
import { Router, ActivatedRoute } from '@angular/router';
import { fuseAnimations } from '@fuse/animations';
import { IAccount } from 'app/main/_models/account.model';
import { IAsifState, IAsifGrid } from 'app/main/_models/account-statement-import-file.model';
import { Pagination, PaginatedResult } from 'app/main/_models/pagination.model';
import { TableInfo, DataInfos } from 'app/main/_models/generics/table-info.model';
import { FilterAsifTableSelected, FilterAsifTable } from 'app/main/_models/filters/account-statement-import-file.filter';
import { Select, Store } from '@ngxs/store';
import { AsifService } from '../asif.service';
import { AsifTableState } from 'app/main/_ngxs/account-statement-import-file/asif-list/asif-list.state';
import { AsifTable } from 'app/main/_models/account-statement-import/account-statement-import-file.model';
import { AsifTableFilterState } from 'app/main/_ngxs/account-statement-import-file/asif-list-filter/asif-list-filter.state';
import { FilterInfo } from 'app/main/_models/generics/filter.info.model';
import { FilterAsiTable } from 'app/main/_models/filters/account-statement-import.filter';
import { ChangeAsifTableFilter } from 'app/main/_ngxs/account-statement-import-file/asif-list-filter/asif-list-filter.action';
import { AsiService } from '../../account-statement-import/asi.service';
import { LoadAsifTableDatas } from 'app/main/_ngxs/account-statement-import-file/asif-list/asif-list.action';

@Component({
  selector: 'asif-list',
  templateUrl: './asif-list.component.html',
  styleUrls: ['./asif-list.component.scss'],
  animations : fuseAnimations
})
export class AsifListComponent implements OnInit {
  @Select(AsifTableFilterState.get) asifTableFilter$: Observable<FilterInfo<FilterAsifTable>>;
  @Select(AsifTableState.get) asifTable$: Observable<DataInfos<AsifTable>>;

  // @Select(AsifTableState.get) tableInfo$: Observable<TableInfo<AsifTable,FilterAsifTableSelected>>;
  
  // @Input() idImport: number;
  // @Input() account: IAccount;
  // @Input() asifState: IAsifState;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
 

  // asifStates : IAsifState[];
  // asifStateSelected : IAsifState;
  // accountSelected: IAccount;
  // pagination: Pagination;
  // selectedIndex:number = 0;
  dataSource = new MatTableDataSource<AsifTable>();// AsifDataSource;
  filterAsif: FilterAsifTable;
  displayedColumns = ['button2','id','operationMethod','operationTypeFamily','operationType','operation','dateIntegration','amountOperation','button'];
  
  
  // isExpansionDetailRow = (i: number, row: any) => row.hasOwnProperty('detailRow');
  // expandedElement: any;


  constructor(
    private router: Router,
    private _store: Store
    // private changeDetectorRefs: ChangeDetectorRef
    ) {
      
      
      this.asifTable$.subscribe(asifTable=>{
        // if(asifTable.loadingInfo.loaded) {
          this.dataSource.data = asifTable.datas; 
        // }
      });
      
   }

  ngOnInit() {
    this.asifTableFilter$.subscribe(asifTableFilter=>{

      // this.filterAsif = JSON.parse(JSON.stringify(asifTableFilter.filters));
      this.filterAsif = asifTableFilter.filters;
      // this.paginator.pageIndex = this.filterAsif.selected.pagination.currentPage;
      // this.sort.active = this.filterAsif.selected.pagination.sortColumn;
      // this.sort.direction = <SortDirection>this.filterAsif.selected.pagination.sortDirection;
      
      // this.loadPage();

    });
 
  }
  
 
  async delay(ms: number) {
    await new Promise(resolve => setTimeout(()=>resolve(), ms)).then(()=>console.log("fired"));
  }

  onPageChangeEvent($event: MatPaginator) {
    this.filterAsif.selected.pagination.currentPage = this.paginator.pageIndex;
    this.loadPage();
  }
  
  onSortChangeEvent($event): void {
    this.filterAsif.selected.pagination.currentPage=0;
    this.loadPage();
  }

  loadPage() {
    this.filterAsif.selected.pagination.nbItemsPerPage = this.paginator.pageSize;
    this.filterAsif.selected.pagination.sortColumn = this.sort.active;
    this.filterAsif.selected.pagination.sortDirection = this.sort.direction;

    // let toto = this.filterAsif = JSON.parse(JSON.stringify(this.filterAsif));
    
    // this.delay(3000).then(any=>{
      this._store.dispatch(new ChangeAsifTableFilter(this.filterAsif.selected));

      // this._store.dispatch(new LoadAsifTableDatas(this.filterAsif.selected));
    // });
    

  }
 
  detail(data) {
    this.router.navigate(
      [`apps/account-statement-imports/${this.filterAsif.selected.idImport}/account-statement-import-files/${data.id}/detail`]);
  }

}

// export class AsifDataSource extends DataSource<DataInfos<AsifTable>> {
//   @Select(AsifTableState.get) asifTable$: Observable<DataInfos<AsifTable>>;

//   constructor (
//     private store: Store
//     ) {
//     super();
//   }

//   connect(collectionViewer: CollectionViewer): Observable<any[]> {
//     return this.asifTable$.map(x=>x.datas);
//   }

//   disconnect(collectionViewer: CollectionViewer): void {
//   }
  
//   clear()
//   {
//   }

//   load(filter: FilterAsifTable) {
//     this.store.dispatch(new LoadAsifTableDatas(filter.selected));
//     // this.store.dispatch(new ChangeAsifTableFilter(filter));
    
    
//     // this.loadingSubject.next(true);

//     // this.importStatementFileService.get(idImport,asifStateSelected,accountSelected,pagination)
//     //   .subscribe((res: PaginatedResult<IAsifGrid[]>) => {
//     //     let toto:any[]=[];
//     //     res.result.forEach(element => toto.push(element, { detailRow: true, element }));
//     //     this.accountStatementImportFilesSubject.next(toto);
//     //     this.paginationSubject.next(res.pagination);
//     //     this.loadingSubject.next(false);
//     //   });

//     }
//   }
