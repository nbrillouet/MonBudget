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
idAccount: number = null;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _store: Store,
    private _fuseConfigService: FuseConfigService,
  ) {

    this._activatedRoute.params.subscribe(x=>{
      let idTab = localStorage.getItem('account-statement-main-tab');
      this.selectedIndex = idTab ? Number(idTab) : 0;
      this.idAccount = x.idAccount;
      // let filterAsSelected = new FilterAsTableSelected();
      // filterAsSelected.idAccount=x.idAccount;
      
      // this._store.dispatch(new SynchronizeAsTableFilterSelected(filterAsSelected));
      // this._store.dispatch(new LoadAsSolde(filterAsSelected));
    })

    // Subscribe to the config changes
    this._fuseConfigService.config
      .subscribe((settings) => {
          this.fullscreen = settings.layout.toolbar.fullscreen;
    });

    this.asTableFilterSelected$
      .subscribe(x=> {
        // this._store.dispatch(new LoadAsSolde(x.selected));
        if(!x.selected.idAccount) {
          x.selected.idAccount=this.idAccount;
          this._store.dispatch(new SynchronizeAsTableFilterSelected(x.selected));
          this._store.dispatch(new LoadAsSolde(x.selected));
        }
        if (x?.loader['filter-selected']?.loaded) {
          
    //           // this._store.dispatch(new LoadAsSolde(x.selected));
    // //       this._store.dispatch(new SynchronizeAsTableFilterSelected(x.selected));
          // this._store.dispatch(new LoadAsSolde(x.selected));
        }
      });

    

  }

  ngOnInit() {
    // this.asTableFilter$.subscribe(filter=>{
    //   if(filter.loader['filters'] && filter.loader['filters'].loaded) {
        
    //     this.filterAsSelected = filter.filters.selected;
    //     if(this.reload) {
    //       this.loadTab();
    //       this.reload=false;
    //     }
    //   }
    // })
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
