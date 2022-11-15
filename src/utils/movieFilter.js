
export const filterMovie = (searchReq, isShort, movieArr) => {
    if (isShort === true) {
        return movieArr.filter((movie) =>
        (movie.nameEN.toLowerCase().includes(searchReq.toLowerCase()) && movie.duration < 40) ||
        (movie.nameRU.toLowerCase().includes(searchReq.toLowerCase()) && movie.duration < 40))
    } else {
        return movieArr.filter((movie) =>
        movie.nameEN.toLowerCase().includes(searchReq.toLowerCase()) ||
        movie.nameRU.toLowerCase().includes(searchReq.toLowerCase())
    )
    };
};

