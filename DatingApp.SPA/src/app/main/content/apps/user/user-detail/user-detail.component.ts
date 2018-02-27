import { Component, OnInit } from '@angular/core';
import { fuseAnimations } from '../../../../../core/animations';
import { User } from '../../../../_models/User';
import { UserService } from '../user.service';
import { Subscription } from 'rxjs/Subscription';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { NotificationsService } from 'angular2-notifications';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FuseUtils } from '../../../../../core/fuseUtils';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
  animations   : fuseAnimations
})
export class UserDetailComponent implements OnInit {
  user : User;
  onUserChanged: Subscription;
  pageType: string;
  userForm: FormGroup;

  constructor(
    private userService: UserService,
    private notificationService: NotificationsService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    
    this.pageType = 'edit';

    this.route.data.subscribe(data => {
      this.user = data['user'];
      this.userForm=this.createUserForm();
    })
  }

  createUserForm()
  {
      return this.formBuilder.group({
          id              : [this.user.id],
          userName        : [this.user.userName]
      });
  }
  
  saveUser()
  {
    const data = this.userForm.getRawValue();
    data.handle = FuseUtils.handleize(data.userName);
    this.userService.saveUser(data)
        .then(() => {
          // Trigger the subscription with new data
          this.userService.onUserChanged.next(data);
          this.notificationService.success('Sauvegarde réussi', 'Utilisateur enregistré');
        }).catch(error => {
          this.notificationService.error('Echec sauvegarde', error);
    });
  }
  
}