import { apiUrl, urlDB } from './consts';

class Api {
    constructor(config) {
        this._url = config.url;
        this._headers = config.headers;
    }

    _mainApiError(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }

    // user api
    getUserId() {
        return fetch(`${this._url}/users/me`, {
            method: 'GET',
            headers: this._headers,
            credentials: 'include',
        }).then(this._mainApiError);
    }

    changeUserInformation( {name, email} ) {
        return fetch(`${this._url}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            credentials: 'include',
            body: JSON.stringify( {name: name, email: email} ),
        }).then(this._mainApiError);
    }

    // movie api
    getMoviesById() {
        return fetch(`${this._url}/movies`, {
            method: 'GET',
            headers: this._headers,
            credentials: 'include',
        }).then(this._mainApiError);
    }

    createMovie(movie) {
        return fetch(`${this._url}/movies`, {
            method: 'POST',
            headers: this._headers,
            credentials: 'include',
            body: JSON.stringify( {
                country: movie.country || 'Not Available',
                director: movie.director || 'Not Available',
                duration: movie.duration || 0,
                year: movie.year || 0,
                description: movie.description || 'Not Available',
                image: `${apiUrl}${movie.image.url}`,
                trailerLink: movie.trailerLink,
                owner: movie.owner,
                thumbnail: `${apiUrl}${movie.image.formats.thumbnail.url}`,
                nameRU: movie.nameRU || 'Not Available',
                nameEN: movie.nameEN || 'Not Available',
                movieId: movie.id
            }),
        }).then(this._mainApiError);
    }

    deleteMovie(id) {
        return fetch(`${this._url}/movies/${id}`, {
            method: 'DELETE',
            headers: this._headers,
            credentials: 'include',
        }).then(this._mainApiError);
    }
}

const MainApi = new Api({
    url: urlDB,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default MainApi;