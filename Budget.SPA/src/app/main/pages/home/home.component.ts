import { Component, OnInit } from '@angular/core';
import { FuseConfigService } from '@fuse/services/config.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  user = JSON.parse(localStorage.getItem('currentUser'));
  image: string;

  constructor(
    private _fuseConfig: FuseConfigService
  ) {
    this.image = '/assets/images/logos/MB_logo1.svg';
    this._fuseConfig.config = {
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

  ngOnInit() {

  }

}
