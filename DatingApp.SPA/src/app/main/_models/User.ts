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

}

// export class User implements IUser {
//     id: number;
//     username: string;
//     lastName: string;
//     firstName: string;
//     gender: string;
//     age: number;
//     dateCreated: Date;
//     dateLastActive: Date;

//     country: string;
//     city: string;
//     postalCode: number;
//     avatar: string;
// }