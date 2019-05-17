import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fuseAnimations } from '@fuse/animations';
import { Store, Select } from '@ngxs/store';
import { Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { AsSoldeState } from 'app/main/_ngxs/account-statement/account-statement-solde/account-statement-solde.state';
import { DetailInfo } from 'app/main/_models/generics/detail-info.model';
import { FilterAsTable, FilterAsTableSelected } from 'app/main/_models/filters/account-statement.filter';
import { LoadAsTableFilter } from 'app/main/_ngxs/account-statement/account-statement-list-filter/account-statement-filter.action';
import { AsSolde } from 'app/main/_models/account-statement/account-statement-solde.model';
import { LoadAsChartEvolution } from 'app/main/_ngxs/account-statement/account-statement-chart/account-statement-chart.action';
import { FuseConfigService } from '@fuse/services/config.service';
import { LoadAsSolde } from 'app/main/_ngxs/account-statement/account-statement-solde/account-statement-solde.action';


@Component({
  selector: 'account-statement-main',
  templateUrl: './account-statement-main.component.html',
  styleUrls: ['./account-statement-main.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations   : fuseAnimations
})
export class AccountStatementMainComponent implements OnInit {

@Select(AsSoldeState.get) asSolde$: Observable<DetailInfo<AsSolde,FilterAsTableSelected>>;

filterAs: FilterAsTable;
selectedIndex: number = 0;

headerPanelIsVisible: boolean = false;
headerPanelIcon:string;
fuseConfig:any;
// idAccount: number;
// idTab: number;


  constructor(
    private _activatedRoute: ActivatedRoute,
    private _store: Store,
    private _fuseConfigService: FuseConfigService,
  ) {

    combineLatest(this._activatedRoute.params, this._activatedRoute.queryParams)
      .pipe(map(results => ({idAccount: results[0].idAccount, idTab: results[1].idTab})))
      .subscribe(results => {
        let idAccount = results.idAccount=='ALL' ? null : results.idAccount;
        let idTab = results.idTab;

        if(idTab!=null)
          {
            this.selectedIndex = idTab;
          }
          else
          {
            this.filterAs = new FilterAsTable();
            this.filterAs.selected.idAccount=idAccount;
            let user = JSON.parse(localStorage.getItem('currentUser'));
            // this.filterAs.selected.user=user.id;

            this._store.dispatch(new LoadAsTableFilter(this.filterAs));
            this._store.dispatch(new LoadAsSolde(this.filterAs.selected));
            this._store.dispatch(new LoadAsChartEvolution(this.filterAs.selected));

          }
      });

      //prendre en compte le fuseConfig
      this._fuseConfigService.config
      .subscribe((config) => {
          // Update the stored config
          this.fuseConfig = config;
      });

  }

  ngOnInit() {
    this.onHeaderPanelClick();
  }

  onTabClick($event){

    this.selectedIndex=$event.index;
  }

  onHeaderPanelClick() {
    this.headerPanelIsVisible = this.headerPanelIsVisible ? false : true;
    this.headerPanelIcon = this.headerPanelIsVisible ? 'keyboard_arrow_up' : 'keyboard_arrow_down';
    this.fuseConfig.layout.toolbar.hidden=!this.headerPanelIsVisible;
    this._fuseConfigService.setConfig(this.fuseConfig);

  }

}
