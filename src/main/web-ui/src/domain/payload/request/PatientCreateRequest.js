"use strict";
exports.__esModule = true;
exports.PatientCreateRequest = void 0;
var PatientCreateRequest = /** @class */ (function () {
    function PatientCreateRequest(userId, name, surname, password) {
        this.userId = userId;
        this.name = name;
        this.surname = surname;
        this.password = password;
    }
    return PatientCreateRequest;
}());
exports.PatientCreateRequest = PatientCreateRequest;