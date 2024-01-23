import axios from 'axios';

const ROOT_URL = 'http://localhost:8080';
const API_VERSION_URL = '/v1/api'
const TOKEN = "TOKEN" //Get from local storage

export const api = axios.create({
    baseURL: ROOT_URL.concat(API_VERSION_URL),
    headers: {
        'Content-Type': 'application/json',
        'Authorization':`Bearer ${TOKEN}`
    },
});