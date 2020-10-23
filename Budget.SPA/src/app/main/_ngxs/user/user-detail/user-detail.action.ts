import { UserForDetail } from "app/main/_models/user.model";
import { IUserShortcut } from "app/main/_models/user-shortcut.model";

export const USER_DETAIL_LOAD = 'user-detail-load';
export const USER_DETAIL_CLEAR = 'user-detail-clear';
export const USER_DETAIL_SYNCHRONIZE = 'user-detail-synchronize';

export const USER_ADD = 'user-add';
export const USER_DELETE = 'user-delete';
export const USER_DELETE_SHORTCUT  = 'user-delete-shortcut';
export const USER_ADD_SHORTCUT = 'user-add-shortcut';

export class SynchronizeUserDetail {
    static readonly type = USER_DETAIL_SYNCHRONIZE;

    constructor(public payload: UserForDetail) { }
}

export class AddUser {
    static readonly type = USER_ADD;
 
    constructor(public payload: UserForDetail) { }
}

export class DeleteUser {
    static readonly type = USER_DELETE;

    constructor(public id:number) {}
}

export class LoadUserDetail {
    static readonly type = USER_DETAIL_LOAD;
 
    constructor(public payload: {id: number}) { }
}

export class ClearUserDetail {
    static readonly type = USER_DETAIL_CLEAR;
}

export class User_DeleteShortcut {
    static readonly type = USER_DELETE_SHORTCUT;

    constructor(public id:number) {}
}

export class User_AddShortcut {
    static readonly type = USER_ADD_SHORTCUT;

    constructor(public shortcut: IUserShortcut) {}
}