import { Component, OnInit, ViewEncapsulation, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';
import { FormBuilder, FormGroup, FormControl, ɵangular_packages_forms_forms_k } from '@angular/forms';
import { PlanPoste } from 'app/main/_models/plan.model';
import { Observable } from 'rxjs';
import { PlanService } from '../plan.service';
import { NotificationsService } from 'angular2-notifications';
import { Select, Store } from '@ngxs/store';
import { PlanDetailFilter } from 'app/main/_models/Filters/plan.filter';
import { PlanDetailState } from 'app/main/_ngxs/plan/plan-detail/plan-detail.state';
import { PlanDetail, Plan } from 'app/main/_models/plan/plan.model';
import { ClearPlanTableDatas } from 'app/main/_ngxs/plan/plan-list/plan-list.action';
import { MatColors } from '@fuse/mat-colors';
import { AsPlanTableState } from 'app/main/_ngxs/account-statement-plan/as-plan.state';
import { AsTable } from 'app/main/_models/account-statement/account-statement-table.model';
import { FilterAsPlan } from 'app/main/_models/filters/account-statement-plan.filter';
import { LoadAsPlanForTable, ClearAsPlanForTable } from 'app/main/_ngxs/account-statement-plan/as-plan.action';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { AsPlanListComponent } from './as-plan-list/as-plan-list.component';
import { DatasFilter, Datas } from 'app/main/_models/generics/detail-info.model';

@Component({
  selector: 'plan-detail',
  templateUrl: './plan-detail.component.html',
  styleUrls: ['./plan-detail.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations   : fuseAnimations
})
export class PlanDetailComponent implements OnInit {
  
@Select(PlanDetailState.get) detailInfo$: Observable<DatasFilter<PlanDetail,PlanDetailFilter>>;
@Select(AsPlanTableState.get) asPlanTable$: Observable<Datas<AsTable[]>>;


detailInfo: DatasFilter<PlanDetail,PlanDetailFilter>;
planDetail: PlanDetail;
firstLoad: boolean = true;

pageType: string;
planForm: FormGroup;
formLoaded:boolean=false;

recetteTab: PlanPoste;
depenseFixeTab: PlanPoste;
depenseVariable: PlanPoste;

asPlanTable: Datas<AsTable[]>;

    constructor(
        private _planService: PlanService,
        private _formBuilder: FormBuilder,
        private _notificationService: NotificationsService,
        private _store: Store,
        private _dialog: MatDialog,
    )
    {
      
      this.detailInfo$.subscribe(x=> {
        if(x.loader['datas'].loaded==true)
        {

          this._store.dispatch(new ClearPlanTableDatas());
          this.planDetail = x.datas; 
          
          
          this.recetteTab = this.planDetail.planPostes.filter(x=>x.poste.id==1)[0];
          this.depenseFixeTab = this.planDetail.planPostes.filter(x=>x.poste.id==2)[0];
          this.depenseVariable = this.planDetail.planPostes.filter(x=>x.poste.id==3)[0];

          this.pageType=this.planDetail.plan.id==0 ? 'new' : 'edit';
          if(this.firstLoad) {
            
            let convertColor = MatColors.getMatColorByColor(this.planDetail.plan.color);
            if(convertColor!='no-color')
              this.planDetail.plan.color=convertColor;
            

            //creation du formulaire
            this.createPlanForm();
            this.firstLoad=false;
          }
          
          //chargement asPlan
          let filterAsPlan =<FilterAsPlan> {
            idPlan : this.planDetail.plan.id
          }
          this._store.dispatch(new LoadAsPlanForTable(filterAsPlan));

          this.formLoaded=true;
        }
      });

    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
      this.asPlanTable$.subscribe(asPlan => {
        this.asPlanTable=asPlan;
      });
    }

    createPlanForm() {
      
      this.planForm = this._formBuilder.group({
              id             : [this.planDetail.plan.id],
              label          : [this.planDetail.plan.label],
              year           : [this.planDetail.plan.year],
              users          : [this.planDetail.users.listSelected],
              accounts       : [this.planDetail.accounts.listSelected],
              color          : [this.planDetail.plan.color]
              // color          : [MatColors.getMatColorByColor('fake')]
          });
      
      //trigger changement valeur combo color
      // this.planForm.get('color').valueChanges.subscribe(val => {

      //     this.planForm.controls['color'].setValue(val);
      //     this.planForm.controls['color'].markAsDirty();
      //     this.planForm.controls['color'].markAsTouched();
      // });
      

      this.planForm.valueChanges.subscribe(value=>{
        this.planDetail.plan.label=value.label;
        this.planDetail.plan.year=value.year;
        this.planDetail.plan.color=value.color;
        this.planDetail.accounts.listSelected=value.accounts;
        this.planDetail.users.listSelected=value.users;

        //TODO synchronize
        // this._store.dispatch(new LoadPlanDetailDatasSuccess(this.planDetail));
      });
    
    }

    onColorPickerChange($event) {
      this.planDetail.plan.color=$event;
      this.planForm.controls['color'].setValue($event);
      this.planForm.controls['color'].markAsDirty();
      this.planForm.controls['color'].markAsTouched();
    }

    // updateSelectedUsers($event) {
    //   this.planDetail.users.listSelected=$event;
    //   this.planForm.controls['users'].markAsDirty();
    //   this.planForm.controls['users'].markAsTouched();
    // }

    save({ value, valid }: { value: Plan, valid: boolean }) {
      //conversion color pour enregistrement
      this.planDetail.plan.color = MatColors.getColorByMatColor(value.color);
      

      // this.bindPlan(value);   

      this._planService.savePlanDetail(this.planDetail)
        .subscribe(idPlan => {

          this.planDetail.plan.color = MatColors.getMatColorByColor(this.planDetail.plan.color);
          // this.planForm.reset(this.planDetail);
          this.createPlanForm();

          //TODO synchronize
          // this._store.dispatch(new LoadPlanDetailDatasSuccess(this.planDetail));
          this._notificationService.success('Sauvegarde réussi', 'Budget enregistré');
        });
        
        // , error => {
        //   this._notificationService.error('Echec sauvegarde', error);
        // })
    }

    // bindPlan(value: Plan) {
    //   this.planDetail.plan.label=value.label;
    //   this.planDetail.plan.year=value.year;
    //   this.planDetail.plan.color=value.color;
   
    // }

    openAccountStatements() {

      const dialogConfig = new MatDialogConfig();
   
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.width='90%';
      dialogConfig.height='90%';
      
      // let idData = data==0 ? 0 : data.id;
  
      dialogConfig.data = this.asPlanTable.datas;
      //  {
      //     this.asPlanTable
      //     // id: idData,
      //     // idPlan: this.plan.id,
      //     // idPoste: this.dataSource.poste.id
      // };
  
      const dialogRef = this._dialog.open(AsPlanListComponent, dialogConfig);
  
      // dialogRef.afterClosed().subscribe(data => {
      //   this._store.dispatch(new ClearAsPlanForTable());
      // });    
    }

    compareObjects(o1: any, o2: any) {
      if(o1.label == o2.label && o1.id == o2.id )
      return true;
      else return false
    }


}
