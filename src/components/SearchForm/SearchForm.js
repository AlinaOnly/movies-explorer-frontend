import React, { useState } from 'react';
import sherlock from '../../images/sherlock.svg';
import './SearchForm.css';

function SearchForm({ handleSearchButton, moviesLocation }) {
    const [shortMovie, setShortMovie] = useState(
        (localStorage.getItem('shortMovie')) ? (JSON.parse(localStorage.getItem('shortMovie'))) : false);
    const [searchReq, setSearchReq] = useState('');
    const [saveShortMovie, setSaveShortMovie] = useState(false);

    function handleSubmit(event)  {
        event.preventDefault();
            if (moviesLocation) {
                handleSearchButton(searchReq, shortMovie);
            } else {
                handleSearchButton(searchReq, saveShortMovie)
            }
    }

    function toggleCheck () {
        if (shortMovie) {
            setShortMovie(false);
            handleSearchButton(searchReq, false);
        } else {
            setShortMovie(true);
            handleSearchButton(searchReq, true);
        }
    }

    function toggleSavedCheck () {
        if (saveShortMovie) {
            setSaveShortMovie(false);
            handleSearchButton(searchReq, false);
        } else {
            setSaveShortMovie(true);
            handleSearchButton(searchReq, true);
        }
    }

    function handleSearch (event)  {
        setSearchReq(event.target.value);
    }

    return (
        <section className="search">
            <div className="search__container">
                <form className="search__form" onSubmit={handleSubmit} noValidate >
                    <img className="search__icon" src={sherlock} alt="Значок лупы" />
                    <input
                        onChange={handleSearch}
                        className="search__input"
                        type="text"
                        name="search"
                        placeholder="Фильм"
                        value={searchReq || ''}
                        required
                    />
                    <button 
                        onSubmit={handleSubmit}
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
                            checked={moviesLocation ? shortMovie : saveShortMovie}
                            onChange={moviesLocation ? toggleCheck : toggleSavedCheck}
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