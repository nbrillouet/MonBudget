import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Subscription } from 'rxjs/Subscription';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { NotificationsService } from 'angular2-notifications';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { Moment } from 'moment';
import {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_LOCALE, MAT_DATE_FORMATS } from '@angular/material/core';
import { fuseAnimations } from '@fuse/animations';
import { UserForDetail } from 'app/main/_models/user.model';
import { IGMapSearchInfo } from 'app/main/_models/g-map.model.';
import { AuthService } from 'app/main/_services/auth.service';
import { Select, Store } from '@ngxs/store';
import { UserDetailState } from 'app/main/_ngxs/user/user-detail/user-detail.state';
import { Observable } from 'rxjs';
import { HelperService } from 'app/main/_services/helper.service';
import { SynchronizeUserDetail } from 'app/main/_ngxs/user/user-detail/user-detail.action';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
  animations: fuseAnimations
  // providers: [
  //   {provide: MAT_DATE_LOCALE, useValue: 'fr'},
  //   {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
  //   {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
  // ]
})

export class UserDetailComponent implements OnInit {
  @Select(UserDetailState.getUser) user$: Observable<UserForDetail>;

  user : UserForDetail;
  onUserChanged: Subscription;
  pageType: string;
  userForm: FormGroup;
  avatarUrl: string;
  gMapSearchInfo: IGMapSearchInfo;
  checkboxes: number[]=[];
  hasSelectedAccounts: boolean;

  public selectedDate: Date = new Date();

  constructor(
    private userService: UserService,
    private notificationService: NotificationsService,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private datePipe: DatePipe,
    private router: Router,
    private _helperService: HelperService,
    private _store: Store,
    private activatedRoute: ActivatedRoute,
    private _translateService: TranslateService,
    private _dateAdapter: DateAdapter<Date>
  ) { }

  ngOnInit() {
    
    this.pageType = 'edit';
    
    this.user$.subscribe((user:UserForDetail) => {
      if(user) {
          this.user = user;
          this.gMapSearchInfo = <IGMapSearchInfo> { 
              idGMapAddress: this.user.idGMapAddress,
              operationPositionSearch:"",
              operationPlaceSearch: ""
              };

          this.createUserForm();
      }
    });

    this.useLanguage(this._translateService.getDefaultLang());
    // this.activatedRoute.data.subscribe(data => {
    //   this.user = data['user'];
   
    //   this.gMapSearchInfo = <IGMapSearchInfo> { 
    //     idGMapAddress: this.user.idGMapAddress,
    //     operationPositionSearch:"",
    //     operationPlaceSearch: ""
    //     }

    //   this.userForm=this.createUserForm();
      
    //   this.authService.currentAvatarUrl
    //     .subscribe(avatarUrl=> this.avatarUrl = avatarUrl);
    // })
  }

  createUserForm()
  {
      this.userForm = this.formBuilder.group({
          id              : [this.user.id],
          userName        : [this.user.userName,[Validators.required]],
          lastName        : [this.user.lastName,[Validators.required]],
          firstName       : [this.user.firstName,[Validators.required]],
          idGMapAddress   : [this.user.idGMapAddress],
          dateOfBirth     : [this.user.dateOfBirth],
          age             : [{value:this.user.age,disabled:true}],
          dateCreated     : [{value:this.datePipe.transform(this.user.dateCreated,"dd/MM/yyyy"),disabled:true}],
          dateLastActive  : [{value:this.datePipe.transform(this.user.dateLastActive,"dd/MM/yyyy"),disabled:true}]
      });

      this.userForm.valueChanges.subscribe(val=>{
        this.user.id =val.id;
        this.user.userName =val.userName;
        this.user.lastName =val.lastName;
        this.user.firstName =val.firstName;
        this.user.idGMapAddress =val.idGMapAddress;
        this.user.dateOfBirth = this._helperService.getUtc(val.dateOfBirth);
        
        this._store.dispatch(new SynchronizeUserDetail(this.user));
        
      });
  }

  
  updateUser({ value, valid }: { value: UserForDetail, valid: boolean }) {
    // this.user.id=value.id;
    // this.user.userName=value.userName;
    // this.user.lastName=value.lastName;
    // this.user.firstName=value.firstName;
    // this.user.idGMapAddress=value.idGMapAddress;
    
    // this.user.dateOfBirth != null ? this._helperService.getUtc(value.dateOfBirth) : null;
    
    // var mt:Moment = <Moment>this.userForm.value.dateOfBirth;
    // var dt = mt.toDate();
    // dt.setMinutes(dt.getMinutes() - dt.getTimezoneOffset());
    // this.user.dateOfBirth = dt;

    this.userService.updateUser(this.user.id, this.user)
      .subscribe(next => {
        this.userForm.reset(this.user);
        this.notificationService.success('Sauvegarde réussi', 'Utilisateur enregistré');
      }, error => {
        this.notificationService.error('Echec sauvegarde', error);
      })
  }
 
  updateUserAvatar(avatarUrl)
  {
    this.user.avatarUrl=avatarUrl;
  }

  onChangeGMapAddress($event) {
    if (this.user.idGMapAddress!=$event.id)
    {
      this.user.idGMapAddress = $event.id;
      this.userForm.markAsDirty();
    }
    
  }

  // onSelectedChange($event,idAccount:number)
  // {
  //   if($event.checked) {
  //     this.checkboxes.push(idAccount);
  //   }
  //   else
  //   {
  //     let index = this.checkboxes.indexOf(idAccount);
  //     if (index > -1) {
  //       this.checkboxes.splice(index, 1);
  //     }
  //   }
  //   this.hasSelectedAccounts = this.checkboxes.length>0;

  // }

  navigate() {
    this.router.navigate([`apps/users`]);
  }

  useLanguage(language: string): void {
    // this.translate.use(language);
    this._dateAdapter.setLocale(language);
  }
  
}