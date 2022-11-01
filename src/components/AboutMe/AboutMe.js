import React from 'react';
import me from '../../images/me.jpg';
import './AboutMe.css';

function AboutMe() {
    return (
        <section className="about-me" id="about-me">
            <p className="about-me__text">Студент</p>
            <div className="about-me__container">
                <div className="about-me__container-box">
                    <h2 className="about-me__name">Алина</h2>
                    <p className="about-me__studet">Фронтенд-разработчик, 32 года</p>
                    <p className="about-me__description">
                        Я родилась в небольшом городе Краснодон, Луганской области.
                        В 2005 году переехала жить в Ростов-на-Дону.
                        Поступила в колледж при ИУБиП, по специальности Финансы и Кредит,
                        и закончила этот же институт, по специальности ВЭД.
                        По своей специальности я не работала, работала неофициально,
                        затем я открыла и вела свой небольшой бизнес по оперативной полиграфии.
                        К сожалению, во время первого ковидного локдауна,
                        мне пришлось закрыть свое ИП, и я начала искать чем заняться.
                        Как раз еще тогда мне впервые попался бесплатный курс по веб-разработке
                        от Яндекс.Практикума. Я решила купить и пройти полный курс. И вот, я тут,
                        пишу уже второй этап своей Дипломной работы! Я замужем, детей нет,
                        но есть собаня и котик. Люблю играть на PS, правда времени уже на это не хватает.
                        Люблю путешествовать, ходить, заниматься спортом. И еще занимаюсь английским
                        с репетитором, так как считаю, что английский - неотъемлемая часть любого программирования.
                    </p>
                </div>
                    <img src={me} alt="Фотография женщины" className="about-me__photo" />
            </div>
            <div className="about-me__list">
                <a href="https://www.facebook.com/people/Alina-Krivonos/100001174956859/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="about-me__link app__text-opacity">Facebook
                </a>
                <a href="https://github.com/AlinaOnly/"
                    target="_blank"
                    rel="noreferrer noopener" 
                    className="about-me__link app__text-opacity">Github</a>
            </div>
        </section>
    );
} 

export default AboutMe;