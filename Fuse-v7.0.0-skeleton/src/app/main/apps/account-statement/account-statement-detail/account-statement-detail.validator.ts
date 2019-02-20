import { AbstractControl, ValidatorFn } from '@angular/forms';
import { ISelect } from 'app/main/_models/generics/select.model';


export function ValidateIsUnknown(control: AbstractControl) {
    
    var select=<ISelect>control.value;
    
    if (select.label=='INCONNU' || select.label=='INCONNUE') {
        return { isUnknown: true };
    }
    return null;
  }

//   
export function ValidatorIfLocalisable(isLocalisable: boolean): ValidatorFn  {
    return (control: AbstractControl): {[key: string]: any} => {
        if(control.value==null || control.value=='')
        {
            if(isLocalisable)
                return { isLocalisable: isLocalisable };
        }
        return null;
    };

}