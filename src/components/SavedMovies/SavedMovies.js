import { React, useState } from 'react';
import Menu from '../Menu/Menu';
import SearchForm from '../SearchForm/SearchForm';
import MovieCardList from '../MoviesCardList/MoviesCardList';
import poster1 from '../../images/poster/1.jpg';
import poster2 from '../../images/poster/2.jpg';
import poster3 from '../../images/poster/3.jpg';
import Footer from '../Footer/Footer';
import './SavedMovies.css';

function SavedMovies({ handleBurgerMenu }) {
    const [isSavedMovies, setIsSavedMovies] = useState(
        [{
            id: '1',
            name: 'Интерстеллар 1',
            duration: '1млн 47тыс',
            poster: poster1,
            isSavedMovies: true,
        },
        {
            id: '2',
            name: 'Интерстеллар 2',
            duration: '1млн 47тыс',
            poster: poster2,
            isSavedMovies: true,
        },
        {
            id: '3',
            name: 'Интерстеллар 3',
            duration: '1млн 47тыс',
            poster: poster3,
            isSavedMovies: true,
        },
    ])

    return (
        <>
            <Menu handleBurgerMenu={handleBurgerMenu} />
            <div className="saved-movies">
                <SearchForm />
                <MovieCardList movies={isSavedMovies} />
            </div>
            <Footer />
        </>
    );
}

export default SavedMovies;
