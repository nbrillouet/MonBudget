import { Component, OnInit } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { fuseAnimations } from '@fuse/animations';
import { AcademyFakeDb } from './api-fake';
import { Select } from '@ngxs/store';
import { UserDetailState } from 'app/main/_ngxs/user/user-detail/user-detail.state';
import { UserForDetail } from 'app/main/_models/user.model';
import { EnumUserCategory } from 'app/main/_constants/enum-user-category.model';
import { Router } from '@angular/router';
import { DataInfo } from 'app/main/_models/generics/detail-info.model';

@Component({
  selector: 'dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.scss'],
  animations : fuseAnimations
})
export class DashboardHomeComponent implements OnInit {
  @Select(UserDetailState.getUser) user$: Observable<DataInfo<UserForDetail>>;

  enumUserCategory: EnumUserCategory;
  
  categories: any[];  
  courses: any[];
  coursesFilteredByCategory: any[];
  filteredCourses: any[];
  currentCategory: string;
  searchTerm: string;
    seasonImage: string;
    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {AcademyCoursesService} _academyCoursesService
     */
    constructor(
      private _router: Router
        // private _academyCoursesService: AcademyCoursesService
    )
    {
        this.seasonImage = `assets/images/calendar/s${this.getSeason()}.jpg`;
        console.log('dashboard-home');
        // Set the defaults
        this.currentCategory = 'all';
        this.searchTerm = '';

        this.categories = AcademyFakeDb.categories;
        this.courses=AcademyFakeDb.courses;
        this.filteredCourses = AcademyFakeDb.courses;
        // Set the private defaults
        this._unsubscribeAll = new Subject();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {

      //console.log('getSeason',this.getSeason());
        // Subscribe to categories
        // this._academyCoursesService.onCategoriesChanged
        //     .pipe(takeUntil(this._unsubscribeAll))
        //     .subscribe(categories => {
        //         this.categories = categories;
        //     });

        // // Subscribe to courses
        // this._academyCoursesService.onCoursesChanged
        //     .pipe(takeUntil(this._unsubscribeAll))
        //     .subscribe(courses => {
        //         this.filteredCourses = this.coursesFilteredByCategory = this.courses = courses;
        //     });
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    getIcon(category: string) {
        switch(category) {
            case 'Referential':
                return 'settings';
            case 'AccountStatement':
                return 'description';
        }
    }

    getSeason() {
      var currentMonth = new Date().getMonth() + 1;
      if (currentMonth === 12 || currentMonth === 1 || currentMonth === 2)
        return "winter";
      else if (currentMonth >= 3 && currentMonth <= 5)
        return "spring";
      else if (currentMonth >= 6 && currentMonth <= 8)
        return "summer";
      else if (currentMonth >= 9 && currentMonth <= 11)
        return "autumn";
      return ""
    }

    navigate(url: string) {
      this._router.navigate([url]);
    }
}


