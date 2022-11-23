import React, { useState, useEffect } from 'react';
import { durationTime } from '../../utils/duration';
import { apiUrl } from '../../utils/consts';
import './MoviesCard.css';

function MoviesCard({
    movie,
    savedMovies,
    onMovieSave,
    onDeleteMovie,
    savedMoviesLocation,
    moviesLocation,
}) {

    const [deleteButtonHidden, setButtonHidden] = useState(true);
    const isDelete = savedMovies.filter((i) => i.movieId === movie.id);
    const [isSaveMovies, setSaveMovies] = useState(false);
    const checkIfSaved = savedMovies.some((i) => i.movieId === movie.id);

    const movieSaveClass = (`app__button-opacity  ${isSaveMovies ? "movie__save-button_active" : "movie__save-button"}`);

    useEffect(() => {
        if (moviesLocation) {
            setSaveMovies(checkIfSaved);
        } 
    }, [savedMovies, movie]);

    function handleSave() {
        onMovieSave(movie);
        setSaveMovies(true);
    }

    function handleDelete() {
        onDeleteMovie(movie._id);
        setSaveMovies(false);
    }

    function showDeleteButton() {
        setButtonHidden(false);
    }

    function hideDeleteButton() {
        setButtonHidden(true);
    }

    return (
        <li className="movie"
            onMouseOver={showDeleteButton}
            onMouseOut={hideDeleteButton}
        >
            <div className="movie__description">
                <h3 className="movie__title">{movie.nameRU}</h3>
                <p className="movie__duration">{durationTime(movie.duration)}</p>
            </div>
            { savedMoviesLocation
                ? (<button
                    hidden={deleteButtonHidden}
                    className={isDelete ? "app__button-opacity movie__delete-button" : ""}
                    type="button"
                    aria-label="Удалить"
                    onClick={handleDelete}
                    >
                </button>)
                : (
                    <button
                    className={movieSaveClass}
                    type="button"
                    aria-label="Сохранить"
                    onClick={handleSave}
                    >
                </button>)
            } 
            <a 
                className="app__button-opacity"
                target="_blank" 
                rel="noreferrer noopener" 
                href={movie.trailerLink}>
                    <img 
                        className="movie__image" 
                        src={movie.image.url ?`${apiUrl}${movie.image.url}` : movie.image} 
                        alt={movie.nameRU} 
                    />
            </a>
        </li>
    );
}

export default MoviesCard;