import { MOVIE_LENGTH } from './consts';

export const filterMovie = (searchReq, isShort, movieArr) => {
    if (isShort === true) {
        return movieArr.filter((movie) =>
        (movie.nameEN.toLowerCase().includes(searchReq.toLowerCase()) && movie.duration < MOVIE_LENGTH) ||
        (movie.nameRU.toLowerCase().includes(searchReq.toLowerCase()) && movie.duration < MOVIE_LENGTH))
    } else {
        return movieArr.filter((movie) =>
        movie.nameEN.toLowerCase().includes(searchReq.toLowerCase()) ||
        movie.nameRU.toLowerCase().includes(searchReq.toLowerCase()))
    }
};

