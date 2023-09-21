import React from 'react';
import Lienpresentation from './Lienpresentation';
import Liencompetences from './Liencompetences';
import Lienprojets from './Lienprojets';
import Lienapropos from './Lienapropos';
import Liencontact from './Liencontact';
import '../styles/components/navigation.scss'

// Composant de la navigation de la page contenant les composants de liens d'ancres
const Navigation = () => {
    return (
        <div className='navbar'>
            <Lienpresentation />
            <Liencompetences />
            <Lienprojets />
            <Lienapropos />
            <Liencontact/>
        </div>
    );
};

export default Navigation;