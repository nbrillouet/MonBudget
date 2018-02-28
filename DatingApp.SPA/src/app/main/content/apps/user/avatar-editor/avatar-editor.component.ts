import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../../../_models/User';
import { FileUploader } from 'ng2-file-upload';
import { environment } from '../../../../../../environments/environment';
import { AuthService } from '../../../../_services/auth.service';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { NotificationsService } from 'angular2-notifications';
import * as _ from 'underscore';

@Component({
  selector: 'avatar-editor',
  templateUrl: './avatar-editor.component.html',
  styleUrls: ['./avatar-editor.component.css']
})

export class AvatarEditorComponent implements OnInit {
  @Input() user: User;
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
      url: this.baseUrl + 'user/' + this.user.id + '/avatar',
      authToken: 'Bearer ' + localStorage.getItem('budgetToken'),
      isHTML5: true,
      allowedFileType: ['image'],
      removeAfterUpload: true,
      autoUpload: false,
      maxFileSize: 10*1024*1024
    });

    this.uploader.onSuccessItem = (item, response, status, headers) => {
      if (response) {
        const res: User = JSON.parse(response);
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
