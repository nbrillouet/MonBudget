import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { FuseConfirmDialogComponent } from '../../../../../../core/components/confirm-dialog/confirm-dialog.component';
import { ImportStatementHistoService } from '../import-statement-histo.service';


@Component({
  selector: 'selected-bar',
  templateUrl: './selected-bar.component.html',
  styleUrls: ['./selected-bar.component.scss']
})
export class SelectedBarComponent implements OnInit {
  selectedRows: string[];
  hasSelectedRows: boolean;
  isIndeterminate: boolean;
  confirmDialogRef: MatDialogRef<FuseConfirmDialogComponent>;

  constructor(
    private importStatementHistoService: ImportStatementHistoService,
    public dialog: MatDialog
  ) {
      this.importStatementHistoService.onSelectedRowsChanged
      .subscribe(selectedRows => {
          this.selectedRows = selectedRows;
          console.log(this.selectedRows);
          console.log(this.importStatementHistoService);
          setTimeout(() => {
              this.hasSelectedRows = this.selectedRows.length > 0;
              this.isIndeterminate = (selectedRows.length !== this.importStatementHistoService.selectedRows.length && this.selectedRows.length > 0);
          }, 0);

      });
   }

   ngOnInit()
   {
   }

   selectAll()
   {
       this.importStatementHistoService.selectRows();
   }

   deselectAll()
   {
       this.importStatementHistoService.deselectRows();
   }

   deleteSelectedRows()
   {
       this.confirmDialogRef = this.dialog.open(FuseConfirmDialogComponent, {
           disableClose: false
       });

       this.confirmDialogRef.componentInstance.confirmMessage = 'Are you sure you want to delete all selected contacts?';

       this.confirmDialogRef.afterClosed().subscribe(result => {
           if ( result )
           {
               this.importStatementHistoService.deleteSelectedRows();
           }
           this.confirmDialogRef = null;
       });
   }

}
