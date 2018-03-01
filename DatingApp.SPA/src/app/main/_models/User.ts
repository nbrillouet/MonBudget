import { IShortcut } from "./Shortcut";

export interface User {
    id: number;
    userName: string;
    lastName: string;
    firstName: string;
    gender: string;
    age: number;
    dateCreated: Date;
    dateLastActive: Date;

    country: string;
    city: string;
    postalCode: number;
    avatarUrl: string;
    shortcuts: IShortcut[];

}
