import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { IAccount } from '../../../../../_models/account.model';
import { ImportStatementService } from '../../import-statement.service';
import { IAsifState } from '../../../../../_models/account-statement-import-file.model';
import { IAccountStatementImport } from '../../../../../_models/account-statement-import.model';

@Component({
  selector: 'import-statement-file-state',
  templateUrl: './import-statement-file-state.component.html',
  styleUrls: ['./import-statement-file-state.component.scss']
})
export class ImportStatementFileStateComponent implements OnInit,OnChanges {
  @Input() account: IAccount;
  @Input() accountStatementImport: IAccountStatementImport;
  
  asifStates : IAsifState[];
  asifStateSelected : IAsifState;
  selectedIndex: number;

  constructor(
    private importStatementService: ImportStatementService
  ) { 
    // console.log('idImport', this.accountStatementImport);
    // console.log('account', this.account);
    // this.loadAsifStates();
  }

  ngOnInit() {
    this.loadAsifStates();
    
    
    
    
  }

  onTabChanged($event) {
    this.asifStateSelected = this.asifStates[$event.index];
    this.selectedIndex=$event.index;
    console.log('asifStateSelected',this.asifStateSelected);
    console.log('this.selectedIndex',this.selectedIndex);
  }

  ngOnChanges(changes: SimpleChanges) {
    let valueChanged: boolean=false;
    console.log('changes',changes);
  //   console.log('this.account.id',this.account.id);
  //   console.log('BOOL',this.account.id != changes.account.currentValue.id);
    if(changes.account!=null)
    {
      if(changes.account.previousValue==null || changes.account.previousValue.id != changes.account.currentValue.id)
      {
        valueChanged=true;
        // console.log(this.account);
      }  
    }
    if(changes.accountStatementImport!=null)
    {
      if(changes.accountStatementImport.previousValue==null || changes.accountStatementImport.previousValue.id!=changes.accountStatementImport.currentValue.id)
      {
        //this.accountStatementImport=changes.accountStatementImport.currentValue;
        valueChanged=true;
      }
    }
  //   console.log('this.account.id',this.account.id);
  //   // console.log('this.account',this.account);
  //   // console.log('this.accountStatementImport',this.accountStatementImport);
  //   console.log('valueChanged',valueChanged);
   if(valueChanged)
   {
    this.loadAsifStates();
    console.log('loadAsifStates',this.asifStates);
   }
    

  }

  loadAsifStates() {
    this.importStatementService.getAsifStates(this.accountStatementImport.id,this.account.id)
      .subscribe(res=>{
        this.asifStates = res;
        this.asifStateSelected = this.asifStates[0];
      });
  }

}
