import { Component, OnInit,OnChanges, SimpleChange, SimpleChanges, Input } from '@angular/core';
import { IAsifState } from '../../../../../_models/AccountStatementImportFile';
import { IAccount } from '../../../../../_models/Account';
import { ImportStatementService } from '../../import-statement.service';

@Component({
  selector: 'import-statement-file-main',
  templateUrl: './import-statement-file-main.component.html',
  styleUrls: ['./import-statement-file-main.component.scss']
})
export class ImportStatementFileMainComponent implements OnInit, OnChanges {
  @Input() account: IAccount;
  @Input() idImport: number;
  
  asifStates : IAsifState[];
  asifStateSelected : IAsifState;
  accountSelected: IAccount;
  
  constructor(private importStatementService: ImportStatementService) { }
  
  ngOnInit() {
    this.importStatementService
      .getAsifStates(this.idImport,this.account.id)
      .subscribe(res=>{
        this.asifStates = res;
        this.asifStateSelected = this.asifStates[0];
      });
  }

  ngOnChanges(changes: SimpleChanges) {

    let acc: SimpleChange = changes.account;
    this.accountSelected = acc.currentValue;
    // if(this.asifStateSelected) {
    //   this.dataSource.load(this.asifStateSelected,this.accountSelected,new Pagination());
    // }

  }

  onTabChanged(event) {
    // this.dataSource.clear();
    // console.log(this.dataSource);
    // this.selectedIndex=event.index;
    this.asifStateSelected = this.asifStates[event.index];
    console.log('asifStateSelected',this.asifStateSelected);

    // this.dataSource.load(this.asifStateSelected,this.accountSelected,new Pagination());

    // console.log(this.selection);

}

}
