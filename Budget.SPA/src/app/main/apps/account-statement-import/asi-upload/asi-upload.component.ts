import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { NotificationsService } from 'angular2-notifications';
import { UserForDetail } from 'app/main/_models/user.model';
import { environment } from 'environments/environment';
import { fuseAnimations } from '@fuse/animations';
import { IAsifGroupByAccounts } from 'app/main/_models/account-statement-import/account-statement-import-file.model';

@Component({
  selector: 'asi-upload',
  templateUrl: './asi-upload.component.html',
  styleUrls: ['./asi-upload.component.scss'],
  animations   : fuseAnimations
})
export class AsiUploadComponent implements OnInit {

  @Input()  user: UserForDetail;
  @Output() fileInProgress = new EventEmitter<boolean>();
  @Output() fileError= new EventEmitter<boolean>();
  @Output() fileSuccess= new EventEmitter<boolean>();
  @Output() uploadResponse= new EventEmitter<IAsifGroupByAccounts>();

  uploader: FileUploader = new FileUploader({});
  hasBaseDropZoneOver: boolean = false;
  baseUrl = environment.apiUrl;
  
  constructor(
    private notificationService: NotificationsService
  ) { }

  ngOnInit() {
    this.fileInProgress.emit(false);
    this.fileError.emit(false);
    this.fileSuccess.emit(false);
    this.initializeUploader();
  }

  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  loadFile($event) {

  }

  initializeUploader() {
    // let currentUser = JSON.parse(localStorage.getItem('currentUser'));

    this.uploader = new FileUploader({
      url: `${this.baseUrl}account-statement-import/users/${this.user.id}/upload-file`,
      authToken: `Bearer ${this.user.token}`, // 'Bearer ' + localStorage.getItem('currentUser').token,
      isHTML5: true,
      // allowedMimeType: ['text/csv'], // CSV File limitation,
      // allowedFileType: ['application'],
      // allowedMimeType: ['application/vnd.ms-excel'],
      removeAfterUpload: true,
      autoUpload: false,
      maxFileSize: 10*1024*1024,
      queueLimit : 1
    });
   
    this.uploader.onSuccessItem = (item, response, status, headers) => {
      if (response) {
        let toto : IAsifGroupByAccounts = <IAsifGroupByAccounts>JSON.parse(response);

        // this.user.avatarUrl = res.avatarUrl;
        this.fileSuccess.emit(true);
        this.uploadResponse.emit(toto);

        this.notificationService.success('Enregistrement réussi', 'Relevé chargé');

      }
      
    }

    this.uploader.onWhenAddingFileFailed = (item: any, filter: any, options: any) => {
      this.notificationService.error('Type de fichier incorrect', 'Le fichier doit être de type .csv');
    };

    this.uploader.onProgressAll = (fileItem) => {
      this.fileInProgress.emit(true);
      this.fileError.emit(false);
      this.fileSuccess.emit(false);

    }

    this.uploader.onCompleteItem = (item:any, response:any, status:any, headers:any) => {
      this.fileInProgress.emit(false);
    };

    this.uploader.onErrorItem = ((item, response, status, headers):any => {
      this.fileError.emit(true);
      this.fileInProgress.emit(false);
      var error = this.handleError(response);
      this.notificationService.error('Erreur', error);
      });
  }

  private handleError(error: any)
  {
      const serverError = JSON.parse(error);
      let modelStateErrors = '';
      if(serverError) {
          for(const key in serverError)
          {
              if(serverError[key]){
                  modelStateErrors += serverError[key] + '\n';
              }
          }
      }

      return modelStateErrors;

  }

}
