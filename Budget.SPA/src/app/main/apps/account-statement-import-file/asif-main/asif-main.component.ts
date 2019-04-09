import { Component, OnInit,OnChanges, SimpleChange, SimpleChanges, Input, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';
import { fuseAnimations } from '@fuse/animations';
import { AsifService } from '../asif.service';
import { Store, Select } from '@ngxs/store';
import { LoadAsifTableFilter, ChangeAsifTableFilter } from 'app/main/_ngxs/account-statement-import-file/asif-list-filter/asif-list-filter.action';
import { AsifTableFilterState } from 'app/main/_ngxs/account-statement-import-file/asif-list-filter/asif-list-filter.state';
import { Observable } from 'rxjs';
import { FilterInfo } from 'app/main/_models/generics/filter.info.model';
import { FilterAsifTable } from 'app/main/_models/filters/account-statement-import-file.filter';
import { FuseConfigService } from '@fuse/services/config.service';

@Component({
  selector: 'asif-main',
  templateUrl: './asif-main.component.html',
  styleUrls: ['./asif-main.component.scss'],
  animations : fuseAnimations

})

export class AsifMainComponent implements OnInit {
  @Select(AsifTableFilterState.get) asifTableFilter$: Observable<FilterInfo<FilterAsifTable>>;
  
  filterAsif: FilterAsifTable;
  loading: boolean;

  headerPanelIsVisible: boolean = false;
  headerPanelIcon:string;
  fuseConfig:any;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _asifService: AsifService,
    private _store: Store,
    private _notificationService: NotificationsService,
    private _fuseConfigService: FuseConfigService
  ) {
    this._activatedRoute.params.subscribe(routeParams => {
      this.filterAsif = new FilterAsifTable();
      this.filterAsif.selected.idImport=routeParams['idImport'];
      this._store.dispatch(new LoadAsifTableFilter(this.filterAsif));
    });
  }
  
  ngOnInit() {       
    this.asifTableFilter$.subscribe(asifTableFilter=>{
      this.filterAsif = asifTableFilter.filters;
    });

    //prendre en compte le fuseConfig
    this._fuseConfigService.config
    .subscribe((config) => {
        // Update the stored config
        this.fuseConfig = config;
    });

    this.onHeaderPanelClick();
  }

  AccountChange($event) {

    this.filterAsif.selected.account=this.filterAsif.accounts.find(x=>x.id==$event.id);

    this._store.dispatch(new LoadAsifTableFilter(this.filterAsif));

  }

  SaveInAccountStatement() {
    this.loading=true;
    this._asifService.saveInAccountStatement(this.filterAsif.selected.idImport)
    .subscribe(resp=>{
        this._notificationService.success('Enregistrement effectué', `Les relevés sont enregistrés`);
        this.loading=false;
    },
    error => {

      this._notificationService.error('Echec de l\'enregistrement', error);
      this.loading=false;
    });

  }

  onHeaderPanelClick() {
    this.headerPanelIsVisible = this.headerPanelIsVisible ? false : true;
    this.headerPanelIcon = this.headerPanelIsVisible ? 'keyboard_arrow_up' : 'keyboard_arrow_down';
    this.fuseConfig.layout.toolbar.hidden=!this.headerPanelIsVisible;
    this._fuseConfigService.setConfig(this.fuseConfig);

  }
 

}
