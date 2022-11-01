import { React, useState } from 'react';
import { Routes, Route } from  'react-router-dom';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Profile from '../Profile/Profile';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Main from '../Main/Main';
import NotFound from '../NotFound/NotFound';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import './App.css';

function App() {
    const [isBurger, setIsBurger] = useState(false);

    function handleBurgerMenu() {
        setIsBurger(!isBurger);
    }

    return (
        <>
        <BurgerMenu isBurger={isBurger} handleBurgerMenu={handleBurgerMenu} />
            <Routes>
                <Route 
                    path='/signin' 
                    element={
                        <Login />} />
                <Route 
                    path='/signup' 
                    element={
                        <Register />} />
                <Route 
                    path='/profile' 
                    element={
                        <Profile 
                            handleBurgerMenu={handleBurgerMenu}
                        />} />
                <Route 
                    path='/movies' 
                    element={
                        <Movies 
                            handleBurgerMenu={handleBurgerMenu}   
                        />} />
                <Route 
                    path='/saved-movies' 
                    element={
                        <SavedMovies 
                            handleBurgerMenu={handleBurgerMenu}
                        />} />
                <Route 
                    path='/' 
                    element={
                        <Main />} />
                <Route 
                    path='*' 
                    element={
                        <NotFound />} />
            </Routes>
        </>
    );
}

export default App;