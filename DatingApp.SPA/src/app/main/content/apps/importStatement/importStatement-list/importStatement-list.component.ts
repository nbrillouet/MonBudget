import { Component, OnInit } from '@angular/core';
// import { UserService } from '../../user/user.service';
import { NotificationsService } from 'angular2-notifications';
import { ActivatedRoute } from '@angular/router';
import { DataSource } from '@angular/cdk/table';
import { Observable } from 'rxjs/Observable';
import { User } from '../../../../_models/User';
import { fuseAnimations } from '../../../../../core/animations';
import { ImportStatementService } from '../importStatement.service';

@Component({
  selector: 'app-importStatement-list',
  templateUrl: './importStatement-list.component.html',
  styleUrls: ['./importStatement-list.component.scss'],
  animations : fuseAnimations
})
export class ImportStatementListComponent implements OnInit {
  dataSource = new UserDataSource(this.importStatementService);
  displayedColumns = ['id','userName','lastName','firstName','city','postalCode','country','gender','age','dateCreated'];

  constructor(
    private importStatementService: ImportStatementService,
    private notificationService: NotificationsService,
    private route: ActivatedRoute) { }

  ngOnInit() {
  }

  onSortChangeEvent(event): void {
    console.log(event);
    // this.currentFilter.pageIndex = 0;
    // this.currentFilter.sortColumn = event.active;
    // this.currentFilter.sortDirection = event.direction;
    // this._sharedService.changeSuiviFilter(this.currentFilter);
  }

  
}

export class UserDataSource extends DataSource<any> {
  constructor(private importStatementService: ImportStatementService) {
    super();
  }
  connect(): Observable<User[]> {
    return this.importStatementService.getImportStatement();
  }
  disconnect() {}
}
