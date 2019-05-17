import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { NotificationsService } from 'angular2-notifications';
import { fuseAnimations } from '@fuse/animations';
import { IUser } from 'app/main/_models/user.model';
import { environment } from 'environments/environment';
import { AuthService } from 'app/main/_services/auth.service';
import { Select, Store } from '@ngxs/store';
import { UserDetailState } from 'app/main/_ngxs/user/user-detail/user-detail.state';
import { Observable } from 'rxjs';
import { LoadUserDetail } from 'app/main/_ngxs/user/user-detail/user-detail.action';

@Component({
  selector: 'avatar-editor',
  templateUrl: './avatar-editor.component.html',
  styleUrls: ['./avatar-editor.component.scss'],
  animations   : fuseAnimations
})

export class AvatarEditorComponent implements OnInit {
  @Select(UserDetailState.getUser) user$: Observable<IUser>;
  
  @Output() getUserAvatarChange = new EventEmitter<string>();
  
  uploader: FileUploader = new FileUploader({});
  hasBaseDropZoneOver: boolean = false;
  baseUrl = environment.apiUrl;
  user: IUser;

  constructor(
    private authService: AuthService,
    private notificationService: NotificationsService,
    private _store: Store
  ) { }

  ngOnInit() {
    this.user$.subscribe((user:IUser) => {
      if(user) {
          this.user = user;
      }
    });

    this.initializeUploader();
  }

  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  initializeUploader() {

    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.uploader = new FileUploader({
      url: `${this.baseUrl}users/${this.user.id}/avatar`,
      authToken: `Bearer ${currentUser.token}`,
      isHTML5: true,
      allowedFileType: ['image'],
      removeAfterUpload: true,
      autoUpload: false,
      maxFileSize: 10*1024*1024
    });

    this.uploader.onSuccessItem = (item, response, status, headers) => {
      if (response) {
        const res: IUser = JSON.parse(response);
        this.user.avatarUrl = res.avatarUrl;


        // this.authService.changeAvatar(res.avatarUrl);

        //pour fonctionnement meme quand refresh du navigateur:
        // this.authService.currentUser.avatarUrl = res.avatarUrl;
        // localStorage.setItem('user',JSON.stringify(this.authService.currentUser));
        this._store.dispatch(new LoadUserDetail(this.user))
        this.notificationService.success('Enregistrement réussi', 'Votre avatar est modifié');

      }
      
    }

    this.uploader.onErrorItem = ((item, response, status, headers):any => {

      // var error = this.handleError(response);
      this.notificationService.error('Erreur', 'Erreur');
      });


  }

  // private handleError(error: any)
  // {
  //     const serverError = JSON.parse(error);
  //     let modelStateErrors = '';
  //     if(serverError) {
  //         for(const key in serverError)
  //         {
  //             if(serverError[key]){
  //                 modelStateErrors += serverError[key] + '\n';
  //             }
  //         }
  //     }

  //     return modelStateErrors;

  // }
}
