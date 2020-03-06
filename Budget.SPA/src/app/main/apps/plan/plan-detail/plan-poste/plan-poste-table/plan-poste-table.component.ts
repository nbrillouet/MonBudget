import { Component, Input, OnInit } from "@angular/core";
import { Select, Store } from "@ngxs/store";
import { Observable } from "rxjs";
import { Datas } from "app/main/_models/generics/detail-info.model";
import { PlanPosteTable, PlanPosteForDetail } from "app/main/_models/plan.model";
import { FilterSelection, FilterSelected } from "app/main/_models/generics/filter.info.model";
import { FilterPlanPosteTableSelection, FilterPlanPosteTableSelected } from "app/main/_models/filters/plan-poste.filter";
import { Column, MatTableFilter } from "app/main/apps/web-component/mat-table-filter/model/mat-table-filter.model";
import { MatDialogConfig, MatDialog } from "@angular/material/dialog";
import { PlanPosteDetailComponent } from "../plan-poste-detail/plan-poste-detail.component";
import { PlanPosteTableFilterSelectionState } from "app/main/_ngxs/plan/plan-detail/plan-poste/plan-poste-table/plan-poste-filter-selection/plan-poste-filter-selection.state";
import { PlanPosteTableFilterSelectedState } from "app/main/_ngxs/plan/plan-detail/plan-poste/plan-poste-table/plan-poste-filter-selected/plan-poste-filter-selected.state";
import { PlanPosteTableState } from "app/main/_ngxs/plan/plan-detail/plan-poste/plan-poste-table/plan-poste-table.state";
import { LoadPlanPosteTableFilterSelection } from "app/main/_ngxs/plan/plan-detail/plan-poste/plan-poste-table/plan-poste-filter-selection/plan-poste-filter-selection.action";
import { SynchronizePlanPosteTableFilterSelected } from "app/main/_ngxs/plan/plan-detail/plan-poste/plan-poste-table/plan-poste-filter-selected/plan-poste-filter-selected.action";
import { LoadPlanPosteTable } from "app/main/_ngxs/plan/plan-detail/plan-poste/plan-poste-table/plan-poste-table.action";
import { EnumFilterType, EnumStyleType } from "app/main/apps/web-component/mat-table-filter/model/mat-table-filter.enum";
import { PLAN_POSTE_COLUMNS } from "app/main/_constants/mat-table-filter-column.const";
import { OperationDetail } from "app/main/_models/referential/operation-detail.model";
import { PlanPosteService } from "../../../plan-poste.service";
import { NotificationsService } from "angular2-notifications";

@Component({
  selector: 'plan-poste-table',
  templateUrl: './plan-poste-table.component.html',
  styleUrls: ['./plan-poste-table.component.scss']
})
export class PlanPosteTableComponent implements OnInit {
  @Input() idPlan: number;
  @Input() idPoste: number;

  @Select(PlanPosteTableFilterSelectionState.get) planPosteTableFilterSelection$: Observable<FilterSelection<FilterPlanPosteTableSelection>>;
  @Select(PlanPosteTableFilterSelectedState.get) planPosteTableFilterSelected$: Observable<FilterSelected<FilterPlanPosteTableSelected>>;
  @Select(PlanPosteTableState.get) planPosteTable$: Observable<Datas<PlanPosteTable[]>>;

  filterPlanPosteTableSelected: FilterPlanPosteTableSelected = new FilterPlanPosteTableSelected();
  
  // columns = PLAN_POSTE_COLUMNS;
  matTableFilter: MatTableFilter = {
    columns: PLAN_POSTE_COLUMNS, 
    filterSelection$: this.planPosteTableFilterSelection$,
    filterSelected$: this.planPosteTableFilterSelected$,
    table$: this.planPosteTable$,
    toolbar: {buttonAdd: {enabled: true}, buttonDelete:{enabled:true} }
  };
  // : Column[]=
  //   [ 
  //       {index:0, field: 'id',label:'id',isSortable:true,width:{isFixed:true,value:70},filter: {type:EnumFilterType.none, datas: null, isEmpty: true}, pipe: false,style:{type:EnumStyleType.label,datas:null }},
  //       {index:1, field: 'label',label:'libellé',isSortable:true,width:{isFixed:false,value:-1},filter: {type:EnumFilterType.label, datas: null, isEmpty: true}, pipe: false,style:{type:EnumStyleType.label,datas:null}}
  //   ];
    
  constructor(
    private _store: Store,
    private _dialog: MatDialog,
    private _planPosteService: PlanPosteService,
    private _notificationsService: NotificationsService
    ) {
      
    }
    
  ngOnInit(){
    
    this.filterPlanPosteTableSelected = new FilterPlanPosteTableSelected();
    this.filterPlanPosteTableSelected.idPlan = this.idPlan;
    this.filterPlanPosteTableSelected.idPoste = this.idPoste;

    this._store.dispatch(new LoadPlanPosteTableFilterSelection(this.filterPlanPosteTableSelected));
    this._store.dispatch(new SynchronizePlanPosteTableFilterSelected(this.filterPlanPosteTableSelected));
    
    this.planPosteTableFilterSelected$.subscribe(selected=>{
      if(selected?.loader['filter-selected']?.loaded) {
        this.filterPlanPosteTableSelected = selected.selected;
      }
    });
  }

  openDetail(idPlanPoste: number) {
    const dialogConfig = new MatDialogConfig();
 
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width='70%';
    dialogConfig.height='85%';

    dialogConfig.data = <PlanPosteForDetail>{
        id: idPlanPoste,
        idPlan: this.filterPlanPosteTableSelected.idPlan,
        idPoste: this.filterPlanPosteTableSelected.idPoste
    };

    const dialogRef = this._dialog.open(PlanPosteDetailComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(data => {
      this._store.dispatch(new SynchronizePlanPosteTableFilterSelected(this.filterPlanPosteTableSelected));
    });    
  }

  onRowClick($event) {
    this.openDetail($event.id);


  }

  applyFilterSelected(selected: FilterPlanPosteTableSelected) {
    this._store.dispatch(new LoadPlanPosteTable(selected));
  }

  applyFilterSelection(selection: FilterPlanPosteTableSelection) { 

  }

  addItem($event){
    this.openDetail(0);
  }

  deleteItems($event){
    this._planPosteService.deletePlanPosteDetail($event)
      .subscribe(x => {
        this._store.dispatch(new SynchronizePlanPosteTableFilterSelected(this.filterPlanPosteTableSelected));
        this._notificationsService.success('Suppression(s) réussie(s)', `${$event.length} élément(s) supprimé(s)`);
      }, error => {
        this._notificationsService.error('Echec suppression', error);
      });
  }

}
//   displayedColumns: string[] = ['checkbox','label','delete','detail'];

//   hasSelectedRecette: boolean;
//   checkboxes: number[]=[];

//   constructor(
//     private _dialog: MatDialog,
//     private _planPosteService: PlanPosteService,
//     private _store: Store,
//     private _notificationService: NotificationsService
//     ) {
 
//    }

//   ngOnInit() {

//   }

//   delete() {
//     if(this.checkboxes.length>0) {


//     this._planPosteService.deletePlanPosteDetail(this.checkboxes)
//       .subscribe(x => {
//         let planDetailFilter = <PlanDetailFilter>{
//           id:this.plan.id
//         };
//         this.checkboxes=[];
//         this.hasSelectedRecette=false;
//         this._store.dispatch(new ChangePlanDetailFilter(planDetailFilter));
//         this._notificationService.success('Suppression(s) réussie(s)', `${this.dataSource.poste.label} supprimée(s)`);
//       }, error => {
//         this._notificationService.error('Echec suppression', error);
//       });
//     }
//     else
//     {
//       this._notificationService.error('Aucune ligne sélectionnée', 'suppression impossible');
//     }
//   }

//   openDetail(data) {

//     const dialogConfig = new MatDialogConfig();
 
//     dialogConfig.disableClose = true;
//     dialogConfig.autoFocus = true;
//     dialogConfig.width='70%';
//     dialogConfig.height='85%';
    
//     let idData = data==0 ? 0 : data.id;

//     dialogConfig.data = {
//         id: idData,
//         idPlan: this.plan.id,
//         idPoste: this.dataSource.poste.id
//     };

//     const dialogRef = this._dialog.open(PlanPosteDetailComponent, dialogConfig);

//     dialogRef.afterClosed().subscribe(data => {
//       this._store.dispatch(new ClearPlanPosteDetailDatas());
//     });    
//   }

//   onSelectedChange($event,idAccount:number)
//   {
//     if($event.checked) {
//       this.checkboxes.push(idAccount);
//     }
//     else
//     {
//       let index = this.checkboxes.indexOf(idAccount);
//       if (index > -1) {
//         this.checkboxes.splice(index, 1);
//       }
//     }
//     this.hasSelectedRecette = this.checkboxes.length>0;
//   }

// }
