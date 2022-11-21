import React, { useState, useEffect } from 'react';
import sherlock from '../../images/sherlock.svg';
import './SearchForm.css';

function SearchForm({ handleSearchButton, moviesLocation }) {
    const [shortMovie, setShortMovie] = useState(
        localStorage.getItem('shortMovie') ? JSON.parse(localStorage.getItem('shortMovie')) : false);
    const [searchReq, setSearchReq] = useState(moviesLocation ? localStorage.getItem('allMovieSearch') : '');
    const [saveShortMovie, setSaveShortMovie] = useState(JSON.parse(localStorage.getItem('saveShortMovie')));
    const [isEmptyInput, setIsEmptyInput] = useState('');

    useEffect(() => {
        setShortMovie(JSON.parse(localStorage.getItem("shortMovie")));
        setSaveShortMovie(false);
    }, []);

    function handleSubmit(event)  {
        event.preventDefault();
        if(!searchReq) {
            setIsEmptyInput('Введите букву');
        } else {
            if (moviesLocation) {
                if (localStorage.getItem('allMovieSearch') !== searchReq){
                    localStorage.setItem('allMovieSearch', searchReq);
                    setSearchReq(searchReq);
                }
                handleSearchButton(searchReq, shortMovie);
                localStorage.setItem('shortMovie', shortMovie);
            } else {
                if (localStorage.getItem('newMoviesSearch') !== searchReq){
                    localStorage.setItem('newMoviesSearch', searchReq);
                    setSearchReq('');
                }
            handleSearchButton(searchReq, saveShortMovie);
            localStorage.setItem('saveShortMovie', false);
            setSaveShortMovie(false);
            localStorage.setItem('newMoviesSearch', '');
            }
        }
    }

    function toggleCheck () {
        if (shortMovie) {
            setShortMovie(false);
            handleSearchButton(searchReq, false);
            localStorage.setItem('shortMovie', shortMovie);
        } else {
            setShortMovie(true);
            handleSearchButton(searchReq, true);
            localStorage.setItem('shortMovie', shortMovie);
        }
    }

    function toggleSavedCheck () {
        if (saveShortMovie) {
            setSaveShortMovie(false);
            handleSearchButton(searchReq, false);
            localStorage.setItem('saveShortMovie', saveShortMovie);
        } else {
            setSaveShortMovie(true);
            handleSearchButton(searchReq, true);
            localStorage.setItem('saveShortMovie', saveShortMovie);
        }
    }

    function handleSearch (event)  {
        setSearchReq(event.target.value);
        setIsEmptyInput('');
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
                        placeholder={isEmptyInput ? isEmptyInput: "Фильм" }
                        value={searchReq}
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