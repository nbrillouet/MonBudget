import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Router } from '@angular/router';
import { fuseAnimations } from '@fuse/animations';
import { UserForDetail } from 'app/main/_models/user.model';
import { Store, Select } from '@ngxs/store';
import { AreaImport, IAccount } from 'app/main/_models/referential/account.model';
import { FilterAsiTableSelected } from 'app/main/_models/filters/account-statement-import.filter';
import { LoadAsiTableFilterSelection } from 'app/main/_ngxs/account-statement-import/asi-table/asi-table-filter-selection/asi-table-filter-selection.action';
import { SynchronizeAsiTableFilterSelected } from 'app/main/_ngxs/account-statement-import/asi-table/asi-table-filter-selected/asi-table-filter-selected.action';
import { FilterAsifTableSelected } from 'app/main/_models/filters/account-statement-import-file.filter';
import { SynchronizeAsifTableFilterSelected } from 'app/main/_ngxs/account-statement-import-file/asif-table/asif-table-filter-selected/asif-table-filter-selected.action';
import { UserDetailState } from 'app/main/_ngxs/user/user-detail/user-detail.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'asi-main',
  templateUrl: './asi-main.component.html',
  styleUrls: ['./asi-main.component.scss'],
  animations : fuseAnimations
})
export class AsiMainComponent implements OnInit {
  @Select(UserDetailState.getUser) user$: Observable<UserForDetail>;
  
  currentUser: UserForDetail;
  filterAsiSelected: FilterAsiTableSelected;
  fileInProgress: boolean;
  fileError: boolean;
  fileSuccess: boolean;
  areaImport : AreaImport ={'historicView':true,'fileView':false,'errorView':false,'loadingView':false};
  hasSelectedRows: boolean;
  onSelectedRowsChangedSubscription: Subscription;
  projects : any[];
  project : any;
  accountSelected: IAccount;

  constructor(
    private _store: Store,
    public router: Router,
    private activatedRoute: ActivatedRoute) {
      this.user$.subscribe((user:UserForDetail) => {
        this.currentUser = user;
        this.filterAsiSelected = new FilterAsiTableSelected();
        this.filterAsiSelected.idUser = this.currentUser.id;
        
        this._store.dispatch(new SynchronizeAsiTableFilterSelected(this.filterAsiSelected));
        this._store.dispatch(new LoadAsiTableFilterSelection(this.filterAsiSelected));
      });

    }
    
  ngOnInit() {

    this.fileInProgress= false;

  }


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

    let filterAsifSelected = new FilterAsifTableSelected();
    filterAsifSelected.idImport=$event.idImport;

    this._store.dispatch(new SynchronizeAsifTableFilterSelected(filterAsifSelected));

    this.router.navigate([`${filterAsifSelected.idImport}/account-statement-import-files`], {relativeTo:this.activatedRoute});


  }


}
