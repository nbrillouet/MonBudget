import { Component, OnInit, ViewEncapsulation, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';
import { FormBuilder, FormGroup, FormControl, ɵangular_packages_forms_forms_k } from '@angular/forms';
import { PlanPoste } from 'app/main/_models/plan.model';
import { Observable } from 'rxjs';
import { PlanService } from '../plan.service';
import { NotificationsService } from 'angular2-notifications';
import { Select, Store } from '@ngxs/store';
import { PlanDetailFilter } from 'app/main/_models/Filters/plan.filter';
import { DetailInfo } from 'app/main/_models/generics/detail-info.model';
import { PlanDetailState } from 'app/main/_ngxs/plan/plan-detail/plan-detail.state';
import { ChangePlanDetailFilter } from 'app/main/_ngxs/plan/plan-detail/plan-detail.action';
import { SelectYear } from 'app/main/_models/generics/select.model';
import { PlanDetail, Plan } from 'app/main/_models/plan/plan.model';
import { ClearPlanTableDatas } from 'app/main/_ngxs/plan/plan-list/plan-list.action';

@Component({
  selector: 'plan-detail',
  templateUrl: './plan-detail.component.html',
  styleUrls: ['./plan-detail.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations   : fuseAnimations
})
export class PlanDetailComponent implements OnInit {
  
@Select(PlanDetailState.get) detailInfo$: Observable<DetailInfo<PlanDetail,PlanDetailFilter>>;

detailInfo: DetailInfo<PlanDetail,PlanDetailFilter>;
planDetail: PlanDetail;
planDetailUserPlaceHolder: string = 'utilisateur(s) impliqué(s)';
pageType: string;
planForm: FormGroup;
formLoaded:boolean=false;

recetteTab: PlanPoste;
depenseFixeTab: PlanPoste;
depenseVariable: PlanPoste;

  // @ViewChild('fruitInput') fruitInput: ElementRef;

    constructor(
        private _planService: PlanService,
        private _formBuilder: FormBuilder,
        private _notificationService: NotificationsService,
        private _store: Store
    )
    {
      
      this.detailInfo$.subscribe(x=> {
        if(x.dataInfos.loadingInfo.loaded==true)
        {
          this._store.dispatch(new ClearPlanTableDatas());
          this.planDetail = x.dataInfos.datas; //this.detailInfo.dataInfos.datas;
     
          
          this.recetteTab = this.planDetail.planPostes.filter(x=>x.poste.id==1)[0];
          this.depenseFixeTab = this.planDetail.planPostes.filter(x=>x.poste.id==2)[0];
          this.depenseVariable = this.planDetail.planPostes.filter(x=>x.poste.id==3)[0];

          this.pageType=this.planDetail.plan.id==0 ? 'new' : 'edit';
          this.createPlanForm();

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

    }

    createPlanForm() {

      this.planForm = this._formBuilder.group({
              id             : [this.planDetail.plan.id],
              label          : [this.planDetail.plan.label],
              year           : [this.planDetail.plan.year],
              users          : [this.planDetail.users],
              color          : [this.planDetail.plan.color]
          });
    }

    onColorPickerChange($event) {

      this.planDetail.plan.color=$event;
      this.planForm.controls['color'].setValue($event);
      this.planForm.controls['color'].markAsDirty();
      this.planForm.controls['color'].markAsTouched();
    }

    updateSelectedUsers($event) {

      this.planDetail.users.listSelected=$event;
      this.planForm.controls['users'].markAsDirty();
      this.planForm.controls['users'].markAsTouched();

    }

    save({ value, valid }: { value: Plan, valid: boolean }) {
      console.log('bind');
      this.bindPlan(value);   

      this._planService.savePlanDetail(this.planDetail)
        .subscribe(idPlan => {
          this.planForm.reset(this.planDetail);
          let planDetailFilter = <PlanDetailFilter>{
            id:idPlan
          };
          this._store.dispatch(new ChangePlanDetailFilter(planDetailFilter));
          this._notificationService.success('Sauvegarde réussi', 'Budget enregistré');
        });
        
        // , error => {
        //   this._notificationService.error('Echec sauvegarde', error);
        // })
    }

    bindPlan(value: Plan) {
      this.planDetail.plan.label=value.label;
      this.planDetail.plan.year=value.year;
      this.planDetail.plan.color=value.color;
   
    }

    compareObjects(o1: any, o2: any) {
      if(o1.label == o2.label && o1.id == o2.id )
      return true;
      else return false
    }


}
