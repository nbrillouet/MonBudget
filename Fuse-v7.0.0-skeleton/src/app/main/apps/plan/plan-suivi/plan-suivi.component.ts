import { Component, OnInit, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';
import { Select, Store } from '@ngxs/store';
import { PlanForTrackingState } from 'app/main/_ngxs/plan-tracking/plan-tracking.state';
import { Observable } from 'rxjs';
import { TableInfo } from 'app/main/_models/generics/table-info.model';
// import { PlanForTracking } from 'app/main/_models/plan.model';
// import { FilterPlanForTracking } from 'app/main/_models/filters/plan-tracking.filter';
import { ChangePlanForTrackingFilter } from 'app/main/_ngxs/plan-tracking/plan-tracking.action';
import { UserState } from 'app/main/_ngxs/user/user.state';
import { IUser } from 'app/main/_models/user.model';
import { PlanService } from '../plan.service';
import { IMonthYear, MonthYear } from 'app/main/_models/date-time.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ISelect, SelectYear } from 'app/main/_models/generics/select.model';
import { DetailInfo } from 'app/main/_models/generics/detail-info.model';
import { PlanForTracking } from 'app/main/_models/plan/plan-tracking.model';
import { FilterPlanTracking } from 'app/main/_models/filters/plan-tracking.filter';

@Component({
  selector: 'plan-suivi',
  templateUrl: './plan-suivi.component.html',
  styleUrls: ['./plan-suivi.component.scss'],
  animations   : fuseAnimations,
  encapsulation: ViewEncapsulation.None
})
export class PlanSuiviComponent implements OnInit {
  @Select(UserState.getUser) user$: Observable<IUser>;
  @Select(PlanForTrackingState.get) planTracking$: Observable<DetailInfo<PlanForTracking,FilterPlanTracking>>;

  // planList: IPlanTable[];
  selectYears : SelectYear[];

  planSelected: SelectYear;
  filter: FilterPlanTracking;
  monthYear: IMonthYear;
  planForm: FormGroup;
  isLoaded: boolean;
  isLoaded1: boolean;
  gaugeType = "full";
  gaugeValue = Math.round(1600*100/1500);
  gaugeLabel = "";
  gaugeAppendText = "";
  thresholdConfig = {
    '0': {color: 'red'},
    '90': {color: 'orange'},
    '100': {color: '#4CAF50'}
  };


  thresholdConfig1 = {
    '0': {color: 'red'},
    '90': {color: 'orange'},
    '100': {color: '#4CAF50'}
  };
  thresholdConfig2 = {
    '0': {color: '#4CAF50'},
    '100': {color: 'orange'}
  };
  thresholdConfig3 = {
    '0': {color: '#4CAF50'},
    '90': {color: 'orange'},
    '100': {color: 'red'}
  };

  planTracking: DetailInfo<PlanForTracking,FilterPlanTracking>;

  // test: ISelect[] = [{id:1,label:'test 1'},{id:2,label:'test 2'}];

  constructor(
    private _store: Store,
    private _planService: PlanService,
    private _fb: FormBuilder,
    private _changeDetectorRef:ChangeDetectorRef
  ) { 

      let user = JSON.parse(localStorage.getItem('currentUser'));
      if(user) {
        this._planService.GetPlanList(user.id).subscribe(plan => {
          this.selectYears = plan;
          this.planSelected = plan[0];
          this.monthYear={month:{id:1,label:'jan'},year:this.planSelected.year};
          
          this.planForm = this._fb.group({
            planSelected: [this.planSelected, null]
          });

          this.filter = new FilterPlanTracking();
          this.filter.idPlan = this.planSelected.id;
          this.filter.monthYear = this.monthYear;
          // this._store.dispatch(new ChangePlanTrackingFilter(this.filter));

          this.isLoaded=true;
        });
      }
    // });


    
  }

  ngOnInit() {
    

    this.planTracking$.subscribe(planTracking => {
      this.planTracking= planTracking;

 
    })
  }

  ngAfterViewChecked()
  {

    this._changeDetectorRef.detectChanges();
  }

  // onPlanChange(value: ISelect) {
  //   this.filter.idPlan=value.id;
  // }

  onMonthYearChange($event: MonthYear) {

    let monthYear:IMonthYear = {month:$event.month,year:$event.year.year};
    this.filter.monthYear = monthYear;
    this.filter.idPlan = $event.year.id;

    this._store.dispatch(new ChangePlanForTrackingFilter(this.filter));

  }

  compareObjects(o1: ISelect, o2: ISelect) {
    return o1 && o2 ? o1.id === o2.id : o1 === o2;
    }

  setThresholdConfig(idPoste: number) {

    switch (idPoste) {
      case 1:
        return {
          '0': {color: '#4CAF50'},
          '90': {color: 'orange'},
          '100': {color: 'red'}
        };
      case 2:
        return {
          '0': {color: '#4CAF50'},
          '90': {color: 'orange'},
          '100': {color: 'red'}
        };
      case 3:
        return {
          '0': {color: '#4CAF50'},
          '90': {color: 'orange'},
          '100': {color: 'red'}
        };
    }
  }
}
