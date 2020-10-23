import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { fuseAnimations } from '@fuse/animations';
import { ValidateIsUnknown, ValidatorIfLocalisable } from './asif-detail.validator';
import { Store, Select } from '@ngxs/store';
import { Observable, Subscription } from 'rxjs';
import { FilterInfo, FilterSelected } from 'app/main/_models/generics/filter.info.model';
import { FilterAsifDetail, FilterAsifTableSelected } from 'app/main/_models/filters/account-statement-import-file.filter';
import { LoadAsifDetail, ClearAsifDetail } from 'app/main/_ngxs/account-statement-import-file/asif-detail/asif-detail.action';
import { AsifDetailState } from 'app/main/_ngxs/account-statement-import-file/asif-detail/asif-detail.state';
import { AsifDetail, AsifForDetail } from 'app/main/_models/account-statement-import/account-statement-import-file.model';
import { IOperation } from 'app/main/_models/referential/operation.model';
import { GMapSearchInfo } from 'app/main/_models/g-map.model.';
import { ISelect } from 'app/main/_models/generics/select.model';
import { ReferentialService } from 'app/main/_services/Referential/referential.service';
import { NotificationsService } from 'angular2-notifications';
import { AsifService } from '../asif.service';
import { UserForDetail } from 'app/main/_models/user.model';
import { OperationTransverse } from 'app/main/_models/referential/operation-transverse.model';
import * as moment from 'moment';
import { FuseConfigService } from '@fuse/services/config.service';
import { Datas, DataInfo, DetailInfo } from 'app/main/_models/generics/detail-info.model';
import { AsifTableFilterSelectedState } from 'app/main/_ngxs/account-statement-import-file/asif-table/asif-table-filter-selected/asif-table-filter-selected.state';
import { LoadAsifTable } from 'app/main/_ngxs/account-statement-import-file/asif-table/asif-table.action';
import { HelperService } from 'app/main/_services/helper.service';
import { FilterOperationType } from 'app/main/_models/filters/operation.filter';
import { UserDetailState } from 'app/main/_ngxs/user/user-detail/user-detail.state';
import { AsDetailGenericComponent } from '../../shared/as-detail-generic/as-detail-generic.component';
import { AsService } from '../../account-statement/account-statement.service';
import { FilterForDetail } from 'app/main/_models/filters/shared/filterDetail.filter';
import { ClearAsifDetailFilter } from 'app/main/_ngxs/account-statement-import-file/asif-detail/asif-detail-filter/asif-detail-filter.action';
import { AsifDetailFilterState } from 'app/main/_ngxs/account-statement-import-file/asif-detail/asif-detail-filter/asif-detail-filter.state';

@Component({
  selector: 'asif-detail',
  templateUrl: '../../shared/as-detail-generic/as-detail-generic.component.html',
  styleUrls: ['../../shared/as-detail-generic/as-detail-generic.component.scss'],
  animations : fuseAnimations
})
export class AsifDetailComponent extends AsDetailGenericComponent implements OnInit, OnDestroy {
  @Select(AsifDetailState.get) detailInfo$: Observable<DetailInfo<AsifForDetail, FilterForDetail>>;
  @Select(AsifDetailFilterState.get) detailFilterInfo$: Observable<DataInfo<FilterAsifDetail>>;
  
  $DetailInfo$: Subscription;
  $detailFilterInfo$: Subscription;

  constructor(
    public _formBuilder: FormBuilder,
    public _helperService: HelperService,
    public _referentialService: ReferentialService,
    public _notificationService: NotificationsService,
    public _router: Router,
    public _store : Store,
    public _asService: AsService,
    public _asifService: AsifService,

    private _activatedRoute: ActivatedRoute,
  ) {
    super(_formBuilder, _helperService, _referentialService, _notificationService, _router, _store, _asService, _asifService);

    this.$DetailInfo$ = this.detailInfo$.subscribe(x => {
      if(x?.loader['datas']?.loaded) {
        this.asGenForDetail = x.datas;
        
        if(this.firstLoad) {
          //creation du formulaire
          this.createForms();
          this.firstLoad=false;
        }
      }
    });

    this.$detailFilterInfo$ = this.detailFilterInfo$.subscribe(x=> {
      if(x?.loader['datas']?.loaded) { 
        this.asGenDetailFilter = x.datas;
      }
    })
  }
  
  ngOnInit() {
    this._activatedRoute.params.subscribe(routeParams => {
      this.from = 'ASIF';
      this.idImport = routeParams['idImport'];
      let idAsif = routeParams['idAsif'];
      this._store.dispatch(new LoadAsifDetail(<FilterForDetail>{id:idAsif}));
    });
  }
    
  ngOnDestroy() {
    this._store.dispatch(new ClearAsifDetail());
    this._store.dispatch(new ClearAsifDetailFilter());
  }  

}
