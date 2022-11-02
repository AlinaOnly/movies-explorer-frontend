import React from 'react';
import { Link } from "react-router-dom";
import Menu from '../Menu/Menu';
import './Profile.css';

function Profile({handleBurgerMenu}) {
    return (
        <>
            <Menu handleBurgerMenu={handleBurgerMenu} />
            <div className="profile">
                <h2 className="profile__text">Привет, Алина!</h2>
                <form className="profile__form">
                <div className="profile__container">
                    <label className="profile__label" htmlFor="name">Имя</label>
                        <input
                            id="name"
                            className="profile__input"
                            name="name"
                            type="name"
                            placeholder="Имя"
                            minLength="2"
                            maxLength="40"
                            required
                        />
                </div>    
                <div className="profile__container">
                    <label className="profile__label" htmlFor="email">E-mail</label>
                        <input
                            id="email"
                            className="profile__input"
                            name="email"
                            type="email"
                            placeholder="Email"
                            minLength="6"
                            maxLength="40"
                            required
                        />
                </div>    
                    <button 
                        className="profile__submit-button app__text-opacity" 
                        type="submit"
                        aria-label="Редактировать">
                        Редактировать
                    </button>
                </form>
                <Link to="/signin" className="profile__signout app__text-opacity">Выйти из аккаунта</Link>
            </div>
        </>
    );
}

export default Profile;