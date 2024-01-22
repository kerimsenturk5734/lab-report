export class UpdateUserRequest {
    username?: string;
    name?: string;
    surname?: string;
    password?: string;

    constructor()
    constructor(
        username?: string,
        name?: string,
        surname?: string,
        password?: string
    ) {
        this.username = username;
        this.name = name;
        this.surname = surname;
        this.password = password;
    }
}
