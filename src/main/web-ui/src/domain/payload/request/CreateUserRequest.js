"use strict";
exports.__esModule = true;
exports.CreateUserRequest = void 0;
var CreateUserRequest = /** @class */ (function () {
    function CreateUserRequest(userId, name, surname, password, userRole) {
        this.userId = userId;
        this.name = name;
        this.surname = surname;
        this.password = password;
        this.userRole = userRole;
    }
    return CreateUserRequest;
}());
exports.CreateUserRequest = CreateUserRequest;
