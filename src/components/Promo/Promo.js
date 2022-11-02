import React from 'react';
import './Promo.css';

function Promo() {
    return (
        <section className="promo">
            <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
            <div className="promo__container">
                <a className="promo__text-color app__button-opacity" href="#about">О проекте</a>
                <a className="promo__text-color app__button-opacity" href="#techs">Технологии</a>
                <a className="promo__text-color app__button-opacity" href="#about-me">Студент</a>
            </div>
        </section>
    );
}

export default Promo;