import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import { IUser } from '../../../../../_models/user.model';
import { FileUploader } from 'ng2-file-upload';
// import { environment } from '../../../../../../../environments/environment';
// import { AuthService } from '../../../../../_services/auth.service';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { NotificationsService } from 'angular2-notifications';
import { fuseAnimations } from '@fuse/animations';
import { IUser } from 'app/main/_models/user.model';
import { environment } from 'environments/environment';
import { AuthService } from 'app/main/_services/auth.service';
// import * as _ from 'underscore';
// import { fuseAnimations } from '../../../../../../core/animations';

@Component({
  selector: 'avatar-editor',
  templateUrl: './avatar-editor.component.html',
  styleUrls: ['./avatar-editor.component.scss'],
  animations   : fuseAnimations
})

export class AvatarEditorComponent implements OnInit {
  @Input() user: IUser;
  @Output() getUserAvatarChange = new EventEmitter<string>();
  
  uploader: FileUploader = new FileUploader({});
  hasBaseDropZoneOver: boolean = false;
  baseUrl = environment.apiUrl;
  
  constructor(
    private authService: AuthService,
    private notificationService: NotificationsService
  ) { }

  ngOnInit() {
    this.initializeUploader();
  }

  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  initializeUploader() {
    this.uploader = new FileUploader({
      url: this.baseUrl + 'users/' + this.user.id + '/avatar',
      authToken: 'Bearer ' + localStorage.getItem('budgetToken'),
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

        // this.getUserAvatarChange.emit(res.avatarUrl);
        this.authService.changeAvatar(res.avatarUrl);
        //pour fonctionnement meme quand refresh du navigateur:
        this.authService.currentUser.avatarUrl = res.avatarUrl;
        localStorage.setItem('user',JSON.stringify(this.authService.currentUser));

        this.notificationService.success('Enregistrement réussi', 'Votre avatar est modifié');

      }
      
    }
  }
}
