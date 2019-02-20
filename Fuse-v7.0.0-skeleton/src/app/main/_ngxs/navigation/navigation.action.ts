export const NAVIGATION_LOAD = 'navigation-load';
export const NAVIGATION_LOAD_SUCCESS = 'navigation-load-success';

export const NAVIGATION_ADD = 'navigation-add';

export class LoadNavigation {
    static readonly type = NAVIGATION_LOAD;
 
    constructor(public payload: any) { }
}

export class LoadNavigationSuccess {
    static readonly type = NAVIGATION_LOAD_SUCCESS;
 
    constructor(public payload: any) { }
}

export class AddNavigation {
    static readonly type = NAVIGATION_ADD;
 
    constructor(public payload: any) { }
    
}