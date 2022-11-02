import React  from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MovieCardList({movies}) {
    return (
        <section className="movies__card-lists">
            <ul className="movies__card-list">
            {
                movies.map((movie) => (
                    <MoviesCard
                        key={movie.id}
                        name={movie.name}
                        duration={movie.duration}
                        poster={movie.poster}
                        movie={movie}
                        isMovies={movie.isMovies}
                        isSavedMovies={movie.isSavedMovies}
                    />
                ))
            }
            </ul>
        </section>
    );
}

export default MovieCardList;
