import { Component, OnInit, Input } from '@angular/core';
import { UserEvent } from 'app/main/_models/user-event.model';

@Component({
  selector: 'alerting-bar',
  templateUrl: './alerting-bar.component.html',
  styleUrls: ['./alerting-bar.component.scss']
})
export class AlertingBarComponent implements OnInit {
  @Input() userEvents: UserEvent[];

  // haveWarning:boolean;

  constructor() {
    // this.haveWarning=true;
   }

  ngOnInit() {
    console.log('this.userEvents',this.userEvents);
  }

}
