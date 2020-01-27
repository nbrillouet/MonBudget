import { Component, OnInit,OnDestroy, Input,Output,EventEmitter, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { fuseAnimations } from '@fuse/animations';
import { AsiTable } from 'app/main/_models/account-statement-import/account-statement-import.model';
import { AsiTableState } from 'app/main/_ngxs/account-statement-import/asi-list/asi-list.state';
import { Select, Store } from '@ngxs/store';
import { AsiTableFilterState } from 'app/main/_ngxs/account-statement-import/asi-list-filter/asi-list-filter.state';
import { FilterInfo } from 'app/main/_models/generics/filter.info.model';
import { FilterAsiTable } from 'app/main/_models/filters/account-statement-import.filter';
import { ChangeAsiTableFilter, LoadAsiTableFilter } from 'app/main/_ngxs/account-statement-import/asi-list-filter/asi-list-filter.action';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Datas } from 'app/main/_models/generics/detail-info.model';

@Component({
  selector: 'asi-list',
  templateUrl: './asi-list.component.html',
  styleUrls: ['./asi-list.component.scss'],
  animations : fuseAnimations
})

export class AsiListComponent implements OnInit {

  @Select(AsiTableState.get) asiTable$: Observable<Datas<AsiTable[]>>;
  @Select(AsiTableFilterState.get) asiTableFilter$: Observable<FilterInfo<FilterAsiTable>>;
  
  filterAsi: FilterAsiTable;

  dataSource = new MatTableDataSource<AsiTable>();
  displayedColumns =   ['checkbox','id', 'fileImport', 'dateImport' ];
  
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  checkboxes: {};

  constructor ( 
    private _store: Store,
    private activatedRoute: ActivatedRoute,
    public router: Router,) { 

      this.asiTable$.subscribe(asifTable=>{
          this.dataSource.data = asifTable.datas; 
      });
  }


  ngOnInit() {
    this.asiTableFilter$.subscribe(filter=>{
      this.filterAsi = filter.filters;
    });
  }
 
  onTabChanged($event) {
    this.filterAsi.selected.idBankAgency = this.filterAsi.bankAgencies[$event.index].id;

    this._store.dispatch(new LoadAsiTableFilter(this.filterAsi));

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

  }

  loadPage() {
    this.filterAsi.selected.pagination.nbItemsPerPage = this.paginator.pageSize;
    this.filterAsi.selected.pagination.sortColumn = this.sort.active;
    this.filterAsi.selected.pagination.sortDirection = this.sort.direction;

    this._store.dispatch(new ChangeAsiTableFilter(this.filterAsi.selected));
  }

}

