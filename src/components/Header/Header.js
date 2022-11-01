import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import './Header.css';

function Headers() {
    return (
        <header className="header">
            <Link to="/">
                <img src={logo} alt="Логотип сайта Movie" className="header__logo app__button-opacity"/>
            </Link>
            <div className="header__registration-info">
                <Link className="header__signup app__text-opacity"
                    to={"/signup"} >Регистрация
                </Link>
                <Link className="header__signin app__button-opacity" 
                    to={"/signin"} >Вoйти
                </Link>
            </div>
        </header>
    );
}

export default Headers;