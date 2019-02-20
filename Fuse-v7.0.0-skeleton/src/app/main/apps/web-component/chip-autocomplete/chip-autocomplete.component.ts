import { Component, OnInit, ElementRef, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { MatAutocompleteSelectedEvent, MatChipInputEvent, MatAutocomplete } from '@angular/material';
import { startWith, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { ISelect } from 'app/main/_models/generics/select.model';


@Component({
  selector: 'chip-autocomplete',
  templateUrl: './chip-autocomplete.component.html',
  styleUrls: ['./chip-autocomplete.component.scss']
})
export class ChipAutocompleteComponent implements OnInit {
  @Input() datas: any
  @Input() placeHolder: string;
  @Output() getSelectedListChange = new EventEmitter<any>();
  
  visible: boolean = true;
  selectable: boolean = true;
  removable: boolean = true;
  addOnBlur: boolean = false;
  separatorKeysCodes = [ENTER, COMMA];
  
    fruitCtrl = new FormControl();
    filteredFruits: Observable<ISelect[]>;
    // list: any;

    fruits: any;
    // = [
    //   'Lemon',
    // ];
  
    allFruits: any;
    //  = [
    //   'Apple',
    //   'Lemon',
    //   'Lime',
    //   'Orange',
    //   'Strawberry'
    // ];
    @ViewChild('fruitInput') fruitInput: ElementRef;
    @ViewChild('auto') matAutocomplete: MatAutocomplete;
    
  constructor() { }

  ngOnInit() {
    
    this.fruits = this.datas.listSelected;
    this.allFruits = this.datas.list;

        this.filteredFruits = this.fruitCtrl.valueChanges.pipe(
          startWith(null),
          map((fruit: string | null) => fruit ? this.filter(fruit) : this.allFruits.slice()));
        
  }

  add(event: MatChipInputEvent): void {
    if (!this.matAutocomplete.isOpen) {
      const input = event.input;
      const value = event.value;

      // Add our fruit
      if ((value || '').trim()) {
        this.fruits.push(value.trim());
        this.getSelectedListChange.emit(this.fruits);
      }

      // Reset the input value
      if (input) {
        input.value = '';
      }

      this.fruitCtrl.setValue(null);
      
  }
  }

  remove(fruit: any): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
      this.getSelectedListChange.emit(this.fruits);
    }
  }

  filter(name: any) {

    var toto = this.allFruits.filter(x=>x.id == name.id);
      // fruit.indexOf(name) === 0);

    return toto;
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.fruits.push(event.option.value);
    // this.fruits.push(event.option.viewValue);
    this.fruitInput.nativeElement.value = '';
    this.fruitCtrl.setValue(null);

    this.getSelectedListChange.emit(this.fruits);
  }

  



}
