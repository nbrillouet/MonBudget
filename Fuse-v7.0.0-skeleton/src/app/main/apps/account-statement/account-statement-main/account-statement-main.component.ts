import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fuseAnimations } from '@fuse/animations';
import { Store, Select } from '@ngxs/store';
// import { ChangeAsFilter } from 'app/main/_ngxs/account-statement/account-statement-filter/account-statement-filter.action';
import { AsFilter } from 'app/main/_models/Filters/filter-account-statement';
import { Pagination } from 'app/main/_models/pagination.model';
import { ChangeAsFilter } from 'app/main/_ngxs/account-statement/account-statement-list/account-statement-list.action';
import { AsListState } from 'app/main/_ngxs/account-statement/account-statement-list/account-statement-list.state';
import { Observable, combineLatest } from 'rxjs';
import { AsTable, AsSolde } from 'app/main/_models/account-statement.model';
import { map } from 'rxjs/operators';
import { TableInfo } from 'app/main/_models/generics/table-info.model';
import { AsSoldeState } from 'app/main/_ngxs/account-statement/account-statement-solde/account-statement-solde.state';
import { DetailInfo } from 'app/main/_models/generics/detail-info.model';
import { ChangeAsSoldeFilter } from 'app/main/_ngxs/account-statement/account-statement-solde/account-statement-solde.action';
// import { GridInfo, AsGrid } from 'app/main/_models/account-statement.model';

@Component({
  selector: 'account-statement-main',
  templateUrl: './account-statement-main.component.html',
  styleUrls: ['./account-statement-main.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations   : fuseAnimations
})
export class AccountStatementMainComponent implements OnInit {

@Select(AsListState.get) gridInfo$: Observable<TableInfo<AsTable,AsFilter>>;
@Select(AsSoldeState.get) soldeInfo$: Observable<DetailInfo<AsSolde,AsFilter>>;

idAccount: number;
idTab: number;
selectedIndex: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store
  ) {
    this.selectedIndex = 0;
 
    combineLatest(this.activatedRoute.params, this.activatedRoute.queryParams)
      .pipe(map(results => ({idAccount: results[0].idAccount, idTab: results[1].idTab})))
      .subscribe(results => {
        this.idAccount = results.idAccount;
        this.idTab = results.idTab;
 
        if(this.idTab!=null)
          {
            this.selectedIndex = this.idTab;
          }
          else
          {
    
            let filter = new AsFilter();
            filter.idAccount = this.idAccount;

            this.store.dispatch(new ChangeAsSoldeFilter(filter));
            this.store.dispatch(new ChangeAsFilter(filter));
          }
      });

  }

  ngOnInit() {
  }

  onTabClick($event){

    this.selectedIndex=$event.index;
  }

}
