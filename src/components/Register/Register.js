import React from 'react';
import { Link } from 'react-router-dom';
import  useFormValidation from '../../utils/FormValidation';
import { REGEX_MAIL } from '../../utils/consts';
import { EMAIL, PASS, NAME } from '../../utils/errors';
import logo from '../../images/logo.svg';
import './Register.css';

function Register({ onRegister, errorMessage }) {
    const { values, isValid, errors, handleChange } = useFormValidation();
    
    function handleSubmit(event) {
        event.preventDefault();
        onRegister(
            values.name,
            values.email,
            values.password);
    }

    return (
        <div className="register">
            <Link to="/" >
                <img className="register__logo app__button-opacity" src={logo} alt="Логотип сайта"/>
            </Link>
            <h2 className="register__text">Добро пожаловать!</h2>
            <form className="register__form" onSubmit={handleSubmit} noValidate >
                <label className="register__label" htmlFor="name">Имя
                    <input
                        value={values.name || ''}
                        onChange={handleChange}
                        id="name"
                        className="register__input"
                        name="name"
                        type="text"
                        minLength="2"
                        maxLength="30"
                        required
                    />
                    <span 
                        className={`${errors.name ? "register__error" : "register__error_hidden"}`}>
                            {NAME}
                    </span>
                </label>
                <label className="register__label" htmlFor="email">E-mail
                    <input
                        value={values.email || ''}
                        onChange={handleChange}
                        id="email"
                        className="register__input"
                        name="email"
                        type="email"
                        minLength="6"
                        maxLength="30"
                        required
                        pattern={REGEX_MAIL}
                    />
                    <span 
                        className={`${errors.email ? "register__error" : "register__error_hidden"}`}>
                            {EMAIL}
                    </span>
                </label>
                <label className="register__label" htmlFor="password">Пароль
                    <input
                        value={values.password || ''}
                        onChange={handleChange}
                        id="password"
                        className="register__input"
                        name="password"
                        type="password"
                        minLength="6"
                        maxLength="40"
                        required 
                    />
                    <span 
                        className={`${errors.password ? "register__error" : "register__error_hidden"}`}>
                            {PASS}
                    </span>
                </label> 
                <button 
                    className=
                    {`register__submit-button ${!isValid ? "register__submit-button_disable" : "app__button-opacity"}`}
                    disabled={!isValid}
                    type="submit"
                    aria-label="Зарегистрироваться">
                        Зарегистрироваться
                </button>
                
            </form>
            <div className="register__signup-container">
                <Link to="/signin" className="register__signup app__text-opacity">Уже зарегистрированы? 
                    <p className="register__signup_green">Войти</p>
                </Link>
                <p className="register__error-text">{errorMessage}</p>
            </div>
        </div>
    );
}

export default Register;