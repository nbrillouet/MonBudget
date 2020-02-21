import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { AsTable } from 'app/main/_models/account-statement/account-statement-table.model';
import { fuseAnimations } from '@fuse/animations';

@Component({
  selector: 'app-as-plan-list',
  templateUrl: './as-plan-list.component.html',
  styleUrls: ['./as-plan-list.component.scss'],
  animations : fuseAnimations
})
export class AsPlanListComponent implements OnInit {
  dataSource = new MatTableDataSource<AsTable>();// AsifDataSource;
  displayedColumns = ['id','operationMethod','operationTypeFamily','operationType','operation','dateIntegration','amountOperation'];
  templateFor:string;

  constructor(
    private _dialogRef: MatDialogRef<AsPlanListComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) { 
    this.dataSource.data = data;
  }

  ngOnInit() {
  }

  close() {
    this._dialogRef.close();
  }

}
