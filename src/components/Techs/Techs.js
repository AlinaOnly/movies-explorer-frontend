import React from 'react';
import './Techs.css';

function Techs() {
    return (
        <section className="techs" id="techs">
            <p className="techs__text">Технологии</p>
            <div className="techs__container">
                <h2 className="techs__title">7 технологий</h2>
                <p className="techs__description">На курсе веб-разработки мы освоили технологии, 
                    которые применили в дипломном проекте.</p> 
                <div className="techs__list">
                    <p className="techs__list-version app__button-opacity">HTML</p>
                    <p className="techs__list-version app__button-opacity">CSS</p>
                    <p className="techs__list-version app__button-opacity">JS</p>
                    <p className="techs__list-version app__button-opacity">React</p>
                    <p className="techs__list-version app__button-opacity">Git</p>
                    <p className="techs__list-version app__button-opacity">Express.js</p>
                    <p className="techs__list-version app__button-opacity">mongoDB</p>
                </div>
            </div>
        </section>
    );
}

export default Techs;