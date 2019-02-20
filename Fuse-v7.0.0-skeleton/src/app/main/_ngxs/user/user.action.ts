import { IUser } from "app/main/_models/user.model";
import { IUserShortcut } from "app/main/_models/user-shortcut.model";

export const USER_ADD = 'user-add';
export const USER_DELETE = 'user-delete';
export const USER_LOAD = 'user-load';
export const USER_LOAD_SUCCESS = 'user-load-success';

export const USER_DELETE_SHORTCUT  = 'user-delete-shortcut';
export const USER_DELETE_SHORTCUT_SUCCESS = 'user-delete-shortcut-success';

export const USER_ADD_SHORTCUT = 'user-add-shortcut';

export class AddUser {
    static readonly type = USER_ADD;
 
    constructor(public payload: IUser) { }
}

export class DeleteUser {
    static readonly type = USER_DELETE;

    constructor(public id:number) {}
}

export class LoadUser {
    static readonly type = USER_LOAD;
 
    constructor(public payload: IUser) { }
}

export class LoadUserSuccess {
    static readonly type = USER_LOAD_SUCCESS;
 
    constructor(public payload: IUser) { }
}

export class User_DeleteShortcut {
    static readonly type = USER_DELETE_SHORTCUT;

    constructor(public id:number) {}
}

export class User_DeleteShortcutSuccess {
    static readonly type = USER_DELETE_SHORTCUT_SUCCESS;

    constructor(public id:number) {}
}

export class User_AddShortcut {
    static readonly type = USER_ADD_SHORTCUT;

    constructor(public shortcut: IUserShortcut) {}
}