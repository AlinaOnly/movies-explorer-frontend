import React from 'react';
import './Portfolio.css';

function Portfolio() {
    return (
        <section className="portfolio">
            <h3 className="portfolio__title">Портфолио</h3>
            <ul className="portfolio__list">
                <li className="portfolio__links">
                    <a className="portfolio__link app__text-opacity"
                        target="_blank"
                        href="https://alinaonly.github.io/how-to-learn/"
                        rel="noreferrer noopener">Статичный сайт
                    <div className="portfolio__link-arrow"></div>    
                    </a>
                </li>
                <li className="portfolio__links">
                    <a className="portfolio__link app__text-opacity"
                        target="_blank"
                        href="https://alinaonly.github.io/russian-travel/index.html"
                        rel="noreferrer noopener">Адаптивный сайт
                    <div className="portfolio__link-arrow"></div>
                    </a>
                </li>
                <li className="portfolio__links">
                    <a className="portfolio__link app__text-opacity"
                        target="_blank"
                        href="https://trenik.nomoredomains.sbs/signin"
                        rel="noreferrer noopener">Одностраничное приложение
                    <div className="portfolio__link-arrow"></div>
                    </a>
                </li>
            </ul>  
        </section>
    );
} 

export default Portfolio;