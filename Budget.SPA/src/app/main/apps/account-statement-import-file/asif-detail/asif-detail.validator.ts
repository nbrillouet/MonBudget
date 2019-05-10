import { AbstractControl, ValidatorFn } from '@angular/forms';
import { ISelect } from 'app/main/_models/generics/select.model';


export function ValidateIsUnknown(control: AbstractControl) {
    
    var select=<ISelect>control.value;

    if (select==null ||select.label=='INCONNU' || select.label=='INCONNUE') {
        return { isUnknown: true };
    }
    return null;
  }


export function ValidatorIfLocalisable(operationPlaceSelected: ISelect,isLocalisable:boolean): ValidatorFn  {
    return (control: AbstractControl): {[key: string]: any} => {

        if(control.value==null || control.value=='')
        {
            if(isLocalisable && operationPlaceSelected.id!=1 && operationPlaceSelected.id!=3)
            {
                return { isLocalisable: true };
            }
               
        }
        return null;
    };
}


// export function isOddWithEvenAllowed(allowedEvenNumbers: number[]): ValidatorFn {
// 	return (control: AbstractControl): {[key: string]: any} => {
// 		if (isPresent(Validators.required(control)))
// 			return null;
			
// 		const val = +control.value;
		
// 		if (isNaN(val))
// 			return {'isOddWithEvenAllowed' : true};
		
// 		for (const i = 0; i < allowedEvenNumbers.length; i++) {
// 		  if (allowedEvenNumbers[i] % 2 !== 0)
// 		    throw new Error(allowedEvenNumbers[i] + " is not even!");
// 		}
		
// 		return allowedEvenNumbers.indexOf(val) !== -1 || val % 2 !== 0 ? null : {'isOddWithEvenAllowed' : true};
// 	};
// }