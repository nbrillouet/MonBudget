import { Component, OnInit } from '@angular/core';
import { User } from '../../../../_models/User';
import { UserService } from '../user.service';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { NotificationsService } from 'angular2-notifications';
import { fuseAnimations } from '../../../../../core/animations';
import { DataSource } from '@angular/cdk/table';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-userList',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  animations : fuseAnimations
})
export class UserListComponent implements OnInit {
  users: User[];
  dataSource = new UserDataSource(this.userService);
  displayedColumns = ['id','avatar'];
  // dataSource : any;
  
  constructor(
    private userService: UserService,
    private notificationService: NotificationsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    // this.route.data.subscribe(data => {
    //   this.users = data['users'];
    // })
    
  }

  

  // loadUsers() {
  //   this.userService.getUsers().subscribe((users: User[]) => {
  //     this.users = users;
  //   }, error => {
  //     this.notificationService.error('Erreur','Impossible de retourner la liste des utilisateurs');
  //   })
  // }
}

export class UserDataSource extends DataSource<any> {
  constructor(private userService: UserService) {
    super();
  }
  connect(): Observable<User[]> {
    return this.userService.getUsers();
  }
  disconnect() {}
}