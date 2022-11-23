import React from 'react';
import './More.css';

function More({ handleMoreButton, moreButton, savedMoviesLocation }) {
    return (
            <div className="movies__loading">
                    <button 
                        hidden={savedMoviesLocation || !moreButton}
                        onClick={handleMoreButton}
                        className="movies__button app__button-opacity"
                        type="button"
                        aria-label="Ещё">
                        Ещё
                    </button> 
            </div>
    );
}

export default More;