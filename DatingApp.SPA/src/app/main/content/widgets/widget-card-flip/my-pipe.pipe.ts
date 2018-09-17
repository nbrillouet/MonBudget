import { Pipe, PipeTransform } from '@angular/core';
import { IDataTime } from '../../../_models/Widgets.ts/widget-card-flip.model';

@Pipe({
  name: 'myfilter'
})
export class MyPipePipe implements PipeTransform {

  transform(items: any[], filter: IDataTime): any {
    console.log(items);
    
    if (!items || !filter) {  
      return items;  
  }  
  console.log('filterResult',items.filter(x => x.id==filter.id)[0].value);
  return items.filter(x => x.id==filter.id)[0].value; 
  }

}
