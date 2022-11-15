import React, { useState } from 'react';
import Menu from '../Menu/Menu';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import { filterMovie } from '../../utils/movieFilter';
import './Movies.css';

function Movies({
    handleBurgerMenu,
    isPreloader,
    savedMovies,
    onDeleteMovie,
    onMovieSave,
    moviesLocation,
    movies
}) {

        const [isSearch, setSearch] = useState(
            localStorage.getItem('allMovieSearch') ? JSON.parse(localStorage.getItem('myMovie')) : []);
        const [moviesFound, setMoviesFound] = useState(undefined);

        function handleSearchButton (searchReq, shortMovie) {
            const moviesFiltering =  localStorage.getItem('movies');
            localStorage.setItem('allMovieSearch', JSON.stringify(searchReq));
            if (localStorage.getItem('allMovieSearch')) {
            const MoviesFiltered = filterMovie(searchReq, shortMovie, JSON.parse(moviesFiltering));
            setSearch(MoviesFiltered);
            (MoviesFiltered.length > 0) ? setMoviesFound(true) : setMoviesFound(false);
            localStorage.setItem('myMovie', JSON.stringify(MoviesFiltered));
            } else {
                setSearch([]);
            }
        }

    return (
        <>
            <Menu 
                handleBurgerMenu={handleBurgerMenu}
            />
            <div className="movies">
                <SearchForm 
                    handleSearchButton={handleSearchButton}
                    moviesLocation={moviesLocation}
                />
                {isPreloader && <Preloader/>}
                <MoviesCardList  
                    movies={isSearch || movies}
                    moviesFound={moviesFound}
                    isPreloader={isPreloader}
                    savedMovies={savedMovies}
                    onDeleteMovie={onDeleteMovie} 
                    onMovieSave={onMovieSave}
                    moviesLocation={moviesLocation}
                /> 
            </div>
            <Footer/>
        </>
    );
}

export default Movies;