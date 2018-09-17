import { Component, OnInit, OnDestroy, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { IUser } from '../../../../../_models/User';
import { IAsifGroupByAccounts } from '../../../../../_models/AccountStatementImportFile';
import { AreaImport, IAccount } from '../../../../../_models/Account';
import { Subscription } from 'rxjs/Subscription';
import { ImportStatementHistoService } from '../import-statement-histo.service';
import { NotificationsService } from 'angular2-notifications';
import { ActivatedRoute, Router } from '@angular/router';
import { fuseAnimations } from '../../../../../../core/animations';

@Component({
  selector: 'import-statement-histo-main',
  templateUrl: './import-statement-histo-main.component.html',
  styleUrls: ['./import-statement-histo-main.component.scss'],
  animations : fuseAnimations
})
export class ImportStatementHistoMainComponent implements OnInit, OnDestroy, OnChanges {

  user: IUser;
  fileInProgress: boolean;
  fileError: boolean;
  fileSuccess: boolean;
  uploadResponse : IAsifGroupByAccounts;
  areaImport : AreaImport ={'historicView':true,'fileView':false,'errorView':false,'loadingView':false};

  hasSelectedRows: boolean;
  onSelectedRowsChangedSubscription: Subscription;

  projects : any[];
  project : any;
  asifAccounts : IAsifGroupByAccounts;
  // selectedProject: any;
  accountSelected: IAccount;

  constructor(
    private importStatementHistoService: ImportStatementHistoService,
    public router: Router,
    // private importStatementService: ImportStatementService,
    private notificationService: NotificationsService,
    private activatedRoute: ActivatedRoute) { }
    
  ngOnInit() {
    
    this.user = JSON.parse(localStorage.getItem('user'));
    // isHistoView=true;
    this.fileInProgress= false;
    this.onSelectedRowsChangedSubscription =
            this.importStatementHistoService.onSelectedRowsChanged
                .subscribe(selectedRows => {
                    this.hasSelectedRows = selectedRows.length > 0;
                });
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('changes', changes);

    let acc: SimpleChange = changes.account;
    this.accountSelected = acc.currentValue;
  }

  ngOnDestroy()
  {
      this.onSelectedRowsChangedSubscription.unsubscribe();
  }

  //event from import-statement-upload
  getFileInProgress($event) {
    this.fileInProgress=$event;
    this.areaImport.loadingView=$event;
  }

  getFileSuccess($event) {
    this.fileSuccess=$event;
    this.areaImport.fileView=$event;
    
  }

  getFileError($event) {
    this.fileError=$event;
  }

  getUploadResponse($event) {
    this.asifAccounts = $event;
    this.accountSelected = $event.accounts[0];
    console.log(this.activatedRoute);
    this.router.navigate(
      [`${$event.idImport}/accounts/${this.accountSelected.id}/import-statement-files`],
      {relativeTo:this.activatedRoute});
  }

  


  // idImportChanged($event) {
  //   console.log($event);
  //   //chargement du account import file correspondant
  //   this.importStatementService.getAsifAccounts($event)
  //     .subscribe(response => {
  //         this.asifAccounts = response;
  //         this.accountSelected = response.accounts[0];
  //         this.fileSuccess = true;
  //         this.areaImport.fileView=true;
  //     });
  // }

}
