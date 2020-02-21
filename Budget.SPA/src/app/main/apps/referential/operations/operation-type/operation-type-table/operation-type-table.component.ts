import { Component, OnInit, ViewEncapsulation, ViewChild, SimpleChanges, Input, OnChanges } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { OtTable } from 'app/main/_models/referential/operation-type.model';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { FuseConfirmDialogComponent } from '@fuse/components/confirm-dialog/confirm-dialog.component';
import { Router } from '@angular/router';
import { OtService } from '../operation-type.service';
import { NotificationsService } from 'angular2-notifications';
import { Datas } from 'app/main/_models/generics/detail-info.model';
import { OtTableFilterSelectedState } from 'app/main/_ngxs/referential/operation-type/ot-table/ot-table-filter-selected/ot-table-filter-selected.state';
import { OtTableState } from 'app/main/_ngxs/referential/operation-type/ot-table/ot-table.state';
import { OtTableFilterSelectionState } from 'app/main/_ngxs/referential/operation-type/ot-table/ot-table-filter-selection/ot-table-filter-selection.state';
import { FilterSelected, FilterSelection } from 'app/main/_models/generics/filter.info.model';
import { FilterOtTableSelected, FilterOtTableSelection } from 'app/main/_models/filters/operation-type.filter';
import { Column, EnumFilterType, EnumStyleType } from 'app/main/apps/web-component/mat-table-filter/model/mat-table-filter.model';
import { LoadOtTableFilterSelection } from 'app/main/_ngxs/referential/operation-type/ot-table/ot-table-filter-selection/ot-table-filter-selection.action';
import { SynchronizeOtTableFilterSelected } from 'app/main/_ngxs/referential/operation-type/ot-table/ot-table-filter-selected/ot-table-filter-selected.action';

@Component({
  selector: 'operation-type-table',
  templateUrl: './operation-type-table.component.html',
  styleUrls: ['./operation-type-table.component.scss'],
  animations : fuseAnimations,
  encapsulation: ViewEncapsulation.None
})
export class OperationTypeTableComponent implements OnInit {
  @Select(OtTableFilterSelectedState.get) otTableFilterSelected$: Observable<FilterSelected<FilterOtTableSelected>>;
  @Select(OtTableFilterSelectionState.get) otTableFilterSelection$: Observable<FilterSelection<FilterOtTableSelection>>;
  @Select(OtTableState.get) otTable$: Observable<Datas<OtTable[]>>;

  filterOtSelected: FilterOtTableSelected;
  columns : Column[]=
    [ 
      {index:0, field: 'id',label:'id',isSortable:true,width:{isFixed:true,value:70},filter: {type:EnumFilterType.none, datas: null, isEmpty: true}, pipe: false,style:{type:EnumStyleType.label,datas:null }},
      {index:1, field: 'operationTypeFamily-label',label:'Catégorie opération',isSortable:true,width:{isFixed:false,value:-1},filter: {type:EnumFilterType.comboMultiple, datas: null, isEmpty: true}, pipe: false,style:{type:EnumStyleType.label,datas:null}},
      {index:3, field: 'label',label:'libellé',isSortable:true,width:{isFixed:false,value:-1},filter: {type:EnumFilterType.label, datas: null, isEmpty: true},pipe:false,style:{type:EnumStyleType.label,datas:null}},
      // {index:3, field: 'movement-label',label:'sens',isSortable:true,width:{isFixed:false,value:-1},filter: {type:EnumFilterType.comboMultiple, datas: null, isEmpty: true},pipe:false,style:{type:EnumStyleType.label,datas:null}},
      {index:4, field: 'none',label:'',isSortable:false,width:{isFixed:true,value:70},filter: {type:EnumFilterType.none, datas: null, isEmpty: true},pipe:false,style:{type:EnumStyleType.buttonIcon,datas:{icon: 'delete_forever',tooltip: 'supprimer enregistrement'}}}
      
    ];
  
  confirmDialogRef: MatDialogRef<FuseConfirmDialogComponent>;
  
  constructor(
    private _router: Router,
    private _store: Store,
    private _dialog: MatDialog,
    private _otService: OtService,
    private _notificationService: NotificationsService
    ) {
      this.filterOtSelected = new FilterOtTableSelected();
      this._store.dispatch(new LoadOtTableFilterSelection(this.filterOtSelected));
      this._store.dispatch(new SynchronizeOtTableFilterSelected(this.filterOtSelected));
            
      this.otTableFilterSelected$.subscribe(selected=>{
        if(selected?.loader['filter-selected']?.loaded) {
          this.filterOtSelected = selected.selected;
        }
      });

  }

  ngOnInit(): void {

    
  }

  onRowClick($event) {
    this._router.navigate(
      [`/apps/referential/operations/operation-types/${$event.id}`]);
  }

  applyFilterSelected(selected: FilterOtTableSelected) {
    this._store.dispatch(new SynchronizeOtTableFilterSelected(selected));
  }

  applyFilterSelection(selected: FilterOtTableSelected) {
    this._store.dispatch(new LoadOtTableFilterSelection(selected));
  }

  delete($event) {
    this.confirmDialogRef = this._dialog.open(FuseConfirmDialogComponent, {
          disableClose: false
        });
    
        this.confirmDialogRef.componentInstance.confirmMessage = 'Etes vous sûr de supprimer cette catégorie d\'opération? Tous les types d\'opérations associés et les opérations seront supprimés';
    
        this.confirmDialogRef.afterClosed().subscribe(result => {
          if (result)
            {
                this._otService.deleteOtDetail($event.id)
                .subscribe(resp => {
                  this._store.dispatch(new SynchronizeOtTableFilterSelected(this.filterOtSelected));
                  this._notificationService.success('Suppression réussi', 'La catégorie d\'opération est supprimé');
                }, error => {
                  this._notificationService.error('Echec suppression', error);
                })
            }
            this.confirmDialogRef = null;
        });
  }
}



//   @Select(OtTableFilterState.get) otTableFilter$: Observable<FilterInfo<FilterOtTable>>;
//   @Select(OtTableState.get) otTable$: Observable<Datas<OtTable[]>>;
  
//   @ViewChild(MatPaginator) paginator: MatPaginator;
//   @ViewChild(MatSort) sort: MatSort;

//   dataSource = new MatTableDataSource<OtTable>();
//   filterOt: FilterOtTable;
//   idAccountStatement: number;
//   selectedIndex: number = 0;
//   displayedColumns = ['id','operationTypeFamily','label','buttonDelete'];
//   templateFor:string;
//   confirmDialogRef: MatDialogRef<FuseConfirmDialogComponent>;
  
//   filterOtf: ComboSimple<ISelect>=null;

//   constructor(
//     private _store: Store,
//     private _dialog: MatDialog,
//     private _router: Router,
//     private _otService: OtService,
//     private _notificationService: NotificationsService
//   ) {

//       this.filterOt = new FilterOtTable();
//       this._store.dispatch(new LoadOtTableFilter(this.filterOt));

//       this.otTable$.subscribe(otTable=>{
//         this.dataSource.data = otTable.datas; 

//       });

//    }

//   ngOnInit() {
//     this.otTableFilter$.subscribe(otTableFilter=>{
//       if(otTableFilter.loader['filters'].loaded) {
//         this.filterOt = otTableFilter.filters;
//         this.filterOtf= {list : otTableFilter.filters.otfs,selected: otTableFilter.filters.selected.otf};

//       }
//     });
  
//   }

//   // ngOnChanges(changes: SimpleChanges) {

//   //   this.headerPanelIsVisible = changes.headerPanelIsVisible.currentValue;;
//   // }
  
//   onPageChangeEvent(event) {
//     this.filterOt.selected.pagination.currentPage = this.paginator.pageIndex;
//     this.loadPage();
//   }
  
//   onSortChangeEvent(event): void {
//     this.filterOt.selected.pagination.currentPage=0;
//     this.loadPage();
//   }

//   loadPage() {

//     this.filterOt.selected.pagination.nbItemsPerPage = this.paginator.pageSize;
//     this.filterOt.selected.pagination.sortColumn = this.sort.active;
//     this.filterOt.selected.pagination.sortDirection = this.sort.direction;

//     this._store.dispatch(new ChangeOtTableFilter(this.filterOt.selected));
//   }

//   hasFilterData(filter:string) {
//     if(!this.filterOt)
//       return false;
//     if(filter=='label')
//       return this.filterOt.selected!=null && this.filterOt.selected.label!=null && this.filterOt.selected.label!='';
//     if(filter=='operationTypeFamily')
//       return this.filterOt.selected!=null && this.filterOt.selected.otf!=null;
//   }

//   delete(data) {
//     this.confirmDialogRef = this._dialog.open(FuseConfirmDialogComponent, {
//       disableClose: false
//     });

//     this.confirmDialogRef.componentInstance.confirmMessage = 'Etes vous sûr de supprimer ce type d\'opération? \nToutes les opérations associées seront supprimées';

//     this.confirmDialogRef.afterClosed().subscribe(result => {
//       if (result)
//         {
//             this._otService.deleteOtDetail(data.id)
//             .subscribe(resp => {
//               this._store.dispatch(new LoadOtTableDatas(this.filterOt.selected));
//               this._notificationService.success('Suppression réussi', 'Le type d\'opération est supprimé');
//             }, error => {
//               this._notificationService.error('Echec suppression', error);
//             })
//         }
//         this.confirmDialogRef = null;
//     });
//   }


//   detail(data) {
//     this._router.navigate(
//           [`/apps/referential/operations/operation-types/${data.id}`]);
//   }

//   applyFilterLabel(data) {
//     this.filterOt.selected.label = data;
//     this.applyFilter();
//   }

//   applyFilterOtf(data) {
//     this.filterOt.selected.otf = data;
//     this.applyFilter();
//   }

//   applyFilter() {
//     this.filterOt.selected.pagination.currentPage=0;
//     this._store.dispatch(new LoadOtTableFilter(this.filterOt));
//   }

// }
