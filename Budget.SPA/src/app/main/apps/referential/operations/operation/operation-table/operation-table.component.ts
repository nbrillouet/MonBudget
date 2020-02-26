import { Component, ViewEncapsulation, OnInit } from "@angular/core";
import { fuseAnimations } from "@fuse/animations";
import { Select, Store } from "@ngxs/store";
import { OperationTableFilterSelectionState } from "app/main/_ngxs/referential/operation/operation-table/operation-table-filter-selection/operation-table-filter-slection.action";
import { OperationTableFilterSelectedState } from "app/main/_ngxs/referential/operation/operation-table/operation-table-filter-selected/operation-table-filter-selected.state";
import { OperationTableState } from "app/main/_ngxs/referential/operation/operation-table/operation-table.state";
import { Observable } from "rxjs";
import { FilterSelection, FilterSelected } from "app/main/_models/generics/filter.info.model";
import { Datas } from "app/main/_models/generics/detail-info.model";
import { OperationTable } from "app/main/_models/referential/operation.model";
import { FilterOperationTableSelection, FilterOperationTableSelected } from "app/main/_models/filters/operation.filter";
import { Column, EnumFilterType, EnumStyleType } from "app/main/apps/web-component/mat-table-filter/model/mat-table-filter.model";
import { MatDialogRef, MatDialog } from "@angular/material/dialog";
import { FuseConfirmDialogComponent } from "@fuse/components/confirm-dialog/confirm-dialog.component";
import { Router } from "@angular/router";
import { OperationService } from "app/main/_services/Referential/operation.service";
import { NotificationsService } from "angular2-notifications";
import { LoadOperationTableFilterSelection } from "app/main/_ngxs/referential/operation/operation-table/operation-table-filter-selection/operation-table-filter-selection.state";
import { SynchronizeOperationTableFilterSelected } from "app/main/_ngxs/referential/operation/operation-table/operation-table-filter-selected/operation-table-filter-selected.action";

@Component({
  selector: 'operation-table',
  templateUrl: './operation-table.component.html',
  styleUrls: ['./operation-table.component.scss'],
  animations : fuseAnimations
  // encapsulation: ViewEncapsulation.None
})
export class OperationTableComponent implements OnInit {
@Select(OperationTableFilterSelectionState.get) operationTableFilterSelection$: Observable<FilterSelection<FilterOperationTableSelection>>;
@Select(OperationTableFilterSelectedState.get) operationTableFilterSelected$: Observable<FilterSelected<FilterOperationTableSelected>>;
@Select(OperationTableState.get) operationTable$: Observable<Datas<OperationTable[]>>;

  filterOperationSelected: FilterOperationTableSelected = new FilterOperationTableSelected();
  columns : Column[]=
    [ 
      {index:0, field: 'id',label:'id',isSortable:true,width:{isFixed:true,value:70},filter: {type:EnumFilterType.none, datas: null, isEmpty: true}, pipe: false,style:{type:EnumStyleType.label,datas:null }},
      {index:1, field: 'operationMethod-label',label:'Méthode opération',isSortable:true,width:{isFixed:false,value:-1},filter: {type:EnumFilterType.comboMultiple, datas: null, isEmpty: true}, pipe: false,style:{type:EnumStyleType.label,datas:null}},
      {index:2, field: 'operationType-label',label:'Type opération',isSortable:true,width:{isFixed:false,value:-1},filter: {type:EnumFilterType.comboMultipleGroup, datas: null, isEmpty: true}, pipe: false,style:{type:EnumStyleType.label,datas:null}},
      {index:3, field: 'label',label:'libellé',isSortable:true,width:{isFixed:false,value:-1},filter: {type:EnumFilterType.label, datas: null, isEmpty: true},pipe:false,style:{type:EnumStyleType.label,datas:null}},
      {index:4, field: 'none',label:'',isSortable:false,width:{isFixed:true,value:70},filter: {type:EnumFilterType.none, datas: null, isEmpty: true},pipe:false,style:{type:EnumStyleType.buttonIcon,datas:{icon: 'delete_forever',tooltip: 'supprimer enregistrement'}}}
    ];
  
  confirmDialogRef: MatDialogRef<FuseConfirmDialogComponent>;
  
  constructor(
    private _router: Router,
    private _store: Store,
    private _dialog: MatDialog,
    private _operationService: OperationService,
    private _notificationService: NotificationsService
    ) {
      console.log('operation-loaded');
      this.filterOperationSelected = new FilterOperationTableSelected();
      this._store.dispatch(new LoadOperationTableFilterSelection(this.filterOperationSelected));
      this._store.dispatch(new SynchronizeOperationTableFilterSelected(this.filterOperationSelected));
            
      this.operationTableFilterSelected$.subscribe(selected=>{
        if(selected?.loader['filter-selected']?.loaded) {
          this.filterOperationSelected = selected.selected;
        }
      });

  }

  ngOnInit(): void {

    
  }

  onRowClick($event) {
    this._router.navigate(
      [`/apps/referential/operations/operations/${$event.id}`]);
  }

  applyFilterSelected(selected: FilterOperationTableSelected) {
    this._store.dispatch(new SynchronizeOperationTableFilterSelected(selected));
  }

  applyFilterSelection(selected: FilterOperationTableSelected) {
    this._store.dispatch(new LoadOperationTableFilterSelection(selected));
  }

  delete($event) {
    this.confirmDialogRef = this._dialog.open(FuseConfirmDialogComponent, {
          disableClose: false
        });
    
        this.confirmDialogRef.componentInstance.confirmMessage = 'Etes vous sûr de supprimer cette catégorie d\'opération? Tous les types d\'opérations associés et les opérations seront supprimés';
    
        this.confirmDialogRef.afterClosed().subscribe(result => {
          if (result)
            {
                this._operationService.deleteOperationDetail($event.id)
                .subscribe(resp => {
                  this._store.dispatch(new SynchronizeOperationTableFilterSelected(this.filterOperationSelected));
                  this._notificationService.success('Suppression réussie', 'Opération supprimée');
                }, error => {
                  this._notificationService.error('Echec suppression', error);
                })
            }
            this.confirmDialogRef = null;
        });
  }
}





// import { Component, OnInit, ViewChild, ViewEncapsulation, Input, SimpleChanges, OnChanges } from '@angular/core';
// import { LoadOperationTableDatas } from 'app/main/_ngxs/referential/operation/operation-list/operation-list.action';
// import { FuseConfirmDialogComponent } from '@fuse/components/confirm-dialog/confirm-dialog.component';
// import { ChangeOperationTableFilter, LoadOperationTableFilter } from 'app/main/_ngxs/referential/operation/operation-list-filter/operation-list-filter.action';
// import { Select, Store } from '@ngxs/store';
// import { OperationTableFilterState } from 'app/main/_ngxs/referential/operation/operation-list-filter/operation-list-filter.state';
// import { OperationTableState } from 'app/main/_ngxs/referential/operation/operation-list/operation-list.state';
// import { Observable } from 'rxjs';
// import { OperationTable } from 'app/main/_models/referential/operation.model';
// import { FilterInfo } from 'app/main/_models/generics/filter.info.model';
// import { FilterOperationTable } from 'app/main/_models/filters/operation.filter';
// import { MatDialogRef, MatDialog } from '@angular/material/dialog';
// import { MatPaginator } from '@angular/material/paginator';
// import { MatSort } from '@angular/material/sort';
// import { MatTableDataSource } from '@angular/material/table';
// import { Router } from '@angular/router';
// import { OperationService } from 'app/main/_services/Referential/operation.service';
// import { NotificationsService } from 'angular2-notifications';
// import { FilterComboMultiple, FilterComboMultipleGroup } from 'app/main/_models/filters/mini-filter/combo-multiple.filters';
// import { fuseAnimations } from '@fuse/animations';
// import { Datas } from 'app/main/_models/generics/detail-info.model';


// @Component({
//   selector: 'operation-table',
//   templateUrl: './operation-table.component.html',
//   styleUrls: ['./operation-table.component.scss'],
//   animations : fuseAnimations,
//   encapsulation: ViewEncapsulation.None
// })
// export class OperationTableComponent implements OnInit {
  
//   @Select(OperationTableFilterState.get) operationTableFilter$: Observable<FilterInfo<FilterOperationTable>>;
//   @Select(OperationTableState.get) operationTable$: Observable<Datas<OperationTable[]>>;
  
//   @ViewChild(MatPaginator) paginator: MatPaginator;
//   @ViewChild(MatSort) sort: MatSort;

//   dataSource = new MatTableDataSource<OperationTable>();
//   filterOperation: FilterOperationTable;
//   selectedIndex: number = 0;
//   displayedColumns = ['id','operationMethod','operationType','label','buttonDelete'];
//   templateFor:string;
//   confirmDialogRef: MatDialogRef<FuseConfirmDialogComponent>;

//   filterOperationMethod: FilterComboMultiple ={ placeholder:'Méthode d\'opérations',combos:null };
//   filterOperationType: FilterComboMultipleGroup ={ placeholder:'Type d\'opérations',combos:null };



//   constructor(
//     private _store: Store,
//     private _dialog: MatDialog,
//     private _router: Router,
//     private _operationService: OperationService,
//     private _notificationService: NotificationsService
//   ) {

//       this.filterOperation = new FilterOperationTable();
//       this._store.dispatch(new LoadOperationTableFilter(this.filterOperation));

//       this.operationTable$.subscribe(operationTable=>{
//         this.dataSource.data = operationTable.datas; 

//       });

//    }

//   ngOnInit() {
//     this.operationTableFilter$.subscribe(operationTableFilter=>{
//       if(operationTableFilter.loader['filters'].loaded) {
//         this.filterOperation = operationTableFilter.filters;
        
//         this.filterOperationType.combos = {list : operationTableFilter.filters.operationTypes, listSelected: operationTableFilter.filters.selected.operationTypes};
//         this.filterOperationMethod.combos = {list : operationTableFilter.filters.operationMethods,listSelected: operationTableFilter.filters.selected.operationMethods};

//       }
//     });
  
//   }
  
//   // ngOnChanges(changes: SimpleChanges) {

//   //   this.headerPanelIsVisible = changes.headerPanelIsVisible.currentValue;;
//   // }
  
//   onPageChangeEvent(event) {
//     this.filterOperation.selected.pagination.currentPage = this.paginator.pageIndex;
//     this.loadPage();
//   }
  
//   onSortChangeEvent(event): void {
//     this.filterOperation.selected.pagination.currentPage=0;
//     this.loadPage();
//   }

//   loadPage() {

//     this.filterOperation.selected.pagination.nbItemsPerPage = this.paginator.pageSize;
//     this.filterOperation.selected.pagination.sortColumn = this.sort.active;
//     this.filterOperation.selected.pagination.sortDirection = this.sort.direction;

//     this._store.dispatch(new ChangeOperationTableFilter(this.filterOperation.selected));
//   }

//   hasFilterData(filter:string) {
//     if(!this.filterOperation)
//       return false;
//     if(filter=='label')
//       return this.filterOperation.selected!=null && this.filterOperation.selected.label!=null && this.filterOperation.selected.label!='';
//     if(filter=='operationMethod')
//       return this.filterOperationMethod.combos!=null && this.filterOperationMethod.combos.listSelected && this.filterOperationMethod.combos.listSelected.length>0;
//     if(filter=='operationType')
//       return this.filterOperationType.combos!=null && this.filterOperationType.combos.listSelected && this.filterOperationType.combos.listSelected.length>0;
//   }

//   delete(data) {
//     this.confirmDialogRef = this._dialog.open(FuseConfirmDialogComponent, {
//       disableClose: false
//     });

//     this.confirmDialogRef.componentInstance.confirmMessage = 'Etes vous sûr de supprimer cette opération?';

//     this.confirmDialogRef.afterClosed().subscribe(result => {
//       if (result)
//         {
//             this._operationService.deleteDetail(data.id)
//             .subscribe(resp => {
//               this._store.dispatch(new LoadOperationTableDatas(this.filterOperation.selected));
//               this._notificationService.success('Suppression réussi', 'L\'opération est supprimée');
//             }, error => {
//               this._notificationService.error('Echec suppression', error);
//             })
//         }
//         this.confirmDialogRef = null;
//     });
//   }


//   detail(data) {
//     this._router.navigate(
//           [`/apps/referential/operations/operations/${data.id}`]);
//   }

//   applyFilterLabel(data) {
//     this.filterOperation.selected.label = data;
//     this.applyFilter();
//   }

//   applyFilterOperationType(data) {
//     this.filterOperation.selected.operationTypes = data;
//     this.applyFilter();
//   }

//   applyFilterOperationMethod(data) {
//     this.filterOperation.selected.operationMethods = data;
//     this.applyFilter();
//   }

//   applyFilter() {
//     this.filterOperation.selected.pagination.currentPage=0;
//     this._store.dispatch(new LoadOperationTableFilter(this.filterOperation));
//   }

// }
