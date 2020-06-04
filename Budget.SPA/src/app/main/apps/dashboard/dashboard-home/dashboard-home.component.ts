import { Component, OnInit } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { fuseAnimations } from '@fuse/animations';
import { AcademyFakeDb } from './api-fake';
import { Select } from '@ngxs/store';
import { UserDetailState } from 'app/main/_ngxs/user/user-detail/user-detail.state';
import { UserForDetail } from 'app/main/_models/user.model';
import { EnumUserCategory } from 'app/main/_constants/enum-user-category.model';
import { Router } from '@angular/router';

@Component({
  selector: 'dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.scss'],
  animations : fuseAnimations
})
export class DashboardHomeComponent implements OnInit {
  @Select(UserDetailState.getUser) user$: Observable<UserForDetail>;

  enumUserCategory: EnumUserCategory;
  
  categories: any[];  
  courses: any[];
  coursesFilteredByCategory: any[];
  filteredCourses: any[];
  currentCategory: string;
  searchTerm: string;

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

      console.log('getSeason',this.getSeason());
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

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Filter courses by category
     */
    // filterCoursesByCategory(): void
    // {
    //     // Filter
    //     if ( this.currentCategory === 'all' )
    //     {
    //         this.coursesFilteredByCategory = this.courses;
    //         this.filteredCourses = this.courses;
    //     }
    //     else
    //     {
    //         this.coursesFilteredByCategory = this.courses.filter((course) => {
    //             return course.category === this.currentCategory;
    //         });

    //         this.filteredCourses = [...this.coursesFilteredByCategory];

    //     }

    //     // Re-filter by search term
    //     this.filterCoursesByTerm();
    // }

    /**
     * Filter courses by term
     */
    // filterCoursesByTerm(): void
    // {
    //     const searchTerm = this.searchTerm.toLowerCase();

    //     // Search
    //     if ( searchTerm === '' )
    //     {
    //         this.filteredCourses = this.coursesFilteredByCategory;
    //     }
    //     else
    //     {
    //         this.filteredCourses = this.coursesFilteredByCategory.filter((course) => {
    //             return course.title.toLowerCase().includes(searchTerm);
    //         });
    //     }
    // }

    getSeason() {
      var currentMonth = new Date().getMonth() + 1;
      if (currentMonth === 12 || currentMonth === 1 || currentMonth === 2)
        return "winter";
      else if (currentMonth >= 3 && currentMonth <= 5)
        return "spring";
      else if (currentMonth >= 6 && currentMonth <= 8)
        return "summer";
      else if (currentMonth >= 9 && currentMonth <= 11)
        return "fall";
      return ""
    }

    navigate(url: string) {
      this._router.navigate([url]);
    }
}


