import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import logo from '../../images/logo.svg';
import './Menu.css';

function Menu({isBurger, handleBurgerMenu}) {
    return (
        <section className="menu">
            <Link to="/">
                <img src={logo} alt="Логотип сайта Movie" className="header__logo app__button-opacity"/>
            </Link>
            <div className="header__nav">
                <Navigation />
            </div>
            <button 
                onClick={handleBurgerMenu}
                className="header__button-burger app__button-opacity"
                aria-label="Бургер">
            </button>
        </section>
    );
}

export default Menu;