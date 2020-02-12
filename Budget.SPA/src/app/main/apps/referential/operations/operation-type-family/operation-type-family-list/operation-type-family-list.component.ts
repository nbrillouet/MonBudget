import { Component, OnInit, ViewChild, ViewEncapsulation, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource, MatDialogRef, MatDialog } from '@angular/material';
import { OtfTable } from 'app/main/_models/referential/operation-type-family.model';
import { FilterOtfTable } from 'app/main/_models/filters/operation-type-family.filter';
import { Router } from '@angular/router';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { FilterInfo } from 'app/main/_models/generics/filter.info.model';
import { OtfTableFilterState } from 'app/main/_ngxs/referential/operation-type-family/operation-type-family-list-filter/operation-type-family-list-filter.state';
import { OtfTableState } from 'app/main/_ngxs/referential/operation-type-family/operation-type-family-list/operation-type-family-list.state';
import { ChangeOtfTableFilter, LoadOtfTableFilter } from 'app/main/_ngxs/referential/operation-type-family/operation-type-family-list-filter/operation-type-family-list-filter.action';
import { fuseAnimations } from '@fuse/animations';
import { FuseConfirmDialogComponent } from '@fuse/components/confirm-dialog/confirm-dialog.component';
import { OtfService } from '../operation-type-family.service';
import { NotificationsService } from 'angular2-notifications';
import { LoadOtfTableDatas } from 'app/main/_ngxs/referential/operation-type-family/operation-type-family-list/operation-type-family-list.action';
import { ComboSimple } from 'app/main/_models/generics/combo.model';
import { ISelect } from 'app/main/_models/generics/select.model';
import { Datas } from 'app/main/_models/generics/detail-info.model';

@Component({
  selector: 'operation-type-family-list',
  templateUrl: './operation-type-family-list.component.html',
  styleUrls: ['./operation-type-family-list.component.scss'],
  animations : fuseAnimations,
  encapsulation: ViewEncapsulation.None
})
export class OperationTypeFamilyComponent implements OnInit {
  
  @Select(OtfTableFilterState.get) otfTableFilter$: Observable<FilterInfo<FilterOtfTable>>;
  @Select(OtfTableState.get) otfTable$: Observable<Datas<OtfTable[]>>;
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  dataSource = new MatTableDataSource<OtfTable>();
  filterOtf: FilterOtfTable;
  idAccountStatement: number;
  selectedIndex: number = 0;
  displayedColumns = ['id','logoClassName','label','movement','buttonDelete'];
  templateFor:string;
  confirmDialogRef: MatDialogRef<FuseConfirmDialogComponent>;
  filterMovement: ComboSimple<ISelect>;
 
  constructor(
    private _store: Store,
    private _dialog: MatDialog,
    private _router: Router,
    private _otfService: OtfService,
    private _notificationService: NotificationsService
  ) {

      this.filterOtf = new FilterOtfTable();
      this._store.dispatch(new LoadOtfTableFilter(this.filterOtf));

      this.otfTable$.subscribe(asifTable=>{
        this.dataSource.data = asifTable.datas; 
      });

      

   }

  ngOnInit() {
    this.otfTableFilter$.subscribe(otfTableFilter=>{
      if(otfTableFilter.loader['filters'].loaded) {
        this.filterOtf = otfTableFilter.filters;
        this.filterMovement= {list : otfTableFilter.filters.movements,selected: otfTableFilter.filters.selected.movement};
      }
    });
  
  }

  // ngOnChanges(changes: SimpleChanges) {

  //   this.headerPanelIsVisible = changes.headerPanelIsVisible.currentValue;
  // }
  
  onPageChangeEvent(event) {
    this.filterOtf.selected.pagination.currentPage = this.paginator.pageIndex;
    this.loadPage();
  }
  
  onSortChangeEvent(event): void {
    this.filterOtf.selected.pagination.currentPage=0;
    this.loadPage();
  }

  loadPage() {

    this.filterOtf.selected.pagination.nbItemsPerPage = this.paginator.pageSize;
    this.filterOtf.selected.pagination.sortColumn = this.sort.active;
    this.filterOtf.selected.pagination.sortDirection = this.sort.direction;

    this._store.dispatch(new ChangeOtfTableFilter(this.filterOtf.selected));
  }

  hasFilterData(filter:string) {
    if(!this.filterOtf)
      return false;
    if(filter=='label')
      return this.filterOtf.selected!=null && this.filterOtf.selected.label!=null && this.filterOtf.selected.label!='';
    if(filter=='movement')
    {
      return this.filterOtf.selected!=null && this.filterOtf.selected.movement!=null;
    }
  }

  delete(data) {
    this.confirmDialogRef = this._dialog.open(FuseConfirmDialogComponent, {
      disableClose: false
    });

    this.confirmDialogRef.componentInstance.confirmMessage = 'Etes vous sûr de supprimer cette catégorie d\'opération? Tous les types d\'opérations associés et les opérations seront supprimés';

    this.confirmDialogRef.afterClosed().subscribe(result => {
      if (result)
        {
            this._otfService.deleteOtfDetail(data.id)
            .subscribe(resp => {
              this._store.dispatch(new LoadOtfTableDatas(this.filterOtf.selected));
              this._notificationService.success('Suppression réussi', 'La catégorie d\'opération est supprimé');
            }, error => {
              this._notificationService.error('Echec suppression', error);
            })
        }
        this.confirmDialogRef = null;
    });
  }


  detail(data) {
    this._router.navigate(
          [`/apps/referential/operations/operation-type-families/${data.id}`]);
    // [routerLink]="['/apps/referential/operations/operation-type-families', data.id]"
  }

  applyFilterLabel(data) {
  
    // this.filterOtf.selected.pagination.currentPage=0;
    this.filterOtf.selected.label = data;
    // this._store.dispatch(new LoadOtfTableFilter(this.filterOtf));
    this.applyFilter();
  }

  applyFilterMovement(data) {

    
    this.filterOtf.selected.movement = data;
    this.applyFilter();
  }

  applyFilter() {
    this.filterOtf.selected.pagination.currentPage=0;
    this._store.dispatch(new LoadOtfTableFilter(this.filterOtf));
  }

}
