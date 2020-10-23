export const LOGIN = 'login';

export class Login {
    static readonly type = LOGIN;

    constructor(public payload: {username: string, password: string}) { }
}