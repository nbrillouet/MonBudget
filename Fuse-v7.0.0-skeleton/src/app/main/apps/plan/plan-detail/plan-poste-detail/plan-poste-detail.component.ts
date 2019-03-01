import { Component, OnInit, Inject, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { PlanPosteForDetail, PlanPosteFrequencyForDetail, PlanPosteUserForDetail, PlanPosteForDetailSave } from 'app/main/_models/plan.model';
import { PlanService } from '../../plan.service';
import { Router, ActivatedRouteSnapshot } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { PlanPosteDetailState } from 'app/main/_ngxs/plan-poste/plan-poste-detail/plan-poste-detail.state';
import { PlanPosteDetailFilter, PlanPosteReferenceFilter } from 'app/main/_models/filters/plan-poste.filter';
import { DetailInfo } from 'app/main/_models/generics/detail-info.model';
import { Observable } from 'rxjs';
import { ChangePlanPosteDetailFilter, ChangePlanPosteReference } from 'app/main/_ngxs/plan-poste/plan-poste-detail/plan-poste-detail.action';
import { BaseChart, ChartValue } from 'app/main/_models/chart/base-chart.model';
import { PlanDetailFilter } from 'app/main/_models/Filters/plan.filter';
import { NotificationsService } from 'angular2-notifications';
import { ChangePlanDetailFilter } from 'app/main/_ngxs/plan/plan-detail/plan-detail.action';
import { ISelect } from 'app/main/_models/generics/select.model';

@Component({
  selector: 'plan-poste-detail',
  templateUrl: './plan-poste-detail.component.html',
  styleUrls: ['./plan-poste-detail.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PlanPosteDetailComponent implements OnInit  {
  @Select(PlanPosteDetailState.get) detailInfo$: Observable<DetailInfo<PlanPosteForDetail,PlanPosteDetailFilter>>;

  data: PlanPosteForDetail;
  form: FormGroup;
  description:string;
  referencePlaceHolder: string='Référence';
  chartDataset: BaseChart;
  chartValue: ChartValue=new ChartValue();
  amountLabel: string;
  planPosteDetailFilter: PlanPosteDetailFilter;

  formLoaded:boolean=false;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<PlanPosteDetailComponent>,
    private _store: Store,
    private _planService: PlanService,
    private _notificationService: NotificationsService,
    @Inject(MAT_DIALOG_DATA) data
  ) 
  { 

    this.planPosteDetailFilter = data;

    this._store.dispatch(new ChangePlanPosteDetailFilter(this.planPosteDetailFilter));
    
    this.detailInfo$.subscribe(x=>{
      if(x.dataInfos.loadingInfo.loaded==true)
      {
        this.data = x.dataInfos.datas;
        this.description = this.data.label;
    
        this.chartDataset = this.getChartDatas('Montant Prévisionnel',this.data.planPosteFrequencies.map(x=>x.previewAmount),this.data.planPosteFrequencies.map(x=>x.frequency))
        
        this.form = this.fb.group({
          label: [this.data.label, []],
          referenceTable: [this.data.referenceTable.selected,[]],
          planPosteReference: [this.data.planPosteReference.listSelected,[]],
          planPosteFrequencies: [this.data.planPosteFrequencies,[]],
          planPosteUser: [this.data.planPosteUser,[]],
          amount: [this.chartValue.yValue,[]]
        });
        this.formLoaded=true;
      }
    });

  }
  ngOnInit() {
    
  }

  save({ value, valid }: { value: any, valid: boolean }) {
    this.bindPlan(value);   

    this._planService.savePlanPosteDetail(this.data)
      .subscribe(idPlanPoste => {
        // this.form.reset(this.data);
        let planDetailFilter = <PlanDetailFilter>{
          id:this.planPosteDetailFilter.idPlan
        };
        this._store.dispatch(new ChangePlanDetailFilter(planDetailFilter));
        this._notificationService.success('Sauvegarde réussi', 'Budget enregistré');
        this.dialogRef.close(this.form.value);
      }, error => {
        this._notificationService.error('Echec sauvegarde', error);
      });
  }

  // save() {
  //   this.dialogRef.close(this.form.value);
  // }
  bindPlan(value: any) {
    this.data.label = value.label;
    // this.data.planPosteFrequencies = value.planPosteFrequencies;
    this.data.planPosteReference.listSelected = this.form.controls['planPosteReference'].value; // value.planPosteReference;
    this.data.planPosteUser = this.form.controls['planPosteUser'].value; //] value.planPosteUser;
    this.data.referenceTable.selected = value.referenceTable;

  }

  close() {
    this.dialogRef.close();
  }

  //recupere les valeurs cliquer dans le chart
  getChartInfo( $chartValue: ChartValue ) {
    this.chartValue = $chartValue;

    this.form.controls['amount'].setValue(this.chartValue.yValue);
    this.amountLabel = this.data.planPosteFrequencies.filter(x=>x.frequency.monthLabelShort==$chartValue.xValue)[0].frequency.monthLabel;
  }

  getChartDatas(a,b,c) {
    let labels=<ISelect[]>[];
    for(let item of c)
    {
      let select = <ISelect> {
        id:item.id,
        label:item.monthLabelShort
      }
      labels.push(select);

    }
 
    return  <BaseChart>({
          
      datasets: [
        {
          label: a,
          data : b
        }
      ],
      labels: labels
    });
  }

  compareObjects(o1: ISelect, o2: ISelect) {
    return o1 && o2 ? o1.id === o2.id : o1 === o2;
    }

  validatePreviewAmount() {
    this.chartValue.yValue=this.form.controls['amount'].value;
    
    let planPosteFrequency = this.data.planPosteFrequencies.filter(x=>x.frequency.monthLabelShort==this.chartValue.xValue);
    let index = this.data.planPosteFrequencies.findIndex(x=>x.frequency.monthLabelShort==planPosteFrequency[0].frequency.monthLabelShort);
    //mise à jour des données du data
    this.data.planPosteFrequencies[index].previewAmount=this.chartValue.yValue;
    //mise à jour des données du charDataset
    this.chartDataset.datasets[0].data[index]=+this.chartValue.yValue;
    
    let toto = this.chartDataset.datasets[0].data;
    this.chartDataset = this.getChartDatas('Montant Prévisionnel',toto,this.data.planPosteFrequencies.map(x=>x.frequency));

  

  }

  validatePreviewAmountForAll() {
    this.chartValue.yValue=this.form.controls['amount'].value;
    for(let i=0;i<this.chartDataset.datasets[0].data.length;i++)
    {
      this.data.planPosteFrequencies[i].previewAmount=this.chartValue.yValue;
      this.chartDataset.datasets[0].data[i]=+this.chartValue.yValue;
    }

    let toto = this.chartDataset.datasets[0].data;
    this.chartDataset = this.getChartDatas('Montant Prévisionnel',toto,this.data.planPosteFrequencies.map(x=>x.frequency));
  }

  onInputChange($event,planPosteUser:PlanPosteUserForDetail) {
   
    
    let toto:PlanPosteUserForDetail;
    toto= this.data.planPosteUser.filter(x=>x.user.id==planPosteUser.user.id)[0];

    let tata:PlanPosteUserForDetail;
    tata= this.data.planPosteUser.filter(x=>x.user.id!=planPosteUser.user.id)[0];


    toto.percentage=$event.value;
    tata.percentage = 100-toto.percentage;


  }

  onReferenceChange(value) {
    
    let planPosteReferenceFilter=<PlanPosteReferenceFilter> {
      idPlanPoste : this.data.id,
      idPoste: this.data.poste.id,
      idReferenceTable: value.id
    };

    this._planService.GetPlanPosteReferenceByIdReferenceTable(planPosteReferenceFilter).subscribe(x=>{
      this.data.planPosteReference = x;
    });
     
  }
  onLinkClick() {
  
    this.chartDataset = this.getChartDatas('Montant Prévisionnel',this.data.planPosteFrequencies.map(x=>x.previewAmount),this.data.planPosteFrequencies.map(x=>x.frequency));
  }
  

}
