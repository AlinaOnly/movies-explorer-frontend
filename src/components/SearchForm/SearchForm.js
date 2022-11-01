import React from 'react';
import sherlock from '../../images/sherlock.svg';
import './SearchForm.css';

function SearchForm() {
    return (
        <section className="search">
            <div className="search__container">
                <form className="search__form">
                    <img className="search__icon" src={sherlock} alt="Значок лупы" />
                    <input
                        className="search__input"
                        type="text"
                        placeholder="Фильм"
                        required
                    />
                    <button 
                        className="search__input-button app__button-opacity" 
                        type="submit"
                        aria-label="Найти">
                    </button>
                </form>
                <div className="search__container-checkbox">
                        <input 
                            className="search__checkbox app__button-opacity" 
                            value="no" 
                            type="checkbox"
                            name="checkbox"
                            id="checkbox"
                        />
                        <label className="search__label" htmlFor="checkbox">
                        Короткометражки
                    </label>
                </div>
            </div>    
        </section>
    );
}

export default SearchForm;