import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { ErrorService } from './error.service';
import { IUser } from '../_models/user.model';
import { HttpClient } from '@angular/common/http';
import { IBankAgencyAccounts } from '../_models/referential/bank-agency.model';

@Injectable()
export class NavigationService {
baseUrl = environment.apiUrl;

constructor(
    private http: HttpClient,
    private errorService: ErrorService
) { }

    getReferentialMenu(user: IUser) {
        var referentialMenu = {
            id  : 'referential',
            title: 'Référentiel',
            // 'translate': 'NAV.REFERENTIAL.TITLE',
            type : 'collapsable',
            icon : 'settings',
            children: []
            }

        if(user.role=="Admin") {
            var userMenu = {
                id   : 'users',
                title: 'Utilisateurs',
                // 'translate': 'NAV.USER.TITLE',
                type : 'item',
                url  : '/apps/referential/users'
            };
            referentialMenu.children.push(userMenu);
        }

        var accountMenu = {
            id   : 'accounts',
            title: 'Comptes bancaires',
            // 'translate': 'NAV.ACCOUNT.TITLE',
            type : 'item',
            url  : '/apps/referential/accounts'
        };

        var operationMenu = {
            id   : 'operations',
            title: 'Opérations',
            // 'translate': 'NAV.USER.TITLE',
            type : 'item',
            url  : '/apps/referential/operations/operation-type-families'
        };


        
        referentialMenu.children.push(accountMenu);
        referentialMenu.children.push(operationMenu);
        
        return referentialMenu;

    }

    getImportAccountMenu() {
        var importMenu = {
            id   : 'import',
            title: 'Import relevés',
            type : 'item',
            icon : 'insert_drive_file',
            url  : '/apps/account-statement-imports'
            }

        return importMenu;
    }

    getBankMenu(banks: IBankAgencyAccounts[]){
        var bankMenu = {
            id   : 'bank',
            title: 'Vos comptes',
            type : 'collapsable',
            icon : 'account_balance',
            children: []
            }
        
            let bankChild = {
                id   : -1,
                title: 'Tous les comptes',
                type : 'item',
                url  : `/apps/account-statements/accounts/ALL`
            };
            bankMenu.children.push(bankChild);

        for(let bank of banks)
        {
            let bankChild = {
                id   : bank.id,
                title: bank.bankFamily.label,
                type : 'collapsable',
                children: []
            };

            for(let account of bank.accounts)
            {
                let accountChild = {
                    id   : account.number,
                    title: account.label + ' (...' + account.number.substring(account.number.length-3) + ')',
                    type : 'item',
                    url  : `/apps/account-statements/accounts/${account.id}`
                };

                bankChild.children.push(accountChild);
            }

            bankMenu.children.push(bankChild);
        }
        return bankMenu;
    }

    getPlanMenu() {
        var planMenu = {
            id  : 'plan',
            title: 'Budget',
            // 'translate': 'NAV.REFERENTIAL.TITLE',
            type : 'collapsable',
            icon : 'donut_small',
            children: []
        };
        
        var addEditMenu = {
            id   : 'addEditPlan',
            title: 'Création/modification',
            // 'translate': 'NAV.USER.TITLE',
            type : 'item',
            url  : '/apps/plans'
        };

        var suiviPlanMenu = {
            id   : 'suiviPlan',
            title: 'Suivi',
            // 'translate': 'NAV.ACCOUNT.TITLE',
            type : 'item',
            url  : '/apps/plans/suivi'
        };

        planMenu.children.push(addEditMenu);
        planMenu.children.push(suiviPlanMenu);
        
        return planMenu;

    }
}
