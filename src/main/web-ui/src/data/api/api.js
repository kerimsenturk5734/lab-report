import axios from 'axios';

const ROOT_URL = 'http://localhost:8080';
const API_VERSION_URL = '/v1/api'
const TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI2NTQ1ODE2NTQwNCIsImlzcyI6ImNvbS5rZXJpbXNlbnR1cmsubGFicmVwb3J0IiwiaWF0IjoxNzA2MTk0NTI4LCJleHAiOjE3MDYyMjQ1Mjh9.BKdDOLAf2bEkGHtxOgsbDRPLTG55ljjBTDG6L7Mz-wY" //Get from local storage

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