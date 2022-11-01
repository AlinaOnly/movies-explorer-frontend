import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
    const location = useLocation();
    const isSavedMovies = location.pathname === '/saved-movies';
    const isMovies = location.pathname === '/movies';

    return (
        <nav className="navigation">
            <ul className="navigation__lists">
                <li className="navigation__list">
                    <Link
                        to="/movies"
                        className={
                        (`navigation__link app__text-opacity ${isMovies ? "navigation__link_active " : ""}`)
                        }>
                        Фильмы
                    </Link>
                </li>
                <li className="navigation__list">
                    <Link
                        to="/saved-movies"
                        className={
                        (`navigation__link app__text-opacity ${isSavedMovies ? "navigation__link_active " : ""}`)
                        }>
                        Сохраненные фильмы
                    </Link>
                </li>
                <Link to="/profile">
                    <button
                        className="navigation__button app__text-opacity"
                        aria-label="Аккаунт">
                        Аккаунт
                    </button>
                </Link>
            </ul> 
        </nav>
    );
}

export default Navigation;