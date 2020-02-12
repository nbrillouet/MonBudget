import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fuseAnimations } from '@fuse/animations';
import { Store, Select } from '@ngxs/store';
import { Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { AsSoldeState } from 'app/main/_ngxs/account-statement/account-statement-solde/account-statement-solde.state';
import { FilterAsTableSelected, FilterAsTable } from 'app/main/_models/filters/account-statement.filter';
import { LoadAsTableFilter, ChangeAsTableFilter } from 'app/main/_ngxs/account-statement/account-statement-list-filter/account-statement-filter.action';
import { AsSolde } from 'app/main/_models/account-statement/account-statement-solde.model';
import { LoadAsChartEvolution, LoadAsChartCategorisation } from 'app/main/_ngxs/account-statement/account-statement-chart/account-statement-chart.action';
import { FuseConfigService } from '@fuse/services/config.service';
import { LoadAsSolde } from 'app/main/_ngxs/account-statement/account-statement-solde/account-statement-solde.action';
import { DatasFilter } from 'app/main/_models/generics/detail-info.model';
import { AsTableFilterState } from 'app/main/_ngxs/account-statement/account-statement-list-filter/account-statement-filter.state';
import { FilterInfo } from 'app/main/_models/generics/filter.info.model';

@Component({
  selector: 'account-statement-main',
  templateUrl: './account-statement-main.component.html',
  styleUrls: ['./account-statement-main.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations   : fuseAnimations
})
export class AccountStatementMainComponent implements OnInit {

@Select(AsSoldeState.get) asSolde$: Observable<DatasFilter<AsSolde,FilterAsTableSelected>>;
//@Select(AsTableFilterState.get) asTableFilter$: Observable<FilterInfo<FilterAsTable>>;
asTableFilter$: Observable<FilterInfo<FilterAsTable>>;

filterAsSelected: FilterAsTableSelected;
selectedIndex: number = 0;
fullscreen: boolean;
tabsLoaded=[false,false,false,false];
reload: boolean;
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _store: Store,
    private _fuseConfigService: FuseConfigService,
  ) {
    this.asTableFilter$ = this._store.select(state => state.AsTableFilter)

    combineLatest(this._activatedRoute.params, this._activatedRoute.queryParams)
      .pipe(map(results => ({idAccount: results[0].idAccount, idTab: results[1].idTab})))
      .subscribe(results => {
        
        let idAccount = results.idAccount=='ALL' ? null : results.idAccount;
        let idTab = results.idTab;
        
        if(idTab!=null)
          {
            this.selectedIndex = idTab;
            this.reload=true;
 
          }
          else
          {
 
            this.filterAsSelected = new FilterAsTableSelected();
            this.filterAsSelected.idAccount=idAccount;
            
            this._store.dispatch(new LoadAsSolde(this.filterAsSelected));
            this.loadTab();
          }
    });

    // Subscribe to the config changes
    this._fuseConfigService.config
      .subscribe((settings) => {
          this.fullscreen = settings.layout.toolbar.fullscreen;
    });

    

  }

  ngOnInit() {
    this.asTableFilter$.subscribe(filter=>{
  
      if(filter.loader['filters'] && filter.loader['filters'].loaded) {
        
        this.filterAsSelected = filter.filters.selected;
        if(this.reload) {
          this.loadTab();
          this.reload=false;
        }
      }
    })
  }

  onTabClick($event){
    this.selectedIndex=$event.index;
    // if(!this.tabsLoaded[this.selectedIndex])
      this.loadTab();
  }

  changeAsFilter($event: FilterAsTableSelected) {
    this._store.dispatch(new LoadAsSolde($event));
    this.filterAsSelected=$event;
    this.loadTab();

  }

  loadTab() {

    this.tabsLoaded[this.selectedIndex]=true;

    // this.selectedIndex=2;
    if(!isNaN(this.selectedIndex)){
    //   console.warn('no tab selected');
    // else {
      switch(Number(this.selectedIndex)) { 
        case 0: 
          this._store.dispatch(new LoadAsChartEvolution(this.filterAsSelected));
          break; 
        case 1:
          this._store.dispatch(new LoadAsChartCategorisation(this.filterAsSelected));
          break; 
        case 2: 

          this._store.dispatch(new ChangeAsTableFilter(this.filterAsSelected));
          break; 
        // default: 

        //   console.warn('no tab selected') ;
        //   break; 
      }
    } 
  }
  // onHeaderPanelClick() {
  //   this.headerPanelIsVisible = this.headerPanelIsVisible ? false : true;
  //   this.headerPanelIcon = this.headerPanelIsVisible ? 'keyboard_arrow_up' : 'keyboard_arrow_down';
  //   this.fuseConfig.layout.toolbar.hidden=!this.headerPanelIsVisible;
  //   this._fuseConfigService.setConfig(this.fuseConfig);

  // }

}
