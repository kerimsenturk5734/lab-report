import {UserRole} from "../../model/User";

class CreateUserRequest {
    userId: string;

    name: string;

    surname: string;

    password: string;

    userRole: UserRole;

    constructor(userId: string, name: string, surname: string, password: string, userRole: UserRole) {
        this.userId = userId;
        this.name = name;
        this.surname = surname;
        this.password = password;
        this.userRole = userRole;
    }
}
