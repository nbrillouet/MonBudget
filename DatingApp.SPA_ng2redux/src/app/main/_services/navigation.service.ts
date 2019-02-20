import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { AuthHttp } from 'angular2-jwt';
import { ErrorService } from './error.service';
import { ISelect } from '../_models/select.model';
import { IUser } from '../_models/user.model';
import { IBankAccounts } from '../_models/bank.model';

@Injectable()
export class NavigationService {
baseUrl = environment.apiUrl;

constructor(
    private authHttp: AuthHttp,
    private errorService: ErrorService
) { }



    // getUserMenu(user:IUser) {
    //     return this.getReferentialMenu(user);
        
        
    //     // this.authHttp
    //     //     .get(this.baseUrl + `referential/operationMethods/selectType/-1`)
    //     //     .map(response => <ISelect[]>response.json())
    //     //     .catch(this.errorService.handleError);
    // }

    getReferentialMenu(user: IUser) {
        var referentialMenu = {
            'id'   : 'referential',
            'title': 'Référentiel',
            'translate': 'NAV.REFERENTIAL.TITLE',
            'type' : 'collapse',
            'icon' : 'settings',
            'children': []
            }
        var userMenu = {
            'id'   : 'users',
            'title': 'Utilisateurs',
            'translate': 'NAV.USER.TITLE',
            'type' : 'item',
            'url'  : '/apps/referential/users'
        };

        var accountMenu = {
            'id'   : 'accounts',
            'title': 'Comptes bancaires',
            'translate': 'NAV.ACCOUNT.TITLE',
            'type' : 'item',
            'url'  : '/apps/referential/accounts'
        };

        referentialMenu.children.push(userMenu);
        referentialMenu.children.push(accountMenu);
        return referentialMenu;

    }

    getImportAccountMenu() {
        var importMenu = {
            'id'   : 'import',
            'title': 'Import relevés',
            'translate': 'NAV.REFERENTIAL.TITLE',
            'type' : 'item',
            'icon' : 'insert_drive_file',
            'url'  : '/apps/import-statement-archives'
            }
            //                 'id'   : 'import-statement',
            //                 'title': 'Import statement',
            //                 'translate': 'NAV.IMPORT_STATEMENT.TITLE',
            //                 'type' : 'item',
            //                 'icon' : 'account_box',
            //                 'url'  : '/apps/import-statement-archives',
            //                 'badge': {
            //                     'title': 25,
            //                     'translate': 'NAV.IMPORT_STATEMENT.BADGE',
            //                     'bg'   : '#F44336',
            //                     'fg'   : '#FFFFFF'
            //                 }
            //             }
        return importMenu;
    }

    getBankMenu(banks: IBankAccounts[]){
        var bankMenu = {
            'id'   : 'bank',
            'title': 'Vos comptes',
            'translate': 'NAV.BANK.TITLE',
            'type' : 'collapse',
            'icon' : 'account_balance',
            'children': []
            }
        
        for(let bank of banks)
        {
            let bankChild = {
                'id'   : bank.labelBankShort,
                'title': bank.labelBankShort,
                'type' : 'collapse',
                // 'icon' : 'account_box',
                // 'url'  : '/apps/users',
                'children': []
            };

            for(let account of bank.accounts)
            {
                let accountChild = {
                    'id'   : account.number,
                    'title': account.label + ' (...' + account.number.substring(account.number.length-3) + ')',
                    'type' : 'item',
                    // 'icon' : 'account_box',
                    'url'  : `/apps/account-statements/accounts/${account.id}`
                };

                bankChild.children.push(accountChild);
            }

            bankMenu.children.push(bankChild);
        }
        console.log('bankMenu',bankMenu);
        return bankMenu;
    }
}
