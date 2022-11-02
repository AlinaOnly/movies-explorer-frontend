import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import './Login.css';

function Login() {
    return (
        <div className="login">
            <Link to="/" >
                <img className="login__logo app__button-opacity" src={logo} alt="Логотип сайта"/>
            </Link>
            <h2 className="login__text">Рады видеть!</h2>
            <form className="login__form">
                <label className="login__label" htmlFor="email">E-mail</label>
                    <input
                        id="email"
                        className="login__input"
                        name="email"
                        type="email"
                        minLength="6"
                        maxLength="40"
                        required 
                    />
                <label className="login__label" htmlFor="password">Пароль</label>
                    <input
                        id="password"
                        className="login__input"
                        name="password"
                        type="password"
                        minLength="6"
                        maxLength="40"
                        required
                    />
                <button 
                    className="login__submit-button app__button-opacity" 
                    type="submit"
                    aria-label="Войти">
                    Войти
                </button>
            </form>
            <div className="login__signin-container">
                <Link to="/signup" className="login__signin app__text-opacity">Еще не зарегистрированы? 
                    <p className="login__signin_green">Регистрация</p></Link>
            </div>
        </div>
    );
}

export default Login;
