import React, { useState, useEffect } from 'react';
import Menu from '../Menu/Menu';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import { filterMovie } from '../../utils/movieFilter';
import MovieCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import './SavedMovies.css';

function SavedMovies({
    handleBurgerMenu,
    savedMovies,
    onDeleteMovie,
    savedMoviesLocation,
    isPreloader,
    isSave
}) {

        const [isSearch, setSearch] = useState(
            localStorage.getItem('savedMovies') ? JSON.parse(localStorage.getItem('savedMovies')) : []);
        const [moviesFound, setMoviesFound] = useState(undefined);
        const [shortMoviesent, setShortMoviesent] = useState(undefined);

        function handleSearchButton (searchReq, shortMovie) {
            const moviesFiltering =  localStorage.getItem('savedMovies') ? JSON.parse(localStorage.getItem('savedMovies')) : [];
            const MoviesFiltered = filterMovie(searchReq, shortMovie, moviesFiltering);
            setSearch(MoviesFiltered);
            setShortMoviesent(shortMovie);
            (MoviesFiltered.length > 0) ? setMoviesFound(true) : setMoviesFound(false);
        }

        useEffect(() => {
            handleSearchButton( '',  shortMoviesent);
        }, [savedMovies]);

    return (
        <>
            <Menu handleBurgerMenu={handleBurgerMenu} />
            <div className="saved-movies">
                <SearchForm 
                    handleSearchButton={handleSearchButton}
                />
                {isPreloader && <Preloader/>}
                <MovieCardList 
                    movies={isSearch}
                    moviesFound={moviesFound} 
                    savedMovies={savedMovies}
                    onDeleteMovie={onDeleteMovie}
                    savedMoviesLocation={savedMoviesLocation}
                    isSave={isSave}
                />
            </div>
            <Footer />
        </>
    );
}

export default SavedMovies;
