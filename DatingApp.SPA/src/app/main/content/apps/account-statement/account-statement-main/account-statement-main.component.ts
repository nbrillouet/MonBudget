import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '../../../../../../../node_modules/@angular/router';
import { fuseAnimations } from '../../../../../core/animations';

@Component({
  selector: 'account-statement-main',
  templateUrl: './account-statement-main.component.html',
  styleUrls: ['./account-statement-main.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations   : fuseAnimations
})
export class AccountStatementMainComponent implements OnInit {
idAccount: number;
selectedIndex: number;

  constructor(
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.params
      .subscribe(routeParams => {
        this.idAccount = routeParams['idAccount'];
      });
  }

  ngOnInit() {
  }

  onTabClick($event){
    console.log($event);
    this.selectedIndex=$event.index;
  }

}
