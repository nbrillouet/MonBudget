import { Component, OnInit, OnDestroy, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';
import { ActivatedRoute } from '@angular/router';
import { DataSource } from '@angular/cdk/table';
import { Observable } from 'rxjs/Observable';
import { IUser } from '../../../../_models/User';
import { IBank } from '../../../../_models/Bank';
import { fuseAnimations } from '../../../../../core/animations';
import { Subscription } from 'rxjs/Subscription';
import { ImportStatementHistoService } from '../import-statement-histo/import-statement-histo.service';
import { IAsifGroupByAccounts } from '../../../../_models/AccountStatementImportFile';
import { IAccount, AreaImport } from '../../../../_models/Account';
import { ImportStatementService } from '../import-statement.service';

@Component({
  selector: 'import-statement-main',
  templateUrl: './import-statement-main.component.html',
  styleUrls: ['./import-statement-main.component.scss'],
  animations : fuseAnimations
})

export class ImportStatementMainComponent implements OnInit, OnDestroy, OnChanges {
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

  accountSelected: IAccount;

  constructor(
    private importStatementHistoService: ImportStatementHistoService,
    private importStatementService: ImportStatementService,
    private notificationService: NotificationsService,
    private route: ActivatedRoute) { }
    
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
    // this.uploadResponse = $event;
    this.asifAccounts = $event;
    this.accountSelected = $event.accounts[0];
  }

  idImportChanged($event) {
    console.log($event);
    //chargement du account import file correspondant
    this.importStatementService.getAsifAccounts($event)
      .subscribe(response => {
          this.asifAccounts = response;
          this.accountSelected = response.accounts[0];
          this.fileSuccess = true;
          this.areaImport.fileView=true;
      });
  }

}



