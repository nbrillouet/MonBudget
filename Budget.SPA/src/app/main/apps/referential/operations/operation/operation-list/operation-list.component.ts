import { Component, OnInit, ViewChild, ViewEncapsulation, Input, SimpleChanges, OnChanges } from '@angular/core';
import { LoadOperationTableDatas } from 'app/main/_ngxs/referential/operation/operation-list/operation-list.action';
import { FuseConfirmDialogComponent } from '@fuse/components/confirm-dialog/confirm-dialog.component';
import { ChangeOperationTableFilter, LoadOperationTableFilter } from 'app/main/_ngxs/referential/operation/operation-list-filter/operation-list-filter.action';
import { Select, Store } from '@ngxs/store';
import { OperationTableFilterState } from 'app/main/_ngxs/referential/operation/operation-list-filter/operation-list-filter.state';
import { OperationTableState } from 'app/main/_ngxs/referential/operation/operation-list/operation-list.state';
import { Observable } from 'rxjs';
import { DataInfos } from 'app/main/_models/generics/table-info.model';
import { OperationTable } from 'app/main/_models/referential/operation.model';
import { FilterInfo } from 'app/main/_models/generics/filter.info.model';
import { FilterOperationTable } from 'app/main/_models/filters/operation.filter';
import { MatPaginator, MatSort, MatTableDataSource, MatDialogRef, MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { OperationService } from 'app/main/_services/Referential/operation.service';
import { NotificationsService } from 'angular2-notifications';
import { FilterComboMultiple, FilterComboMultipleGroup } from 'app/main/_models/filters/mini-filter/combo-multiple.filters';
import { fuseAnimations } from '@fuse/animations';

@Component({
  selector: 'operation-list',
  templateUrl: './operation-list.component.html',
  styleUrls: ['./operation-list.component.scss'],
  animations : fuseAnimations,
  encapsulation: ViewEncapsulation.None
})
export class OperationListComponent implements OnInit, OnChanges {
  @Input() headerPanelIsVisible: boolean;
  
  @Select(OperationTableFilterState.get) operationTableFilter$: Observable<FilterInfo<FilterOperationTable>>;
  @Select(OperationTableState.get) operationTable$: Observable<DataInfos<OperationTable>>;
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  dataSource = new MatTableDataSource<OperationTable>();
  filterOperation: FilterOperationTable;
  selectedIndex: number = 0;
  displayedColumns = ['id','operationMethod','operationType','label','buttonDelete'];
  templateFor:string;
  confirmDialogRef: MatDialogRef<FuseConfirmDialogComponent>;

  filterOperationMethod: FilterComboMultiple ={ placeholder:'Méthode d\'opérations',combos:null };
  filterOperationType: FilterComboMultipleGroup ={ placeholder:'Type d\'opérations',combos:null };



  constructor(
    private _store: Store,
    private _dialog: MatDialog,
    private _router: Router,
    private _operationService: OperationService,
    private _notificationService: NotificationsService
  ) {

      this.filterOperation = new FilterOperationTable();
      this._store.dispatch(new LoadOperationTableFilter(this.filterOperation));

      this.operationTable$.subscribe(operationTable=>{
        this.dataSource.data = operationTable.datas; 

      });

   }

  ngOnInit() {
    this.operationTableFilter$.subscribe(operationTableFilter=>{
      if(operationTableFilter.loadingInfo.loaded) {
        this.filterOperation = operationTableFilter.filters;
        
        this.filterOperationType.combos = {list : operationTableFilter.filters.operationTypes, listSelected: operationTableFilter.filters.selected.operationTypes};
        this.filterOperationMethod.combos = {list : operationTableFilter.filters.operationMethods,listSelected: operationTableFilter.filters.selected.operationMethods};

      }
    });
  
  }
  
  ngOnChanges(changes: SimpleChanges) {

    this.headerPanelIsVisible = changes.headerPanelIsVisible.currentValue;;
  }
  
  onPageChangeEvent(event) {
    this.filterOperation.selected.pagination.currentPage = this.paginator.pageIndex;
    this.loadPage();
  }
  
  onSortChangeEvent(event): void {
    this.filterOperation.selected.pagination.currentPage=0;
    this.loadPage();
  }

  loadPage() {

    this.filterOperation.selected.pagination.nbItemsPerPage = this.paginator.pageSize;
    this.filterOperation.selected.pagination.sortColumn = this.sort.active;
    this.filterOperation.selected.pagination.sortDirection = this.sort.direction;

    this._store.dispatch(new ChangeOperationTableFilter(this.filterOperation.selected));
  }

  hasFilterData(filter:string) {
    if(!this.filterOperation)
      return false;
    if(filter=='label')
      return this.filterOperation.selected!=null && this.filterOperation.selected.label!=null && this.filterOperation.selected.label!='';
    if(filter=='operationMethod')
      return this.filterOperationMethod.combos!=null && this.filterOperationMethod.combos.listSelected && this.filterOperationMethod.combos.listSelected.length>0;
    if(filter=='operationType')
      return this.filterOperationType.combos!=null && this.filterOperationType.combos.listSelected && this.filterOperationType.combos.listSelected.length>0;
  }

  delete(data) {
    this.confirmDialogRef = this._dialog.open(FuseConfirmDialogComponent, {
      disableClose: false
    });

    this.confirmDialogRef.componentInstance.confirmMessage = 'Etes vous sûr de supprimer cette opération?';

    this.confirmDialogRef.afterClosed().subscribe(result => {
      if (result)
        {
            this._operationService.deleteDetail(data.id)
            .subscribe(resp => {
              this._store.dispatch(new LoadOperationTableDatas(this.filterOperation.selected));
              this._notificationService.success('Suppression réussi', 'L\'opération est supprimée');
            }, error => {
              this._notificationService.error('Echec suppression', error);
            })
        }
        this.confirmDialogRef = null;
    });
  }


  detail(data) {
    this._router.navigate(
          [`/apps/referential/operations/operations/${data.id}`]);
  }

  applyFilterLabel(data) {
    this.filterOperation.selected.label = data;
    this.applyFilter();
  }

  applyFilterOperationType(data) {
    this.filterOperation.selected.operationTypes = data;
    this.applyFilter();
  }

  applyFilterOperationMethod(data) {
    this.filterOperation.selected.operationMethods = data;
    this.applyFilter();
  }

  applyFilter() {
    this.filterOperation.selected.pagination.currentPage=0;
    this._store.dispatch(new LoadOperationTableFilter(this.filterOperation));
  }

}
