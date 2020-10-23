import { Component, OnInit } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';
import { ReferentialService } from 'app/main/_services/Referential/referential.service';
import { AsService } from '../account-statement.service';
import { FilterAsDetail, FilterAsTableSelected } from 'app/main/_models/filters/account-statement.filter';
import { Select, Store } from '@ngxs/store';
import { Observable, Subscription } from 'rxjs';
import { AsForDetail } from 'app/main/_models/account-statement/account-statement-detail.model';
import * as moment from 'moment';
import { Datas, DetailInfo, DataInfo } from 'app/main/_models/generics/detail-info.model';
import { HelperService } from 'app/main/_services/helper.service';
import { AsDetailFilterState } from 'app/main/_ngxs/account-statement/account-statement-detail/as-detail-filter/as-detail-filter.state';
import { FilterForDetail } from 'app/main/_models/filters/shared/filterDetail.filter';
import { AsDetailState } from 'app/main/_ngxs/account-statement/account-statement-detail/as-detail.state';
import { LoadAsDetail, ClearAsDetail } from 'app/main/_ngxs/account-statement/account-statement-detail/as-detail.action';
import { AsDetailGenericComponent } from '../../shared/as-detail-generic/as-detail-generic.component';
import { ClearAsDetailFilter } from 'app/main/_ngxs/account-statement/account-statement-detail/as-detail-filter/as-detail-filter.action';
import { AsifService } from '../../account-statement-import-file/asif.service';
import { AsifForDetail } from 'app/main/_models/account-statement-import/account-statement-import-file.model';

// templateUrl: './account-statement-detail.component.html',
// styleUrls: ['./account-statement-detail.component.scss'],
@Component({
  selector: 'account-statement-detail',
  templateUrl: '../../shared/as-detail-generic/as-detail-generic.component.html',
  styleUrls: ['../../shared/as-detail-generic/as-detail-generic.component.scss'],
  animations : fuseAnimations
})
export class AccountStatementDetailComponent extends AsDetailGenericComponent implements OnInit {
  @Select(AsDetailState.get) detailInfo$: Observable<DetailInfo<AsForDetail, FilterForDetail>>;
  @Select(AsDetailFilterState.get) detailFilterInfo$: Observable<DataInfo<FilterAsDetail>>;
  
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
            this.asGenForDetail = <AsifForDetail>x.datas;
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
        this.from = 'AS';
        this.idAccount = routeParams['idAccount'];
        let idAccountStatement = routeParams['idAccountStatement'];
        this._store.dispatch(new LoadAsDetail(<FilterForDetail>{id:idAccountStatement}));
      });
    }
    
    ngOnDestroy() {
      this._store.dispatch(new ClearAsDetail());
      this._store.dispatch(new ClearAsDetailFilter());
    }


}
