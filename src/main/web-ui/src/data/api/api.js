import axios from 'axios';
import {LocalStorageManager} from "../../util/localStorageManager";

const ROOT_URL = 'http://localhost:8080';
const API_VERSION_URL = '/v1/api'
const TOKEN = LocalStorageManager.loadToken()?.key

export const api = axios.create({
    baseURL: ROOT_URL.concat(API_VERSION_URL),
    headers: {
        'Content-Type': 'application/json',
        'Authorization':`Bearer ${TOKEN}`
    },
});

export const apiNoneSecure = axios.create({
    baseURL: ROOT_URL.concat(API_VERSION_URL),
    headers: {
        'Content-Type': 'application/json',
    },
});