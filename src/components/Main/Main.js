import React from 'react';
import Header from '../Header/Header';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';
import Footer from '../Footer/Footer';
import Menu from '../Menu/Menu';

function Main({ logIn, handleBurgerMenu }) {
    return (
        <>
            {logIn ? (<Menu handleBurgerMenu={handleBurgerMenu}/>) : (<Header />)}
            <div className="main">
                <Promo />
                <AboutProject />
                <Techs />
                <AboutMe />
                <Portfolio />
            </div>
            <Footer />
        </>
    );
}

export default Main;