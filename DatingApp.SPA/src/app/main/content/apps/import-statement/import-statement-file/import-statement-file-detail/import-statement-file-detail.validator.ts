import { AbstractControl, ValidatorFn } from '@angular/forms';
import { ISelect } from '../../../../../_models/Select';

export function ValidateIsUnknown(control: AbstractControl) {
    
    var select=<ISelect>control.value;
    
    if (select.label=='INCONNU' || select.label=='INCONNUE') {
        return { isUnknown: true };
    }
    return null;
  }

//   
export function ValidatorIfLocalisable(operationPlaceSelected: ISelect,isLocalisable:boolean): ValidatorFn  {
    return (control: AbstractControl): {[key: string]: any} => {
        console.log('ValidatorIfLocalisable',control.value)
        if(control.value==null || control.value=='')
        {
            if(isLocalisable && operationPlaceSelected.id!=1 && operationPlaceSelected.id!=3)
            {
                console.log('==INVALID LOCALISABLE==');
                return { isLocalisable: true };
            }
               
        }
        console.log('==VALID LOCALISABLE==');
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