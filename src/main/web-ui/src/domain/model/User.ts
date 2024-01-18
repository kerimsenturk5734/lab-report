
enum UserRole {
    ADMIN = "ADMIN",
    PATIENT = "PATIENT",
    LAB_TECHNICIAN = "LAB_TECHNICIAN",
    DOCTOR = "DOCTOR"
}

export class User {
    userId: string;
    name: string;
    surname: string;
    password: string;
    role: UserRole;

    constructor(userId: string, name: string, surname: string, password: string, role: UserRole) {
        this.userId = userId;
        this.name = name;
        this.surname = surname;
        this.password = password;
        this.role = role;
    }

    getUserId(): string {
        return this.userId;
    }

    setUserId(userId: string): void {
        this.userId = userId;
    }

    getName(): string {
        return this.name;
    }

    setName(name: string): void {
        this.name = name;
    }

    getSurname(): string {
        return this.surname;
    }

    setSurname(surname: string): void {
        this.surname = surname;
    }

    getPassword(): string {
        return this.password;
    }

    setPassword(password: string): void {
        this.password = password;
    }

    getRole(): UserRole {
        return this.role;
    }

    setRole(role: UserRole): void {
        this.role = role;
    }
}