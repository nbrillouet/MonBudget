import { Component, OnInit, ViewEncapsulation, ViewChild, SimpleChanges, Input, OnChanges } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';
import { FilterOtTable } from 'app/main/_models/filters/operation-type.filter';
import { Select, Store } from '@ngxs/store';
import { OtTableFilterState } from 'app/main/_ngxs/referential/operation-type/operation-type-list-filter/operation-type-list-filter.state';
import { OtTableState } from 'app/main/_ngxs/referential/operation-type/operation-type-list/operation-type-list.state';
import { Observable } from 'rxjs';
import { DataInfos } from 'app/main/_models/generics/table-info.model';
import { FilterInfo } from 'app/main/_models/generics/filter.info.model';
import { OtTable } from 'app/main/_models/referential/operation-type.model';
import { MatPaginator, MatSort, MatTableDataSource, MatDialogRef, MatDialog } from '@angular/material';
import { FuseConfirmDialogComponent } from '@fuse/components/confirm-dialog/confirm-dialog.component';
import { ComboSimple } from 'app/main/_models/generics/combo.model';
import { ISelect } from 'app/main/_models/generics/select.model';
import { Router } from '@angular/router';
import { OtService } from '../operation-type.service';
import { NotificationsService } from 'angular2-notifications';
import { LoadOtTableFilter, ChangeOtTableFilter } from 'app/main/_ngxs/referential/operation-type/operation-type-list-filter/operation-type-list-filter.action';
import { LoadOtTableDatas } from 'app/main/_ngxs/referential/operation-type/operation-type-list/operation-type-list.action';

@Component({
  selector: 'operation-type-list',
  templateUrl: './operation-type-list.component.html',
  styleUrls: ['./operation-type-list.component.scss'],
  animations : fuseAnimations,
  encapsulation: ViewEncapsulation.None
})
export class OperationTypeListComponent implements OnInit {
  // @Input() headerPanelIsVisible: boolean;
  
  @Select(OtTableFilterState.get) otTableFilter$: Observable<FilterInfo<FilterOtTable>>;
  @Select(OtTableState.get) otTable$: Observable<DataInfos<OtTable>>;
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  dataSource = new MatTableDataSource<OtTable>();
  filterOt: FilterOtTable;
  idAccountStatement: number;
  selectedIndex: number = 0;
  displayedColumns = ['id','operationTypeFamily','label','buttonDelete'];
  templateFor:string;
  confirmDialogRef: MatDialogRef<FuseConfirmDialogComponent>;
  
  filterOtf: ComboSimple<ISelect>=null;

  constructor(
    private _store: Store,
    private _dialog: MatDialog,
    private _router: Router,
    private _otService: OtService,
    private _notificationService: NotificationsService
  ) {

      this.filterOt = new FilterOtTable();
      this._store.dispatch(new LoadOtTableFilter(this.filterOt));

      this.otTable$.subscribe(otTable=>{
        this.dataSource.data = otTable.datas; 

      });

   }

  ngOnInit() {
    this.otTableFilter$.subscribe(otTableFilter=>{
      if(otTableFilter.loadingInfo.loaded) {
        this.filterOt = otTableFilter.filters;
        this.filterOtf= {list : otTableFilter.filters.otfs,selected: otTableFilter.filters.selected.otf};

      }
    });
  
  }

  // ngOnChanges(changes: SimpleChanges) {

  //   this.headerPanelIsVisible = changes.headerPanelIsVisible.currentValue;;
  // }
  
  onPageChangeEvent(event) {
    this.filterOt.selected.pagination.currentPage = this.paginator.pageIndex;
    this.loadPage();
  }
  
  onSortChangeEvent(event): void {
    this.filterOt.selected.pagination.currentPage=0;
    this.loadPage();
  }

  loadPage() {

    this.filterOt.selected.pagination.nbItemsPerPage = this.paginator.pageSize;
    this.filterOt.selected.pagination.sortColumn = this.sort.active;
    this.filterOt.selected.pagination.sortDirection = this.sort.direction;

    this._store.dispatch(new ChangeOtTableFilter(this.filterOt.selected));
  }

  hasFilterData(filter:string) {
    if(!this.filterOt)
      return false;
    if(filter=='label')
      return this.filterOt.selected!=null && this.filterOt.selected.label!=null && this.filterOt.selected.label!='';
    if(filter=='operationTypeFamily')
      return this.filterOt.selected!=null && this.filterOt.selected.otf!=null;
  }

  delete(data) {
    this.confirmDialogRef = this._dialog.open(FuseConfirmDialogComponent, {
      disableClose: false
    });

    this.confirmDialogRef.componentInstance.confirmMessage = 'Etes vous sûr de supprimer ce type d\'opération? \nToutes les opérations associées seront supprimées';

    this.confirmDialogRef.afterClosed().subscribe(result => {
      if (result)
        {
            this._otService.deleteOtDetail(data.id)
            .subscribe(resp => {
              this._store.dispatch(new LoadOtTableDatas(this.filterOt.selected));
              this._notificationService.success('Suppression réussi', 'Le type d\'opération est supprimé');
            }, error => {
              this._notificationService.error('Echec suppression', error);
            })
        }
        this.confirmDialogRef = null;
    });
  }


  detail(data) {
    this._router.navigate(
          [`/apps/referential/operations/operation-types/${data.id}`]);
  }

  applyFilterLabel(data) {
    this.filterOt.selected.label = data;
    this.applyFilter();
  }

  applyFilterOtf(data) {
    this.filterOt.selected.otf = data;
    this.applyFilter();
  }

  applyFilter() {
    this.filterOt.selected.pagination.currentPage=0;
    this._store.dispatch(new LoadOtTableFilter(this.filterOt));
  }

}
