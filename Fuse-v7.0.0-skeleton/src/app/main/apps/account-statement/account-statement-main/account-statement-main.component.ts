import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fuseAnimations } from '@fuse/animations';
import { Store, Select } from '@ngxs/store';
import { Observable, combineLatest } from 'rxjs';
import { AsTable } from 'app/main/_models/account-statement/account-statement-table.model';
import { map } from 'rxjs/operators';
import { TableInfo } from 'app/main/_models/generics/table-info.model';
import { AsSoldeState } from 'app/main/_ngxs/account-statement/account-statement-solde/account-statement-solde.state';
import { DetailInfo } from 'app/main/_models/generics/detail-info.model';
import { ChangeAsSoldeFilter, LoadAsSolde } from 'app/main/_ngxs/account-statement/account-statement-solde/account-statement-solde.action';
import { FilterAsTable, FilterAsTableSelected } from 'app/main/_models/filters/account-statement.filter';
import { LoadAsTableFilter } from 'app/main/_ngxs/account-statement/account-statement-list-filter/account-statement-filter.action';
import { AsTableFilterState } from 'app/main/_ngxs/account-statement/account-statement-list-filter/account-statement-filter.state';
import { FilterInfo } from 'app/main/_models/generics/filter.info.model';
import { AsSolde } from 'app/main/_models/account-statement/account-statement-solde.model';


@Component({
  selector: 'account-statement-main',
  templateUrl: './account-statement-main.component.html',
  styleUrls: ['./account-statement-main.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations   : fuseAnimations
})
export class AccountStatementMainComponent implements OnInit {

@Select(AsSoldeState.get) asSolde$: DetailInfo<AsSolde,FilterAsTableSelected>;

filterAs: FilterAsTable;
selectedIndex: number = 0;

// idAccount: number;
// idTab: number;


  constructor(
    private _activatedRoute: ActivatedRoute,
    private _store: Store
  ) {
    
    // this._activatedRoute.params.subscribe(routeParams => {
    //   this.filterAs = new FilterAsTable();
    //   this.filterAs.selected.idAccount=routeParams['idAccount'];
      
    //   this._store.dispatch(new LoadAsTableFilter(this.filterAs));
    //   this._store.dispatch(new LoadAsSolde(this.filterAs.selected));
    // });


    combineLatest(this._activatedRoute.params, this._activatedRoute.queryParams)
      .pipe(map(results => ({idAccount: results[0].idAccount, idTab: results[1].idTab})))
      .subscribe(results => {
        let idAccount = results.idAccount;
        let idTab = results.idTab;
 
        if(idTab!=null)
          {
            this.selectedIndex = idTab;
          }
          else
          {
            this.filterAs = new FilterAsTable();
            this.filterAs.selected.idAccount=idAccount;
      
            this._store.dispatch(new LoadAsTableFilter(this.filterAs));
            this._store.dispatch(new LoadAsSolde(this.filterAs.selected));
          }
      });

  }

  ngOnInit() {
  }

  onTabClick($event){

    this.selectedIndex=$event.index;
  }

}
