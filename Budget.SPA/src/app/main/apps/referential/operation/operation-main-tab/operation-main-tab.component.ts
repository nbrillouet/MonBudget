import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { ISelect } from 'app/main/_models/generics/select.model';
import { Router } from '@angular/router';

@Component({
  selector: 'operation-main-tab',
  templateUrl: './operation-main-tab.component.html',
  styleUrls: ['./operation-main-tab.component.scss']
})
export class OperationMainTabComponent implements OnInit, OnChanges {
  @Input() subject: string;
  
  operationFields: ISelect[];
  selectedIndex:number;
  
  constructor(
    private _router: Router
  ) {
    
    this.operationFields = [ {id: 1, label:'Catégorie opération'},{id: 2, label:'Type opération'},{id: 3, label:'Opération'} ];
    
    
    
  }

  ngOnInit() {
    // this.asiTableFilter$.subscribe(asiTableFilter=>{
    //   this.filterAsi = asiTableFilter.filters; // JSON.parse(JSON.stringify(asiTableFilter.filters));
    //   console.log('asiTableFilter.filters',asiTableFilter.filters);
    // });
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes.subject) {
      console.log('main-tab-subject',this.subject);
      this.subject = changes.subject.currentValue;
      switch(this.subject) {
        case 'operation-type-families':
          this.selectedIndex = 0;
          break;
        case 'operation-types':
          this.selectedIndex = 1;
          break;
        case 'operations':
          this.selectedIndex = 2;
          break;
      }
    }

   }

   
  onTabChanged($event) {
    console.log('tab-changed',$event.index);
    this.selectedIndex=$event.index;

    switch(this.selectedIndex) {
      case 0:
      this.subject = 'operation-type-families';
        break;
      case 1:
        this.subject = 'operation-types';
        break;
      case 2:
        this.subject = 'operations';
        break;
    }

    this._router.navigate(
      [`apps/referential/operations/${this.subject}`]);
  }

}
