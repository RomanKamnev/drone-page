import axios from 'axios';

const API_URL = 'http://localhost:8080/api/auth/get-token';

export const login = async (username, password) => {
    const response = await axios.post(API_URL, { username, password });
    //todo Add XSS prevention
    if (response.data.token) {
        localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
};

export const logout = () => {
    localStorage.removeItem('user');
};

export const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem('user'));
};
