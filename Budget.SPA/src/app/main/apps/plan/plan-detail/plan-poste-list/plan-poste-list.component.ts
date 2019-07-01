import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { PlanPosteDetailComponent } from '../plan-poste-detail/plan-poste-detail.component';
import { Router } from '@angular/router';
import { PlanPosteForList, PlanPoste } from 'app/main/_models/plan.model';
import { Store } from '@ngxs/store';
import { ClearPlanPosteDetailDatas } from 'app/main/_ngxs/plan-poste/plan-poste-detail/plan-poste-detail.action';
import { PlanDetailFilter } from 'app/main/_models/Filters/plan.filter';
import { ChangePlanDetailFilter } from 'app/main/_ngxs/plan/plan-detail/plan-detail.action';
import { NotificationsService } from 'angular2-notifications';
import { PlanService } from '../../plan.service';
import { SelectYear } from 'app/main/_models/generics/select.model';


@Component({
  selector: 'plan-poste-list',
  templateUrl: './plan-poste-list.component.html',
  styleUrls: ['./plan-poste-list.component.scss']
})
export class PlanPosteListComponent implements OnInit {
  @Input() dataSource: PlanPoste;
  @Input() plan: SelectYear;
  displayedColumns: string[] = ['checkbox','label','delete','detail'];

  hasSelectedRecette: boolean;
  checkboxes: number[]=[];

  constructor(
    private dialog: MatDialog,
    private _planService: PlanService,
    private _store: Store,
    private _notificationService: NotificationsService
    ) {
 
   }

  ngOnInit() {
  }

  delete() {
    if(this.checkboxes.length>0) {


    this._planService.deletePlanPosteDetail(this.checkboxes)
      .subscribe(x => {
        let planDetailFilter = <PlanDetailFilter>{
          id:this.plan.id
        };
        this.checkboxes=[];
        this.hasSelectedRecette=false;
        this._store.dispatch(new ChangePlanDetailFilter(planDetailFilter));
        this._notificationService.success('Suppression(s) réussie(s)', `${this.dataSource.poste.label} supprimée(s)`);
      }, error => {
        this._notificationService.error('Echec suppression', error);
      });
    }
    else
    {
      this._notificationService.error('Aucune ligne sélectionnée', 'suppression impossible');
    }
  }

  openDetail(data) {

    const dialogConfig = new MatDialogConfig();
 
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width='70%';
    dialogConfig.height='85%';
    
    let idData = data==0 ? 0 : data.id;

    dialogConfig.data = {
        id: idData,
        idPlan: this.plan.id,
        idPoste: this.dataSource.poste.id
    };

    const dialogRef = this.dialog.open(PlanPosteDetailComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(data => {
      this._store.dispatch(new ClearPlanPosteDetailDatas());
    });    
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
    this.hasSelectedRecette = this.checkboxes.length>0;
  }

}
