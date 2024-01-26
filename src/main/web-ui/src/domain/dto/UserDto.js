"use strict";
exports.__esModule = true;
exports.UserDto = void 0;
var UserDto = /** @class */ (function () {
    function UserDto(userId, name, surname, role) {
        this._userId = userId;
        this._name = name;
        this._surname = surname;
        this._role = role;
    }
    Object.defineProperty(UserDto.prototype, "userId", {
        get: function () {
            return this._userId;
        },
        set: function (value) {
            this._userId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UserDto.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UserDto.prototype, "surname", {
        get: function () {
            return this._surname;
        },
        set: function (value) {
            this._surname = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UserDto.prototype, "role", {
        get: function () {
            return this._role;
        },
        set: function (value) {
            this._role = value;
        },
        enumerable: false,
        configurable: true
    });
    return UserDto;
}());
exports.UserDto = UserDto;
