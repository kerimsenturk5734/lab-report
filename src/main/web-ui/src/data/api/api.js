import axios from 'axios';

const ROOT_URL = 'http://localhost:8080';
const API_VERSION_URL = '/v1/api'
const TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI2NTQ1ODE2NTQwNCIsImlzcyI6ImNvbS5rZXJpbXNlbnR1cmsubGFicmVwb3J0IiwiaWF0IjoxNzA2MTExOTA4LCJleHAiOjE3MDYxNDE5MDh9.CZN1k2h6uxJLd4WJ8OyjH2-D03a9mRr1Z7TB-jmJcUM" //Get from local storage

export const api = axios.create({
    baseURL: ROOT_URL.concat(API_VERSION_URL),
    headers: {
        'Content-Type': 'application/json',
        'Authorization':`Bearer ${TOKEN}`
    },
});