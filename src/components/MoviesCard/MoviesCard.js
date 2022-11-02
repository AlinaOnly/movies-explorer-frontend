import {React, useState} from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCard.css';

function MoviesCard({ movie }) {
    const location = useLocation();
    const isSavedMovies = location.pathname === '/saved-movies';
    const [isSaveButton, setSaveButton] = useState(false);

    function toggleChangeMoviesButton() {
        setSaveButton(!isSaveButton);
    }

    const movieSaveButton = (
        `${isSaveButton ? "movies__save-button_active"
        : isSavedMovies ? "movies__delete-button" : "movies__save-button"}`
    );

    return (
        <li className="movies__card">
            <div className="movies__description">
                <h3 className="movies__title">{movie.name}</h3>
                <p className="movies__duration">{movie.duration}</p>
            </div>
            { isSavedMovies
                ? (<button
                    className={movieSaveButton}
                    type="button"
                    aria-label="Удалить"
                >
                </button>)
                : (<button
                    onClick={toggleChangeMoviesButton}
                    className={movieSaveButton}
                    type="button"
                    aria-label="Сохранить"
                >
                </button>)
            } 
            <img className="movies__poster" src={movie.poster} alt={movie.name} />
        </li>
    );
}

export default MoviesCard;