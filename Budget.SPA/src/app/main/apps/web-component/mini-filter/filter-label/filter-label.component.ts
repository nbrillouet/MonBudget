import { OnInit, Component, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'filter-label',
  templateUrl: './filter-label.component.html',
  styleUrls: ['./filter-label.component.scss']
})
export class FilterLabelComponent implements OnInit {
 
  @Input() label: string;
  @Output() applyLabelFilter=new EventEmitter<string>();
  
  stopPropagation: boolean=true;
  labelForm: FormGroup;


  constructor(
    private _formBuilder: FormBuilder

  ) { }

  ngOnInit() {

    this.labelForm = this._formBuilder.group({
      label: [this.label]
      });

    this.labelForm.valueChanges.subscribe(val=>{
        this.label = val.label;
      });

  }

   applyFilter() {
    this.applyLabelFilter.emit(this.label);

    //suppression du menu
    var element=document.getElementsByClassName("content-filter").item(0);
    element.parentElement.remove();
   }


}
