import React, { useState, useEffect }  from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import { LAPTOP, PLANE_TABLE, MOBILE } from '../../utils/consts';
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
    moviesLocation
    }) {

    const [isSize, setSize] = useState(window.innerWidth);
    const [moviesRow, setMoviesRow] = useState({ total: 12, plus: 3 });
    const [moreButton, setMoreButton] = useState(false);

    function handleSizeWindow() {
        if (LAPTOP <= isSize) {
            setMoviesRow({ total: 12, plus: 3 });
        }
        else if (PLANE_TABLE <= isSize) {
            setMoviesRow({ total: 8, plus: 2 });
        }
        else if (MOBILE <= isSize) {
            setMoviesRow({ total: 5, plus: 2 });
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
