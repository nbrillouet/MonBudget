import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AsTable } from 'app/main/_models/account-statement/account-statement-table.model';
import { fuseAnimations } from '@fuse/animations';
import { Select, Store } from '@ngxs/store';
import { PlanNotAsTableFilterSelectionState } from 'app/main/_ngxs/plan/plan-detail/plan-not-as-table/plan-not-as-table-filter-selection/plan-not-as-table-filter-selection.state';
import { PlanNotAsTableFilterSelectedState } from 'app/main/_ngxs/plan/plan-detail/plan-not-as-table/plan-not-as-table-filter-selected/plan-not-as-table-filter-selected.state';
import { PlanNotAsTableState } from 'app/main/_ngxs/plan/plan-detail/plan-not-as-table/plan-not-as-table.state';
import { Observable, Subscription } from 'rxjs';
import { Datas } from 'app/main/_models/generics/detail-info.model';
import { FilterSelection, FilterSelected } from 'app/main/_models/generics/filter.info.model';
import { FilterPlanNotAsTableSelection, FilterPlanNotAsTableSelected, FilterFixedPlanNotAsTableSelected, FilterPlanNotAsTableGroupSelected } from 'app/main/_models/filters/plan-not-as.filter';
import { Column, EnumFilterType, EnumStyleType } from 'app/main/apps/web-component/mat-table-filter/model/mat-table-filter.model';
import { LoadPlanNotAsTableFilterSelection } from 'app/main/_ngxs/plan/plan-detail/plan-not-as-table/plan-not-as-table-filter-selection/plan-not-as-table-filter-selection.action';
import { LoadPlanNotAsTable } from 'app/main/_ngxs/plan/plan-detail/plan-not-as-table/plan-not-as-table.action';

@Component({
  selector: 'plan-not-as-table',
  templateUrl: './plan-not-as-table.component.html',
  styleUrls: ['./plan-not-as-table.component.scss'],
  animations : fuseAnimations
})
export class PlanNotAsTableComponent implements OnInit {
  @Select(PlanNotAsTableFilterSelectionState.get) planNotAsTableFilterSelection$: Observable<FilterSelection<FilterPlanNotAsTableSelection>>;
  @Select(PlanNotAsTableFilterSelectedState.get) planNotAsTableFilterSelected$: Observable<FilterSelected<FilterPlanNotAsTableSelected>>;
  @Select(PlanNotAsTableState.get) planNotAsTable$: Observable<Datas<AsTable[]>>;
  
  asTableFilterSelection$$: Subscription;
  asTableFilterSelected$$: Subscription;
  asTable$$: Subscription;

  filterPlanNotAsGroupSelected: FilterPlanNotAsTableGroupSelected; // = new FilterPlanNotAsTableSelected();
  // filterFixedPlanNotAsTableSelected: FilterFixedPlanNotAsTableSelected;
  // FilterPlanNotAsTableSelected: FilterPlanNotAsTableSelected = new FilterPlanNotAsTableSelected();

  columns : Column[]=
    [ 
      {index:0, field: 'id',label:'id',isSortable:true,width:{isFixed:true,value:70},filter: {type:EnumFilterType.none, datas: null, isEmpty: true}, pipe: false,style:{type:EnumStyleType.label,datas:null }},
      {index:1, field: 'plans',label:'budget',isSortable:false,width:{isFixed:true,value:70},filter: {type:EnumFilterType.none, datas: null, isEmpty: true}, pipe: false,style:{type: EnumStyleType.dotDatas,datas:null}},
      {index:2, field: 'operationMethod-label',label:'Méthode opérations',isSortable:true,width:{isFixed:false,value:-1},filter: {type:EnumFilterType.comboMultiple, datas: null, isEmpty: true}, pipe: false,style:{type:EnumStyleType.label,datas:null}},
      {index:3, field: 'operationTypeFamily-label',label:'Catégorie operations',isSortable:true,width:{isFixed:false,value:-1},filter: {type:EnumFilterType.comboMultipleGroup, datas: null, isEmpty: true},pipe:false,style:{type:EnumStyleType.label,datas:null}},
      {index:4, field: 'operationType-label',label:'Type operations',isSortable:true,width:{isFixed:false,value:-1},filter: {type:EnumFilterType.comboMultipleGroup, datas: null, isEmpty: true},pipe:false,style:{type:EnumStyleType.label,datas:null}},
      {index:5, field: 'operation-label',label:'Operations',isSortable:true,width:{isFixed:false,value:-1},filter: {type:EnumFilterType.comboMultiple, datas: null, isEmpty: true},pipe:false,style:{type:EnumStyleType.label,datas:null}},
      {index:6, field: 'dateIntegration',label:'Date int.',isSortable:true,width:{isFixed:false,value:-1}, filter: {type:EnumFilterType.dateRange, datas: null, isEmpty: true},pipe:true,style:{type:EnumStyleType.label,datas:null} },
      {index:7, field: 'amountOperation',label:'montant',isSortable:true,width:{isFixed:false,value:-1},filter: {type:EnumFilterType.numberRange, datas: null, isEmpty: true},pipe:false,style: {type:EnumStyleType.numberUpDown,datas:{isoNumber:0}} }
    ];


constructor(
    private _store: Store,
    private _dialogRef: MatDialogRef<PlanNotAsTableComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) { 
    this.filterPlanNotAsGroupSelected = new FilterPlanNotAsTableGroupSelected();
    this.filterPlanNotAsGroupSelected.filterFixedPlanNotAsTableSelected = data;
    this.filterPlanNotAsGroupSelected.filterPlanNotAsTableSelected = new FilterPlanNotAsTableSelected();
    
    this._store.dispatch(new LoadPlanNotAsTableFilterSelection(this.filterPlanNotAsGroupSelected.filterPlanNotAsTableSelected));
    this._store.dispatch(new LoadPlanNotAsTable(this.filterPlanNotAsGroupSelected));


    // this.dataSource.data = data;
  }


  // dataSource = new MatTableDataSource<AsTable>();
  // displayedColumns = ['id','operationMethod','operationTypeFamily','operationType','operation','dateIntegration','amountOperation'];
  // templateFor:string;

  // constructor(
  //   private _dialogRef: MatDialogRef<PlanNotAsTableComponent>,
  //   @Inject(MAT_DIALOG_DATA) data
  // ) { 
  //   this.dataSource.data = data;
  // }

  ngOnInit() {
  }

  onRowClick($event) {
    // this._router.navigate([`apps/referential/users/${$event.id}/detail`]);
  }

  applyFilterSelected(selected: FilterPlanNotAsTableSelected) {
    // this._store.dispatch(new LoadUserTable(selected));
  }

  applyFilterSelection(selection: FilterPlanNotAsTableSelected) { 

  }
  
  close() {
    this._dialogRef.close();
  }

}
