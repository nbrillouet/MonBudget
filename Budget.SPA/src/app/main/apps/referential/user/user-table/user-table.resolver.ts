

// import { Injectable } from '@angular/core';
// import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
// import { NotificationsService } from 'angular2-notifications';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/observable/of';
// import { Observable } from 'rxjs/Observable';
// import { UserService } from '../user.service';
// import { IUser } from 'app/main/_models/user.model';

// @Injectable()
// export class UserTableResolver implements Resolve<IUser[]> {
// pageSize = 5;
// pageNumber = 1;

//     constructor(
//         private userService: UserService,
//         private router: Router,
//         private notificationService: NotificationsService
//     ) {}
    
//     resolve(route: ActivatedRouteSnapshot): Observable<IUser[]> {
//         return null;
//         // return this.userService.getUsers(this.pageNumber, this.pageSize)
//         //     .catch(error => {
//         //         this.notificationService.error('Erreur de retour de données', error);
//         //         this.router.navigate(['']);

//         //         return Observable.of(null);
//         // })
//     }
// }