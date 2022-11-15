import React, {useState, useEffect, useCallback } from 'react';
import { Routes, Route, useNavigate, useLocation } from  'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Profile from '../Profile/Profile';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Main from '../Main/Main';
import NotFound from '../NotFound/NotFound';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import MainApi from '../../utils/MainApi';
import * as apiAuth from '../../utils/apiAuth';
import { MoviesApi } from '../../utils/MoviesApi';
import Preloader from '../Preloader/Preloader';
import { CONFLICT_REG, ERR_REGISTER, WRONG_PASS, WRONG_TOKEN } from '../../utils/errors';
import './App.css';

function App() {
    // location
    const navigate = useNavigate();
    const location = useLocation();
    const moviesLocation = location.pathname === '/movies';
    const savedMoviesLocation = location.pathname === '/saved-movies';

    // burgeropen state
    const [isBurger, setIsBurger] = useState(false);

    // errors state
    const [errorMessage, setErrorMessage] = useState('');

    // preloader state
    const [isPreloader, setPreloader] = useState(false);

    // users state
    const [currentUser, setCurrentUser] = useState({});
    const [logIn, setLogIn] = useState(false);

    // movies state
    const [moviesItems, setMoviesItems] = useState([]);
    const [savedMovies, setSavedMovies] = useState([]);

    // functionality -- registration
    function handleRegister(name, email, password) {
        setPreloader(true);
        apiAuth.registration({ name, email, password })
            .then((res) => {
               // if (res) {
                    handleLogin(email, password);
                    setCurrentUser(name, email);
                    handleTokenCheck();
                    navigate('/movies');
                    setPreloader(false);
               // }
            }).catch(err => {
                if (err === 'Ошибка: 409') {
                    setErrorMessage(CONFLICT_REG);
                } else {
                    setErrorMessage(ERR_REGISTER);
                }
                console.log(err);
                setPreloader(false);
        });
    }
    //end

    // functionality -- login
    function handleLogin(email, password) {
        setPreloader(true);
        apiAuth.login({ email, password })
            .then((res) =>{
                //if(res) {
                    localStorage.setItem('jwt', res.token);
                    handleTokenCheck();
                    setLogIn(true);
                    navigate('/movies');
                    setPreloader(false);
                //}
            }).catch(err => {
                if (err === 'Ошибка: 401') {
                    setErrorMessage(WRONG_PASS);
                } else {
                    setErrorMessage(WRONG_TOKEN);
                }
                console.log(err);
                setPreloader(false);
            });
    }
    //end

    // functionality -- clear token
    function handleLogout() {
        setPreloader(true);
        apiAuth.logout().then((res) => {
           // if(res) {
                localStorage.removeItem('jwt', res.token);
                localStorage.clear();
                setErrorMessage('');
                setLogIn(false);
                navigate('/');
                setPreloader(false);
            //}
        }).catch(err => {
            setPreloader(false);
            console.log(err);
        });
    }
    //end

    // checking token
    const handleTokenCheck = useCallback(() => {
        const jwt = localStorage.getItem('jwt');
            if(jwt) {
                apiAuth.token(jwt)
                .then(res => {
                    if(res) {
                        setCurrentUser(res);
                        setLogIn(true);
                        //navigate(location)
                    }
                }).catch(err =>
                    console.log(err));
            }
    }, [logIn]);
    //end

    // useEffect
    useEffect(() => {
        setErrorMessage('');
    }, [setErrorMessage]);

    useEffect(() => {
        handleTokenCheck();
    }, [handleTokenCheck]);

    useEffect(() => {
        if (logIn) {
            setPreloader(true);
            Promise.all([MainApi.getUserId(), MainApi.getMoviesById()])
                .then(([userData, moviesData]) => {
                    setCurrentUser(userData);
                    setSavedMovies(moviesData.filter((i) => i.owner === userData._id));
                    localStorage.setItem('newMovies', JSON.stringify(moviesData.filter((i) => i.owner === userData._id)));
                    getMoviesApi(moviesData);
                    localStorage.getItem('moviesData', JSON.stringify(moviesData));
                }).catch(err => {
                    setPreloader(false);
                    console.log(err);
                });
        }
    }, [logIn]);
    //end

    // functionality -- update user info
    function handleUpdateProfile(name, email) {
        setPreloader(true);
        MainApi.changeUserInformation({ name, email }).then((res) => {
            setCurrentUser(res);
            handleTokenCheck();
            setPreloader(false);
        }).catch(err => {
            if (err === 'Ошибка: 409') {
                setErrorMessage(CONFLICT_REG);
            } else {
                setErrorMessage(ERR_REGISTER);
            }
            console.log(err);
            setPreloader(false);
        });
    }
    //end

    // functionality -- burger
    function handleBurgerMenu() {
        setIsBurger(!isBurger);
    }
    //end

    // functionality -- getting movies from MoviesApi
    function getMoviesApi() {
        setPreloader(true);
        MoviesApi().then((moviesItems) => {
            setMoviesItems(moviesItems);
            localStorage.setItem('movies', JSON.stringify(moviesItems));
            setPreloader(false);
        }).catch(err => {
            setPreloader(false);
            console.log(err);
        });
    }
    //end

    // functionality -- add movie
    function handleMovieSave(movie) {
        setPreloader(true);
        MainApi.createMovie(movie).then((movie) => {
            setSavedMovies((savedMovies) => [ ...savedMovies, movie].reverse());
            localStorage.setItem('newMovies', JSON.stringify([ ...savedMovies, movie].reverse()));
            handleTokenCheck();
            setPreloader(false);
            console.log(movie)
        }).catch(err => {
            setPreloader(false);
            console.log(err);
        });
    }
    //end

    // functionality -- delete movie
    function handleDeleteMovie(movieId) {
        setPreloader(true);
        handleTokenCheck();
        MainApi.deleteMovie(movieId).then(() => {
            const updatedMovies = savedMovies.filter((i) => i._id !== movieId);
            setSavedMovies(updatedMovies);
            localStorage.setItem('newMovies', JSON.stringify(updatedMovies));
            setPreloader(false);
            console.log(movieId);
        }).catch(err => {
            setPreloader(false);
            console.log(err, movieId);
        });
    }
    //end

    return (
        <CurrentUserContext.Provider value={currentUser}>
            <BurgerMenu isBurger={isBurger} handleBurgerMenu={handleBurgerMenu} />
            <Preloader isPreloader={isPreloader} />
                <Routes>
                    <Route 
                        path='/signin'
                        element={
                            <Login 
                                logIn={logIn}
                                onLogin={handleLogin}
                                errorMessage={errorMessage}
                            />} 
                    />
                    <Route 
                        path='/signup'
                        element={
                            <Register 
                                logIn={logIn}
                                onRegister={handleRegister}
                                errorMessage={errorMessage}
                            />} 
                    />
                    <Route 
                        path='/profile'
                        element=
                        {<ProtectedRoute path='/profile' logIn={logIn} >
                            <Profile 
                                handleBurgerMenu={handleBurgerMenu}
                                onUpdateProfile={handleUpdateProfile}
                                onLogOut={handleLogout}
                                errorMessage={errorMessage}
                            />
                        </ProtectedRoute>} 
                    />
                    <Route 
                        path='/movies' 
                        element=
                        {<ProtectedRoute path='/movies' logIn={logIn}>
                            <Movies
                                handleBurgerMenu={handleBurgerMenu}
                                isPreloader={isPreloader}
                                moviesItems={moviesItems}
                                onDeleteMovie={handleDeleteMovie}
                                onMovieSave={handleMovieSave}
                                savedMovies={savedMovies}
                                moviesLocation={moviesLocation}
                            />
                        </ProtectedRoute>} 
                    />
                    <Route 
                        path='/saved-movies'
                        element=
                        {<ProtectedRoute path='/saved-movies' logIn={logIn}>
                            <SavedMovies
                                logIn={logIn}
                                handleBurgerMenu={handleBurgerMenu}
                                isPreloader={isPreloader}
                                onDeleteMovie={handleDeleteMovie}
                                savedMovies={savedMovies}
                                savedMoviesLocation={savedMoviesLocation}
                            />
                        </ProtectedRoute>} 
                    />
                    <Route 
                        path='/' 
                        element={
                            <Main 
                                logIn={logIn}
                                handleBurgerMenu={handleBurgerMenu}
                            />} 
                    />
                    <Route 
                        path='*' 
                        element={
                            <NotFound />} 
                    />
                </Routes>
        </CurrentUserContext.Provider>
    );
}

export default App;