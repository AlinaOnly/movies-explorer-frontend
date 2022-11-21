import React, { useState, useEffect }  from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import { LAPTOP,
        PLANE_TABLE,
        MOBILE,
        SHOW_MOVIE_LAPTOP,
        SHOW_MOVIE_PLANE_TABLE,
        SHOW_MOVIE_MOBILE } from '../../utils/consts';
import { NOTMOVIE_ERR } from '../../utils/errors';
import More from '../More/More';
import './MoviesCardList.css';

function MovieCardList({ 
    movies,
    savedMovies,
    onDeleteMovie,
    onMovieSave,
    moviesFound,
    moviesItems,
    savedMoviesLocation,
    moviesLocation,
    isSave
    }) {

    const [isSize, setSize] = useState(window.innerWidth);
    const [moviesRow, setMoviesRow] = useState(SHOW_MOVIE_LAPTOP);
    const [moreButton, setMoreButton] = useState(false);

    function handleSizeWindow() {
        if (LAPTOP <= isSize) {
            setMoviesRow(SHOW_MOVIE_LAPTOP);
        }
        else if (PLANE_TABLE <= isSize) {
            setMoviesRow(SHOW_MOVIE_PLANE_TABLE);
        }
        else if (MOBILE <= isSize) {
            setMoviesRow(SHOW_MOVIE_MOBILE);
        }
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        handleMoreButton();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        handleSizeWindow();
    }, [isSize]);

    function handleResize()  {
        setSize(window.innerWidth);
    }

    useEffect(() => {
        if (movies.length < moviesRow.total) {
            setMoreButton(false);
        } else if (movies.length >= moviesRow.total) {
            setMoreButton(true);
        }
    }, [movies.length, moviesRow.total]);

    function handleMoreButton() {
        setMoviesRow({
            ...moviesRow, total: moviesRow.total + moviesRow.plus
        });
    }

    return (
        <section className="movies__card-lists">
            <ul className="movies__card-list">
            { moviesFound === false ?
                (
                    <p className="movies__card-list_err">{NOTMOVIE_ERR}</p>
                )
                : (movies.slice(0, moviesRow.total)
                    .map((movie) => (
                        <MoviesCard
                            movie={movie}
                            key={movie.id || movie._id}
                            savedMovies={savedMovies}
                            onDeleteMovie={onDeleteMovie}
                            onMovieSave={onMovieSave}
                            moviesItems={moviesItems}
                            moviesLocation={moviesLocation}
                            savedMoviesLocation={savedMoviesLocation}
                            isSave={isSave}
                        />
                )))
            }
            </ul>
                <More 
                    moreButton={moreButton}
                    handleMoreButton={handleMoreButton}
                    savedMoviesLocation={savedMoviesLocation}
                />  
        </section>
    );
}

export default MovieCardList;
