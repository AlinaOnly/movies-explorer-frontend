import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import './Register.css';

function Register() {
    return (
        <div className="register">
            <Link to="/" >
                <img className="register__logo app__button-opacity" src={logo} alt="Логотип сайта"/>
            </Link>
            <h2 className="register__text">Добро пожаловать!</h2>
            <form className="register__form">
                <label className="register__label" htmlFor="name">Имя</label>
                    <input
                        id="name"
                        className="register__input"
                        name="name"
                        type="name"
                        minLength="2"
                        maxLength="40"
                        required
                    />
                <label className="register__label" htmlFor="email">E-mail</label>
                    <input
                        id="email"
                        className="register__input"
                        name="email"
                        type="email"
                        minLength="6"
                        maxLength="40"
                        required
                    />
                <label className="register__label" htmlFor="password">Пароль</label>
                    <input
                        id="password"
                        className="register__input"
                        name="password"
                        type="password"
                        minLength="6"
                        maxLength="40"
                        required 
                    />
                <button 
                    className="register__submit-button app__button-opacity" 
                    type="submit"
                    aria-label="Зарегистрироваться">
                    Зарегистрироваться
                </button>
            </form>
            <div className="register__signup-container">
                <Link to="/signin" className="register__signup app__text-opacity">Уже зарегистрированы? 
                    <p className="register__signup_green">Войти</p>
                </Link>
            </div>
        </div>
    );
}

export default Register;