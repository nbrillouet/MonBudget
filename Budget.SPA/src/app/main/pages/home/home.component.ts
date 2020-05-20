import { Component, OnInit } from '@angular/core';
import { FuseConfigService } from '@fuse/services/config.service';
import { Select } from '@ngxs/store';
import { UserDetailState } from 'app/main/_ngxs/user/user-detail/user-detail.state';
import { Observable } from 'rxjs';
import { IUser } from 'app/main/_models/user.model';
import { AuthService } from 'app/main/_services/auth.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @Select(UserDetailState.getUser) user$: Observable<IUser>;

currentUser: IUser;
image: string;

  constructor(
    private _fuseConfig: FuseConfigService,
    private _authService: AuthService
  ) {
    
    this.user$.subscribe((user:IUser) => {
      this.currentUser = user;
    });

    this.image = '/assets/images/logos/MB_logo1.svg';
    this._fuseConfig.config = {
      layout: {
          navbar   : {
              hidden: true
          },
          toolbar  : {
              hidden: true
          },
          footer   : {
              hidden: true
          },
          sidepanel: {
              hidden: true
          }
      }
  }
   }

  ngOnInit() {

  }

  logout(){
    this._authService.logout();
  }

}
