import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { IAccount } from '../../../../../_models/Account';
import { ImportStatementService } from '../../import-statement.service';
import { IAsifState } from '../../../../../_models/AccountStatementImportFile';
import { IAccountStatementImport } from '../../../../../_models/AccountStatementImport';

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

  onTabChanged(event) {
    this.asifStateSelected = this.asifStates[event.index];
    console.log('asifStateSelected',this.asifStateSelected);
  }

  ngOnChanges(changes: SimpleChanges) {
    let valueChanged: boolean=false;

    
    if(changes.account!=null)
    {
      console.log('changes',changes);
      console.log(this.account);
      if(this.account==null || this.account.id != changes.account.currentValue.id)
      {
        this.account = changes.account.currentValue;
        valueChanged=true;
      }  
    }
    if(changes.accountStatementImport!=null)
    {
      if(this.accountStatementImport==null || this.accountStatementImport.id!=changes.accountStatementImport.currentValue.id)
      {
        this.accountStatementImport=changes.accountStatementImport.currentValue;
        valueChanged=true;
      }
    }
    console.log('this.account',this.account);
    console.log('this.accountStatementImport',this.accountStatementImport);
    console.log('valueChanged',valueChanged);
   if(valueChanged)
   {
    this.loadAsifStates();
    console.log('loadAsifStates',this.asifStates);
   }
    

  }

  loadAsifStates() {
    this.importStatementService
    .getAsifStates(this.accountStatementImport.id,this.account.id)
    .subscribe(res=>{
      this.asifStates = res;
      this.asifStateSelected = this.asifStates[0];
    });
  }

}
