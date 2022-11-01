import React from 'react';
import './More.css';

function More() {
    return (
        <div className="movies__loading">
                <button 
                    className="movies__button app__button-opacity" 
                    type="button"
                    aria-label="Ещё">
                    Ещё
                </button> 
        </div>
    );
}

export default More;