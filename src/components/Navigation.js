import React from 'react';
import Lienpresentation from './Lienpresentation';
import Liencompetences from './Liencompetences';
import Lienprojets from './Lienprojets';
import Lienapropos from './Lienapropos';
import Liencontact from './Liencontact';
import '../styles/navigation.scss'

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