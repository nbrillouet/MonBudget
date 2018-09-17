import { Component, OnInit } from '@angular/core';
import { IMonth, DateTimeFactory } from '../../../../_models/DateTime';
import { FilterAccountStatement } from '../../../../_models/Filters/FilterAccountStatement';
import { AccountStatementListFilterService } from '../account-statement-list/account-statement-list-filter/account-statement-list-filter.service';

@Component({
  selector: 'account-statement-filter',
  templateUrl: './account-statement-filter.component.html',
  styleUrls: ['./account-statement-filter.component.scss']
})
export class AccountStatementFilterComponent implements OnInit {
  filter: FilterAccountStatement;

  months: IMonth[];
  // monthSelected: IMonth;
  years: number[]=[2015,2016,2017,2018,2019];
  // yearSelected: number;
  

  constructor(
    private accountStatementListFilterService: AccountStatementListFilterService
  ) { 

    this.accountStatementListFilterService.filter
      .subscribe(filter => {
        this.filter = filter;
        // this.monthSelected = this.filter.monthYearSelected.month;
        // this.yearSelected = this.filter.monthYearSelected.year;

        this.months = DateTimeFactory.getMonths;
        console.log('FILTER',filter);
      });

    // //liste des mois
    // this.months = DateTimeFactory.getMonths;
    // //mois en cours
    // var month = new Date();
    // this.monthsSelected=[(this.months[month.getMonth()])];
    // //année en cours
    // this.yearSelected = month.getFullYear();


    // this.accountStatementListFilterService.filter
    //   .subscribe(filter => {
    //     this.filter = filter;
    //     console.log('FILTER',filter);
    //     // this.operationMethodForm.controls['operationMethod'].setValue(filter.operationMethodSelected);
    //     // this.getOperationMethodList();
    //   });
  }

  ngOnInit() {
    // this.filter.monthSelected=this.monthsSelected;
    // this.accountStatementListFilterService.changeFilter(this.filter);
    // console.log('months',this.months);
  }

  updateMonthsSelected(month: IMonth){
    // let pos = this.monthsSelected.indexOf(month);
    // console.log(pos);
    // if(pos>0)
    // {
    //   this.monthsSelected.splice(pos);
    // }
    // else
    // {
    //   let monthIds = this.monthsSelected.map(x=>x.id);
    //   console.log(this.monthsSelected);
    //   for(let m of this.months)
    //   {
    //     if(m.id<=month.id && m.id>=Math.max(...monthIds))
    //     {
    //       if(!this.monthsSelected.includes(m))
    //         this.monthsSelected.push(m);
    //     }
    //   }
    // }
    // console.log('yearsSelected',this.monthsSelected);
    this.filter.monthYearSelected.month = month;
    this.accountStatementListFilterService.changeFilter(this.filter);
  }

  updateYearSelected(year: number) {
    this.filter.monthYearSelected.year = year;
    this.accountStatementListFilterService.changeFilter(this.filter);
  }

  isInMonthSelected(month: IMonth) {
    // return this.monthsSelected.some(x=>x.id===month.id);
    return month.id==this.filter.monthYearSelected.month.id;
  }

}
