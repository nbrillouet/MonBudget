import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { OtfTable } from 'app/main/_models/referential/operation-type-family.model';
import { FilterOtfTableSelection, FilterOtfTableSelected } from 'app/main/_models/filters/operation-type-family.filter';
import { Router } from '@angular/router';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { FilterSelected, FilterSelection } from 'app/main/_models/generics/filter.info.model';
import { fuseAnimations } from '@fuse/animations';
import { Datas } from 'app/main/_models/generics/detail-info.model';
import { OtfTableFilterSelectedState } from 'app/main/_ngxs/referential/operation-type-family/otf-table/otf-table-filter-selected/otf-table-filter-selected.state';
import { OtfTableFilterSelectionState } from 'app/main/_ngxs/referential/operation-type-family/otf-table/otf-table-filter-selection/otf-table-filter-selection.state';
import { OtfTableState } from 'app/main/_ngxs/referential/operation-type-family/otf-table/otf-table.state';
import { Column, EnumFilterType, EnumStyleType } from 'app/main/apps/web-component/mat-table-filter/model/mat-table-filter.model';
import { SynchronizeOtfTableFilterSelected } from 'app/main/_ngxs/referential/operation-type-family/otf-table/otf-table-filter-selected/otf-table-filter-selected.action';
import { LoadOtfTableFilterSelection } from 'app/main/_ngxs/referential/operation-type-family/otf-table/otf-table-filter-selection/otf-table-filter-selection.action';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { FuseConfirmDialogComponent } from '@fuse/components/confirm-dialog/confirm-dialog.component';
import { OtfService } from '../operation-type-family.service';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'operation-type-family-table',
  templateUrl: './operation-type-family-table.component.html',
  styleUrls: ['./operation-type-family-table.component.scss'],
  animations : fuseAnimations,
  encapsulation: ViewEncapsulation.None
})
export class OperationTypeFamilyTableComponent implements OnInit {
  
  @Select(OtfTableFilterSelectedState.get) otfTableFilterSelected$: Observable<FilterSelected<FilterOtfTableSelected>>;
  @Select(OtfTableFilterSelectionState.get) otfTableFilterSelection$: Observable<FilterSelection<FilterOtfTableSelection>>;
  @Select(OtfTableState.get) otfTable$: Observable<Datas<OtfTable[]>>;

  filterOtfSelected: FilterOtfTableSelected;
  columns : Column[]=
    [ 
      {index:0, field: 'id',label:'id',isSortable:true,width:{isFixed:true,value:70},filter: {type:EnumFilterType.none, datas: null, isEmpty: true}, pipe: false,style:{type:EnumStyleType.label,datas:null }},
      {index:1, field: 'logoClassName',label:'',isSortable:false,width:{isFixed:true,value:70},filter: {type:EnumFilterType.none, datas: null, isEmpty: true}, pipe: false,style:{type:EnumStyleType.image,datas:null}},
      {index:2, field: 'label',label:'libellé',isSortable:true,width:{isFixed:false,value:-1},filter: {type:EnumFilterType.label, datas: null, isEmpty: true},pipe:false,style:{type:EnumStyleType.label,datas:null}},
      {index:3, field: 'movement-label',label:'sens',isSortable:true,width:{isFixed:false,value:-1},filter: {type:EnumFilterType.comboMultiple, datas: null, isEmpty: true},pipe:false,style:{type:EnumStyleType.label,datas:null}},
      {index:4, field: 'none',label:'',isSortable:false,width:{isFixed:true,value:70},filter: {type:EnumFilterType.none, datas: null, isEmpty: true},pipe:false,style:{type:EnumStyleType.buttonIcon,datas:{icon: 'delete_forever',tooltip: 'supprimer enregistrement'}}}
      
    ];
  
  confirmDialogRef: MatDialogRef<FuseConfirmDialogComponent>;
  
  constructor(
    private _router: Router,
    private _store: Store,
    private _dialog: MatDialog,
    private _otfService: OtfService,
    private _notificationService: NotificationsService
    ) {
      this.filterOtfSelected = new FilterOtfTableSelected();
      this._store.dispatch(new LoadOtfTableFilterSelection(this.filterOtfSelected));
      this._store.dispatch(new SynchronizeOtfTableFilterSelected(this.filterOtfSelected));
            
      this.otfTableFilterSelected$.subscribe(selected=>{
        if(selected?.loader['filter-selected']?.loaded) {
          this.filterOtfSelected = selected.selected;
        }
      });

  }

  ngOnInit(): void {

    
  }

  onRowClick($event) {
    this._router.navigate(
      [`/apps/referential/operations/operation-type-families/${$event.id}`]);

    // this._router.navigate(
    //   [`apps/account-statement-imports/${this.filterAsifSelected.idImport}/account-statement-import-files/${$event.id}/detail`]);
  }

  applyFilterSelected(selected: FilterOtfTableSelected) {
    this._store.dispatch(new SynchronizeOtfTableFilterSelected(selected)); //ChangeAsifTableFilter(selected));
  }

  applyFilterSelection(selected: FilterOtfTableSelected) {
    this._store.dispatch(new LoadOtfTableFilterSelection(selected));
  }

  delete($event) {
    this.confirmDialogRef = this._dialog.open(FuseConfirmDialogComponent, {
          disableClose: false
        });
    
        this.confirmDialogRef.componentInstance.confirmMessage = 'Etes vous sûr de supprimer cette catégorie d\'opération? Tous les types d\'opérations associés et les opérations seront supprimés';
    
        this.confirmDialogRef.afterClosed().subscribe(result => {
          if (result)
            {
                this._otfService.deleteOtfDetail($event.id)
                .subscribe(resp => {
                  this._store.dispatch(new SynchronizeOtfTableFilterSelected(this.filterOtfSelected));
                  this._notificationService.success('Suppression réussi', 'La catégorie d\'opération est supprimé');
                }, error => {
                  this._notificationService.error('Echec suppression', error);
                })
            }
            this.confirmDialogRef = null;
        });
  }



  // @Select(OtfTableFilterState.get) otfTableFilter$: Observable<FilterInfo<FilterOtfTable>>;
  // @Select(OtfTableState.get) otfTable$: Observable<Datas<OtfTable[]>>;
  
  // @ViewChild(MatPaginator) paginator: MatPaginator;
  // @ViewChild(MatSort) sort: MatSort;

  // dataSource = new MatTableDataSource<OtfTable>();
  // filterOtf: FilterOtfTable;
  // idAccountStatement: number;
  // selectedIndex: number = 0;
  // displayedColumns = ['id','logoClassName','label','movement','buttonDelete'];
  // templateFor:string;
  // confirmDialogRef: MatDialogRef<FuseConfirmDialogComponent>;
  // filterMovement: ComboSimple<ISelect>;
  
  // constructor(
  //   private _store: Store,
  //   private _dialog: MatDialog,
  //   private _router: Router,
  //   private _otfService: OtfService,
  //   private _notificationService: NotificationsService
  // ) {

  //     this.filterOtf = new FilterOtfTable();
  //     this._store.dispatch(new LoadOtfTableFilter(this.filterOtf));

  //     this.otfTable$.subscribe(asifTable=>{
  //       this.dataSource.data = asifTable.datas; 
  //     });

      

  //  }

  // ngOnInit() {
  //   this.otfTableFilter$.subscribe(otfTableFilter=>{
  //     if(otfTableFilter.loader['filters'].loaded) {
  //       this.filterOtf = otfTableFilter.filters;
  //       this.filterMovement= {list : otfTableFilter.filters.movements,selected: otfTableFilter.filters.selected.movement};
  //     }
  //   });
  
  // }

  // // ngOnChanges(changes: SimpleChanges) {

  // //   this.headerPanelIsVisible = changes.headerPanelIsVisible.currentValue;
  // // }
  
  // onPageChangeEvent(event) {
  //   this.filterOtf.selected.pagination.currentPage = this.paginator.pageIndex;
  //   this.loadPage();
  // }
  
  // onSortChangeEvent(event): void {
  //   this.filterOtf.selected.pagination.currentPage=0;
  //   this.loadPage();
  // }

  // loadPage() {

  //   this.filterOtf.selected.pagination.nbItemsPerPage = this.paginator.pageSize;
  //   this.filterOtf.selected.pagination.sortColumn = this.sort.active;
  //   this.filterOtf.selected.pagination.sortDirection = this.sort.direction;

  //   this._store.dispatch(new ChangeOtfTableFilter(this.filterOtf.selected));
  // }

  // hasFilterData(filter:string) {
  //   if(!this.filterOtf)
  //     return false;
  //   if(filter=='label')
  //     return this.filterOtf.selected!=null && this.filterOtf.selected.label!=null && this.filterOtf.selected.label!='';
  //   if(filter=='movement')
  //   {
  //     return this.filterOtf.selected!=null && this.filterOtf.selected.movement!=null;
  //   }
  // }

  // delete(data) {
  //   this.confirmDialogRef = this._dialog.open(FuseConfirmDialogComponent, {
  //     disableClose: false
  //   });

  //   this.confirmDialogRef.componentInstance.confirmMessage = 'Etes vous sûr de supprimer cette catégorie d\'opération? Tous les types d\'opérations associés et les opérations seront supprimés';

  //   this.confirmDialogRef.afterClosed().subscribe(result => {
  //     if (result)
  //       {
  //           this._otfService.deleteOtfDetail(data.id)
  //           .subscribe(resp => {
  //             this._store.dispatch(new LoadOtfTable(this.filterOtf.selected));
  //             this._notificationService.success('Suppression réussi', 'La catégorie d\'opération est supprimé');
  //           }, error => {
  //             this._notificationService.error('Echec suppression', error);
  //           })
  //       }
  //       this.confirmDialogRef = null;
  //   });
  // }


  // detail(data) {
  //   this._router.navigate(
  //         [`/apps/referential/operations/operation-type-families/${data.id}`]);
  //   // [routerLink]="['/apps/referential/operations/operation-type-families', data.id]"
  // }

  // applyFilterLabel(data) {
  
  //   // this.filterOtf.selected.pagination.currentPage=0;
  //   this.filterOtf.selected.label = data;
  //   // this._store.dispatch(new LoadOtfTableFilter(this.filterOtf));
  //   this.applyFilter();
  // }

  // applyFilterMovement(data) {

    
  //   this.filterOtf.selected.movement = data;
  //   this.applyFilter();
  // }

  // applyFilter() {
  //   this.filterOtf.selected.pagination.currentPage=0;
  //   this._store.dispatch(new LoadOtfTableFilter(this.filterOtf));
  // }

}
