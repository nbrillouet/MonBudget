import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { AuthHttp } from 'angular2-jwt';
import { ErrorService } from './error.service';
import { ISelect } from '../_models/Select';
import { IUser } from '../_models/User';
import { IBankAccounts } from '../_models/Bank';

@Injectable()
export class NavigationService {
baseUrl = environment.apiUrl;

constructor(
    private authHttp: AuthHttp,
    private errorService: ErrorService
) { }

    GetBanks(user:IUser) {
        // const user: User = JSON.parse(localStorage.getItem('user'));
        // console.log('USER-NAVIGATION',user);
        return this.authHttp
            .get(this.baseUrl + `users/${user.id}/banks`)
            .map(response => <ISelect[]>response.json())
            .catch(this.errorService.handleError);
    }

    getUserMenu(user:IUser) {
        return this.getReferentialMenu(user);
        
        
        // this.authHttp
        //     .get(this.baseUrl + `referential/operationMethods/selectType/-1`)
        //     .map(response => <ISelect[]>response.json())
        //     .catch(this.errorService.handleError);
    }

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
            'icon' : 'account_box',
            'url'  : '/apps/users'
        };

        referentialMenu.children.push(userMenu);

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
