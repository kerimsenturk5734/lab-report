
export enum UserRole {
    ADMIN = "ADMIN",
    PATIENT = "PATIENT",
    LAB_TECHNICIAN = "LAB_TECHNICIAN",
    DOCTOR = "DOCTOR"
}

export class User {
    private _userId: string;
    private _name: string;
    private _surname: string;
    private _password: string;
    private _role: UserRole;

    constructor(userId: string, name: string, surname: string, password: string, role: UserRole) {
        this._userId = userId;
        this._name = name;
        this._surname = surname;
        this._password = password;
        this._role = role;
    }

    get userId(): string {
        return this._userId;
    }

    set userId(value: string) {
        this._userId = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get surname(): string {
        return this._surname;
    }

    set surname(value: string) {
        this._surname = value;
    }

    get password(): string {
        return this._password;
    }

    set password(value: string) {
        this._password = value;
    }

    get role(): UserRole {
        return this._role;
    }

    set role(value: UserRole) {
        this._role = value;
    }
}