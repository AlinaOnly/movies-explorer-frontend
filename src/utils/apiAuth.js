import { urlDB } from './consts';

// login, register, token
const registration = ({ name, email, password }) =>{
    return fetch(`${urlDB}/signup`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({
            name, email, password
        })
    }).then(error);
};

const login = ({ email, password }) => {
    return fetch(`${urlDB}/signin`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({
            email, password
        })
    }).then(error);
};

const token = () => {
    return fetch(`${urlDB}/users/me`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',
    }).then(error);
};

const logout = () => {
    return fetch(`${urlDB}/signout`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',
    }).then(error);
};

const error = (res) => {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
};

export {
    registration,
    login,
    token,
    logout
};