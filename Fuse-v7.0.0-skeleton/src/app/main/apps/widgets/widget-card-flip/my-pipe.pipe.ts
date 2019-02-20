import { Pipe, PipeTransform } from '@angular/core';
import { IDataTime } from '../../../_models/Widgets.ts/widget-card-flip.model';

@Pipe({
  name: 'myfilter'
})
export class MyPipePipe implements PipeTransform {

  transform(items: any[], filter: IDataTime): any {

    
    if (!items || !filter) {  
      return items;  
  }  

  return items.filter(x => x.id==filter.id)[0].value; 
  }

}
