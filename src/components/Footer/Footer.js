import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <div className="footer__container">
                <p className="footer__copyright">&copy; 2022</p>
                <ul className="footer__list">
                    <li className="footer__item">
                        <a className="footer__link app__text-opacity"
                            target="_blank"
                            href="https://practicum.yandex.ru/web/"
                            rel="noreferrer noopener">Яндекс.Практикум
                        </a>
                    </li>
                    <li className="footer__item">
                        <a className="footer__link app__text-opacity"
                            target="_blank"
                            href="https://github.com/AlinaOnly"
                            rel="noreferrer noopener">Github
                        </a>
                    </li>
                    <li className="footer__item">
                        <a className="footer__link app__text-opacity"
                            target="_blank"
                            href="https://www.facebook.com/people/Alina-Krivonos/100001174956859/"
                            rel="noreferrer noopener">Facebook
                        </a>
                    </li>
                </ul>
            </div> 
        </footer>
    );
}

export default Footer;