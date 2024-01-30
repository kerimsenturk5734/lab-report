"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var api_1 = require("../api");
var DOMAIN_BASE_URL = "/users";
var userDao = {
    // Define your API endpoints here
    isTokenValid: function (token) {
        if (token === void 0) { token = "defaultToken"; }
        return api_1.api.get(DOMAIN_BASE_URL.concat("/isTokenValid/".concat(token)));
    },
    getUserById: function (id) { return api_1.api.get(DOMAIN_BASE_URL.concat("/".concat(id))); },
    getAllUsers: function () { return api_1.api.get(DOMAIN_BASE_URL.concat('/getAllUsers')); },
    loginUser: function (userLoginRequest) {
        return api_1.apiNoneSecure.post(DOMAIN_BASE_URL.concat('/login'), userLoginRequest);
    },
    updateUser: function (updateUserRequest) {
        return api_1.api.put(DOMAIN_BASE_URL.concat('/updateUser'), updateUserRequest);
    },
    register: function (createUserRequest) {
        return api_1.api.post(DOMAIN_BASE_URL.concat('/register'), createUserRequest);
    },
    registerPatient: function (patientCreateRequest) {
        return api_1.apiNoneSecure.post(DOMAIN_BASE_URL.concat('/registerPatient'), patientCreateRequest);
    }
};
exports.default = userDao;
