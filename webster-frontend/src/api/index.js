import axios from 'axios';

const API = axios.create({
    baseURL: 'http://localhost:8001'
});

export const login = (formData) => API.post('/user/login', formData);
export const signUp = (formData) => API.post('/user/signup', formData);