import { IUserShortcut } from "./user-shortcut.model";
import { IBankAccounts } from "./bank.model";

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
    banks: IBankAccounts[];
}

export interface IUserForLabel {
    id: number;
    lastName: string;
    firstName: string;
}
