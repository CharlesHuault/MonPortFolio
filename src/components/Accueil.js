import React from 'react';
import Maintitle from './Maintitle';
import '../styles/components/accueil.scss'
import Mainlinks from './Mainlinks';

const Accueil = () => {
    return (
        <div className='Accueil'>
            <Maintitle />
            <Mainlinks/>
        </div>
    );
};

export default Accueil;