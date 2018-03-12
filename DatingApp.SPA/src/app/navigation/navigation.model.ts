import { FuseNavigationModelInterface } from '../core/components/navigation/navigation.model';

export class FuseNavigationModel implements FuseNavigationModelInterface
{
    public model: any[];

    constructor()
    {
        this.model = [
            {
                'id'      : 'applications',
                'title'   : 'Applications',
                'translate': 'NAV.APPLICATIONS',
                'type'    : 'group',
                'children': [
                    {
                        'id'   : 'sample',
                        'title': 'Sample',
                        'translate': 'NAV.SAMPLE.TITLE',
                        'type' : 'item',
                        'icon' : 'email',
                        'url'  : '/sample',
                        'badge': {
                            'title': 25,
                            'translate': 'NAV.SAMPLE.BADGE',
                            'bg'   : '#F44336',
                            'fg'   : '#FFFFFF'
                        }
                    },
                    {
                        'id'   : 'users',
                        'title': 'Users',
                        'translate': 'NAV.USER.TITLE',
                        'type' : 'item',
                        'icon' : 'account_box',
                        'url'  : '/apps/users',
                        'badge': {
                            'title': 25,
                            'translate': 'NAV.USER.BADGE',
                            'bg'   : '#F44336',
                            'fg'   : '#FFFFFF'
                        }
                    },
                    {
                        'id'   : 'import-statement',
                        'title': 'Import statement',
                        'translate': 'NAV.IMPORT_STATEMENT.TITLE',
                        'type' : 'item',
                        'icon' : 'account_box',
                        'url'  : '/apps/import-statement',
                        'badge': {
                            'title': 25,
                            'translate': 'NAV.IMPORT_STATEMENT.BADGE',
                            'bg'   : '#F44336',
                            'fg'   : '#FFFFFF'
                        }
                    }
                ]
            }
        ];
    }
}
