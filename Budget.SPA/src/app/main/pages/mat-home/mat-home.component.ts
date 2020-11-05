import { Component, AfterViewInit } from '@angular/core';
import { FuseConfigService } from '@fuse/services/config.service';
import { trigger, state, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'mat-home',
  templateUrl: './mat-home.component.html',
  styleUrls: ['./mat-home.component.scss'],
  animations: [
    trigger('move', [
        state('in', style({transform: 'translateY(0)'})),
        state('out', style({transform: 'translateY(100%)'})),
        transition('in => out', animate('4s linear')),
        transition('out => in', animate('4s linear'))
      ])
  ]
})
export class MatHomeComponent implements AfterViewInit {
  title = 'my-app';
  showHide() {

  }
  isShowHideFlag = "over";

  constructor(
      private _fuseConfigService: FuseConfigService)
  {
    
    this._fuseConfigService.config = {
        layout: {
            navbar   : {
                hidden: true
            },
            toolbar  : {
                hidden: true
            },
            footer   : {
                hidden: true
            },
            sidepanel: {
                hidden: true
            }
        }
      }
  }

  state = 'in';
  ngAfterViewInit() {
    setTimeout(() => {
      this.state = 'out';
    }, 0);
  }
  onEnd(event) {
    this.state = 'in';
    if (event.toState === 'in') {
      setTimeout(() => {
        this.state = 'out';
      }, 0);
    }
  }
}