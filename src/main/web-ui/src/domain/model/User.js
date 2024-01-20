"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.UserRole = void 0;
var UserRole;
(function (UserRole) {
    UserRole["ADMIN"] = "ADMIN";
    UserRole["PATIENT"] = "PATIENT";
    UserRole["LAB_TECHNICIAN"] = "LAB_TECHNICIAN";
    UserRole["DOCTOR"] = "DOCTOR";
})(UserRole = exports.UserRole || (exports.UserRole = {}));
var User = /** @class */ (function () {
    function User(userId, name, surname, password, role) {
        this._userId = userId;
        this._name = name;
        this._surname = surname;
        this._password = password;
        this._role = role;
    }
    Object.defineProperty(User.prototype, "userId", {
        get: function () {
            return this._userId;
        },
        set: function (value) {
            this._userId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "surname", {
        get: function () {
            return this._surname;
        },
        set: function (value) {
            this._surname = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "password", {
        get: function () {
            return this._password;
        },
        set: function (value) {
            this._password = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "role", {
        get: function () {
            return this._role;
        },
        set: function (value) {
            this._role = value;
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
exports.User = User;
