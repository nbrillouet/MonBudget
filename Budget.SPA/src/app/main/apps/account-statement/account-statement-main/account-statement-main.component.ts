import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fuseAnimations } from '@fuse/animations';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AsSoldeState } from 'app/main/_ngxs/account-statement/account-statement-solde/account-statement-solde.state';
import { FilterAsTableSelected } from 'app/main/_models/filters/account-statement.filter';
import { AsSolde } from 'app/main/_models/account-statement/account-statement-solde.model';
import { FuseConfigService } from '@fuse/services/config.service';
import { LoadAsSolde } from 'app/main/_ngxs/account-statement/account-statement-solde/account-statement-solde.action';
import { DatasFilter } from 'app/main/_models/generics/detail-info.model';
import { FilterSelected } from 'app/main/_models/generics/filter.info.model';
import { SynchronizeAsTableFilterSelected } from 'app/main/_ngxs/account-statement/as-table/as-table-filter-selected/as-table-filter-selected.action';
import { AsTableFilterSelectedState } from 'app/main/_ngxs/account-statement/as-table/as-table-filter-selected/as-table-filter-selected.state';
import { filter } from 'rxjs/operators';
import { HelperService } from 'app/main/_services/helper.service';

@Component({
  selector: 'account-statement-main',
  templateUrl: './account-statement-main.component.html',
  styleUrls: ['./account-statement-main.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations   : fuseAnimations
})
export class AccountStatementMainComponent implements OnInit {

@Select(AsSoldeState.get) asSolde$: Observable<DatasFilter<AsSolde,FilterAsTableSelected>>;
@Select(AsTableFilterSelectedState.get) asTableFilterSelected$: Observable<FilterSelected<FilterAsTableSelected>>;

selectedIndex: number = 0;
fullscreen: boolean;
asTableFilterSelected: FilterAsTableSelected;
soldeToLoad: boolean;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _store: Store,
    private _fuseConfigService: FuseConfigService,
    private _helperService: HelperService
  ) {

    this._activatedRoute.params.subscribe(params=>{
      
      let idTab = localStorage.getItem('account-statement-main-tab');
      this.selectedIndex = idTab ? Number(idTab) : 0;

      let asTableFilter = this._store.selectSnapshot<FilterAsTableSelected>(x => x.AsTableFilterSelected.selected);
      asTableFilter.idAccount = params.idAccount;

      this._store.dispatch(new SynchronizeAsTableFilterSelected(asTableFilter));

    })

    // Subscribe to the config changes
    this._fuseConfigService.config
      .subscribe((settings) => {
          this.fullscreen = settings.layout.toolbar.fullscreen;
    });

    this.asTableFilterSelected$
      .subscribe(x=> {

        if (x?.loader['filter-selected']?.loaded) {
          if(!this._helperService.areEquals(x.selected,this.asTableFilterSelected)) {
            this.asTableFilterSelected = this._helperService.getDeepClone(x.selected);
            this._store.dispatch(new LoadAsSolde(this.asTableFilterSelected));
          }
         }
      });

    

  }

  ngOnInit() {

  }

  onTabClick($event){
    this.selectedIndex=$event.index;
    localStorage.setItem('account-statement-main-tab', this.selectedIndex.toString());

    //this.loadTab();
  }

  // changeAsFilter($event: FilterAsTableSelected) {
  //   this._store.dispatch(new SynchronizeAsTableFilterSelected($event));
  //   this._store.dispatch(new LoadAsSolde($event));
  //   // this.filterAsSelected=$event;

  //   //this.loadTab();
  // }

  // loadTab() {

  //   this.tabsLoaded[this.selectedIndex]=true;

  //   // this.selectedIndex=2;
  //   if(!isNaN(this.selectedIndex)){
  //   //   console.warn('no tab selected');
  //   // else {
  //     switch(Number(this.selectedIndex)) { 
  //       case 0: 
  //         // this._store.dispatch(new LoadAsChartEvolution(this.filterAsSelected));
  //         break; 
  //       case 1:
  //         this._store.dispatch(new LoadAsChartCategorisation(this.filterAsSelected));
  //         break; 
  //       case 2: 
  //         //this._store.dispatch(new LoadAsTableFilterSelection(this.filterAsSelected));
  //         break; 
  //       // default: 

  //       //   console.warn('no tab selected') ;
  //       //   break; 
  //     }
  //   } 
  // }
  // onHeaderPanelClick() {
  //   this.headerPanelIsVisible = this.headerPanelIsVisible ? false : true;
  //   this.headerPanelIcon = this.headerPanelIsVisible ? 'keyboard_arrow_up' : 'keyboard_arrow_down';
  //   this.fuseConfig.layout.toolbar.hidden=!this.headerPanelIsVisible;
  //   this._fuseConfigService.setConfig(this.fuseConfig);

  // }

}
