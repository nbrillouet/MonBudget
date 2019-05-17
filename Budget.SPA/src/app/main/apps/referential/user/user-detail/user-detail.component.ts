import { Component, OnInit } from '@angular/core';
// import { fuseAnimations } from '../../../../../../core/animations';
// import { IUser } from '../../../../../_models/user.model';
import { UserService } from '../user.service';
import { Subscription } from 'rxjs/Subscription';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { NotificationsService } from 'angular2-notifications';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
// import { FuseUtils } from '../../../../../../core/fuseUtils';
// import { AuthService } from '../../../../../_services/auth.service';
// import { IGMapSearchInfo } from '../../../../../_models/g-map.model.';
import { DatePipe } from '@angular/common';
import { Moment } from 'moment';
import {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_LOCALE, MAT_DATE_FORMATS } from '@angular/material';
import { fuseAnimations } from '@fuse/animations';
import { IUser } from 'app/main/_models/user.model';
import { IGMapSearchInfo } from 'app/main/_models/g-map.model.';
import { AuthService } from 'app/main/_services/auth.service';
import { Select } from '@ngxs/store';
import { UserDetailState } from 'app/main/_ngxs/user/user-detail/user-detail.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
  animations   : fuseAnimations,
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'fr'},
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
  ]
})

export class UserDetailComponent implements OnInit {
  @Select(UserDetailState.getUser) user$: Observable<IUser>;

  user : IUser;
  onUserChanged: Subscription;
  pageType: string;
  userForm: FormGroup;
  avatarUrl: string;
  gMapSearchInfo: IGMapSearchInfo;
  checkboxes: number[]=[];
  hasSelectedAccounts: boolean;

  constructor(
    private userService: UserService,
    private notificationService: NotificationsService,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private datePipe: DatePipe,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    
    this.pageType = 'edit';
    
    this.user$.subscribe((user:IUser) => {
      if(user) {
          this.user = user;

          this.gMapSearchInfo = <IGMapSearchInfo> { 
              idGMapAddress: this.user.idGMapAddress,
              operationPositionSearch:"",
              operationPlaceSearch: ""
              };

          this.userForm=this.createUserForm();
      }
    });
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
      return this.formBuilder.group({
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
  }

  
  updateUser({ value, valid }: { value: IUser, valid: boolean }) {
    this.user.id=value.id;
    this.user.userName=value.userName;
    this.user.lastName=value.lastName;
    this.user.firstName=value.firstName;
    this.user.idGMapAddress=value.idGMapAddress;
    
    var mt:Moment = <Moment>this.userForm.value.dateOfBirth;

    var dt = mt.toDate();
    dt.setMinutes(dt.getMinutes() - dt.getTimezoneOffset());
    this.user.dateOfBirth = dt;

    this.userService.updateUser(this.authService.decodedToken.nameid, this.user)
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

    }
    
  }

  onSelectedChange($event,idAccount:number)
  {
    if($event.checked) {
      this.checkboxes.push(idAccount);
    }
    else
    {
      let index = this.checkboxes.indexOf(idAccount);
      if (index > -1) {
        this.checkboxes.splice(index, 1);
      }
    }
    this.hasSelectedAccounts = this.checkboxes.length>0;

  }

  navigate() {
    this.router.navigate([`apps/users`]);

  }
  
}