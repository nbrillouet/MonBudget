import { IUserShortcut } from "./user-shortcut.model";
import { Injectable } from "@angular/core";
import { IBankAgencyAccounts } from "./referential/bank-agency.model";
import { UserEvent } from "./user-event.model";


export class UserTable {
    id: number;
    userName: string;
    lastName: string;
    firstName: string;
    gender: string;
    age: number;
    dateCreated: Date;
    dateLastActive: Date;
    avatarUrl: string;
}

// export interface IUser {
//     id: number;
//     idUserGroup: number;
//     userName: string;
//     lastName: string;
//     firstName: string;
//     gender: string;
//     age: number;
//     dateCreated: Date;
//     dateLastActive: Date;
//     dateOfBirth: Date;
//     idGMapAddress : number;
//     IdAvatarCloud : string;
//     avatarUrl: string;
//     shortcuts: IUserShortcut[];
//     role: string;
//     token: string;
//     bankAgencies: IBankAgencyAccounts[];
// }

export class UserForDetail {
    id: number;
    idUserGroup: number;
    userName: string;
    lastName: string;
    firstName: string;
    gender: string;
    age: number;
    dateCreated: Date;
    dateLastActive: Date;
    dateOfBirth: Date;
    idGMapAddress : number;
    IdAvatarCloud : string;
    avatarUrl: string;
    shortcuts: IUserShortcut[];
    role: string;
    token: string;
    bankAgencies: IBankAgencyAccounts[];
    userEvents: UserEvent[];
}

export interface IUserForLabel {
    id: number;
    lastName: string;
    firstName: string;
}

export interface IUserForGroup {
    id: number;
    idUserGroup: number;
}

export class UserForRegister {
    name: string;
    email: string;
    password: string;
    passwordConfirm: string;
}

export class UserForPasswordChange {
    idCrypted: string;
    name: string;
    email: string;
    password: string;
}


export enum Role {
    user = 'User',
    admin = 'Admin'
}
// export interface IUserCurrent {
//     id: number;
//     lastName: string;
//     firstName: string;
    
// }

@Injectable()
export class UserLoaded {
    isLoaded: boolean = false;
}


