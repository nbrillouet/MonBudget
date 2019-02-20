import { Component, OnInit,OnChanges, SimpleChange, SimpleChanges, Input, ViewEncapsulation } from '@angular/core';
import { IAsifState } from '../../../../../_models/account-statement-import-file.model';
import { IAccount } from '../../../../../_models/account.model';
import { ImportStatementService } from '../../import-statement.service';
import { ActivatedRoute } from '@angular/router';
import { fuseAnimations } from '../../../../../../core/animations';
import { IAccountStatementImport } from '../../../../../_models/account-statement-import.model';
import { ImportStatementFileService } from '../import-statement-file.service';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'import-statement-file-main',
  templateUrl: './import-statement-file-main.component.html',
  styleUrls: ['./import-statement-file-main.component.scss'],
  animations : fuseAnimations

})

export class ImportStatementFileMainComponent implements OnInit {
  // @Input() account: IAccount;
  //@Input() idImport: number;
  // idImport: number;
  idImport: number;
  idAccount: number;

  accountStatementImport: IAccountStatementImport;
  accounts: IAccount[];
  accountSelected: IAccount;
  
  isSaveable: boolean;
  loading: boolean;

  constructor(
    private activatedRoute: ActivatedRoute,
    private importStatementService: ImportStatementService,
    private importStatementFileService: ImportStatementFileService,
    private notificationService: NotificationsService
  ) { }
  
  ngOnInit() {       
    console.log('route_params',this.activatedRoute.params['idImport']);
    
    this.activatedRoute.params.subscribe(routeParams => {
      this.idImport = routeParams['idImport'];
      this.idAccount = routeParams['idAccount'];
      
      if(this.idImport!=0 && this.idAccount!=0)
      {
        //chargement du accountStatementImport
        this.importStatementService.getAsi(this.idImport)
          .subscribe(response=> {
            this.accountStatementImport=response;
            // chargement des accounts correspondants à l'import
            this.importStatementService.getAsifAccounts(this.idImport)
              .subscribe(response => {
                this.accounts = response.accounts;
                this.accountSelected = this.accounts.find(x=>x.id==this.idAccount);
              });
          })
      }
    });
  }

  SaveInAccountStatement() {
    this.loading=true;
    this.importStatementFileService.saveInAccountStatement(this.idImport)
    .subscribe(resp=>{
        this.notificationService.success('Enregistrement effectué', `Les relevés sont enregistrés`);
        this.loading=false;
    },
    error => {
      console.log('error_SaveInAccountStatement',error);
      this.notificationService.error('Echec de l\'enregistrement', error);
      this.loading=false;
    });

  }
 

}
