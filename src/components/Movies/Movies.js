import React, { useState, useEffect } from 'react';
import Menu from '../Menu/Menu';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import { filterMovie } from '../../utils/movieFilter';
import './Movies.css';

function Movies({
    isSave,
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

        useEffect(() => {
            localStorage.setItem("myMovie", JSON.stringify(isSearch));
        }, [setSearch]);

        function handleSearchButton (searchReq, shortMovie) {
            const moviesFiltering =  localStorage.getItem('movies');
            if (localStorage.getItem('allMovieSearch')) {
            const MoviesFiltered = filterMovie(searchReq, shortMovie, JSON.parse(moviesFiltering));
            setSearch(MoviesFiltered);
            (MoviesFiltered.length > 0) ? setMoviesFound(true) : setMoviesFound(false);
            localStorage.setItem('myMovie', JSON.stringify(MoviesFiltered));
            } else {
                setSearch([]);
            }
        }

        useEffect(() => {
            handleSearchButton(localStorage.getItem('allMovieSearch') ? localStorage.getItem('allMovieSearch') : '', localStorage.getItem('shortMovie') ? JSON.parse(localStorage.getItem('shortMovie')) : false);
        }, [movies]);

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
                    movies={isSearch}
                    moviesFound={moviesFound}
                    isPreloader={isPreloader}
                    savedMovies={savedMovies}
                    onDeleteMovie={onDeleteMovie} 
                    onMovieSave={onMovieSave}
                    moviesLocation={moviesLocation}
                    isSave={isSave}
                /> 
            </div>
            <Footer/>
        </>
    );
}

export default Movies;