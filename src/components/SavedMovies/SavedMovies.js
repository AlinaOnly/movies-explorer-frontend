import React, { useState } from 'react';
import Menu from '../Menu/Menu';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MovieCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import './SavedMovies.css';

import { filterMovie } from '../../utils/movieFilter';

function SavedMovies({ 
    handleBurgerMenu,
    movies,
    savedMovies,
    onDeleteMovie,
    savedMoviesLocation,
    isPreloader
}) {

        const [isSearch, setSearch] = useState(
            localStorage.getItem('newMovies') ? JSON.parse(localStorage.getItem('newMovies')) : []);
        const [moviesFound, setMoviesFound] = useState(undefined);

        function handleSearchButton (searchReq, shortMovie) {
            const moviesFiltering =  localStorage.getItem('newMovies') ? JSON.parse(localStorage.getItem('newMovies')) : [];
            const MoviesFiltered = filterMovie(searchReq, shortMovie, moviesFiltering);
            setSearch(MoviesFiltered);
            (MoviesFiltered.length > 0) ? setMoviesFound(true) : setMoviesFound(false);
            localStorage.setItem('savedMoviesSearch', JSON.stringify(searchReq));
        }

    return (
        <>
            <Menu handleBurgerMenu={handleBurgerMenu} />
            <div className="saved-movies">
                <SearchForm 
                    handleSearchButton={handleSearchButton}
                />
                {isPreloader && <Preloader/>}
                <MovieCardList 
                    movies={isSearch || movies}
                    moviesFound={moviesFound} 
                    savedMovies={savedMovies}
                    onDeleteMovie={onDeleteMovie}
                    savedMoviesLocation={savedMoviesLocation}
                    setMoviesFound={setMoviesFound}
                />
            </div>
            <Footer />
        </>
    );
}

export default SavedMovies;
