import React from 'react';
import { Link } from 'react-router-dom';
import './BurgerMenu.css';

function BurgerMenu({ isBurger, handleBurgerMenu }) {
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
                            className="burger-menu__link app__text-opacity">
                            Главная
                        </Link>
                    </li>
                    <li className="burger-menu__list">
                        <Link 
                            onClick={handleBurgerMenu}
                            to="/movies" 
                            className="burger-menu__link burger-menu__link_active app__text-opacity">
                            Фильмы
                        </Link>
                    </li>
                    <li className="burger-menu__list">
                        <Link 
                            onClick={handleBurgerMenu}
                            to="/saved-movies" 
                            className="burger-menu__link app__text-opacity">
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
