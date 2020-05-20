import { Component, OnInit, OnDestroy } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { AsChartState } from 'app/main/_ngxs/account-statement/account-statement-chart/account-statement-chart.state';
import { Observable, Subscription } from 'rxjs';
import { AsChartEvolutionCustomOtfFilter, AsChartEvolutionCustomOtfFilterSelected } from 'app/main/_models/account-statement/as-chart/as-chart-evolution.model';
import { WidgetCardChartBar } from 'app/main/_models/chart/widget-card-chart-bar.model';
import { fuseAnimations } from '@fuse/animations';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ISelect } from 'app/main/_models/generics/select.model';
import { UpdateAsChartEvolutionCustomOtfFilter, LoadAsChartEvolutionBrut, LoadAsChartEvolution, LoadAsChartEvolutionNoIntTransfer, LoadAsChartEvolutionCustomOtf, LoadAsChartEvolutionCustomOtfFilter } from 'app/main/_ngxs/account-statement/account-statement-chart/account-statement-chart.action';
import { AsChart } from 'app/main/_models/account-statement/as-chart/as-chart.model';
import { Datas } from 'app/main/_models/generics/detail-info.model';
import { FilterAsTableSelected } from 'app/main/_models/filters/account-statement.filter';
import { FilterSelected } from 'app/main/_models/generics/filter.info.model';
import * as _ from 'lodash';
import { FilterAccountMonthYear } from 'app/main/_models/filters/account-month-year.filter';
import { AsTableFilterSelectedState } from 'app/main/_ngxs/account-statement/as-table/as-table-filter-selected/as-table-filter-selected.state';

@Component({
  selector: 'as-chart-evolution',
  templateUrl: './as-chart-evolution.component.html',
  styleUrls: ['./as-chart-evolution.component.scss'],
  animations   : fuseAnimations
})

export class AsChartEvolutionComponent implements OnInit, OnDestroy {

  @Select(AsChartState.get) asChart$: Observable<Datas<AsChart>>;
  @Select(AsTableFilterSelectedState.get) asTableFilterSelected$: Observable<FilterSelected<FilterAsTableSelected>>;
  asChart$$ : Subscription;
  asTableFilterSelected$$: Subscription;
  
  filter: FilterAccountMonthYear;
  customOtfForm: FormGroup;

  asChartEvolutionBrutDebit: WidgetCardChartBar;
  asChartEvolutionBrutCredit: WidgetCardChartBar;
  asChartEvolutionBrutBalance: WidgetCardChartBar;

  asChartEvolutionNoIntTransferDebit: WidgetCardChartBar;
  asChartEvolutionNoIntTransferCredit: WidgetCardChartBar;
  asChartEvolutionNoIntTransferBalance: WidgetCardChartBar;

  asChartEvolutionCustomOtfs: WidgetCardChartBar[];
  asChartEvolutionCustomOtfFilter : AsChartEvolutionCustomOtfFilter;
  
  firstLoad: boolean = true;

  constructor(
    private _formBuilder: FormBuilder,
    private _store: Store
  ) {



  }
  
  //  ngOnChanges(changes: SimpleChanges): void {

  // }
  // ngOnChange(changes:SimpleChange) {

  //   // this._store.dispatch(new LoadAsChartEvolution(this.filterAsSelected));
  // }

  ngOnInit() {
    
    this.asTableFilterSelected$$ = this.asTableFilterSelected$.subscribe(filterSelected=>{
      if(filterSelected?.selected?.monthYear && filterSelected?.selected?.idAccount) {
        let filterAccountMonthYear = <FilterAccountMonthYear> {
          idAccount : filterSelected.selected.idAccount,
          monthYear : filterSelected.selected.monthYear
        };

        if(JSON.stringify(filterAccountMonthYear)!=JSON.stringify(this.filter)) {
          this.filter = JSON.parse(JSON.stringify(filterAccountMonthYear));
          
          this._store.dispatch(new LoadAsChartEvolutionBrut(filterSelected.selected));
          this._store.dispatch(new LoadAsChartEvolutionNoIntTransfer(filterSelected.selected));
          this._store.dispatch(new LoadAsChartEvolutionCustomOtf(filterSelected.selected));
          this._store.dispatch(new LoadAsChartEvolutionCustomOtfFilter(filterSelected.selected));
        }

      }

    })

    this.asChart$$ = this.asChart$.subscribe(x=>{
      if(x?.loader['asChartEvolutionBrut']?.loaded) {
        
        this.asChartEvolutionBrutDebit = x.datas.asChartEvolution.brut.debit;
        this.asChartEvolutionBrutCredit = x.datas.asChartEvolution.brut.credit;
        this.asChartEvolutionBrutBalance = x.datas.asChartEvolution.brut.balance;

      }

      if(x?.loader['asChartEvolutionNoIntTransfer']?.loaded) {
        this.asChartEvolutionNoIntTransferDebit = x.datas.asChartEvolution.noIntTransfer.debit;
        this.asChartEvolutionNoIntTransferCredit = x.datas.asChartEvolution.noIntTransfer.credit;
        this.asChartEvolutionNoIntTransferBalance = x.datas.asChartEvolution.noIntTransfer.balance;
      }

      if(x?.loader['asChartEvolutionCustomOtf']?.loaded) {
        this.asChartEvolutionCustomOtfs = x.datas.asChartEvolution.customOtfs.widgetCardChartBars;
      }

      if(x?.loader['asChartEvolutionCustomOtfFilter']?.loaded) { 
        if(this.firstLoad) {
          this.asChartEvolutionCustomOtfFilter = x.datas.asChartEvolution.customOtfs.filter;

          this.customOtfForm = this._formBuilder.group({
            operationTypeFamilies: [this.asChartEvolutionCustomOtfFilter.selected.operationTypeFamilies,[Validators.required]]
          });

          this.customOtfForm.valueChanges
            .subscribe(value=> {
              let filter = <AsChartEvolutionCustomOtfFilterSelected> {
                idAccount : x.datas.asChartEvolution.customOtfs.filter.selected.idAccount,
                user: x.datas.asChartEvolution.customOtfs.filter.selected.user,
                monthYear: x.datas.asChartEvolution.customOtfs.filter.selected.monthYear,
                operationTypeFamilies:value.operationTypeFamilies
              };
              this._store.dispatch(new UpdateAsChartEvolutionCustomOtfFilter(filter));
            });

          this.firstLoad=false;
        }

      }

    });
  }

  ngOnDestroy(): void {
    this.asTableFilterSelected$$.unsubscribe();
    this.asChart$$.unsubscribe();
  }


  // ngOnChanges(changes: SimpleChanges) {
  //   // const name: SimpleChange = changes.headerPanelIsVisible;
  //   this.headerPanelIsVisible = changes.headerPanelIsVisible.currentValue;;
  // }

  // onChanges() {
  //   this.customOtfForm.get('operationTypeFamilies').valueChanges
  //       .subscribe(val => {
          
  //         let filter = <AsChartEvolutionCustomOtfFilterSelected> {
  //           idAccount : this.asChartEvolutionCustomOtfFilter.selected.idAccount,
  //           user: this.asChartEvolutionCustomOtfFilter.selected.user,
  //           monthYear: this.asChartEvolutionCustomOtfFilter.selected.monthYear,
  //           operationTypeFamilies:val
  //         };
  //         this._store.dispatch(new UpdateAsChartEvolutionCustomOtfFilter(filter));
          
  //       });
  // }

  // change($event) {

  //   //this.asChartEvolutionCustomOtfFilter.operationTypeFamiliesSelected = this.customOtfForm.get('operationTypeFamilies').value;
  //   //this._store.dispatch(new UpdateAsChartEvolutionCustomOtfFilter(this.asChartEvolutionCustomOtfFilter));

  // }

  compareObjects(o1: ISelect, o2: ISelect) {
    return o1 && o2 ? o1.id === o2.id : o1 === o2;
  }

}
