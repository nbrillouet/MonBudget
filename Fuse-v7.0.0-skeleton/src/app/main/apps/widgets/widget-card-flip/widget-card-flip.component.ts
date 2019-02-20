import { Component, OnInit } from '@angular/core';
import { IWidgetCardFlip } from '../../../_models/Widgets.ts/widget-card-flip.model';
import { fuseAnimations } from '@fuse/animations';
// import { fuseAnimations } from '../../../../core/animations';

@Component({
  selector: 'widget-card-flip',
  templateUrl: './widget-card-flip.component.html',
  styleUrls: ['./widget-card-flip.component.scss'],
  animations : fuseAnimations
})
export class WidgetCardFlipComponent implements OnInit {
  widget: IWidgetCardFlip

  constructor() {
    this.widget = <IWidgetCardFlip> {
      ranges: [ 
        {id:'DY',value:'Yesterday'},
        {id:'DT',value:'Today'},
        {id:'DTM',value:'Tomorrow'}
      ],
      currentRange: {id:'DT',value:'Today'},
      data: {
        label: 'DUE TASKS',
        count: [
          {id:'DY',value:'21'},
          {id:'DT',value:'25'},
          {id:'DTM',value:'19'}
        ],
        extra: {
            label: 'Completed',
            count: [
              {id:'DY',value:'6'},
              {id:'DT',value:'7'},
              {id:'DTM',value:'-'}
            ]

        }
      },
      detail: 'some details'
    }


  }


  ngOnInit() {
  }

  compareObjects(o1: any, o2: any) {
    if(o1.label == o2.label && o1.id == o2.id )
    return true;
    else return false
  }

}
