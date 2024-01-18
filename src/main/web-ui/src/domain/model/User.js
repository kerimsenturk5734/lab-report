"use strict";
exports.__esModule = true;
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
        this.userId = userId;
        this.name = name;
        this.surname = surname;
        this.password = password;
        this.role = role;
    }
    User.prototype.getUserId = function () {
        return this.userId;
    };
    User.prototype.setUserId = function (userId) {
        this.userId = userId;
    };
    User.prototype.getName = function () {
        return this.name;
    };
    User.prototype.setName = function (name) {
        this.name = name;
    };
    User.prototype.getSurname = function () {
        return this.surname;
    };
    User.prototype.setSurname = function (surname) {
        this.surname = surname;
    };
    User.prototype.getPassword = function () {
        return this.password;
    };
    User.prototype.setPassword = function (password) {
        this.password = password;
    };
    User.prototype.getRole = function () {
        return this.role;
    };
    User.prototype.setRole = function (role) {
        this.role = role;
    };
    return User;
}());
exports.User = User;
