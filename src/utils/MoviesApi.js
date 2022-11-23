import { apiUrl } from './consts';

const movieApiError = (res) =>{
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
};

const MoviesApi = () => {
    return fetch(`${apiUrl}/beatfilm-movies`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    }).then(movieApiError);
};

export {MoviesApi};