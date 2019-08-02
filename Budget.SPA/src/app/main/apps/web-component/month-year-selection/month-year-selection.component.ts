import { Component, OnInit, Input, SimpleChanges, OnChanges, Output, EventEmitter } from '@angular/core';
import { DateTimeFactory, IMonthYear, MonthYear } from 'app/main/_models/generics/date-time.model';
import { SelectYear, ISelect } from 'app/main/_models/generics/select.model';

@Component({
  selector: 'month-year-selection',
  templateUrl: './month-year-selection.component.html',
  styleUrls: ['./month-year-selection.component.scss']
})
export class MonthYearSelectionComponent implements OnInit,OnChanges {
  

  @Input() selectYears:SelectYear[];
  @Output() monthYearChange = new EventEmitter<MonthYear>();

  monthYearSelected: MonthYear; 
  months: ISelect[];

  constructor(

  ) { 

    this.months = DateTimeFactory.getMonths;
     
  }

  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges){
    if(changes.selectYears) {
      this.selectYears = changes.selectYears.currentValue;
      this.monthYearSelected = {month: this.months[0],year:this.selectYears[0]};
      this.monthYearChange.emit(this.monthYearSelected);
      //ajout de l'année entiere
      this.months.push(this.getYearBalanceSheet(this.selectYears[0].year.toString()));
    }

   }


  updateMonthsSelected(month: ISelect){
    this.monthYearSelected.month = month;
    
    // let monthYear :IMonthYear = {month:month,year:this.monthYearSelected.year.year};
    this.monthYearChange.emit(this.monthYearSelected);
  }

  updateSelectYearSelected(selectYear: SelectYear) {
    this.monthYearSelected.year = selectYear;
    //maj annee entiere
    this.months[this.months.length-1]=this.getYearBalanceSheet(selectYear.year.toString());

    // let monthYear :IMonthYear = {month:this.monthYearSelected.month,year:selectYear.year};
    this.monthYearChange.emit(this.monthYearSelected);
  }

  isInMonthSelected(month: ISelect) {
    return month.id==this.monthYearSelected.month.id;
  }

  getYearBalanceSheet(year: string): ISelect  {
    let yearBalanceSheet = <ISelect> {
      id:13,
      label: year
    };

    return yearBalanceSheet;
  }

}
