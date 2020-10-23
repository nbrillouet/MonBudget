import { Component, OnInit } from '@angular/core';
import { FuseConfigService } from '@fuse/services/config.service';
import { Select } from '@ngxs/store';
import { UserDetailState } from 'app/main/_ngxs/user/user-detail/user-detail.state';
import { Observable } from 'rxjs';
import { UserForDetail } from 'app/main/_models/user.model';
import { UserAuthService } from 'app/main/_services/auth.service';
import { DataInfo } from 'app/main/_models/generics/detail-info.model';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @Select(UserDetailState.getUser) user$: Observable<DataInfo<UserForDetail>>;

    currentUser: UserForDetail;
    image: string;

  constructor(
    private _fuseConfig: FuseConfigService,
    private _userAuthService: UserAuthService
  ) {
    
    this.user$.subscribe(x => {
        if(x.loader['datas']?.loaded)
            this.currentUser = x.datas;
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
    this._userAuthService.logout();
  }

}
