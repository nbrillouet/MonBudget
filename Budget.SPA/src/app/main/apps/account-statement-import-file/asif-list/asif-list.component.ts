import { Component, OnInit, Input, ViewChild, SimpleChanges, SimpleChange, AfterViewInit, ChangeDetectorRef, OnChanges } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MatPaginator, MatSort, MatTableDataSource, SortDirection } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { fuseAnimations } from '@fuse/animations';
import { FilterAsifTable } from 'app/main/_models/filters/account-statement-import-file.filter';
import { Select, Store } from '@ngxs/store';
import { AsifTableState } from 'app/main/_ngxs/account-statement-import-file/asif-list/asif-list.state';
import { AsifTable } from 'app/main/_models/account-statement-import/account-statement-import-file.model';
import { AsifTableFilterState } from 'app/main/_ngxs/account-statement-import-file/asif-list-filter/asif-list-filter.state';
import { FilterInfo } from 'app/main/_models/generics/filter.info.model';
import { ChangeAsifTableFilter } from 'app/main/_ngxs/account-statement-import-file/asif-list-filter/asif-list-filter.action';
import { Datas } from 'app/main/_models/generics/detail-info.model';

@Component({
  selector: 'asif-list',
  templateUrl: './asif-list.component.html',
  styleUrls: ['./asif-list.component.scss'],
  animations : fuseAnimations
})
export class AsifListComponent implements OnInit {
  @Select(AsifTableFilterState.get) asifTableFilter$: Observable<FilterInfo<FilterAsifTable>>;
  @Select(AsifTableState.get) asifTable$: Observable<Datas<AsifTable[]>>;

  // @Input() headerPanelIsVisible: boolean;

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  dataSource = new MatTableDataSource<AsifTable>();// AsifDataSource;
  filterAsif: FilterAsifTable;
  displayedColumns = ['button2','id','operationMethod','operationTypeFamily','operationType','operation','dateIntegration','amountOperation','button'];

  constructor(
    private router: Router,
    private _store: Store
    ) {

      this.asifTable$.subscribe(asifTable=>{
          this.dataSource.data = asifTable.datas; 
      });
      
   }

  ngOnInit() {
    this.asifTableFilter$.subscribe(asifTableFilter=>{

      this.filterAsif = asifTableFilter.filters;

    });
  }
  
  // ngOnChanges(changes: SimpleChanges) {
  //   this.headerPanelIsVisible = changes.headerPanelIsVisible.currentValue;
  // }
 
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

    this._store.dispatch(new ChangeAsifTableFilter(this.filterAsif.selected));

  }
 
  detail(data) {
    this.router.navigate(
      [`apps/account-statement-imports/${this.filterAsif.selected.idImport}/account-statement-import-files/${data.id}/detail`]);
  }

}


