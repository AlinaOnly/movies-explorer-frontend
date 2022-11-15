import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './BurgerMenu.css';

function BurgerMenu({ isBurger, handleBurgerMenu }) {
    const location = useLocation();
    const moviesLocation = location.pathname === '/movies';
    const savedMoviesLocation = location.pathname === '/saved-movies';
    const mainLocation = location.pathname === '/';

    return (
        <section className={isBurger ? `burger-menu burger-menu_open` : 'burger-menu'}>
            <div className="burger-menu__container">
                <button
                    onClick={handleBurgerMenu}
                    aria-label="Закрыть"
                    type="button"
                    className="burger-menu__close app__button-opacity">
                </button>
                <ul className="burger-menu__lists">
                    <li className="burger-menu__list">
                        <Link 
                            onClick={handleBurgerMenu}
                            to="/" 
                            className={(`burger-menu__link app__text-opacity ${mainLocation ? "burger-menu__link_active" : ""}`)}>
                            Главная
                        </Link>
                    </li>
                    <li className="burger-menu__list">
                        <Link 
                            onClick={handleBurgerMenu}
                            to="/movies" 
                            className={(`burger-menu__link app__text-opacity ${moviesLocation ? "burger-menu__link_active" : ""}`)}>
                            Фильмы
                        </Link>
                    </li>
                    <li className="burger-menu__list">
                        <Link 
                            onClick={handleBurgerMenu}
                            to="/saved-movies" 
                            className={(`burger-menu__link app__text-opacity ${savedMoviesLocation ? "burger-menu__link_active" : ""}`)}>
                            Сохраненные фильмы
                        </Link>
                    </li>
                </ul>
                <Link to="/profile" className="burger-menu__profile">
                    <button
                        onClick={handleBurgerMenu}
                        aria-label="Аккаунт"
                        className="burger-menu__profile-button app__button-opacity">
                        Аккаунт
                    </button>
                </Link>
            </div>
        </section>
    );
}

export default BurgerMenu;
