import { AbstractControl } from "@angular/forms";
import { ISelect } from "app/main/_models/generics/select.model";

export function ValidateIsUnknown(control: AbstractControl) {
    
    var select=<ISelect>control.value;

    if (select==null ||select.label=='INCONNU' || select.label=='INCONNUE') {
        return { isUnknown: true };
    }
    return null;
  }