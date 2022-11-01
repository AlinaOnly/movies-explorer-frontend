import { React, useState } from 'react';
import Menu from '../Menu/Menu';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import poster1 from '../../images/poster/1.jpg';
import poster2 from '../../images/poster/2.jpg';
import poster3 from '../../images/poster/3.jpg';
import poster4 from '../../images/poster/4.jpg';
import poster5 from '../../images/poster/5.jpg';
import poster6 from '../../images/poster/6.jpg';
import poster7 from '../../images/poster/7.jpg';
import poster8 from '../../images/poster/8.jpg';
import poster9 from '../../images/poster/9.jpg';
import poster10 from '../../images/poster/10.jpg';
import poster11 from '../../images/poster/11.jpg';
import poster12 from '../../images/poster/12.jpg';
import More from '../More/More';
import Footer from '../Footer/Footer';
import './Movies.css';

function Movies({handleBurgerMenu}) {
    const [isMovies, setIsMovies] = useState(
        [{
            id: '1',
            name: 'Интерстеллар 1',
            duration: '1млн 47тыс',
            poster: poster1,
            isMovies: true,
        },
        {
            id: '2',
            name: 'Интерстеллар 2',
            duration: '1млн 47тыс',
            poster: poster2,
            isMovies: true,
        },
        {
            id: '3',
            name: 'Интерстеллар 3',
            duration: '1млн 47тыс',
            poster: poster3,
            isMovies: true,
        },
        {
            id: '4',
            name: 'Интерстеллар 4',
            duration: '1млн 47тыс',
            poster: poster4,
            isMovies: true,
        },
        {
            id: '5',
            name: 'Интерстеллар 5',
            duration: '1млн 47тыс',
            poster: poster5,
            isMovies: true,
        },
        {
            id: '6',
            name: 'Интерстеллар 6',
            duration: '1млн 47тыс',
            poster: poster6,
            isMovies: true,
        },
        {
            id: '7',
            name: 'Интерстеллар 7',
            duration: '1млн 47тыс',
            poster: poster7,
            isMovies: true,
        },
        {
            id: '8',
            name: 'Интерстеллар 8',
            duration: '1млн 47тыс',
            poster: poster8,
            isMovies: true,
        },
        {
            id: '9',
            name: 'Интерстеллар 9',
            duration: '1млн 47тыс',
            poster: poster9,
            isMovies: true,
        },
        {
            id: '10',
            name: 'Интерстеллар 10',
            duration: '1млн 47тыс',
            poster: poster10,
            isMovies: true,
        },
        {
            id: '11',
            name: 'Интерстеллар 11',
            duration: '1млн 47тыс',
            poster: poster11,
            isMovies: true,
        },
        {
            id: '12',
            name: 'Интерстеллар 12',
            duration: '1млн 47тыс',
            poster: poster12,
            isMovies: true,
        },
        ]);

    return (
        <>
            <Menu 
                handleBurgerMenu={handleBurgerMenu}/>
            <SearchForm />
            <MoviesCardList movies={isMovies} /> 
            <More />
            <Footer/>
        </>
    );
}

export default Movies;