import { Injectable } from "@angular/core";

@Injectable()
export class HelperService {

    constructor(
    ) { }
    
    getUtc(date: Date) {
        if(date!=null)
        {
            let myDate = new Date(date);
            let UTCDate = Date.UTC(myDate.getFullYear(), myDate.getMonth(), myDate.getDate()) - myDate.getTimezoneOffset();
            return new Date(UTCDate);
        }
        return null;
    }

    getDeepClone(object) {
        return JSON.parse(JSON.stringify(object));
    }

    areEquals(object1: object, object2: object) {
        // console.log('o1',JSON.stringify(object1));
        // console.log('o2',JSON.stringify(object2));
        // let o1 = '{"idAccount":"2","monthYear":{"month":{"id":4,"label":"Avr"},"year":2020},"user":{"id":2,"idUserGroup":3},"operationMethod":null,"operationTypeFamily":null,"operationType":null,"operation":null,"dateIntegration":null,"amountOperation":null,"pagination":{"sortColumn":"id","sortDirection":"asc","currentPage":0,"totalPages":0,"totalItems":0,"nbItemsPerPage":15,"nbItemsPerPageOption":null}}';// JSON.stringify(object1);
        // let o2 = '{"idAccount":"2","monthYear":{"month":{"id":4,"label":"Avr"},"year":2020},"user":{"id":2,"idUserGroup":3},"operationMethod":null,"operationTypeFamily":null,"operationType":null,"operation":null,"dateIntegration":null,"amountOperation":null,"pagination":{"sortColumn":"id","sortDirection":"asc","totalItems":0,"totalPages":0,"currentPage":0,"nbItemsPerPage":15,"nbItemsPerPageOption":null}}';//JSON.stringify(object2);
        // let toto = o1 === o2;
        // console.log('toto',toto);
        return JSON.stringify(object1) === JSON.stringify(object2);
        //     return true;

        // return false;
        // return JSON.stringify(object1) == JSON.stringify(object2);
    }
}