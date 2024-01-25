import {UserDto} from "../../dto/UserDto";

interface Token {
    key: string;
    keyCreationTime: number;
    extendedInformation: string;
}

export class UserLoginResponse {
    constructor(public token: Token, public user: UserDto) {}
}