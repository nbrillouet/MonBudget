import { Component, OnInit, OnDestroy } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';
import { ActivatedRoute } from '@angular/router';
import { DataSource } from '@angular/cdk/table';
import { Observable } from 'rxjs/Observable';
import { User } from '../../../../_models/User';
import { IBank } from '../../../../_models/Bank';
import { fuseAnimations } from '../../../../../core/animations';
import { Subscription } from 'rxjs/Subscription';
import { ImportStatementHistoService } from '../import-statement-histo/import-statement-histo.service';

@Component({
  selector: 'import-statement-main',
  templateUrl: './import-statement-main.component.html',
  styleUrls: ['./import-statement-main.component.scss'],
  animations : fuseAnimations
})

export class ImportStatementMainComponent implements OnInit, OnDestroy {
  user: User;
  fileInProgress: boolean;
  fileError: boolean;
  fileSuccess: boolean;

  hasSelectedRows: boolean;
  onSelectedRowsChangedSubscription: Subscription;

  projects : any[];
  project : any

  constructor(
    private importStatementHistoService: ImportStatementHistoService,
    private notificationService: NotificationsService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.project = {'name': 'name 1 '};
    this.projects=[this.project];
    this.project = {'name': 'name 2 '};
    this.projects.push(this.project);
    this.project = {'name': 'name 3 '};
    this.projects.push(this.project);
    

    this.user = JSON.parse(localStorage.getItem('user'));
    // isHistoView=true;
    this.fileInProgress= false;
    this.onSelectedRowsChangedSubscription =
            this.importStatementHistoService.onSelectedRowsChanged
                .subscribe(selectedRows => {
                    this.hasSelectedRows = selectedRows.length > 0;
                });
  }

  ngOnDestroy()
  {
      this.onSelectedRowsChangedSubscription.unsubscribe();
  }

  //event from import-statement-upload
  getFileInProgress($event) {
    this.fileInProgress=$event;

  }

  getFileSuccess($event) {
    this.fileSuccess=$event;
  }

  getFileError($event) {
    this.fileError=$event;
  }

}



