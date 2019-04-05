import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'alerting-bar',
  templateUrl: './alerting-bar.component.html',
  styleUrls: ['./alerting-bar.component.scss']
})
export class AlertingBarComponent implements OnInit {
  haveWarning:boolean;

  constructor() {
    this.haveWarning=true;
   }

  ngOnInit() {
  }

}
