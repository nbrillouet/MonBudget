import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
    
    // return value.split(' ').map(word => {
    //   return word.length > 2 ? word[0].toUpperCase() + word.substr(1) : word;
    // }).join(' ');
@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {
  transform(value: Date, args?: string): any {
    return moment(value).format('DD/MM/YYYY');

  }
}