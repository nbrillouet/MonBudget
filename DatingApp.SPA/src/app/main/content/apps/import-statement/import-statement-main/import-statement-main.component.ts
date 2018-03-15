import { Component, OnInit } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';
import { ActivatedRoute } from '@angular/router';
import { DataSource } from '@angular/cdk/table';
import { Observable } from 'rxjs/Observable';
import { User } from '../../../../_models/User';
import { IBank } from '../../../../_models/Bank';
import { fuseAnimations } from '../../../../../core/animations';

@Component({
  selector: 'import-statement-main',
  templateUrl: './import-statement-main.component.html',
  styleUrls: ['./import-statement-main.component.scss'],
  animations : fuseAnimations
})

export class ImportStatementMainComponent implements OnInit {
  user: User;

  constructor(
    
    private notificationService: NotificationsService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));
  }

}



