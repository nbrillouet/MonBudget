import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NotificationsService } from 'angular2-notifications';
import { fuseAnimations } from '@fuse/animations';
import { ISelect } from 'app/main/_models/generics/select.model';
import { ReferentialService } from 'app/main/_services/Referential/referential.service';
import { IAccountForDetail, AccountForDetail } from 'app/main/_models/referential/account.model';
import { Select, Store } from '@ngxs/store';
import { Observable, Subscription } from 'rxjs';
import { AccountDetailState } from 'app/main/_ngxs/referential/account/account-detail/account-detail.state';
import { LoadAccountDetail, ClearAccountDetail, SynchronizeAccountDetail } from 'app/main/_ngxs/referential/account/account-detail/account-detail.action';
import { ValidateIsUnknown } from './account-detail.validator';
import { Datas, DetailInfo, DataInfo } from 'app/main/_models/generics/detail-info.model';
import { AccountDetailFilterState } from 'app/main/_ngxs/referential/account/account-detail/account-detail-filter/account-detail-filter.state';
import { FilterForDetail } from 'app/main/_models/filters/shared/filterDetail.filter';
import { FilterAccountDetail, FilterAccountTableSelected } from 'app/main/_models/filters/account.filter';
import { FilterSelected } from 'app/main/_models/generics/filter.info.model';
import { AccountTableFilterSelectedState } from 'app/main/_ngxs/referential/account/account-table/account-table-filter-selected/account-table-filter-selected.state';
import { AccountDetailFilterChangeBankFamily, AccountDetailFilterChangeBankSubFamily } from 'app/main/_ngxs/referential/account/account-detail/account-detail-filter/account-detail-filter.action';

@Component({
  selector: 'account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.scss'],
  animations   : fuseAnimations
})
export class AccountDetailComponent implements OnInit {
  @Select(AccountDetailState.get) detailInfo$: Observable<DetailInfo<AccountForDetail, FilterForDetail>>;
  @Select(AccountDetailFilterState.get) detailFilterInfo$: Observable<DataInfo<FilterAccountDetail>>;

  @Select(AccountTableFilterSelectedState.get) accountTableFilterSelected$: Observable<FilterSelected<FilterAccountTableSelected>>;

$DetailInfo$: Subscription;
accountForDetail: AccountForDetail

filterAccountSelected: FilterAccountTableSelected;
firstLoad: boolean=true;
accountDetailForm: FormGroup;
hasSameUser: boolean = false;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _store: Store,
    private _formBuilder: FormBuilder,
    private _notificationService: NotificationsService,
    private _referentialService: ReferentialService
  ) { 

    this.accountTableFilterSelected$.subscribe(selected=>{
      if(selected?.loader['filter-selected']?.loaded) {
        this.filterAccountSelected = selected.selected; 
      }
    });

    this.$DetailInfo$ = this.detailInfo$.subscribe(x => {
      if(x?.loader['datas']?.loaded) {
        this.accountForDetail = x.datas;
        if(this.firstLoad) {
          //creation du formulaire
          this.createForms();
          this.firstLoad=false;
        }
      }
    });

  }

  ngOnInit() {
    this._activatedRoute.params.subscribe(routeParams => {
      let idAccount = routeParams['idAccount']=='new' ? null : routeParams['idAccount'];
      this._store.dispatch(new LoadAccountDetail(<FilterForDetail>{ id:idAccount }));
    });
  }

  ngOnDestroy() {
    this._store.dispatch(new ClearAccountDetail());
  }

  createForms() {
    this.accountDetailForm = 
        this._formBuilder.group({
            id              : [this.accountForDetail.id,[Validators.required]],
            number          : [this.accountForDetail.number,[Validators.required]],
            label           : [this.accountForDetail.label,[Validators.required]],
            bankFamily      : [this.accountForDetail.bankAgency!=null
                                  ? this.accountForDetail.bankAgency?.bankSubFamily?.bankFamily
                                  : null,[Validators.required, ValidateIsUnknown]],
            bankSubFamily   : [this.accountForDetail.bankAgency!=null 
                                  ? this.accountForDetail.bankAgency.bankSubFamily
                                  : null,[Validators.required, ValidateIsUnknown]],
            bankAgency      : [this.accountForDetail?.bankAgency,[Validators.required, ValidateIsUnknown]],
            startAmount     : [this.accountForDetail.startAmount,[Validators.required]],
            accountType     : [this.accountForDetail?.accountType,[Validators.required, ValidateIsUnknown]],   
            alertThreshold  : [this.accountForDetail.alertThreshold,[Validators.required]]
        });
    

    this.accountDetailForm.get('bankFamily').valueChanges
      .subscribe(val => {
        this._store.dispatch(new AccountDetailFilterChangeBankFamily(val));
        this.accountDetailForm.controls['bankSubFamily'].setValue({id:1,label:'INCONNU'});
      });

    this.accountDetailForm.get('bankSubFamily').valueChanges
    .subscribe(val => {
      this._store.dispatch(new AccountDetailFilterChangeBankSubFamily(val));
      this.accountDetailForm.controls['bankAgency'].setValue({id:1,label:'INCONNU'});
    });
    
    this.accountDetailForm.valueChanges.subscribe(val=>{
      this.accountForDetail.id = val.id;
      this.accountForDetail.number = val.number;
      this.accountForDetail.label = val.label;
      this.accountForDetail.bankAgency = val.bankAgency;

      if(this.accountForDetail.bankAgency)
        this.accountForDetail.bankAgency.bankSubFamily = val.bankSubFamily;
      if(this.accountForDetail.bankAgency.bankSubFamily)
        this.accountForDetail.bankAgency.bankSubFamily.bankFamily = val.bankFamily;

      this.accountForDetail.startAmount = val.startAmount;
      this.accountForDetail.accountType = val.accountType;
      this.accountForDetail.alertThreshold = val.alertThreshold;

      console.log('this.accountForDetail',this.accountForDetail);
      this._store.dispatch(new SynchronizeAccountDetail(this.accountForDetail));
    });
  }

  save(){
    this._referentialService.accountService.save(this.accountForDetail)
    .subscribe(resp=> {
      // console.log('resp',resp);
      // if(resp)
      // {
        this.hasSameUser=false;
        this._notificationService.success('Enregistrement effectué', `Le compte est enregistrée`);
        //this._store.dispatch(new SynchronizeAccountTableFilterSelected(this.filterOtfSelected));
      // }
      // else {
      //   this._notificationService.error('Echec de l\'enregistrement');
      // }
    },
    error => {
        // this.enumSave = this.enumSaveList.ONERROR;
        if (error.status === 400) {
          //
          if(error.error.filter(x => x.code=='BUS_ACC_ERR_000')[0]) {
            this.hasSameUser=true;
            console.log('erreur utilisateur')
          }
        }
    });
  }

  askAccountOwner(){
    this._referentialService.accountService.askAccountOwner(this.accountForDetail)
    .subscribe(resp=> { 

    });
  }

  cancelSave() {
    this.hasSameUser = false;
  }

  compareObjects(o1: any, o2: any) {
    if(o1.label == o2.label && o1.id == o2.id )
    return true;
    else return false;
  }

}

// @Select(AccountForDetailState.get) accountDetail$: Observable<Datas<IAccountForDetail>>;

// firstLoad: boolean=true;
// formLoaded: boolean;
// accountDetail: IAccountForDetail;
// accountForm: FormGroup;

// bankAgencies: ISelect[];
// accountTypes: ISelect[];
// pageType: string;


//   constructor(
//     private _activatedRoute : ActivatedRoute,
//     private _formBuilder: FormBuilder,
//     private _store: Store,
//     private _referentialService: ReferentialService,
//     private _notificationService: NotificationsService,
//   ) {
//     this.accountDetail$.subscribe(accountDetail=>{

//       if(accountDetail?.loader['datas']?.loaded) {
//         this.accountDetail = JSON.parse(JSON.stringify(accountDetail.datas));
//         if(this.firstLoad) {
//           //creation du formulaire
//           this.createForms();
//           this.firstLoad=false;
//         }

//         this.formLoaded=true;
//       }
//     });
//       // this._activatedRoute.data.subscribe(data => {
//       //   this.account = data['account'];
//       //   this.pageType=this.account.id==0 ? 'new' : 'edit';
//       //   this.accountForm = this.createAccountForm();

//       //   this.loadBankAgencyList();
//       //   this.loadAccountTypeList();

//       // })
//    }

//   ngOnInit() {
//     this._activatedRoute.params.subscribe(routeParams => {

//       let idAccount = routeParams['idAccount']=='new' ? 0 : routeParams['idAccount'];
//       this._store.dispatch(new LoadAccountForDetail(idAccount));
//     });
//   }

//   createForms() {
//     this.accountForm = 
//         this._formBuilder.group({
//             id              : [this.accountDetail.id,[Validators.required]],
//             number          : [this.accountDetail.number,[Validators.required]],
//             label           : [this.accountDetail.label,[Validators.required]],
//             bankFamily      : [this.accountDetail.bankFamily.selected,[Validators.required, ValidateIsUnknown]],
//             bankSubFamily   : [this.accountDetail.bankSubFamily.selected,[Validators.required, ValidateIsUnknown]],
//             bankAgency      : [this.accountDetail.bankAgency.selected,[Validators.required, ValidateIsUnknown]],
//             startAmount     : [this.accountDetail.startAmount,[Validators.required]],
//             accountType     : [this.accountDetail.accountType.selected,[Validators.required, ValidateIsUnknown]],   
//             alertThreshold  : [this.accountDetail.alertThreshold,[Validators.required]]
//         });
    
//     this.accountForm.get('bankFamily').valueChanges
//     .subscribe(val => {
//       this._store.dispatch(new AccountForDetailChangeBankFamily(val));
//       this.accountForm.controls['bankSubFamily'].setValue({id:1,label:'INCONNU'});
//     });

//     this.accountForm.get('bankSubFamily').valueChanges
//     .subscribe(val => {
//       this._store.dispatch(new AccountForDetailChangeBankSubFamily(val));
//       this.accountForm.controls['bankAgency'].setValue({id:1,label:'INCONNU'});
//     });
    
//     this.accountForm.valueChanges.subscribe(val=>{
//       this.accountDetail.id = val;

//       //TODO synchronize
//       // this._store.dispatch(new LoadAccountForDetailSuccess(this.accountDetail));
//     });
//   }

//   ngOnDestroy() {
//     this._store.dispatch(new ClearAccountForDetail());
//   }

//   save() {
//     this._referentialService.accountService.saveDetail(this.accountDetail)
//       .subscribe(resp=> {
//         if(resp)
//         {
//           this._notificationService.success('Enregistrement effectué', `La catégorie d'opération est enregistrée`);
//           // this._store.dispatch(new LoadOtfTableDatas(this.filterOtf.selected));
//         }
//         else {
//           this._notificationService.error('Echec de l\'enregistrement');
//         }
//       });
//   }

//   compareObjects(o1: any, o2: any) {
//     if(o1.label == o2.label && o1.id == o2.id )
//     return true;
//     else return false;
//   }



// }
