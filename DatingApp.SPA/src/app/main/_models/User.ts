import { IShortcut } from "./Shortcut";

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
    // country: string;
    // city: string;
    // postalCode: number;
    avatarUrl: string;
    shortcuts: IShortcut[];

}
