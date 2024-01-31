export class UpdateUserRequest {
    name?: string;
    surname?: string;
    password?: string;


    constructor(
        name?: string,
        surname?: string,
        password?: string
    ) {
        this.name = name;
        this.surname = surname;
        this.password = password;
    }
}
