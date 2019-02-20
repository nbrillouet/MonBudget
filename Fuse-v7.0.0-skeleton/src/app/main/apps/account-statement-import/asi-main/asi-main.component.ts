import { Component, OnInit, OnDestroy, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { NotificationsService } from 'angular2-notifications';
import { ActivatedRoute, Router } from '@angular/router';
import { fuseAnimations } from '@fuse/animations';
import { IUser } from 'app/main/_models/user.model';
import { IAsifGroupByAccounts } from 'app/main/_models/account-statement-import-file.model';
import { AreaImport, IAccount } from 'app/main/_models/account.model';
import { Store } from '@ngxs/store';
import { FilterAsiTable } from 'app/main/_models/filters/account-statement-import.filter';
import { ChangeAsiTableFilter } from 'app/main/_ngxs/account-statement-import/asi-list-filter/asi-list-filter.action';
import { FilterAsifTable } from 'app/main/_models/filters/account-statement-import-file.filter';
import { ChangeAsifTableFilter } from 'app/main/_ngxs/account-statement-import-file/asif-list-filter/asif-list-filter.action';
import { AsiService } from '../asi.service';


@Component({
  selector: 'asi-main',
  templateUrl: './asi-main.component.html',
  styleUrls: ['./asi-main.component.scss'],
  animations : fuseAnimations
})
export class AsiMainComponent implements OnInit {

  user: IUser;
  filterAsi: FilterAsiTable;
  filterAsif: FilterAsifTable
  
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
    private _asiService: AsiService,
    private _store: Store,
    public router: Router,
    private notificationService: NotificationsService,
    private activatedRoute: ActivatedRoute) {

      this.user = JSON.parse(localStorage.getItem('currentUser'));
      this.filterAsi = new FilterAsiTable();
      this.filterAsi.selected.idUser=this.user.id;
      this._store.dispatch(new ChangeAsiTableFilter(this.filterAsi));

    }
    
  ngOnInit() {
    
    // this.user = JSON.parse(localStorage.getItem('currentUser'));

    this.fileInProgress= false;
    // this.onSelectedRowsChangedSubscription =
    //         this._asiService.onSelectedRowsChanged
    //             .subscribe(selectedRows => {
    //                 this.hasSelectedRows = selectedRows.length > 0;
    //             });
  }

  // ngOnChanges(changes: SimpleChanges) {


  //   let acc: SimpleChange = changes.account;
  //   this.accountSelected = acc.currentValue;
  // }

  // ngOnDestroy()
  // {
  //     this.onSelectedRowsChangedSubscription.unsubscribe();
  // }

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


    this.filterAsif = new FilterAsifTable();
    this.filterAsif.selected.idImport=$event.idImport;
    this._store.dispatch(new ChangeAsifTableFilter(this.filterAsif));

    this.router.navigate([`${this.filterAsif.selected.idImport}/account-statement-import-files`], {relativeTo:this.activatedRoute});

    // this.router.navigate(
    //   [`${$event.idImport}/accounts/${this.accountSelected.id}/account-statement-import-files`],
    //   {relativeTo:this.activatedRoute});
  }

  


  // idImportChanged($event) {

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
