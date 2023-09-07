import React from 'react';
import Header from '../components/Header';
import Accueil from '../components/Accueil';
import Body from '../components/Body';
import '../styles/pages/home.scss'
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div className='Home'>
            <div className='Openingdisplay'>
                <Header />
                <Accueil />
            </div>
            <Body />
            <Footer/>
        </div>
    );
};

export default Home;