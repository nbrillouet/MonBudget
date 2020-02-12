import { Component, OnInit } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';
import { PlanFilter, PlanDetailFilter, PlanTableComboFilter } from 'app/main/_models/Filters/plan.filter';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ClearPlanDetailDatas } from 'app/main/_ngxs/plan/plan-detail/plan-detail.action';
import { SelectYear, ISelect } from 'app/main/_models/generics/select.model';
import { PlanTable } from 'app/main/_models/plan/plan.model';
import { ComboSimple } from 'app/main/_models/generics/combo.model';
import { PlanTableState } from 'app/main/_ngxs/plan/plan-list/plan-list.state';
import { PlanTableComboFilterState } from 'app/main/_ngxs/plan/plan-list-filter/plan-list-filter.state';
import { LoadPlanTableComboFilter, ChangePlanTableComboFilter } from 'app/main/_ngxs/plan/plan-list-filter/plan-list-filter.action';
import { ChangePlanTableFilter } from 'app/main/_ngxs/plan/plan-list/plan-list.action';
import { DatasFilter, Datas } from 'app/main/_models/generics/detail-info.model';

@Component({
  selector: 'plan-list',
  templateUrl: './plan-list.component.html',
  styleUrls: ['./plan-list.component.scss'],
  animations   : fuseAnimations
})
export class PlanListComponent implements OnInit {
@Select(PlanTableState.get) tableInfo$: Observable<DatasFilter<PlanTable[],PlanFilter>>;
@Select(PlanTableComboFilterState.get) tableComboFilter$: Observable<Datas<PlanTableComboFilter>>;

filter: PlanFilter;
dataSource: PlanTable[];
comboYear: ComboSimple<ISelect>;
displayedColumns: string[] = ['checkbox','label','year','detail'];

checkboxes: number[]=[];
hasCheckboxes: boolean;

  constructor(
    private store: Store
    ) { 
        this.store.dispatch(new LoadPlanTableComboFilter());
  }

  ngOnInit() {
    this.tableComboFilter$.subscribe(comboFilter=> {

      // if(comboFilter.loader['filters']?.loaded) {
      if(comboFilter.loader['datas'] && comboFilter.loader['datas'].loaded) {

        this.comboYear = comboFilter.datas.years;
        this.filter = new PlanFilter(this.comboYear.selected.id);
        
        this.store.dispatch(new ChangePlanTableFilter(this.filter));
      }
    });

    this.tableInfo$.subscribe(gridInfo => {

      if(gridInfo.loader['datas'] && gridInfo.loader['datas'].loaded) {
        this.dataSource = gridInfo.datas;
   
        this.store.dispatch(new ClearPlanDetailDatas());
      }
    });
  
  }

  delete (planTable: SelectYear) {
      // this.confirmDialogRef = this.dialog.open(FuseConfirmDialogComponent, {
      //   disableClose: false
      // });
  
      // this.confirmDialogRef.componentInstance.confirmMessage = 'Etes vous sûr de supprimer ce compte?';
  
      // this.confirmDialogRef.afterClosed().subscribe(result => {
      //     if (result)
      //     {
      //         let user: IUser = JSON.parse(localStorage.getItem('user'));
      //         this.accountService.delete(user.id,account)
      //         .subscribe(next => {
      //           this.deleteFromBanks(account.id);
      //           // this.accountForm.reset(this.account);
      //           this.notificationService.success('Suppression réussi', 'Compte supprimé');
      //         }, error => {
      //           this.notificationService.error('Echec suppression', error);
      //         })
      //     }
      //     this.confirmDialogRef = null;
      // });
    }

    changeComboYearSelected(year) {

      this.store.dispatch(new ChangePlanTableComboFilter({filterName:'year',value:year}));
    }

    onSelectedChange($event,idAccount:number)
    {
      if($event.checked) {
        this.checkboxes.push(idAccount);
      }
      else
      {
        let index = this.checkboxes.indexOf(idAccount);
        if (index > -1) {
          this.checkboxes.splice(index, 1);
        }
      }
      this.hasCheckboxes = this.checkboxes.length>0;
    }
}
