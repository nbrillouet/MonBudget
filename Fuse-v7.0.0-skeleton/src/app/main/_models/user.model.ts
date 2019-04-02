import { IUserShortcut } from "./user-shortcut.model";
import { Injectable } from "@angular/core";
import { IBankAgencyAccounts } from "./referential/bankAgency.model";


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

export interface IUser {
    id: number;
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
    bankAgencies: IBankAgencyAccounts[];
}

export class User implements IUser {
    id: number;
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
    bankAgencies: IBankAgencyAccounts[];
}

export interface IUserForLabel {
    id: number;
    lastName: string;
    firstName: string;
}

export interface IUserCurrent {
    id: number;
    lastName: string;
    firstName: string;
    
}

@Injectable()
export class UserLoaded {
    isLoaded: boolean = false;
}


