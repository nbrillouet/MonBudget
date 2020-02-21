import { Component, OnInit,OnChanges, SimpleChange, SimpleChanges, Input, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';
import { fuseAnimations } from '@fuse/animations';
import { AsifService } from '../asif.service';
import { Store, Select } from '@ngxs/store';
import { Observable, zip } from 'rxjs';
import { FilterSelected, FilterSelection } from 'app/main/_models/generics/filter.info.model';
import { FuseConfigService } from '@fuse/services/config.service';
import { AsifTableFilterSelectedState } from 'app/main/_ngxs/account-statement-import-file/asif-table/asif-table-filter-selected/asif-table-filter-selected.state';
import { FilterAsifTableSelected, FilterAsifTableSelection } from 'app/main/_models/filters/account-statement-import-file.filter';
import { SynchronizeAsifTableFilterSelected, LoadAsifTableFilterSelected } from 'app/main/_ngxs/account-statement-import-file/asif-table/asif-table-filter-selected/asif-table-filter-selected.action';
import { AsifTableFilterSelectionState } from 'app/main/_ngxs/account-statement-import-file/asif-table/asif-table-filter-selection/asif-table-filter-selection.state';
import { LoadAsifTableFilterSelection } from 'app/main/_ngxs/account-statement-import-file/asif-table/asif-table-filter-selection/asif-table-filter-selection.action';

@Component({
  selector: 'asif-main',
  templateUrl: './asif-main.component.html',
  styleUrls: ['./asif-main.component.scss'],
  animations : fuseAnimations

})

export class AsifMainComponent implements OnInit {
  @Select(AsifTableFilterSelectedState.get) asifTableFilterSelected$: Observable<FilterSelected<FilterAsifTableSelected>>;
  @Select(AsifTableFilterSelectionState.get) asifTableFilterSelection$: Observable<FilterSelection<FilterAsifTableSelection>>;
  
  filterAsifSelected: FilterAsifTableSelected;
  filterAsifSelection: FilterAsifTableSelection;
  loading: boolean;
  fullscreen: boolean;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _asifService: AsifService,
    private _store: Store,
    private _notificationService: NotificationsService,
    private _fuseConfigService: FuseConfigService
  ) {

    zip(this.asifTableFilterSelected$, this.asifTableFilterSelection$, (selected: FilterSelected<FilterAsifTableSelected>, selection: FilterSelection<FilterAsifTableSelection>) => ({selected, selection}))
      .subscribe(result => {
        if(result.selected?.loader['filter-selected']?.loaded 
          && result.selection?.loader['filter-selection']?.loaded
          && !this.filterAsifSelected) {
          this.filterAsifSelection = result.selection.selection;
          this.filterAsifSelected = result.selected.selected;
          this.filterAsifSelected.account = result.selection.selection.account[0];
          this._store.dispatch(new SynchronizeAsifTableFilterSelected(this.filterAsifSelected));
        }
      });

    // this.asifTableFilterSelected$.subscribe(selected=>{
    //   if(selected?.loader['filter-selected']?.loaded) { 
    //     // if(JSON.stringify(selected.selected?.idImport)!=JSON.stringify(this.filterAsifSelected?.idImport)) {
    //       // this.filterAsifSelected = selected.selected;
    //     // }
    //   }
    // });

    // this.asifTableFilterSelection$.subscribe(selection=>{
    //   if(selection?.loader['filter-selection']?.loaded) { 

    //     if(!this.filterAsifSelected.account)
    //       this.filterAsifSelected.account = selection.selection.account[0];
    //   }
    // });
  }
  
  ngOnInit() {       
    this._activatedRoute.params.subscribe(routeParams => {
      let filterAsif = new FilterAsifTableSelected();
      filterAsif.idImport=routeParams['idImport'];

      this._store.dispatch(new LoadAsifTableFilterSelected(filterAsif)); // LoadAsifTableFilter(filterAsif));
      this._store.dispatch(new LoadAsifTableFilterSelection(filterAsif));
    });

    // Subscribe to the config changes
    this._fuseConfigService.config.subscribe((settings) => {
        this.fullscreen = settings.layout.toolbar.fullscreen;
    });

  }

  AccountChange($event) {
    this.filterAsifSelected.account=this.filterAsifSelection.account.find(x=>x.id==$event.id);

    this._store.dispatch(new SynchronizeAsifTableFilterSelected(this.filterAsifSelected));

  }

  SaveInAccountStatement() {
    this.loading=true;
    this._asifService.saveInAccountStatement(this.filterAsifSelected.idImport)
    .subscribe(resp=>{
        this._notificationService.success('Enregistrement effectué', `Les relevés sont enregistrés`);
        this.loading=false;
    },
    error => {

      this._notificationService.error('Echec de l\'enregistrement', error);
      this.loading=false;
    });

  }


}
