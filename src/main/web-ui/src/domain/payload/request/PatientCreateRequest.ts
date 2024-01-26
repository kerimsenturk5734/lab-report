export class PatientCreateRequest {
    userId: string;
    name: string;
    surname: string;
    password: string;

    constructor(userId: string, name: string, surname: string, password: string) {
        this.userId = userId;
        this.name = name;
        this.surname = surname;
        this.password = password;
    }
}
