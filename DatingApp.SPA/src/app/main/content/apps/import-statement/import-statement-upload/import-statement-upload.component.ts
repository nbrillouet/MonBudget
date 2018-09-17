import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IUser } from '../../../../_models/User';
import { IAsifGroupByAccounts } from '../../../../_models/AccountStatementImportFile';
import { FileUploader } from 'ng2-file-upload';
import { environment } from '../../../../../../environments/environment';
import { AuthService } from '../../../../_services/auth.service';
import { NotificationsService } from 'angular2-notifications';
import { fuseAnimations } from '../../../../../core/animations';

@Component({
  selector: 'import-statement-upload',
  templateUrl: './import-statement-upload.component.html',
  styleUrls: ['./import-statement-upload.component.scss'],
  animations   : fuseAnimations
})
export class ImportStatementUploadComponent implements OnInit {

  @Input() user: IUser;
  @Output() fileInProgress = new EventEmitter<boolean>();
  @Output() fileError= new EventEmitter<boolean>();
  @Output() fileSuccess= new EventEmitter<boolean>();
  @Output() uploadResponse= new EventEmitter<IAsifGroupByAccounts>();

  uploader: FileUploader = new FileUploader({});
  hasBaseDropZoneOver: boolean = false;
  baseUrl = environment.apiUrl;
  
  constructor(
    private authService: AuthService,
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
    console.log('loadFile');
  }

  initializeUploader() {
    this.uploader = new FileUploader({
      url: this.baseUrl + 'AccountStatementImport/user/' + this.user.id,
      authToken: 'Bearer ' + localStorage.getItem('budgetToken'),
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
        console.log("success upload");
        // console.log(res);
        // this.getUserAvatarChange.emit(res.avatarUrl);
        // this.authService.changeAvatar(res.avatarUrl);
        //pour fonctionnement meme quand refresh du navigateur:
        // this.authService.currentUser.avatarUrl = res.avatarUrl;
        // localStorage.setItem('user',JSON.stringify(this.authService.currentUser));

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
      console.log('file in progress');
    }

    this.uploader.onCompleteItem = (item:any, response:any, status:any, headers:any) => {
      this.fileInProgress.emit(false);
      console.log("item uploaded" + response);
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
