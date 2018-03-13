import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../../../_models/User';
import { FileUploader } from 'ng2-file-upload';
import { environment } from '../../../../../../environments/environment';
import { AuthService } from '../../../../_services/auth.service';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { NotificationsService } from 'angular2-notifications';
import { fuseAnimations } from '../../../../../core/animations';

@Component({
  selector: 'import-statement-upload',
  templateUrl: './import-statement-upload.component.html',
  styleUrls: ['./import-statement-upload.component.scss'],
  animations   : fuseAnimations
})
export class ImportStatementUploadComponent implements OnInit {

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
      url: this.baseUrl + 'user/' + 1 + '/avatar',
      authToken: 'Bearer ' + localStorage.getItem('budgetToken'),
      isHTML5: true,
      // allowedMimeType: ['text/csv'], // CSV File limitation,
      // allowedFileType: ['application'],
      allowedMimeType: ['application/vnd.ms-excel'],
      removeAfterUpload: true,
      autoUpload: false,
      maxFileSize: 10*1024*1024,
      queueLimit : 1
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

    this.uploader.onWhenAddingFileFailed = (item: any, filter: any, options: any) => {
      
      this.notificationService.error('Type de fichier incorrect', 'Le fichier doit être de type .csv');
      

      console.log(item);
      console.log(filter);
      console.log(options);
      // todo: show alert that you tried uploading wrong files
    };
  }

}
