import React from 'react';
import './AboutProject.css';

function AboutProject() {
    return (
        <section className="about-project" id="about">
            <h3 className="about-project__title">О проекте</h3>
            <div className="about-project__container">
                <div className="about-project__column">
                    <h4 className="about-project__caption">Дипломный проект включал 5 этапов</h4>
                    <p className="about-project__text">Составление плана, работу над бэкендом, 
                        вёрстку, добавление функциональности и финальные доработки.
                    </p>
                </div>
                <div className="about-project__column">
                    <h4 className="about-project__caption">На выполнение диплома ушло 5 недель</h4>
                    <p className="about-project__text">У каждого этапа был мягкий и жёсткий дедлайн, 
                        которые нужно было соблюдать, чтобы успешно защититься.
                    </p>
                </div>
            </div> 
            <div className="about-project__container-time">   
                <div className="about-project__table">
                    <p className="about-project__line">1 неделя</p>
                    <p className="about-project__text-underline">Back-end</p>
                </div>
                <div className="about-project__table">
                    <p className="about-project__line about-project__line_gray">4 недели</p>
                    <p className="about-project__text-underline">Front-end</p>
                </div>
            </div>    
        </section>
    );
}  

export default AboutProject;
