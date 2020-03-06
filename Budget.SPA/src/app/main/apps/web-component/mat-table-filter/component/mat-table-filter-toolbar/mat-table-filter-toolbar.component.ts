import { Component, OnInit, EventEmitter, Output, Input, OnDestroy } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { FuseConfirmDialogComponent } from '@fuse/components/confirm-dialog/confirm-dialog.component';
import { FuseConfigService } from '@fuse/services/config.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Toolbar } from '../../model/mat-table-filter.model';

@Component({
  selector: 'mat-table-filter-toolbar',
  templateUrl: './mat-table-filter-toolbar.component.html',
  styleUrls: ['./mat-table-filter-toolbar.component.scss']
})
export class MatTableFilterToolbarComponent implements OnInit, OnDestroy {
  @Input()  toolbar: Toolbar;
  @Input()  checkboxesDelete: number[];
  @Output() addItemEvent = new EventEmitter<null>();
  @Output() deleteItemsEvent = new EventEmitter<number[]>();

  confirmDialogRef: MatDialogRef<FuseConfirmDialogComponent>;
  private _unsubscribeAll: Subject<any>;
  fuseConfig: any;

  constructor(
    public _matDialog: MatDialog,
    private _fuseConfigService: FuseConfigService
  ) {
    this._unsubscribeAll = new Subject();
  }

  ngOnInit() {
    this._fuseConfigService.config
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((settings) => {
          this.fuseConfig = settings;
      });
  }

  ngOnDestroy() {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

  addItem(){
    this.addItemEvent.emit();
  }

  deleteItems() {
      this.confirmDialogRef = this._matDialog.open(FuseConfirmDialogComponent, {
        disableClose: true
      });
      
      let message = `Etes vous sûr de supprimer`;
      message = this.checkboxesDelete.length>1 
        ? `${message} ces ${this.checkboxesDelete.length} éléments`
        : `${message} cet élément`;

      this.confirmDialogRef.componentInstance.confirmMessage = message;
  
      this.confirmDialogRef.afterClosed().subscribe(result => {
          if (result)
          {
            this.deleteItemsEvent.emit(this.checkboxesDelete);
          }
          this.confirmDialogRef = null;
      });
  }

  toggleFullscreen(): void
  {
    this.fuseConfig.layout.toolbar.fullscreen=!this.fuseConfig.layout.toolbar.fullscreen;
    this._fuseConfigService.setConfig(this.fuseConfig);
  }

}
