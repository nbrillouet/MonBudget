import { Component, OnInit } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { PlanTable } from 'app/main/_models/plan/plan.model';
import { DatasFilter, Datas } from 'app/main/_models/generics/detail-info.model';
import { PlanTableFilterSelectionState } from 'app/main/_ngxs/plan/plan-table/plan-table-filter-selection/plan-table-filter-selection.state';
import { PlanTableFilterSelectedState } from 'app/main/_ngxs/plan/plan-table/plan-table-filter-selected/plan-table-filter-selected.state';
import { PlanTableState } from 'app/main/_ngxs/plan/plan-table/plan-table.state';
import { FilterSelection, FilterSelected } from 'app/main/_models/generics/filter.info.model';
import { FilterPlanTableSelection, FilterPlanTableSelected } from 'app/main/_models/Filters/plan.filter';
import { Column, EnumFilterType, EnumStyleType } from '../../web-component/mat-table-filter/model/mat-table-filter.model';
import { Router } from '@angular/router';
import { SynchronizePlanTableFilterSelected } from 'app/main/_ngxs/plan/plan-table/plan-table-filter-selected/plan-table-filter-selected.action';
import { LoadPlanTableFilterSelection } from 'app/main/_ngxs/plan/plan-table/plan-table-filter-selection/plan-table-filter-selection.action';
import { LoadPlanTable } from 'app/main/_ngxs/plan/plan-table/plan-table.action';
import { FuseConfigService } from '@fuse/services/config.service';


@Component({
  selector: 'plan-table',
  templateUrl: './plan-table.component.html',
  styleUrls: ['./plan-table.component.scss'],
  animations   : fuseAnimations
})
export class PlanTableComponent implements OnInit {
  @Select(PlanTableFilterSelectionState.get) planTableFilterSelection$: Observable<FilterSelection<FilterPlanTableSelection>>;
  @Select(PlanTableFilterSelectedState.get) planTableFilterSelected$: Observable<FilterSelected<FilterPlanTableSelected>>;
  @Select(PlanTableState.get) planTable$: Observable<Datas<PlanTable[]>>;

  filterPlanSelected: FilterPlanTableSelected = new FilterPlanTableSelected();
  columns : Column[]=
     [ 
        {index:0, field: 'id',label:'id',isSortable:true,width:{isFixed:true,value:70},filter: {type:EnumFilterType.none, datas: null, isEmpty: true}, pipe: false,style:{type:EnumStyleType.label,datas:null }},
        {index:1, field: 'label',label:'libellé',isSortable:true,width:{isFixed:false,value:-1},filter: {type:EnumFilterType.label, datas: null, isEmpty: true}, pipe: false,style:{type: EnumStyleType.label,datas:null}},
        {index:2, field: 'year',label:'année',isSortable:true,width:{isFixed:false,value:-1},filter: {type:EnumFilterType.label, datas: null, isEmpty: true}, pipe: false,style:{type:EnumStyleType.label,datas:null}}
        // {index:3, field: 'firstName',label:'prénom',isSortable:true,width:{isFixed:false,value:-1},filter: {type:EnumFilterType.none, datas: null, isEmpty: true},pipe:false,style:{type:EnumStyleType.label,datas:null}},
        // {index:4, field: 'userName',label:'pseudonyme',isSortable:true,width:{isFixed:false,value:-1},filter: {type:EnumFilterType.none, datas: null, isEmpty: true},pipe:false,style:{type:EnumStyleType.label,datas:null}}
    ];
    fullscreen: boolean;

    constructor(
      private _router: Router,
      private _store: Store,
      private _fuseConfigService: FuseConfigService
      ) {
        //this._store.dispatch(new SynchronizePlanTableFilterSelected(new FilterPlanTableSelected()));
        this._store.dispatch(new LoadPlanTableFilterSelection(new FilterPlanTableSelected()));
        
        this.planTableFilterSelected$.subscribe(selected=>{
          if(selected?.loader['filter-selected']?.loaded) {
            this.filterPlanSelected = selected.selected;
            // console.log('selected',selected);
          }
        });

        this.planTableFilterSelection$.subscribe(selection=>{
          if(selection?.loader['filter-selection']?.loaded) {
            if(!this.filterPlanSelected.year) {
              this.filterPlanSelected = new FilterPlanTableSelected();
              this.filterPlanSelected.year=selection.selection.year.slice(-1)[0];
              this._store.dispatch(new SynchronizePlanTableFilterSelected(this.filterPlanSelected));
            }
          }
        });

        // Subscribe to the config changes
        this._fuseConfigService.config.subscribe((settings) => {
          this.fullscreen = settings.layout.toolbar.fullscreen;
        });
  
    }

    ngOnInit(){
  
    }
  
    onRowClick($event) {
      this._router.navigate([`apps/plans/${$event.id}/detail`]);
    }
  
    applyFilterSelected(selected: FilterPlanTableSelected) {
      this._store.dispatch(new LoadPlanTable(selected));
    }
  
    applyFilterSelection(selection: FilterPlanTableSelection) { 
  
    }
    
    changeComboYearSelected(year) {
      this.filterPlanSelected.year=year;
      this._store.dispatch(new SynchronizePlanTableFilterSelected(this.filterPlanSelected));
      // console.log('changeComboYearSelected');
      // this.store.dispatch(new ChangePlanTableComboFilter({filterName:'year',value:year}));
    }

// @Select(PlanTableState.get) tableInfo$: Observable<DatasFilter<PlanTable[],PlanFilter>>;
// @Select(PlanTableComboFilterState.get) tableComboFilter$: Observable<Datas<PlanTableComboFilter>>;

// filter: PlanFilter;
// dataSource: PlanTable[];
// comboYear: ComboSimple<ISelect>;
// displayedColumns: string[] = ['checkbox','label','year','detail'];

// checkboxes: number[]=[];
// hasCheckboxes: boolean;

//   constructor(
//     private store: Store
//     ) { 
//         this.store.dispatch(new LoadPlanTableComboFilter());
//   }

//   ngOnInit() {
//     this.tableComboFilter$.subscribe(comboFilter=> {

//       // if(comboFilter.loader['filters']?.loaded) {
//       if(comboFilter.loader['datas'] && comboFilter.loader['datas'].loaded) {

//         this.comboYear = comboFilter.datas.years;
//         this.filter = new PlanFilter(this.comboYear.selected.id);
        
//         this.store.dispatch(new ChangePlanTableFilter(this.filter));
//       }
//     });

//     this.tableInfo$.subscribe(gridInfo => {

//       if(gridInfo.loader['datas'] && gridInfo.loader['datas'].loaded) {
//         this.dataSource = gridInfo.datas;
   
//         this.store.dispatch(new ClearPlanDetailDatas());
//       }
//     });
  
//   }

//   delete (planTable: SelectYear) {
//       // this.confirmDialogRef = this.dialog.open(FuseConfirmDialogComponent, {
//       //   disableClose: false
//       // });
  
//       // this.confirmDialogRef.componentInstance.confirmMessage = 'Etes vous sûr de supprimer ce compte?';
  
//       // this.confirmDialogRef.afterClosed().subscribe(result => {
//       //     if (result)
//       //     {
//       //         let user: IUser = JSON.parse(localStorage.getItem('user'));
//       //         this.accountService.delete(user.id,account)
//       //         .subscribe(next => {
//       //           this.deleteFromBanks(account.id);
//       //           // this.accountForm.reset(this.account);
//       //           this.notificationService.success('Suppression réussi', 'Compte supprimé');
//       //         }, error => {
//       //           this.notificationService.error('Echec suppression', error);
//       //         })
//       //     }
//       //     this.confirmDialogRef = null;
//       // });
//     }

//     changeComboYearSelected(year) {

//       this.store.dispatch(new ChangePlanTableComboFilter({filterName:'year',value:year}));
//     }

//     onSelectedChange($event,idAccount:number)
//     {
//       if($event.checked) {
//         this.checkboxes.push(idAccount);
//       }
//       else
//       {
//         let index = this.checkboxes.indexOf(idAccount);
//         if (index > -1) {
//           this.checkboxes.splice(index, 1);
//         }
//       }
//       this.hasCheckboxes = this.checkboxes.length>0;
//     }
}
