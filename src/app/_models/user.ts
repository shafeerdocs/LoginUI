export class User {
    _id: string;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    token: string;
    role: string;
    loginHistory:  Date;
    logoutHistory:  Date;
}