import {UserDto} from "../../dto/UserDto";

export interface Token {
    key: string;
    keyCreationTime: number;
    extendedInformation: string;
}

export class UserLoginResponse {
    constructor(public token: Token, public user: UserDto) {}
}