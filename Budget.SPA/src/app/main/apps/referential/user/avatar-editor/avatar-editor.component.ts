import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { NotificationsService } from 'angular2-notifications';
import { fuseAnimations } from '@fuse/animations';
import { UserForDetail } from 'app/main/_models/user.model';
import { environment } from 'environments/environment';
import { UserAuthService } from 'app/main/_services/auth.service';
import { Select, Store } from '@ngxs/store';
import { UserDetailState } from 'app/main/_ngxs/user/user-detail/user-detail.state';
import { Observable } from 'rxjs';
import { LoadUserDetail } from 'app/main/_ngxs/user/user-detail/user-detail.action';
import { DataInfo } from 'app/main/_models/generics/detail-info.model';

@Component({
  selector: 'avatar-editor',
  templateUrl: './avatar-editor.component.html',
  styleUrls: ['./avatar-editor.component.scss'],
  animations   : fuseAnimations
})

export class AvatarEditorComponent implements OnInit {
  @Select(UserDetailState.getUser) user$: Observable<DataInfo<UserForDetail>>;
  
  @Output() getUserAvatarChange = new EventEmitter<string>();
  
  uploader: FileUploader = new FileUploader({});
  hasBaseDropZoneOver: boolean = false;
  baseUrl = environment.apiUrl;
  currentUser: UserForDetail;

  constructor(
    private userAuthService: UserAuthService,
    private notificationService: NotificationsService,
    private _store: Store
  ) { }

  ngOnInit() {
    this.user$.subscribe(x => {
      if(x.loader['datas'].loaded) {
          this.currentUser = x.datas;
      }
    });

    this.initializeUploader();
  }

  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  initializeUploader() {

    // let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.uploader = new FileUploader({
      url: `${this.baseUrl}users/${this.currentUser.id}/avatar`,
      authToken: `Bearer ${this.currentUser.token}`,
      isHTML5: true,
      allowedFileType: ['image'],
      removeAfterUpload: true,
      autoUpload: false,
      maxFileSize: 10*1024*1024
    });

    this.uploader.onSuccessItem = (item, response, status, headers) => {
      if (response) {
        const res: UserForDetail = JSON.parse(response);
        this.currentUser.avatarUrl = res.avatarUrl;

        //TODO revoir le chargement
        // this._store.dispatch(new LoadUserDetail(this.currentUser));
        this.notificationService.success('Enregistrement réussi', 'Votre avatar est modifié');
      }
      
    }

    this.uploader.onErrorItem = ((item, response, status, headers):any => {
      this.notificationService.error('Erreur', 'Erreur');
    });

  }

}
