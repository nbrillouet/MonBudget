import { Component, OnInit } from '@angular/core';
import { fuseAnimations } from '../../../../../core/animations';
import { IUser } from '../../../../_models/User';
import { UserService } from '../user.service';
import { Subscription } from 'rxjs/Subscription';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { NotificationsService } from 'angular2-notifications';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { FuseUtils } from '../../../../../core/fuseUtils';
import { AuthService } from '../../../../_services/auth.service';
import { IGMapSearchInfo } from '../../../../_models/GMap';
import { DatePipe } from '../../../../../../../node_modules/@angular/common';
import { Moment } from '../../../../../../../node_modules/moment';
import {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_LOCALE, MAT_DATE_FORMATS } from '../../../../../../../node_modules/@angular/material';

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
  user : IUser;
  onUserChanged: Subscription;
  pageType: string;
  userForm: FormGroup;
  avatarUrl: string;
  gMapSearchInfo: IGMapSearchInfo;

  constructor(
    private userService: UserService,
    private notificationService: NotificationsService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private datePipe: DatePipe,
  ) { }

  ngOnInit() {
    
    this.pageType = 'edit';

    this.route.data.subscribe(data => {
      this.user = data['user'];
      console.log('user',this.user);
      this.gMapSearchInfo = <IGMapSearchInfo> { 
        idGMapAddress: this.user.idGMapAddress,
        operationPositionSearch:"",
        operationPlaceSearch: ""
        }
      
      
      this.userForm=this.createUserForm();
      
      this.authService.currentAvatarUrl
        .subscribe(avatarUrl=> this.avatarUrl = avatarUrl);
    })

    


  }
  // this.datePipe.transform(this.user.dateOfBirth,"dd/MM/yyyy")
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

  onSubmit({ value, valid }: { value: IUser, valid: boolean }) {
    console.log(value, valid);
  }

  // saveUser()
  // {
  //   const data = this.userForm.getRawValue();
  //   data.handle = FuseUtils.handleize(data.userName);
  //   this.userService.saveUser(data)
  //       .then(() => {
  //         // Trigger the subscription with new data
  //         this.userService.onUserChanged.next(data);
  //         this.notificationService.success('Sauvegarde réussi', 'Utilisateur enregistré');
  //       }).catch(error => {
  //         this.notificationService.error('Echec sauvegarde', error);
  //   });
  // }

  updateUser({ value, valid }: { value: IUser, valid: boolean }) {
    this.user.id=value.id;
    this.user.userName=value.userName;
    this.user.lastName=value.lastName;
    this.user.firstName=value.firstName;
    this.user.idGMapAddress=value.idGMapAddress;
    
    var mt:Moment = <Moment>this.userForm.value.dateOfBirth;
    console.log(mt);
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
      console.log('address changed');
      console.log(this.userForm);
    }
    
  }
  
}